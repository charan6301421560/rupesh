import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [captchaValue, setCaptchaValue] = useState('');

  const handleLogin = () => {
    if (username === 'user' && password === 'password' && captchaValue) {
      onLogin();
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
        sitekey="6LeCxiUoAAAAANapFipA78SO-Kptj63D-pnJ3s3r"
        onChange={(value) => setCaptchaValue(value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginForm;
