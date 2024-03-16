import { Route, Routes, Navigate } from "react-router-dom";
import { SingIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

export function AuthRoutes() {
	const user = localStorage.getItem("@foodExplorer:user");
	return (
		<Routes>
			<Route path="/" element={<SingIn />} />
			<Route path="/register" element={<SignUp />} />

			{!user && <Route path="*" element={<Navigate to="/" />} />}
		</Routes>
	);
}
