import { Link, useNavigate } from "react-router-dom";
import { Container } from "./style";

export function NotFound() {
	const navigate = useNavigate();
	function homer() {
		setTimeout(() => {
			navigate("/");
		}, 3500);
	}

	return (
		<Container>
			<h1 className="roboto-420-bold ">Página indisponível</h1>
			<Link to="/" className="roboto-210 ">
				voltar para o início
				{homer()}
			</Link>
		</Container>
	);
}
