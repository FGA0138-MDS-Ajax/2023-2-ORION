import Link from "next/link"
import { ul, link } from "./styles.css"

export const MenuDesktop = () => {
    return (
        <>
            <ul className={ul}>
                <li><Link className={`
                font-bold
                `} href="/create-account">Criar conta</Link></li>
                <li><Link className={link} href="/login">Entrar</Link></li>
            </ul>
        </>
    )
}