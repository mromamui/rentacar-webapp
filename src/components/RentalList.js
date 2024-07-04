import { useState, useEffect } from 'react';

function RentalList() {
    const [rentals, setRentals] = useState([]);

    useEffect(() => {
        const fetchRentals = async () => {
            const response = await fetch('http://localhost:3000/rentals');
            const data = await response.json();
            setRentals(data);
        };

        fetchRentals();
    }, []);

    return (
        <div>
            <h2>Lista de Alquileres</h2>
            <ul>
                {rentals.map(rental => (
                    <li key={rental.id}>
                        Cliente: {rental.clienteNombre} - Vehículo: {rental.vehiculoModelo} - Tiempo del alquiler: {rental.tiempoAlquiler} días
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RentalList;