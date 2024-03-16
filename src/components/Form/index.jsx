import {
	StyledForm,
	Container3,
	Container2,
	ContainerTextArea,
	ContainerButtons,
} from "./style";

import Input from "../Input";
import InputFile from "../InputFile";
import Select from "../Select";
import { NoteItem } from "../NoteItem";
import { Button } from "../Button";

export function Form() {
	return (
		<StyledForm>
			<Container3>
				<InputFile />
				<div className="inputName">
					<Input
						identifier={name}
						label="Nome"
						type="text"
						placeholder="nome do prato"
						margin
					/>
				</div>
				<div className="inputSelect">
					<Select />
				</div>
			</Container3>
			<Container2>
				<div className="container-ingredients">
					<p className="roboto-160 ">Ingredientes</p>
					<div className="noteItems">
						<NoteItem value="vinicius" />
						<NoteItem isNew={true} placeholder="Adicionar" />
					</div>
				</div>
				<div className="inputPrice">
					<Input
						identifier={name}
						label="Preço"
						type="text"
						placeholder="R$ 0,00"
						margin
					/>
				</div>
			</Container2>
			<ContainerTextArea>
				<label htmlFor="textArea" className="roboto-160">
					Descrição
				</label>
				<textarea
					className="roboto-160"
					id="textArea"
					placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
				></textarea>
			</ContainerTextArea>

			<ContainerButtons>
				<div className="buttons">
					<Button title="Salvar alterações" to="/" save />
				</div>
			</ContainerButtons>
		</StyledForm>
	);
}
