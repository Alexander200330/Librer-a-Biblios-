import {
	Outlet,
	useNavigate,
} from "react-router-dom";
import NavBtn from "../components/NavBtn";
import { destroyUser, getUser } from "../services/localstorage";

const Layout = () => {

	const navigate = useNavigate();

	return (
		<div className="md:flex md:minmax-h-screen">
			<aside className="w-1/4 bg-blue-900 px-5 py-10">
				<h1 className="text-center font-bold text-5xl text-white">
					Biblios
				</h1>

				<div className="mt-10">
					<NavBtn
						path=""
						name={getUser() ? "Libros" : "Ver Libros"}
					/>
					{getUser() && (
						<NavBtn
							path="inventario"
							name="Agregar Libro"
							padding="pl-3"
						/>
					)}
					{getUser() && (
						<NavBtn
							path="ventas"
							name="Agregar Venta"
							padding="pl-3"
						/>
					)}
					{getUser() && <NavBtn path="VistaVenta" name="Ventas" />}
					{!getUser() && <NavBtn path="login" name="Iniciar sesión" />}
					{getUser() && (
						<button
							className="pl-3 py-1 text-xl font-bold hover:text-blue-300 block text-white"
							onClick={() => {
								destroyUser();
								navigate("/login");
							}}
						>
							Cerrar sesión
						</button>
					)}
				</div>
			</aside>

			<main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
				<Outlet />
			</main>
		</div>
	);
};

export default Layout;
