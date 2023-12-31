import { getServerSession } from "next-auth";
import { ReactNode } from "react"
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Nav from "@/components/Nav/page";

interface PrivateLayoutProd {
    children: ReactNode
}

export default async function PrivateLayout({ children }: PrivateLayoutProd) {
    const session = await getServerSession(authOptions);

    if(!session) {
        redirect('/')
    }
    return <>
    { children }
    </>   
}