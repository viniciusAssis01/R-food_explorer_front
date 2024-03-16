import { Container, Content, Brand } from "./style";
import polygonFooter from "../../assets/icons/polygonFooter.svg";

export function Footer() {
	return (
		<Container>
			<Content>
				<Brand>
					<img src={polygonFooter} alt="Logo Food Explorer" />
					<h1>food Explorer</h1>
				</Brand>

				<div>
					<p>© 2024 - Todos os direitos reservados.</p>
				</div>
			</Content>
		</Container>
	);
}
