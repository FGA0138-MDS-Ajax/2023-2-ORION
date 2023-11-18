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
        className="bg-[#f6f6f6] text-[#45BF55] text-center text-base w-[300px] p-2 m-3 rounded-[30px] border-2 border-solid border-[#e8e8e8]" 
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
