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
                            className={img + `m`}
                            src="/img/logo2.svg"
                            alt="Logo"
                            width={150} height={100} />
                    </Link>
                <form className="grid gap-3 mt-10">
                    <h1 className="text-[20px] font-bold">Entre na sua conta</h1>
                    <input placeholder="Seu email" className={textInput} type="email" name="email" id="email" />

                    <input placeholder="Sua senha" className={textInput} type="password" name="senha" id="senha" />
                    <div className="text-[#45BF55] text-left w-[200px]">
                        <a href="/recover-password">Esqueceu sua senha?</a>
                    </div>
                    <Button
                        text="Entrar"
                        width="w-[12.5em]"
                    />
                </form>
            </div>
        </div>
    )
}