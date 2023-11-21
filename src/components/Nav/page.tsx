import { nav, ul, search, img } from "./styles.css";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from '@mui/icons-material/Menu';
// import PersonIcon from '@mui/icons-material/Person';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Nav = () => {
  const input = SearchIcon + "Texto";

  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <nav className={nav}>
        <ul className={ul}>
          <li>
            <Image className={img} src="/img/logo.svg" alt="Logo" width={150} height={100} />
          </li>
          <li className="w-[800px] ">
            <div className={search}>
              <i>
                <SearchIcon className="text-offWhite" />
              </i>
              <input
                className="placeholder:text-offWhite focus:outline-none w-full "
                //texto de dentro do input off-white, linha ao clicar no input desligada, tamanho, total
                type="search"
                name=""
                id=""
                placeholder="Buscar por evento"
              />
            </div>
          </li>
          <li><Link className="" href="/create-account">Criar conta</Link></li>
          <li className="md:hidden">
            <button>
              <MenuIcon />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
