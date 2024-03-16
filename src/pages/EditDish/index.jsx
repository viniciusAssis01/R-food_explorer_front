import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ToGoBack } from "../../components/ToGoBack";
import {
	StyledMain,
	StyledEditDish,
	StyledForm,
	Container3,
	Container2,
	ContainerTextArea,
	ContainerButtons,
} from "./style";
import { useNavigate, useParams } from "react-router-dom";

import Input from "../../components/Input";
import InputFile from "../../components/InputFile";
import Select from "../../components/Select";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";

import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function EditDish() {
	const navigate = useNavigate();
	const params = useParams();

	const [data, setData] = useState(null);

	const [name, setName] = useState("");
	const [category, setCategory] = useState("");
	const [ingredients, setIngredients] = useState([]);

	const [newIngredient, setNewIngredient] = useState("");

	const [price, setPrice] = useState();
	const [description, setDescription] = useState("");

	const [image, setImage] = useState(null);
	const [imageFile, setImageFile] = useState(null);

	async function handleDeleteDish() {
		try {
			await api.delete(`/dishes/${params.id}`);
			alert("Prato deletado!");
			navigate("/");
		} catch (error) {
			if (error.response) {
				alert(error.response.data.message);
			} else {
				alert("não foi possível Deletar o prato.");
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
		setImageFile(file);

		const imagePreview = URL.createObjectURL(file);
		setImage(imagePreview);
	}

	async function updateDish() {
		try {
			const updateDish = {
				name,
				category,
				price,
				description,
				ingredients,
			};

			if (imageFile && params.id) {
				const dish_id = params.id;

				const fileUploadForm = new FormData();
				fileUploadForm.append("image", imageFile);

				await api.patch(`/dishes/dish_image/${dish_id}`, fileUploadForm);
			}

			await api.put(`/dishes/${params.id}`, updateDish);

			alert("Prato atualizado com sucesso");
			navigate("/");
		} catch (error) {
			if (error.response) {
				alert(error.response.data.message);
			} else {
				alert("não foi possivel atualizar o prato.");
			}
		}
	}

	useEffect(() => {
		async function fetchDish() {
			const response = await api.get(`/dishes/${params.id}`);
			setData(response.data);
		}
		fetchDish();
	}, [params.id]);

	useEffect(() => {
		if (data) {
			setName(data.name);
			setCategory(data.category);
			setPrice(data.price);
			setImage(data.image);
			setDescription(data.description);

			const allIngredients = data.ingredients.map(
				(ingredient) => ingredient.name
			);
			setIngredients(allIngredients);
		}
	}, [data]);

	return (
		<StyledEditDish>
			<Header />

			<StyledMain>
				<section>
					<ToGoBack />
					<h1 className="poppins-320-medium">Editar prato</h1>
					{/* <Form /> */}
					<StyledForm>
						<Container3>
							<InputFile onChange={handleChangeImage} />
							<div className="inputName">
								<Input
									identifier="name"
									label="Nome"
									type="text"
									placeholder="nome do prato"
									margin
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
							</div>
							<div className="inputSelect">
								<Select
									selected={category}
									onChange={(e) => setCategory(e.target.value)}
								/>
							</div>
						</Container3>
						<Container2>
							<div className="container-ingredients">
								<p className="roboto-160 ">Ingredientes</p>
								<div className="noteItems">
									{ingredients.map((ingredient, index) => (
										<NoteItem
											value={ingredient.name || ingredient}
											key={index}
											onClick={() => {
												handleRemoveIngredient(ingredient);
											}}
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
									identifier="price"
									label="Preço"
									type="number"
									placeholder="R$ 0,00"
									step="0.00"
									margin
									value={price}
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
								value={description}
								onChange={(e) => setDescription(e.target.value)}
							></textarea>
						</ContainerTextArea>

						<ContainerButtons>
							<Button title="Excluir prato" save onClick={handleDeleteDish} />
							<Button
								title="Salvar alterações"
								save
								onClick={() => updateDish(data)}
							/>
						</ContainerButtons>
					</StyledForm>
				</section>
			</StyledMain>

			<Footer />
		</StyledEditDish>
	);
}
