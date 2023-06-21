import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email, password);
    const respons = await fetch('http://localhost:5000/login', {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password

      })

    })
    if (respons.status === 403) {
      return alert("Sxal Email kam Password")

    }
    const data = await respons.json()
    localStorage.setItem('token', data)
    console.log(respons);
    console.log(data);
    if (data !== null) {
      alert("201")
      navigate("/admin")
    }
  };

  const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '300px',
    margin: '40vh auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  };

  const labelStyles = {
    marginBottom: '8px'
  };

  const inputStyles = {
    padding: '8px',
    marginBottom: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px'
  };

  const buttonStyles = {
    padding: '8px 16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  };

  return (
    <form style={formStyles} onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label style={labelStyles}>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} style={inputStyles}
        />
      </label>
      <label style={labelStyles}>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} style={{
          padding: '8px',
          marginBottom: '16px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          marginRight: 26
        }} />
      </label>
      <button style={buttonStyles} type="submit">Log In</button>
    </form>
  );
}

export { Login };
