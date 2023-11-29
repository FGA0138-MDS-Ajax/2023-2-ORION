'use client'

import { nav, ul, li, container } from "./styles.css";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import Link from "next/dist/client/link";
import { signOut, useSession } from "next-auth/react";


const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { data: session } = useSession();


  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  const Links = () => {
    return <>
      {!session ? (
        <ul className={ul}>
          <li><Link className={`font-bold bg-primary hover:font-black transition duration-100 ease-in-out`} href="/signup">Criar conta</Link></li>
          <li><Link className={li} href="/login">Entrar</Link></li>
        </ul>
      ) : (
        <div className={ul}>
          <span>Olá, {session.user?.email}</span>
          <li className="list-none">
            <button className={li} onClick={() => signOut()}>Sair</button>
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
        <div className="md:hidden">
          <button onClick={toggleNavbar}>
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      {isOpen && (<Links />)}
    </nav>
  )
};

export default Nav;

//     {/* <nav className={nav}>
//       <a href="/">
//         <Image className={img} src="/img/logo.svg" alt="Logo" width={150} height={100} />
//       </a>
//       <div className={search}>
//         <i>
//           <SearchIcon className="text-offWhite" />
//         </i>
//         <input
//           className="placeholder:text-offWhite focus:outline-none w-full "
//           type="search"
//           name=""
//           id=""
//           placeholder="Buscar por evento"
//         />
//       </div>
//       <div>
//        {width ? <MenuMobile /> : <MenuDesktop />}
//       </div>


//     </nav> */}

// );
