import Input from "../../components/Input";
import { Container, Brand, Content } from "./style";
import polygonHeader from "../../assets/icons/polygonHeader.svg";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { FiMail, FiLock } from "react-icons/fi";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export function SingIn() {
	const { signIn } = useAuth();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function handleSignIn() {
		signIn({ password, email });
	}

	return (
		<Container>
			<Brand to="/">
				<img src={polygonHeader} alt="logo food explorer" />
				<h1>food explorer</h1>
			</Brand>

			<Content>
				<h2>Faça Login</h2>

				<form>
					<Input
						icon={FiMail}
						identifier="email"
						label="Email"
						id="email"
						type="email"
						autoComplete="username"
						placeholder="Exemplo: exemplo@exemplo.com"
						onChange={(e) => setEmail(e.target.value)}
					/>

					<Input
						icon={FiLock}
						identifier="password"
						label="Senha"
						id="password"
						type="password"
						autoComplete="current-password"
						placeholder="Mínimo 6 caracteres"
						onChange={(e) => setPassword(e.target.value)}
					/>

					<Button title="Entrar" onClick={handleSignIn} />
				</form>

				<ButtonText title="Criar uma conta" to="/register" />
			</Content>
		</Container>
	);
}
