import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [captchaValue, setCaptchaValue] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const onChange = () =>{

  }

  const handleLogin = () => {
    // Send a request to your backend for authentication
    // Check if the username, password, and captcha are correct
    // In a real app, use secure password hashing and validate captcha
    if (username === 'user' && password === 'password' && captchaValue) {
      setLoggedIn(true);
    } else {
      alert('Login failed. Please check your credentials and CAPTCHA.');
    }
  };

  return (
   
    <div className="App">
        <h1>Login Page</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <ReCAPTCHA
          sitekey="6Le88SUoAAAAAInC0HKxayfgxbw01DFlu7o5pHA3"
          onChange={onChange}
        />
        <button onClick={handleLogin}>Login</button>
      
     {/* </Router>
      <Route path="/welcome">
        {loggedIn ? <Welcome /> : null}
      </Route>
    </Router> */}
    </div>
  );
}

function Welcome() {
  return <h1>Welcome to the App!</h1>;
}

export default App;
