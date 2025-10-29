// ResourceListRow1.jsx
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";


const SEND_OTP_URL = "https://theskepper.com/srbackend/send-otp.php";
const VERIFY_OTP_URL = "https://theskepper.com/srbackend/verify-otp.php";

// We’ll assume India. Change if needed.
const DEFAULT_CC = "91";

// Keep only digits, ensure 10, and return +91xxxxxxxxxx
const normalizeLocalPhone = (p) => {
  const digits = (p || "").toString().replace(/\D/g, "");
  if (digits.length !== 10) return "";            // invalid local mobile
  return `+${DEFAULT_CC}${digits}`;
};

const ResourceListRow1 = ({ team }) => {
  const { title, image, pdf } = team;

  const [showPopup, setShowPopup] = useState(false);
  const [step, setStep] = useState("form");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [otpError, setOtpError] = useState("");
  const [sessionId, setSessionId] = useState("");

  const [sending, setSending] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [resending, setResending] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const canResend = countdown === 0;
  const otpRefs = useRef([]);

  const [pdfUrl, setPdfUrl] = useState("");
  const [form, setForm] = useState({
    name: "",
    companyname: "",
    email: "",
    phone: "", // <- user types 10 digits here (no +91)
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const openPopup = () => {
    setPdfUrl(pdf);
    setShowPopup(true);
    setStep("form");
    setOtp(["", "", "", "", "", ""]);
    setSessionId("");
    setCountdown(0);
  };

  const closePopup = () => {
    setShowPopup(false);
    setStep("form");
    setOtp(["", "", "", "", "", ""]);
    setOtpError("");
    setSessionId("");
    setSending(false);
    setVerifying(false);
    setResending(false);
    setCountdown(0);
    setForm({ name: "", companyname: "", email: "", phone: "" });
  };

  // OTP inputs
  const handleOtpChange = (val, idx) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...otp];
    next[idx] = val;
    setOtp(next);
    if (val && idx < 5) otpRefs.current[idx + 1]?.focus();
  };
  const onOtpKeyDown = (e, idx) => {
    if (e.key === "Backspace" && !otp[idx] && idx > 0) {
      otpRefs.current[idx - 1]?.focus();
    }
  };
  const onOtpPaste = (e) => {
    const text = e.clipboardData.getData("text").trim();
    if (/^\d{6}$/.test(text)) {
      setOtp(text.split(""));
      otpRefs.current[5]?.focus();
      e.preventDefault();
    }
  };

  useEffect(() => {
    if (countdown <= 0) return;
    const t = setInterval(() => setCountdown((s) => s - 1), 1000);
    return () => clearInterval(t);
  }, [countdown]);

  const joinedOtp = otp.join("");
  useEffect(() => {
    if (step === "otp" && /^\d{6}$/.test(joinedOtp) && !verifying) {
      verifyOtp(joinedOtp);
    }
  }, [joinedOtp]); // eslint-disable-line

  // SEND OTP (uses 10-digit local → +91xxxxxxxxxx)
 // SEND OTP
const handleFormSubmit = async (e) => {
  e.preventDefault();

  const rawPhone = (form.phone || '').trim();
  if (!form.name || !form.companyname || !form.email || !rawPhone) {
    toast.error('Please fill all required fields');
    return;
  }

  // Backend accepts "+<digits>" or digits; it will normalize to AiSensy format.
  const phoneForBackend = rawPhone.startsWith('+') ? rawPhone : `+${rawPhone}`;

  try {
    setSending(true);
    const res = await axios.post(SEND_OTP_URL, {
      name: form.name,
      companyname: form.companyname,
      email: form.email,
      phone: phoneForBackend
    });

    if (res.data?.success) {
      setSessionId(res.data.session_id);
      setStep('otp');
      setCountdown(60);
      setTimeout(() => otpRefs.current[0]?.focus(), 100);
      toast.success('OTP sent to WhatsApp');
      console.log('AiSensy:', res.data.aisensy_response);
    } else {
      const msg = res.data?.message
        || res.data?.aisensy_response?.message
        || res.data?.aisensy_response?.errorMessage
        || 'Failed to send OTP';
      toast.error(msg);
      console.error('Send OTP error payload:', res.data);
    }
  } catch (err) {
    console.error('Send OTP error:', err);
    toast.error(err.response?.data?.message || 'Network / server error');
  } finally {
    setSending(false);
  }
};


  // RESEND OTP
 // RESEND (same as send, but re-triggers)
const handleResend = async () => {
  if (countdown > 0) return;

  const rawPhone = (form.phone || '').trim();
  const phoneForBackend = rawPhone.startsWith('+') ? rawPhone : `+${rawPhone}`;

  try {
    setResending(true);
    const res = await axios.post(SEND_OTP_URL, {
      name: form.name,
      companyname: form.companyname,
      email: form.email,
      phone: phoneForBackend
    });

    if (res.data?.success) {
      setSessionId(res.data.session_id);
      setCountdown(60);
      setOtp(['','','','','','']);
      setTimeout(() => otpRefs.current[0]?.focus(), 100);
      toast.success('OTP resent');
    } else {
      toast.error(res.data?.message || 'Failed to resend OTP');
    }
  } catch (err) {
    console.error('Resend error:', err);
    toast.error('Error resending OTP');
  } finally {
    setResending(false);
  }
};


  // VERIFY OTP
  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (!/^\d{6}$/.test(joinedOtp)) {
      toast.error("Enter 6-digit OTP");
      return;
    }
    verifyOtp(joinedOtp);
  };

  const verifyOtp = async (code) => {
    try {
      if (!sessionId) {
        toast.error("Session expired. Please request a new OTP.");
        return;
      }
      setVerifying(true);
      const res = await axios.post(VERIFY_OTP_URL, {
        session_id: sessionId,
        otp: code,
      });

      if (res.data.success) {
        toast.success("OTP Verified ✅");
        setTimeout(() => {
          window.open(pdfUrl, "_blank");
          closePopup();
        }, 600);
      } else {
        toast.error(res.data.message || "Invalid OTP");
      }
    } catch {
      toast.error("Error verifying OTP");
    } finally {
      setVerifying(false);
    }
  };

  return (
    <>
      <div className="team-style-one-item">
        <div className="thumb">
          <img src={image} alt="catelog image" />
          <div className="social-overlay">
            <div
              className="icon disabled"
              onClick={openPopup}
              style={{ cursor: "pointer" }}
              title="Download after OTP"
            >
              <img
                src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/resource/download.svg"
                alt="Download"
              />
            </div>
          </div>
        </div>
        <div className="info">
          <span>{title}</span>
        </div>
      </div>

      {showPopup && (
        <div className="download-popup-backdrop">
          <div className="download-popup">
            <button className="close-btn" onClick={closePopup}>
              &times;
            </button>

            {step === "form" && (
              <form onSubmit={handleFormSubmit} className="download-form">
                <h4 className="font_44">Download {title}</h4>
                <p className="font_22">
                  Fill in your details — we’ll send a quick WhatsApp verification
                  code.
                </p>

                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Name*"
                        type="text"
                        autoComplete="off"
                        required
                        value={form.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="companyname"
                        name="companyname"
                        placeholder="Company Name*"
                        type="text"
                        autoComplete="off"
                        required
                        value={form.companyname}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Email*"
                        type="email"
                        autoComplete="off"
                        required
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* PHONE: user enters only 10 digits */}
                  <div className="col-lg-12">
                   <input
  type="tel"
  name="phone"
  value={form.phone}
  onChange={(e) => {
    const digits = e.target.value.replace(/\D/g, '');
    setForm(p => ({ ...p, phone: digits }));
  }}
  inputMode="numeric"
  autoComplete="tel"
  placeholder="Phone*"
/>


 {/* <PhoneInput
      defaultCountry="in"
      name="phone"
      value={form.phone}
      onChange={(value) => {
        // Keep only '+' and digits (your original sanitization logic)
        const cleaned = value.replace(/[^\d+]/g, "");
        setForm((p) => ({ ...p, phone: cleaned }));
      }}
      inputProps={{
        name: "phone",
        required: true,
        autoComplete: "tel",
        placeholder: "Phone*",
      }}
      className="form-control"
    /> */}
                  </div>
                </div>

                {!!otpError && (
                  <div className="row">
                    <div className="col-lg-12">
                      <p style={{ color: "red", marginTop: 8 }}>{otpError}</p>
                    </div>
                  </div>
                )}

                <div className="row">
                  <div className="col-lg-12">
                    <button type="submit" disabled={sending}>
                      {sending ? "Sending…" : "Get Verification Code"}
                    </button>
                  </div>
                </div>
              </form>
            )}

            {step === "otp" && (
              <form onSubmit={handleOtpSubmit} className="download-form">
                <h4 className="font_44">Enter Verification Code</h4>
                <p className="font_22">
                  We’ve sent a 6-digit code to your WhatsApp.
                </p>

                <div className="row">
                  <div className="col-lg-12">
                    <div
                      className="otp_wrapper"
                      onPaste={onOtpPaste}
                      style={{ display: "flex", gap: 8 }}
                    >
                      {otp.map((d, i) => (
                        <input
                          key={i}
                          ref={(el) => (otpRefs.current[i] = el)}
                          className="otp_box"
                          type="text"
                          inputMode="numeric"
                          maxLength="1"
                          value={d}
                          onChange={(e) => handleOtpChange(e.target.value, i)}
                          onKeyDown={(e) => onOtpKeyDown(e, i)}
                          style={{
                            width: 44,
                            height: 44,
                            textAlign: "center",
                            fontSize: 20,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="row" style={{ marginTop: 10 }}>
                  <div className="col-lg-12">
                    <button
                      type="button"
                      onClick={handleResend}
                      disabled={!canResend || resending}
                      style={{
                        background: "transparent",
                        border: "none",
                        padding: 0,
                        color: "#0a58ca",
                      }}
                      className="text-decoration-underline"
                    >
                      {canResend
                        ? resending
                          ? "Resending…"
                          : "Resend OTP"
                        : `Resend OTP in ${countdown}s`}
                    </button>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12">
                    <div className="download-btn">
                      <button type="submit" disabled={verifying || !sessionId}>
                        {verifying ? "Verifying…" : "Verify & Download"}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            )}

            {step === "success" && (
              <div className="success-msg">
                <h4>OTP Verified!</h4>
                <button
                  onClick={() => window.open(pdfUrl, "_blank")}
                  className="primary-btn"
                >
                  Download PDF
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ResourceListRow1;
