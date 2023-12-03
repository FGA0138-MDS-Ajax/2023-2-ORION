"use client"
import { input } from '@/app/event-view/styles.css';
import Image from "next/image";

export default function Evento() {
    return (
        <div className="bg-[offwhite] flex flex-col justify-center items-center h-screen">
            <div className="bg-primary h-[10%] w-5/6 rounded-t-xl flex-row grid grid-cols-3 justify-center text-center items-center">
                
                <a href="/">
                    <Image className="block max-sm:hidden mr-auto ml-4" src="/img/logo.svg" alt="Logo" width={150} height={100} />
                </a>
                
                <h1 className="text-[30px] text-white">Eventim</h1>

                <a href="">
                    <svg fill="#ffffff" viewBox="0 0 299.021 299.021" stroke="#ffffff" className="w-[50px] text-center ml-auto mr-4">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"> <g> <g> <path d="M292.866,254.432c-2.288,0-4.443-1.285-5.5-3.399c-0.354-0.684-28.541-52.949-146.169-54.727v51.977 c0,2.342-1.333,4.48-3.432,5.513c-2.096,1.033-4.594,0.793-6.461-0.63L2.417,154.392C0.898,153.227,0,151.425,0,149.516 c0-1.919,0.898-3.72,2.417-4.888l128.893-98.77c1.87-1.426,4.365-1.667,6.461-0.639c2.099,1.026,3.432,3.173,3.432,5.509v54.776 c3.111-0.198,7.164-0.37,11.947-0.37c43.861,0,145.871,13.952,145.871,143.136c0,2.858-1.964,5.344-4.75,5.993 C293.802,254.384,293.34,254.432,292.866,254.432z"></path> </g> </g> </g>
                    </svg>
                </a>
                

            </div>
            
            <div className="bg-white w-5/6 h-[80%] mx-auto rounded-b-xl grid justify-center text-center flex-row">
                <div className="m-[10%] text-[16px] bold text-left">
                    <h2>Título:</h2>
                    <input className={input} placeholder="Um nome legal" type="text" id="title" name="title" required />
                    
                    <h2>Descrição:</h2>
                    <textarea className={input} id="description" name="description" required></textarea>
                    
                    <h2>Data:</h2>
                    <input className={input} type="date" id="date" name="date" required></input>
                    
                    <h2>Horário</h2>
                    <input className={input} type="time" id="time" name="time" required />
                    
                    <a href="">
                        <div className="flex flex-row text-primary">
                            
                            <svg viewBox="0 0 24 24" className="w-[20px]" fill="#45BF55">
                                <path d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"/>
                            </svg>
                            <h2>Editar dados</h2>
                        </div>
                    </a>
                </div>

            </div>
            
        </div>
    ) 
}