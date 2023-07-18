import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const RootLayout = () => {
	return (
		<>
			<NavBar />
			<main style={{ border: "2px solid red" }}>
				<Outlet />
			</main>
		</>
	);
};

export default RootLayout;
