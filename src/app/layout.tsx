import "../styles/globals.css";
import { getServerSession } from "next-auth/next";
import SessionProvider from "@/lib/SessionProvider";
import Nav from "../components/Nav/page";


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html>
      <body>
        <SessionProvider session={session}>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
