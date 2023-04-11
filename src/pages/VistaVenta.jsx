import React, { useState, useEffect } from "react";

function VistaVenta() {
  const [books, setVentas] = useState([]);

  useEffect(() => {
    fetch("https://biblios.whatmsg.com/api/ventas")
      .then((response) => response.json())
      .then((data) => setVentas(data.data));
  }, []);


  return (
    <div className="container bg-gray-10">
      <h2 className='text-blue-800 font-bold text-2xl'>Ventas</h2>
      <p className='mt-7 mb-7 text-base'>En este apartado puedes ver, editar y eliminar los libros diponibles en el inventario.</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {books.map((venta) => (
      <div key={venta.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <div className="px-6 py-4">
          <h6 className="text-gray-700 text-base mb-2">Cantidad vendida: {venta.attributes.cantidad_vendida}</h6>
          <p className="text-gray-700 text-base mb-2">Id libro vendido: {venta.attributes.id_libro_vendido}</p>
          <p className="text-gray-700 text-base mb-2">Fecha de venta: {venta.attributes.fecha_venta}</p>
          <p className="text-gray-700 text-base mb-2">Precio unitario: {venta.attributes.precio_unitario}</p>
          <p className="text-gray-700 text-base mb-2">Total de venta: {venta.attributes.total_venta}</p>
        </div>
      </div>
    ))}
    </div>
  </div>


  );
  
}

export default VistaVenta;
