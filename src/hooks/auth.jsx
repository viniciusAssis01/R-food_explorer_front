import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
	const [data, setData] = useState({});

	async function signIn({ email, password }) {
		try {
			const response = await api.post(
				"/sessions",
				{ email, password },
				{ withCredentials: true }
			);

			const { user } = response.data;

			localStorage.setItem("@foodExplorer:user", JSON.stringify(user));

			setData({ user });
		} catch (error) {
			if (error.response) {
				alert(error.response.data.message);
			} else {
				alert("Não foi possivel entrar");
			}
		}
	}

	function signOut() {
		localStorage.removeItem("@foodExplorer:user");

		setData({});
	}

	useEffect(() => {
		const user = localStorage.getItem("@foodExplorer:user");

		if (user) {
			setData({ user: JSON.parse(user) });
		}
	}, []);

	return (
		<AuthContext.Provider value={{ signIn, user: data.user, signOut }}>
			{children}
		</AuthContext.Provider>
	);
}

function useAuth() {
	const context = useContext(AuthContext);
	return context;
}

export { AuthProvider, useAuth };
