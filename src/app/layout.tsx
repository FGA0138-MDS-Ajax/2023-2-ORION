import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  

  return (
    <html>
      <body className="bg-offWhite">{children}</body>
    </html>
  );
}
