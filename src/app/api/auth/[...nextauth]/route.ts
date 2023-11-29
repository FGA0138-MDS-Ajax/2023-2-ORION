import NextAuth from "next-auth"
import { Account, User as AuthUser } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import User from "@/models/User"
import connect from "@/lib/mongodb"

const bcrypt = require('bcryptjs');

export const authOptions: any = {
    providers: [
        CredentialsProvider({
            id: 'credentials',
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials: any) {
                await connect()

                try {
                    const user = await User.findOne({ email: credentials.email })
                    if (user) {
                        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)
                        if (isPasswordCorrect) {
                            return user
                        }
                    }
                } catch (error: any) {
                    throw new Error(error)
                }
            }

        })

    ],
}

export const handler = NextAuth(authOptions)
export { handler as GET, handler as POST};