import Image from "next/image"
import logo from "../../assets/logo.svg"

export default function home() {
    return(

        <div className="bg-[white] h-screen w-screen text-center relative overflow-hidden flex justify-center items-center">
            <h1>teste</h1>
            <div className="absolute top-[5%] left-[5%]">
                <Image src={logo} alt="logo" width={550} height={100} />

            </div>

            <div></div>
        </div>
    )
}