import Input from "../../components/Input";
import { Container, Brand, Content } from "./style";
import polygonHeader from "../../assets/icons/polygonHeader.svg";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { useState } from "react";

import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function SignUp() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const navigate = useNavigate();

	function handleSignUp() {
		if (!name || !email || !password || !confirmPassword) {
			return alert("Preecha todos os campos!");
		}

		api
			.post("/users", { name, email, password, confirmPassword })
			.then(() => {
				alert("Usuario cadastrado com sucesso!");
				navigate("/");
			})
			.catch((error) => {
				if (error.response) {
					alert(error.response.data.message);
				} else {
					alert("Não foi possível cadastrar");
				}
			});
	}

	return (
		<Container>
			<Brand to="/">
				<img src={polygonHeader} alt="logo food explorer" />
				<h1>food explorer</h1>
			</Brand>

			<Content>
				<h2>Crie sua Conta</h2>

				<form>
					<Input
						icon={FiUser}
						identifier="name"
						label="Nome"
						id="name"
						type="text"
						placeholder="Exemplo: Maria da Silva"
						onChange={(e) => setName(e.target.value)}
					/>

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

					<Input
						icon={FiLock}
						identifier="confirmPassword"
						label="Confirme a senha"
						id="confirmPassword"
						type="password"
						autoComplete="current-password"
						placeholder="Mínimo 6 caracteres"
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>

					<Button title="Criar Conta" onClick={handleSignUp} />
				</form>

				<ButtonText title="ja tenho uma conta" to="/" />
			</Content>
		</Container>
	);
}
