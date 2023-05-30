import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../components/login.css';
import nature from './images/nature 1.jpg.jpg';
import { CardMedia } from "@mui/material";

function Login() {
  // React States



  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate=useNavigate();
  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var { uname, pass } = document.forms[0];
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData)
	 {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        alert("Login Success");
        navigate('/home');
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  const renderForm = (
    

    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          
          <input type="text" placeholder="Username" id='fan' name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <input type="password" placeholder="Password" id='fan' name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div>
        <button id='sam'>Submit</button>
        </div><br></br>
        <div></div><br></br>
        <div>To create new account - 
        <Link to="/Signup">Signup</Link>
        </div>
      </form>
    </div>
    

  
  );
  
  return (
<div className="bgimg">
     <CardMedia component="img"  image={nature} className="bgimg"></CardMedia>

	  <div className="app" >
      <div className="login-form">
        <div className="title">Login</div>
        {isSubmitted ? <div>User is successfully logged in<br></br>
	     Click here
		<Link to="/Vikie">Start</Link>
		</div> : renderForm}
      </div>
</div>
	  
    </div>
  );
}

export default Login;