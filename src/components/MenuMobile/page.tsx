import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from "next/link"
import { ul, link } from './styles.css';
import { useState } from "react";



const MenuMobile = () => {
    const [navbar, setNavbar] = useState(false);
    return (
        <div>
            <div className="z-50 relative">
                <button
                    onClick={() => setNavbar(!navbar) }
                >
                    {navbar ? <CloseIcon /> : <MenuIcon />}
                
                </button>
            </div>

            <div>
                <ul className={navbar ? ul : 'hidden'}>
                    
                    <li><Link className='' href="/signup">Criar conta</Link></li>
                    <li><Link className={link} href="/login">Entrar</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default MenuMobile