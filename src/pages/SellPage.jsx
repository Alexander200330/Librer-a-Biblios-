import React from 'react'
import { useActionData, useNavigate } from 'react-router-dom';
import SellForm from '../components/SellForm';

function SellPage() {
  const navigate = useNavigate()

  const errores = useActionData();

  return (
    <>
      <h2 className='text-blue-800 font-bold text-2xl'>Ventas</h2>
      <p className='mt-2 text-base'>Llena todos los campos para registrar una nueva venta.</p>

      <div className="flex justify-end">
        <button className="bg-blue-800 hover:bg-blue-900 text-white uppercase font-bold px-3  py-2 rounded-md" onClick={() => navigate(-1)}>
          Volver
        </button>
      </div>

      <div className="bg-white rounded-md shadow md:w-3/4 mx-auto px-5 py-10 mt-5">
        {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}
          <SellForm />
      </div>

    </>
  )
}

export default SellPage;