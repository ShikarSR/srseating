import { useState } from 'react';
import { toast } from 'react-toastify';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Link } from 'react-router-dom';

const ResourceListRow1 = ({ team }) => {
  const { title, image } = team;

  const [showPopup, setShowPopup] = useState(false);
  const [step, setStep] = useState('form');           // 'form' | 'otp' | 'success'
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('');
  const [sessionId, setSessionId] = useState('');

  // keep ALL fields in one state object
  const [form, setForm] = useState({
    name: '',
    companyname: '',
    email: '',
    phone: '',
    choosesolution: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Send details to backend to generate/send OTP
  const handleFormSubmit = async (e) => {
  e.preventDefault();
  setOtpError('');

  try {
   const res = await fetch('https://theskepper.com/srbackend/send-otp.php', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    phone: form.phone.startsWith('+') ? form.phone : `+${form.phone}`
  })
});

    const data = await res.json();
    console.log("Response from backend:", data);

    if (data.success) {
      setSessionId(data.session_id || '');
      setStep('otp');
    } else {
      setOtpError(data.message || 'Failed to send OTP');
    }
  } catch (err) {
    console.error("Fetch error:", err);
    setOtpError('Failed to send OTP. Try again.');
  }


};


  // Verify OTP
  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setOtpError('');
    try {
      const res = await fetch('https://theskepper.com/srbackend/verify-otp.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ session_id: sessionId, otp }),
      });
      const data = await res.json();
      if (data.success) setStep('success');
      else setOtpError(data.message || 'Invalid OTP.');
    } catch {
      setOtpError('OTP verification failed.');
    }
  };

  const handleDownload = () => {
    window.open('/assets/files/sample.pdf', '_blank');
    closePopup();
  };

  const closePopup = () => {
    setShowPopup(false);
    setForm({
      name: '',
      companyname: '',
      email: '',
      phone: '',
      choosesolution: '',
      message: '',
    });
    setOtp('');
    setOtpError('');
    setStep('form');
  };

  return (
    <>
      <div className="team-style-one-item">
        <div className="thumb">
          <img src={image} alt="catelog image" />
          <div className="social-overlay">
            <div className="icon disabled" onClick={() => setShowPopup(true)} style={{ cursor: 'unset' }}>
              <img src="https://srseating.blr1.cdn.digitaloceanspaces.com/image/resource/download.svg" alt="Download" />
            </div>
          </div>
        </div>
        <div className="info">
          <span>{title}</span>
        </div>
      </div>

      {/* {showPopup && (
        <div className="download-popup-backdrop">
          <div className="download-popup">
            <button className="close-btn" onClick={closePopup}>&times;</button>

            {step === 'form' && (
              <form onSubmit={handleFormSubmit} className="download-form">
                <h4 className="font_44">Download TDS of SR04</h4>
                <p className="font_22">
                  Fill in your details to get instant access — we’ll send you a quick verification code.
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
                      <span className="alert-error" />
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
                      <span className="alert-error" />
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
                      <span className="alert-error" />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <PhoneInput
                      country="in"
                      value={form.phone}
                      onChange={(v) => setForm((p) => ({ ...p, phone: v }))}
                      inputClass="form-control"
                      containerClass="w-100"
                      inputProps={{
                        required: true,
                        name: 'phone',
                        autoComplete: 'off',
                        placeholder: 'Phone*',
                      }}
                    />
                  </div>
                </div>


                <div className="row">
                  <div className="col-lg-12">
                    <button type="submit" name="submit" id="submit">
                   Get Verification Code
                    </button>
                  </div>
                </div>

                <div className="col-lg-12 alert-notification">
                  <div id="message" className="alert-msg" />
                </div>
                
              </form>
            )}

            {step === 'otp' && (
                  //  <form className="download-form">
                      <form onSubmit={handleOtpSubmit} className="download-form">

              <h4 className="font_44">Enter Your Verification Code</h4>
                <p className='font_22'>We’ve sent a 6-digit code to your email address. Enter it 
                        below to confirm and start your download.</p>
               
                <div className="row">
                  <div className="col-lg-12">
                    <div className="otp_wrapper">

                    
                    <div className="otp_box">
                      <input type="text" name="" id="" />
                    </div>

                      <div className="otp_box">
                        <input type="text" name="" id="" />
                    </div>

                      <div className="otp_box">
                        <input type="text" name="" id="" />
                    </div>

                      <div className="otp_box">
                        <input type="text" name="" id="" />
                    </div>
                     <div className="otp_box">
                        <input type="text" name="" id="" />
                    </div>

                     <div className="otp_box">
                        <input type="text" name="" id="" />
                    </div>
                    </div>
                  </div>
                    <Link to={'Resend'} className='text-decoration-underline'>Resend</Link>
                </div>

                <div className="row ">
                  <div className="col-lg-12">
                    <div className="download-btn">

                    <button type="submit" name="submit" id="submit">
                   Verify & Download
                    </button>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 alert-notification">
                  <div id="message" className="alert-msg" />
                </div>
                </form>
            )}

            {step === 'success' && (
              <div className="success-msg">
                <h4>OTP Verified!</h4>
                <button onClick={handleDownload} className="primary-btn">
                  Download PDF
                </button>
              </div>
            )}
          </div>
        </div>
      )} */}
    </>
  );
};

export default ResourceListRow1;
