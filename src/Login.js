import React from 'react';
import "./Login.css";
import { loginUrl } from './spotify.js';

function Login() {
  return (
    <div className="login">
      <h1>ia am the gogin page</h1>
      <img src="https://api.logo.com/api/v2/images?logo=logo_68cf6117-dbdc-4354-9703-aab7fb44f7c8&format=webp&margins=0&quality=60&width=500&background=transparent&u=1683267197" />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
