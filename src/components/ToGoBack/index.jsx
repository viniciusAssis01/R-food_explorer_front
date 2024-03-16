import { IoIosArrowBack } from "react-icons/io";
import { Container } from "./style";
import { useNavigate } from "react-router-dom";

export function ToGoBack() {
	const navigate = useNavigate();

	function handleBack() {
		navigate(-1);
	}

	return (
		<Container className="poppins-240-bold" onClick={handleBack}>
			<IoIosArrowBack /> Voltar
		</Container>
	);
}
