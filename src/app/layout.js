import Top from "./components/Top";
import "./globals.css";

export const metadata = {
  title: "Way dev",
  description: "SPA created to practice the knowledge about App Router in REACT JS",
  robots: 'index,follow',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Top/>
        {children}
      </body>
    </html>
  );
}
