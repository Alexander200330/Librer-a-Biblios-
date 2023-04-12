import { Link, Outlet, useLocation } from "react-router-dom"
import NavBtn from "../components/NavBtn";

const Layout = () => {

  const location = useLocation();

  return (
    <div className='md:flex md:minmax-h-screen'>
      <aside className="w-1/4 bg-blue-900 px-5 py-10">
        <h1 className="text-center font-bold text-5xl text-white">Biblios</h1>

        <div className="mt-10">
          <NavBtn path='inventario' name='Inventario' />
          <NavBtn path='libros' name='Ver Libros' padding="pl-6"/>
          <NavBtn path='ventas' name='Ventas'/>
        </div>
      </aside>

      <main className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout;