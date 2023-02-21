import React, { useState } from 'react';
import axios from 'axios';

interface RegistrationFormProps {
  onSuccess: () => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post('register/', { email, password });
      onSuccess();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
      </label>
      <br />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
