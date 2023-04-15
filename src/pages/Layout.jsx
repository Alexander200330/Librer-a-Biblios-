import { Link, Outlet, useLocation } from "react-router-dom"

const Layout = () => {

  const location = useLocation();

  return (
    <div className='md:flex md:minmax-h-screen'>
      <aside className="w-1/4 bg-blue-900 px-5 py-10">
        <h1 className="text-center font-bold text-5xl text-white">Biblios</h1>

        <div className="mt-10">
          <h2 className="pl-3 py-1 text-xl font-bold block text-white">Inventario</h2>
          <Link to='/inventario' className={`${location.pathname === '/inventario' ? 'text-gray-100 bg-blue-800' : 'text-white'} pl-6 py-1 text-xl font-bold hover:text-blue-300 block`}>Agregar Libro</Link>
          <Link to='/libros' className={`${location.pathname === '/libros' ? 'text-gray-100 bg-blue-800' : 'text-white'} pl-6 py-1 text-xl font-bold hover:text-blue-300 block`}>Administrar libros</Link>
          <Link to='/VistaVenta' className={`${location.pathname === '/VistaVenta' ? 'text-gray-100 bg-blue-800' : 'text-white'} pl-6 py-1 text-xl font-bold hover:text-blue-300 block`}>Ver ventas</Link>
          <Link to='/biblios' className={`${location.pathname === '/biblios' ? 'text-gray-100 bg-blue-800' : 'text-white'} pl-3 py-1 text-xl font-bold hover:text-blue-300 block`}>Libros</Link>

        </div>
      </aside>

      <main className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout