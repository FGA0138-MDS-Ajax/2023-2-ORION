'use client'
import EmailInput from "@/components/EmailInput/page";
import { input } from "./styles.css";
import Button from "@/components/Button/page";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Signup() {
  const [error, setError] = useState<string>('');
  const router = useRouter()

  const handleEmailChange = (email: string) => {
    console.log('Email changed:', email);

  };

  const isValidEmail = (email: string) => {
    return email.endsWith('@aluno.unb.br');
  }


  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const email = event.target[0].value;
    const password = event.target[1].value;

    if (!isValidEmail(email)) {
      console.log('Invalid email. Please use @aluno.unb.br domain.');
      return;
    }


    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })
      if (response.status == 400) {
        setError('Email já cadastrado')
      }
      if (response.status == 201) {
        setError('');
        router.push('/login')
      }
    } catch (error) {
      setError('Erro ao cadastrar')
      console.error(error);
    }
  }

  return (

    <div className="grid grid-cols-[1fr_1fr] w-screen">
      <div className="bg-[#ffffff] h-screen grid place-items-center">
        <div className="w-[400px] text-center text-[#45bf55]">
          <form onSubmit={handleSubmit}>
            <h1 className="font-bold">Join the movement!</h1>
            <EmailInput onEmailChange={handleEmailChange} />
            {/* <input type="email" placeholder="seu email @aluno.unb.br" className={input} required /> */}
            <input type='password' placeholder="sua incrivel senha" className={input} required />
            <Button
              text="Acesar"
              width="w-lg"

            />
          </form>
        </div>
      </div>
      <div className="bg-primary grid place-items-center">

      </div>
    </div>
  )
}
