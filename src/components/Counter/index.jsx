import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Container } from "./style";

export function Counter() {
	return (
		<Container className="roboto-200-bold">
			<AiOutlineMinus />
			<span>01</span>
			<AiOutlinePlus />
		</Container>
	);
}
