import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../../assets/css/dashboard.css';

const SignIn = () => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const user = {
      username: userName,
      password: userPassword,
    };

    try {
      const res = await fetch('http://localhost/backend/login.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({
  username: userName,
  password: userPassword
})
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem('isAuthenticated', 'true');
        navigate('/dashboard');
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Something went wrong. Try again.');
    }
  };

  return (
    <div className="d_signform d_signin_form">
                           <div  id="Login" className='left_formbox'>

        <div className="left">
          <div>
            <p>Hello, Welcome!</p>
            <p className='no_acc'>Don't you have account sing up here</p>
            <Link to="/srseating-signup" className="signUp">SignUp</Link>
          </div>
        </div>
        </div>

        <div className="right">
          <div>
            <h1>Login</h1>
     
      <form onSubmit={handleLogin} className='remove_formstyle'>

            <input type="text" placeholder="Email" onChange={(e) => setUserName(e.target.value)} required />
            <input type="password" placeholder="Password" onChange={(e) => setUserPassword(e.target.value)} required />

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <button type="submit">Login</button>
      </form>
          </div>
        </div>
    </div>
  );
};

export default SignIn;
