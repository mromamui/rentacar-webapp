import "./backoffice.css";

import { Link } from "react-router-dom";


export default function RootLayout({ children }) {
    return (
        <section id="backoffice">
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/vehiculos">Vehículos</Link></li>
                    <li><Link to="/clientes">Clientes</Link></li>
                    <li><Link to="/alquileres">Alquileres</Link></li>
                    <li><Link to="/disponibles">Ver Disponibles</Link></li>
                </ul>
            </nav>
            <section>
                {children}
            </section>
        </section>
    );
}
