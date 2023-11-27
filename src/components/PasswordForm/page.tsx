// PasswordForm.tsx

import React, { useState } from 'react';

interface PasswordFormProps {
  onSubmit: (password: string) => void;
}

const PasswordForm: React.FC<PasswordFormProps> = ({ onSubmit }) => {
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(true);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    validatePassword(e.target.value, confirmPassword);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
    validatePassword(password, e.target.value);
  };

  const validatePassword = (newPassword: string, newConfirmPassword: string) => {
    const isValidPassword = newPassword === newConfirmPassword;
    setIsValid(isValidPassword);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      onSubmit(password);
    } else {
      alert('Passwords do not match. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} />
      </div>
      <div>
        <label>Confirm Password:</label>
        <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
      </div>
      {!isValid && <p style={{ color: 'red' }}>Passwords do not match.</p>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default PasswordForm;
