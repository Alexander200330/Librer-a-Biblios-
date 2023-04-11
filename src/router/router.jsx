import { createBrowserRouter } from "react-router-dom";
import EditarLibros from "../pages/EditarLibros";
import Inventario from "../pages/Inventario";
import Layout from "../pages/Layout";
import VistaLibros from "../pages/VistaLibros";
import VistaVenta from "../pages/VistaVenta";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: "/inventario",
                element: <Inventario />,
            },
            {
                path: "/libros",
                element: <VistaLibros />
            },
            {
                path: "/libro/:libroId/editar",
                element: <EditarLibros />
            },
            {
                path: "/VistaVenta",
                element: <VistaVenta />
            }
        ]
    }
])

export default router;