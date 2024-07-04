import "./backoffice.css";

import Link from 'next/link'

export default function RootLayout({ children }) {
    return (
        <section id="backoffice">
            <nav>
                <ul>
                    <li><Link href="/">Inicio</Link></li>
                    <li><Link href="/vehiculos">Vehículos</Link></li>
                    <li><Link href="/clientes">Clientes</Link></li>
                    <li><Link href="/alquileres">Alquileres</Link></li>
                    <li><Link href="/disponibles">Ver Disponibles</Link></li>
                </ul>
            </nav>
            <section>
                {children}
            </section>
        </section>
    );
}