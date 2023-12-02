"use client"
import { input } from '@/app/signup/styles.css';
import Image from "next/image";
import SignedEvents from "@/components/SignedEvents/page"
import Button from "@/components/Button/page"

export default function editprofile() {
    return (

        <div className="bg-[offwhite] flex flex-col justify-center items-center h-screen">
            <div className="bg-primary h-[10%] w-5/6 rounded-t-xl flex-row grid grid-cols-3 justify-center text-center items-center">
                
                <a href="/">
                    <Image className="block max-sm:hidden mr-auto ml-4" src="/img/logo.svg" alt="Logo" width={150} height={100} />
                </a>
                
                <h1 className="text-[30px] text-white">%Nome%</h1>

                <a href="">
                    <svg fill="#ffffff" viewBox="0 0 299.021 299.021" stroke="#ffffff" className="w-[50px] text-center ml-auto mr-4">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"> <g> <g> <path d="M292.866,254.432c-2.288,0-4.443-1.285-5.5-3.399c-0.354-0.684-28.541-52.949-146.169-54.727v51.977 c0,2.342-1.333,4.48-3.432,5.513c-2.096,1.033-4.594,0.793-6.461-0.63L2.417,154.392C0.898,153.227,0,151.425,0,149.516 c0-1.919,0.898-3.72,2.417-4.888l128.893-98.77c1.87-1.426,4.365-1.667,6.461-0.639c2.099,1.026,3.432,3.173,3.432,5.509v54.776 c3.111-0.198,7.164-0.37,11.947-0.37c43.861,0,145.871,13.952,145.871,143.136c0,2.858-1.964,5.344-4.75,5.993 C293.802,254.384,293.34,254.432,292.866,254.432z"></path> </g> </g> </g>
                    </svg>
                </a>
                

            </div>
            
            <div className="bg-white w-5/6 h-[80%] mx-auto rounded-b-xl grid justify-center text-center flex-row grid-cols-2">
                <div className='flex justify-center items-center'>
                    <form>
                        <h1 className="font-normal text-black  tex text-[3rem]">Editar dados</h1>
                        <hr className="text-black w-1/2 flex justify-center items-center m-auto opacity-10" />
                        <input placeholder="%nome%" type="text" className={input} />
                        <input placeholder="%nome social%" type="text" className={input} />
                        <input placeholder="%pronômes%" type="text" className={input} />
                        <input type='password' placeholder="%senha%" className={input} required />
                        {/* <span>
                                    <Link
                                        className={`hover:text-primaryDark hover:font-bold transition duration-500 ease-in-out`}
                                        href="/recover-password">
                                        Esqueci minha senha
                                    </Link>
                                </span> */}
                        <Button
                            text="Enviar"
                            width="w-[300px]"
                        />
                    </form>
                </div>

                <div className="w-full h-full overflow-y-auto flex justify-center items-center">
                    <div>
                        <Image
                            src="/img/edit.svg"
                            alt="Logo"
                            width={450} height={400}
                            loading="lazy"
                            className=" hidden md:block md:top-10 md:left-10"
                        />
                    </div>
                </div>

                

            </div>
            
        </div>
    ) 
}