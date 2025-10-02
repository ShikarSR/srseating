import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import '../../../assets/css/dashboard.css'

const SignUp = () => {
    const [userName, setUserName] = useState('')
        const [userPassword, setUserPassword] = useState('')


const handleSignUp = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost/backend/signup.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: userName,
        password: userPassword
      })
    });

    const result = await response.json();
    
    if (result.status === "success") {
      alert("Signup successful!");
    } else {
      alert(result.message || "Signup error");
    }
  } catch (err) {
    alert("Signup error");
  }
};




  return (
    <div className=' d_signform'>

                   <div  id="Login" className='left_formbox singup_form'>
      <div class="left">
        <div>
          <p>Hello, Welcome!</p>
                 <a href="javascript:void(0)">Already You Have Account? </a>
                           <Link to='/srseating-signin' className='signIn'>Login</Link>

        </div>
      </div>

      <div class="right">
        <div>
          <h1>SingUp</h1>
           
           <form onSubmit={handleSignUp} className='remove_formstyle'>
          
          <input type="text" name="username" id="username" placeholder="Email"
          onChange={(e)=> setUserName(e.target.value)}
          />

          <input type="password" id="password" name="password"  placeholder="Password"
             onChange={(e)=> setUserPassword(e.target.value)}

          />
       

          <button type="submit">SingUp</button>
</form>
        </div>
      </div>
    </div>

    </div>
  )
}

export default SignUp