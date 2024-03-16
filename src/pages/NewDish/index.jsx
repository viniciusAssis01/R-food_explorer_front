import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ToGoBack } from "../../components/ToGoBack";
import {
	StyledMain,
	StyledNewDish,
	StyledForm,
	Container3,
	Container2,
	ContainerTextArea,
	ContainerButtons,
	StyleSelect,
} from "./style";

import Input from "../../components/Input";
import InputFile from "../../components/InputFile";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export function NewDish() {
	const [name, setName] = useState("");
	const [category, setCategory] = useState("");
	const [description, setDescription] = useState("");
	const [ingredients, setIngredients] = useState([]);
	const [newIngredient, setNewIngredient] = useState("");
	const [price, setPrice] = useState();
	const [image, setImage] = useState(null);
	const navigate = useNavigate();

	async function handleRegisterDish() {
		if (!name || !category || !description || !ingredients || !price) {
			return alert("Preencha todos os campos!");
		}

		if (newIngredient) {
			return alert(
				"Você esqueceu de adicionar um ingrediente. Clique em 'Adicionar' ou deixe o campo vazio."
			);
		}

		try {
			const response = await api.post("/dishes", {
				name,
				category,
				description,
				ingredients,
				price,
				image,
			});

			if (image && response.data.id) {
				const dish_id = response.data.id;
				const fileUploadForm = new FormData();
				fileUploadForm.append("image", image);

				await api.patch(`/dishes/dish_image/${dish_id}`, fileUploadForm);
			}

			alert("Prato cadastrado com sucesso!");
			navigate("/");
		} catch (error) {
			if (error.response) {
				alert(error.response.data.message);
			} else {
				alert("não foi possível cadastrar o prato");
			}
		}
	}

	function handleAddIngredient() {
		setIngredients((prevState) => [...prevState, newIngredient]);
		setNewIngredient("");
	}

	function handleRemoveIngredient(deleted) {
		setIngredients((prevState) =>
			prevState.filter((ingredient) => ingredient !== deleted)
		);
	}

	function handleChangeImage(event) {
		const file = event.target.files[0];
		setImage(file);
	}

	return (
		<StyledNewDish>
			<Header />

			<StyledMain>
				<section>
					<ToGoBack />
					<h1 className="poppins-400-medium">Adicionar prato</h1>
					{/* <Form /> */}
					<StyledForm>
						<Container3>
							<InputFile onChange={handleChangeImage} value />
							<div className="inputName">
								<Input
									identifier={name}
									label="Nome"
									type="text"
									placeholder="nome do prato"
									margin
									onChange={(e) => setName(e.target.value)}
								/>
							</div>
							<div className="inputSelect">
								<StyleSelect>
									<label className="roboto-160" htmlFor="event-category">
										Categoria
									</label>
									<div className="input-wrapper">
										<select
											name="category"
											id="event-category"
											className="roboto-140-regular"
											value={category}
											onChange={(e) => setCategory(e.target.value)}
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
								</StyleSelect>
							</div>
						</Container3>
						<Container2>
							<div className="container-ingredients">
								<p className="roboto-160 ">Ingredientes</p>
								<div className="noteItems">
									{ingredients.map((ingredient, index) => (
										<NoteItem
											value={ingredient}
											key={index}
											onClick={() => handleRemoveIngredient(ingredient)}
										/>
									))}
									<NoteItem
										isNew
										placeholder="Adicionar"
										value={newIngredient}
										onChange={(e) => setNewIngredient(e.target.value)}
										onClick={handleAddIngredient}
									/>
								</div>
							</div>
							<div className="inputPrice">
								<Input
									identifier={price}
									label="Preço"
									type="number"
									placeholder="R$ 0,00"
									margin
									onChange={(e) => setPrice(e.target.value)}
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
								onChange={(e) => setDescription(e.target.value)}
							></textarea>
						</ContainerTextArea>

						<ContainerButtons>
							<div className="buttons">
								<Button
									title="Salvar alterações"
									save
									onClick={handleRegisterDish}
								/>
							</div>
						</ContainerButtons>
					</StyledForm>
				</section>
			</StyledMain>

			<Footer />
		</StyledNewDish>
	);
}
