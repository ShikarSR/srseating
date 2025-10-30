import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-international-phone/style.css";

const SEND_OTP_URL = "https://www.srseating.com/api/send-otp.php";
const VERIFY_OTP_URL = "https://www.srseating.com/api/verify-otp.php";

const Popup = ({ showPopup, setShowPopup, pdfUrl, title }) => {
  const [step, setStep] = useState("form");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [sessionId, setSessionId] = useState("");
  const [sending, setSending] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [resending, setResending] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const canResend = countdown === 0;
  const otpRefs = useRef([]);
  const [form, setForm] = useState({
    name: "",
    companyname: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const closePopup = () => {
    setShowPopup(false);
    setStep("form");
    setOtp(["", "", "", "", "", ""]);
    setSessionId("");
    setSending(false);
    setVerifying(false);
    setResending(false);
    setCountdown(0);
    setForm({ name: "", companyname: "", email: "", phone: "" });
  };

  // OTP input behavior
  const handleOtpChange = (val, idx) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...otp];
    next[idx] = val;
    setOtp(next);
    if (val && idx < 5) otpRefs.current[idx + 1]?.focus();
  };
  const onOtpKeyDown = (e, idx) => {
    if (e.key === "Backspace" && !otp[idx] && idx > 0)
      otpRefs.current[idx - 1]?.focus();
  };
  const onOtpPaste = (e) => {
    const text = e.clipboardData.getData("text").trim();
    if (/^\d{6}$/.test(text)) {
      setOtp(text.split(""));
      otpRefs.current[5]?.focus();
      e.preventDefault();
    }
  };

  // countdown timer
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

  // SEND OTP
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const rawPhone = (form.phone || "").trim();
    if (!form.name || !form.companyname || !form.email || !rawPhone) {
      toast.error("Please fill all required fields");
      return;
    }

    const phoneForBackend = rawPhone.startsWith("+")
      ? rawPhone
      : `+${rawPhone}`;

    try {
      setSending(true);
      const res = await axios.post(SEND_OTP_URL, {
        name: form.name,
        companyname: form.companyname,
        email: form.email,
        phone: phoneForBackend,
      });

      if (res.data?.success) {
        setSessionId(res.data.session_id);
        setStep("otp");
        setCountdown(60);
        setTimeout(() => otpRefs.current[0]?.focus(), 100);
        toast.success("OTP sent to WhatsApp");
      } else {
        toast.error(res.data?.message || "Failed to send OTP");
      }
    } catch (err) {
      console.error("Send OTP error:", err);
      toast.error("Network / server error");
    } finally {
      setSending(false);
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

  if (!showPopup) return null;

  return (
    <div className="download-popup-backdrop">
      <div className="download-popup">
        <button className="close-btn" onClick={closePopup}>
          ×
        </button>

        {step === "form" && (
          <form onSubmit={handleFormSubmit} className="download-form global_btn">
            <h4 className="font_44">Download {title}</h4>
            <p className="font_22">
              Fill in your details — we’ll send a quick WhatsApp verification
              code.
            </p>

            <input
              name="name"
              placeholder="Name*"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              name="companyname"
              placeholder="Company Name*"
              value={form.companyname}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              name="phone"
              placeholder="Phone*"
              value={form.phone}
              onChange={(e) => {
                const digits = e.target.value.replace(/\D/g, "");
                setForm((p) => ({ ...p, phone: digits }));
              }}
              required
            />

            <button type="submit" disabled={sending} className="font_22 mt-4 btn-text sr-btn">
              {sending ? "Sending…" : "Get Verification Code"}
            </button>
          </form>
        )}

        {step === "otp" && (
          <form onSubmit={handleOtpSubmit} className="download-form">
            <h4 className="font_44">Enter Verification Code</h4>
            <p className="font_22">We’ve sent a 6-digit code to your WhatsApp.</p>

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
                />
              ))}
            </div>

            <button type="submit" disabled={verifying || !sessionId} className="font_22 mt-4 btn-text sr-btn">
              {verifying ? "Verifying…" : "Verify & Download"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Popup;
