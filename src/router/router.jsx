import { createBrowserRouter } from "react-router-dom";
import EditarLibros from "../pages/EditarLibros";
import Inventario from "../pages/Inventario";
import Layout from "../pages/Layout";
import LibrosClientes from "../pages/LibrosClientes";
import VistaLibros from "../pages/VistaLibros";
import VistaVenta from "../pages/VistaVenta";
import Login from "../pages/login";
import SellPage from "../pages/SellPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/inventario",
				element: <Inventario />,
			},
			{
				path: "/libros",
				element: <VistaLibros />,
			},
			{
				path: "/libro/:libroId/editar",
				element: <EditarLibros />,
			},
			{
				path: "/VistaVenta",
				element: <VistaVenta />,
			},
			{
				path: "biblios",
				element: <LibrosClientes />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/ventas",
				element: <SellPage />,
			},
		],
	},
]);

export default router;
