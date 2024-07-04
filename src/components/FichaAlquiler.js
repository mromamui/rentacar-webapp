import React from 'react';

function FichaAlquiler({ vehiculo, cliente, tiempoAlquiler }) {
    return (
        <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
            <h3>Ficha de Alquiler</h3>
            <p><strong>Vehículo:</strong> {vehiculo}</p>
            <p><strong>Cliente:</strong> {cliente}</p>
            <p><strong>Tiempo de Alquiler:</strong> {tiempoAlquiler} días</p>
        </div>
    );
}

export default FichaAlquiler;