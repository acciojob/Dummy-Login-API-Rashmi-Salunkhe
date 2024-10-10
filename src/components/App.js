import React, { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userError, setUserError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Predefined user data
  const predefinedUser = [
    {
      email: 'abc@gmail.com',
      password: '12',
    },
    {
      email: 'def@gmail.com',
      password: '1234',
    },
    {
      email: 'ghi@gmail.com',
      password: '123456',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserError('');
    setPasswordError('');
  
    setTimeout(() => {
      const user = predefinedUser.find((user) => user.email === email);
  
      if (!user) {
        setUserError('User not found');
      } else if (user.password !== password) {
        setPasswordError('Password Incorrect');
      } else {
        alert('Login successful');
      }
    }, 3000);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (userError) setUserError(''); // Clear error on input change
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (passwordError) setPasswordError(''); // Clear error on input change
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            id="input-email"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
          <div id="user-error" style={{ color: 'red' }}>{userError}</div>
        </div>
        <div>
          <label>Password:</label>
          <input
            id="input-password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <div id="password-error" style={{ color: 'red' }}>{passwordError}</div>
        </div>
        <button id="submit-form-btn" type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
