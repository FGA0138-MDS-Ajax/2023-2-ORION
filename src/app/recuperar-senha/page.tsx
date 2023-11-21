'use client'

import Button from "@/components/Button/page"
import { textInput } from "./styles.css"


export default function Recuperar() {
    return (

        <div className="grid grid-cols-[1fr_1fr] w-screen">
            <div className="bg-primary h-screen">
                <div>
                    <h1>Não tem uma conta?</h1>
                </div>
            </div>
            <div className="bg-[white] grid place-items-center">
                <div className="w-[600px] text-center text-[#000000]">
                    <form>
                        <h1 className="m-3 text-[30px]">Log In</h1>
                        <input placeholder="login" className={textInput} type="email" name="email" id="email" />
                        <input placeholder="senha" className={textInput}  type="password" name="senha" id="senha" />

                        <Button
                            text="Acessar"
                            width="w-[10rem]"
                            onClick={() => alert("Hello World")}
                        />
                        {/* <button type="submit" value="Acessar"
                        className="bg-primary w-[200px] rounded-[30px] p-2 m-5 text-white font-bold hover:bg-primaryDark transition duration-100 ease-in-out"
                    > Acessar
                    </button> */}
                    </form>
                </div>
            </div>
            
            
        </div>
    )
}