import { StyledContainer } from "./style";
import { Counter } from "../Counter";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

export function CardItem({ data }) {
	const { user } = useAuth();

	const imageDishURL = data.image
		? `${api.defaults.baseURL}/files/${data.image}`
		: null;

	return (
		<StyledContainer>
			<img src={imageDishURL} alt="imagem do prato" />
			<h2 className="poppins-240-bold ">{data.name}</h2>
			<p className="roboto-140-regular">{data.description}</p>
			<p className="roboto-320-regular">{`R$${data.price}`}</p>
			<div className="interactCard">
				{user.role === "customer" && (
					<>
						<div className="container-counter">
							<Counter />
						</div>
						<button className="poppins-100-medium">incluir</button>
					</>
				)}
			</div>
		</StyledContainer>
	);
}
