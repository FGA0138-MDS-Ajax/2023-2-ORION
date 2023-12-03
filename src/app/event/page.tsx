"use client"
import Nav from "@/components/Nav/page"
import Button from "@/components/Button/page"
import { container, input } from '@/app/event/styles.css';
import Image from "next/image";

export default function Event() {
    return (
        <div>
            <Nav />
            <div className={container}>
                <div className='flex justify-center items-center'>
                    <div>
                        <h1 className="font-normal text-black  tex text-[3rem]">%Nome do Evento%</h1>

                        <h2>Local:</h2>
                        <input className={input} placeholder="Na graminha..." type="text" id="local" name="local" required />
                        
                        <h2>Descrição:</h2>
                        <textarea className={input} placeholder="Minha jogatina será nível intrmediário e tem vagas limitadas..." id="description" name="description" required></textarea>
                        
                        <h2>Data:</h2>
                        <input className={input} type="date" id="date" name="date" required></input>
                        
                        <h2>Horário</h2>
                        <input className={input} type="time" id="time" name="time" required />
                        
                        <h2>Participantes:</h2>
                        <textarea className={input} placeholder="Eu, o pessoal de C2, ..." id="participants" name="participants" required></textarea>
                        
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