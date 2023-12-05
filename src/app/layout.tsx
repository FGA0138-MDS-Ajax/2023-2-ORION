import "../styles/globals.css";
import { getServerSession } from "next-auth/next";
import SessionProvider from "@/lib/SessionProvider";
import { Toaster } from "@/components/ui/toaster";

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
          <Toaster />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
