import { createBrowserRouter, useNavigate } from "react-router-dom";
import EditarLibros from "../pages/EditarLibros";
import Inventario from "../pages/Inventario";
import Layout from "../pages/Layout";
import LibrosClientes from "../pages/LibrosClientes";
import VistaLibros from "../pages/VistaLibros";
import SellPage from "../pages/SellPage";
import Login from "../components/Login";
import VistaVenta from "../pages/VistaVenta";

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
				path: "/ventas",
				element: <SellPage />,
			},
			{
				path: "/login",
				element: <Login />,
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
				path: "/",
				element: <LibrosClientes />,
			},
		],
	},
]);

export default router;
