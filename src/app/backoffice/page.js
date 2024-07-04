'use client'

import RentalList from "@/components/RentalList";
import ListaVehiculos from "@/components/ListaVehiculos";
import ClientList from "@/components/ClientList";
import AvailableVehicles from "@/components/AvailableVehicles";
import FichaAlquiler from "@/components/FichaAlquiler";


export default function Home() {
  return (
      <>
        <h1>Rent-A-Car Dashboard</h1>
        <p>Bienvenido al Dashboard de Rent-A-Car</p>
        <p>¡ Gestiona los coches desde aquí !</p>
        <p>Selecciona una sección en el menú de la izquierda</p>

          <RentalList />
          <ListaVehiculos />
          <ClientList />
          <AvailableVehicles />
          <FichaAlquiler />
      </>
  );
}


