'use client'
import Nav from "@/components/Nav/page"
import { container, form, back } from "./styles.css"
import Button from "@/components/Button/page"
import { input } from '@/app/signup/styles.css';
import SignedProfiles from "@/components/SignedProfiles/page"

export default function Event() {

    return (
        <div>
            <Nav />
            <div className={container}>
                <div className='flex justify-center items-center'>
                    <div>
                        <h1 className="font-normal text-black  tex text-[3rem]">%Nome do Evento%</h1>
                        <hr className="text-black w-1/2 flex justify-center items-center m-auto opacity-10" />
                        <h2 className="mt-3">Local</h2>
                        <div className={`m-auto mb-3 ${input}`}>%Local%</div>
                        <h2>data</h2>
                        <div className={`m-auto mb-3 ${input}`}>%data%</div>
                        <h2>Descrição</h2>
                        <div className={`m-auto mb-3 ${input}`}>%Descrição%</div>
                        <h2>Participantes</h2>
                        <div className={`m-auto mb-3 ${input}`}><SignedProfiles /></div>
                        
                        {/* <span>
                                    <Link
                                        className={`hover:text-primaryDark hover:font-bold transition duration-500 ease-in-out`}
                                        href="/recover-password">
                                        Esqueci minha senha
                                    </Link>
                                </span> */}
                        <Button
                            text="Cadastrar-se"
                            width="w-[300px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}