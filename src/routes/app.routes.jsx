import { Route, Routes } from "react-router-dom";
import { Dish } from "../pages/Dish";
import { EditDish } from "../pages/EditDish";
import { Home } from "../pages/Home";
import { NewDish } from "../pages/NewDish";
import { NotFound } from "../pages/NotFound";

export function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/dishes/:id" element={<Dish />} />
			<Route path="/new" element={<NewDish />} />
			<Route path="/editDish/:id" element={<EditDish />} />

			<Route path="*" exact={true} element={<NotFound />} />
		</Routes>
	);
}
