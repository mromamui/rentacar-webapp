import { useState, useEffect } from 'react';

function VehicleList() {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        const fetchVehicles = async () => {
            const response = await fetch('http://localhost:3000/backoffice/vehicles');
            const data = await response.json();
            setVehicles(data);
        };

        fetchVehicles();
    }, []);

    return (
        <div>
            <h2>Lista de Vehículos</h2>
            <ul>
                {vehicles.map(vehicle => (
                    <li key={vehicle.id}>{vehicle.modelo} - {vehicle.tipoCombustible}</li>
                ))}
            </ul>
        </div>
    );
}

export default VehicleList;