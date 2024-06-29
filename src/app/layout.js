import { Inter } from "next/font/google";
import Image from "next/image"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Examen Informática 2 UAX 4/6/2024",
  description: "Aplicación frontal Rent-A-Car V1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <header>
            <Image src="logo.svg" width="100" height="40" />
            <h1>Examen Rent-A-Car 5 de Junio de 2024</h1>
        </header>
        <section>
            {children}
        </section>
        <footer>
            <span>&copy; Alumno: Nombre Alumno</span>
            <span>NP: 99999</span>
        </footer>
      </body>
    </html>
  );
}
