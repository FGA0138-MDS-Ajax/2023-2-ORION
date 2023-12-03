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
                name: { label: "Name", type: "text" },
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
                events: { label: "Events", type: "text" }
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
    callbacks: {
        async jwt({token, user }: { token: any, user: any}) {
            user && (token.user = user)
            return token
    },
        async session({session, token}: { token: any, session: any}) {
            session.user = token.user as any
            session.user.id = token.user._id
            return session
        }
    },

}