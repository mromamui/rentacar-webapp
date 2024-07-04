import { useState, useEffect } from 'react';

function AvailableVehicles() {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        const fetchAvailableVehicles = async () => {
            const response = await fetch('http://localhost:3000/available-vehicles');
            const data = await response.json();
            setVehicles(data);
        };

        fetchAvailableVehicles();
    }, []);

    return (
        <div>
            <h2>Vehículos Disponibles para Alquilar</h2>
            <ul>
                {vehicles.map(vehicle => (
                    <li key={vehicle.id}>{vehicle.nombre} - Tiempo disponible: {vehicle.tiempoDisponible} días</li>
                ))}
            </ul>
        </div>
    );
}

export default AvailableVehicles;