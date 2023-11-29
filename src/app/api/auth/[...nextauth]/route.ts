import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth"
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    return await NextAuth(req, res, authOptions);
}




// export { handler as GET, handler as POST };