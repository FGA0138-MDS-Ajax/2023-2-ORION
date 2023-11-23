import Button from "@/components/Button/page"
import { textInput, img } from "./styles.css"
import Image from "next/image";
import Link from "next/link";

export default function login() {
    return (
        <div className="bg-[white] m-auto h-screen w-screen text-center relative overflow-hidden flex justify-center items-center">
            <div className="w-[400px] text-[#000000] bg-white rounded-b-[30px]">
            <Link href={'/'}>
                        <Image
                            className={img}
                            src="/img/logo2.svg"
                            alt="Logo"
                            width={150} height={100} />
                    </Link>
                <form>
                    <h1 className="text-[30px] font-bold">Log In</h1>
                    <input placeholder="Seu email" className={textInput} type="email" name="email" id="email" />

                    <input placeholder="Sua senha" className={textInput} type="password" name="senha" id="senha" />
                    <div className="text-[#45BF55] text-left w-[200px] ml-[60px]">
                        <a href="/recover-password">Esqueceu a senha?</a>
                    </div>
                    <Button
                        text="Entrar"
                        width="w-[100px]"
                    />
                </form>
            </div>
        </div>
    )
}