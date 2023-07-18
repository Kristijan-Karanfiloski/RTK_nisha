import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { Provider } from "react-redux";
import store from "../store/store";

const RootLayout = () => {
	return (
		<>
			<Provider store={store}>
				<NavBar />
				<main style={{ border: "2px solid red" }}>
					<Outlet />
				</main>
			</Provider>
		</>
	);
};

export default RootLayout;
