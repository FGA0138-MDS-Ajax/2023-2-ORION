import { input } from '@/app/create-account/styles.css';
import React, { useState } from 'react';

interface EmailInputProps {
  onEmailChange: (email: string) => void;
}

const EmailInput: React.FC<EmailInputProps> = ({ onEmailChange }) => {
  const [email, setEmail] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(true);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    validateEmail(newEmail);
    onEmailChange(newEmail);
  };

  const validateEmail = (input: string) => {
    const isValidEmail = input.endsWith('@aluno.unb.br');
    setIsValid(isValidEmail);
  };

  return (
    <div>
      <input 
        placeholder="@aluno.unb.br" 
        className={input} 
        type="email"
        value={email}
        onChange={handleEmailChange}
        style={{ borderColor: isValid ? '' : 'red' }}
      />
      {!isValid && <p style={{ color: 'red' }}>Invalid email. Please use @aluno.unb.br domain.</p>}
    </div>
  );
};

export default EmailInput;
