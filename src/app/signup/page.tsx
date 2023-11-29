'use client'
import EmailInput from "@/components/EmailInput/page";
import { input } from "./styles.css";
import Button from "@/components/Button/page";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Alert } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

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
      setError('Email inválido')
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
    <div className="md:grid grid-cols-[1fr_1fr] w-screen">

      <div className="hidden bg-primary md:grid place-items-center">
        <Link href="/">
          <Image
            src="/img/logo.svg"
            alt="Logo"
            width={120} height={100}
            loading="lazy"
            className="absolute top-10 left-10"
          />
        </Link>
        <Image
          src="/img/illustration.svg"
          width={500} height={500}
          alt="img"
          className="flex justify-center items-center m-auto w-[40vw]"
        />
      </div>
      <div className="bg-[#ffffff] h-screen grid place-items-center">
        <div className="w-[400px] text-center text-[#45bf55]">
          {error && <Alert severity="error">{error}</Alert>}
          <form onSubmit={handleSubmit}>
            <h1 className="font-normal text-black  tex text-[3rem]">Crie sua conta</h1>
            <hr className="text-black w-1/2 flex justify-center items-center m-auto opacity-10"/>
            <EmailInput onEmailChange={handleEmailChange} />
            <input type='password' placeholder="Sua senha" className={input} required />
            <Button
              text="Criar conta"
              width="w-[300px]"
            />
          </form>

          <span>
            <Link className="hover:text-primaryDark hover:font-bold transition duration-500 ease-in-ou " href="/login">Já possui conta?</Link>
          </span>

          <Link href="/">
            <Image
              src="/img/logo2.svg"
              alt="Logo"
              width={120} height={100}
              loading="lazy"
              className="fixed bottom-10 left-[50%] translate-x-[-50%] translate-y-[-50%]  md:hidden "
            />
          </Link>
        </div>
      </div>

    </div>
  )
}
