import ArrowBack from "@mui/icons-material/ArrowBack"
import Link from "next/link"

interface ButtonProps {
    href: string
}

const BackButton = () => {
    return (
        <div className="flex items-center">
            <Link
                className={back}
                href='/'>

                <ArrowBack />
                voltar
            </Link>
        </div>
    )
}

export const back = `
    w-[100px] h-[40px]
    border
    p-5
    flex justify-center items-center
    rounded-md
    border-primary
    hover:bg-primary
    hover:text-white
    transition duration-100 ease-in-out
`

export default BackButton