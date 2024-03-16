import { Container } from "./style";

export default function Select({ selected }) {
	return (
		<Container>
			<label className="roboto-160" htmlFor="event-category">
				Categoria
			</label>
			<div className="input-wrapper">
				<select
					name=""
					id="event-category"
					className="roboto-140-regular"
					value={selected}
				>
					<option className="roboto-140-regular">categoria</option>
					<option value="refeição" className="roboto-140-regular">
						Refeição
					</option>
					<option value="bebida" className="roboto-140-regular">
						Bebida
					</option>
					<option value="sobremesa" className="roboto-140-regular">
						Sobremesa
					</option>
				</select>
			</div>
		</Container>
	);
}
