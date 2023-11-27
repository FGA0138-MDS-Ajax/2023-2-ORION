import { nav, ul, search, img } from "./styles.css";
import SearchIcon from "@mui/icons-material/Search";
import MenuMobile from "@/components/MenuMobile/page";
import Image from "next/image";
import { MenuDesktop } from "../MenuDesktop/page";
import { useEffect, useState } from "react";

const Nav = () => {

  const [width, setWidth] = useState(innerWidth <= 640)
  useEffect(() => {
      addEventListener("resize", () => {
      setWidth(innerWidth <= 640)
    })
  }, [])



  const input = SearchIcon + "Texto"

  return (
    <div>
      <nav className={nav}>
        <a href="/">
          <Image className={img} src="/img/logo.svg" alt="Logo" width={150} height={100} />
        </a>
        <div className={search}>
          <i>
            <SearchIcon className="text-offWhite" />
          </i>
          <input
            className="placeholder:text-offWhite focus:outline-none w-full "
            type="search"
            name=""
            id=""
            placeholder="Buscar por evento"
          />
        </div>
        <div>
         {width ? <MenuMobile /> : <MenuDesktop />}
        </div>

       
      </nav>
    </div>
  );
};

export default Nav;
