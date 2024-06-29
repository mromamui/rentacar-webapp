import "./backoffice.css";

export default function RootLayout({ children }) {
    return (<section id="backoffice">
        <nav>
            Implementar aquí el menú de navegación
        </nav>
        <section>
            {children}
        </section>
    </section>);
}
