import { Container } from "./style";

export default function OrderButton({ icon = false, to, title }) {
	return (
		<Container className="poppins-100-medium" to={to}>
			{icon && <img src={icon} alt="pedidos" />}
			<p>{title}</p>
		</Container>
	);
}
