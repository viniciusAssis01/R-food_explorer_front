import { Container } from "./style";

export function Tag({ title, ...rest }) {
	return (
		<Container {...rest} className="poppins-100-medium">
			{title}
		</Container>
	);
}
