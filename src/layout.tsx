import { Outlet } from "react-router-dom";

export default function Layout() {
	return (
		<main className="w-screen min-h-screen lg:p-20">
			<Outlet />
		</main>
	)
}