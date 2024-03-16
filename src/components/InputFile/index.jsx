import { Container } from "./style";
import UploadSimple from "../../assets/icons/uploadSimple.svg";

export default function InputFile({ onChange }) {
	return (
		<Container>
			<p className="roboto-160">Imagem do prato</p>
			<div className="input-wrapper">
				<label className="poppins-100-medium" htmlFor="uploadImage">
					<img src={UploadSimple} alt="icone de upload" />
					Selecionar imagem
					<input type="file" id="uploadImage" onChange={onChange} />
				</label>
			</div>
		</Container>
	);
}
