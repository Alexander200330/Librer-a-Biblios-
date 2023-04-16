import { createBrowserRouter, useNavigate } from "react-router-dom";
import EditarLibros from "../pages/EditarLibros";
import Inventario from "../pages/Inventario";
import Layout from "../pages/Layout";
import VistaLibros from "../pages/VistaLibros";
import SellPage from "../pages/SellPage";
import Login from "../components/Login";

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
				path: "/ventas",
				element: <SellPage />,
			},
			{
				path: "/login",
				element: <Login />,
			},
		],
	},
]);

export default router;
