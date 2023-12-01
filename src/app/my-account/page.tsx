'use client'
import { useSession } from "next-auth/react"


export default function MyAccount() {
    const { data: session } = useSession();

    console.log(session)

    return (
        <div>
            <h1>Minha conta</h1>
            <p>{session?.user._id}</p>

        </div>
    )
}