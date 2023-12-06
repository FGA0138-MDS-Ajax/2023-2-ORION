'use client'
import { nav, ul, li, container } from "./styles.css";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import Link from "next/dist/client/link";
import { signOut, useSession } from "next-auth/react";
import Avatar from "@/components/Avatar/page";
import { useRouter } from "next/navigation";
import { toast } from "../ui/use-toast";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { data: session } = useSession();

  const router = useRouter()

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  async function logout() {
    await signOut({ redirect: false })
    toast({
      title: 'Sucesso',
      description: 'Você saiu da sua conta',
      variant: "constructive"
    })
    router.replace("/")
  }

  const Links = () => {
    return <>
      {!session ? (
        <ul className={ul}>
          <li><Link className={`
            font-bold hover:font-black 
            hover:text-black 
            transition duration-100 ease-in-out
          `} href="/signup">Criar conta</Link></li>
          <li><Link className={li} href="/login">Entrar</Link></li>
        </ul>
      ) : (
        <div className={ul}>
          <Link className={`
          flex 
          flex-row-reverse
          items-center
          gap-2
          md:flex-row
          
          `} href="/edit-profile">
            <Avatar
              name={session.user?.name || ''}
            />
            Minha conta
          </Link>
          <li className="list-none">
            <button className={li} onClick={logout}>Sair</button>
          </li>
        </div>
      )}
    </>
  }
  return (
    <nav className={nav}>
      <div className={container}>
        <Link href="/">
          <Image src="/img/logo.svg" alt="Logo" width={120} height={100} loading="lazy" />
        </Link>
        <div className="hidden w-full md:block md:w-auto">
          <Links />
        </div>
        <div className="md:hidden mx-1">
          <button onClick={toggleNavbar}> {isOpen ? <CloseIcon /> : <MenuIcon />} </button>
        </div>
      </div>
      {isOpen && (<Links />)}
    </nav>
  )
};

export default Nav;
