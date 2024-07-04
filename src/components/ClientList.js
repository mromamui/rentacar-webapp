import { useState, useEffect } from 'react';

function ClientList() {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        const fetchClients = async () => {
            const response = await fetch('http://localhost:3000/clients');
            const data = await response.json();
            setClients(data);
        };

        fetchClients();
    }, []);

    return (
        <div>
            <h2>Lista de Clientes</h2>
            <ul>
                {clients.map(client => (
                    <li key={client.id}>{client.nombre} - Alquileres realizados: {client.alquileres}</li>
                ))}
            </ul>
        </div>
    );
}

export default ClientList;