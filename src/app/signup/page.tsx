'use client'
import EmailInput from "@/components/EmailInput/page";
import { input } from "./styles.css";
import Button from "@/components/Button/page";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { toast } from "@/components/ui/use-toast";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from "react";

export default function Signup() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handleEmailChange = (email: string) => {
    console.log('Email changed:', email);

  };

  const isValidEmail = (email: string) => {
    return email.endsWith('@aluno.unb.br');
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const name = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;
    const repeatPassword = event.target[4].value;
    const alias = ''
    const bio = ''
    const events: string[] = []
    const eventsIn: string[] = []


    if (!isValidEmail(email)) {
      toast({
        title: 'Erro',
        description: 'O email informado deve ser válido',
        variant: "destructive"
      })
      return;
    }

    if (password != repeatPassword) {
      toast({
        title: 'Erro',
        description: 'As senhas não coincidem',
        variant: "destructive"
      })
      return;
    }

    if(password.length < 4){
      toast({
        title: 'Erro',
        description: 'A senha deve ter pelo menos 4 caracteres',
        variant: "destructive"
      })
      return;
    }

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password, alias, bio, events, eventsIn })
      })
      if (response.status == 400) {
        toast({
          title: 'Erro',
          description: 'Email já cadastrado',
          variant: "destructive"
        })
      }
      if (response.status == 201) {
        toast({
          title: 'Sucesso',
          description: 'Cadastro realizado! faça login',
          variant: "constructive"
        })

        router.push('/login')
      }
    } catch (error) {
      toast({
        title: 'Erro',
        description: 'Algo deu',
        variant: "destructive"
      })
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
          <form onSubmit={handleSubmit}>
            <h1 className="font-normal text-black  tex text-[3rem]">Crie sua conta</h1>

            <hr className="text-black w-1/2 flex justify-center items-center m-auto opacity-10" />
            <input type="text" placeholder="Seu nome" className={input} required />
            <EmailInput onEmailChange={handleEmailChange} />
            <span className="flex justify-center md:ml-5">
              <input type={showPassword ? "text" : "password"} placeholder="Sua senha" className={input} required />
              <button className="hidden md:block" onClick={(e) => { e.preventDefault(); setShowPassword(!showPassword) }}>
                {showPassword ?
                  <VisibilityOffIcon className="h-5 w-5" />
                  : <VisibilityIcon className="h-5 w-5" />
                }
              </button>
            </span>
            <input type={showPassword ? "text" : "password"} placeholder="Repita sua senha" className={input} required />

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

    </div >
  )
}
