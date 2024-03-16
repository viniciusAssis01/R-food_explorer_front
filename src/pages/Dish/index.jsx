import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ToGoBack } from "../../components/ToGoBack";
import { Button } from "../../components/Button";
import { Tag } from "../../components/Tag";
import { Counter } from "../../components/Counter";

import { StyledDish, StyledMain, StyledContent } from "./style";

import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/auth";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";

export function Dish() {
	const { user } = useAuth();

	const [data, setData] = useState({});

	const params = useParams();

	const imageDishURL = data.image
		? `${api.defaults.baseURL}/files/${data.image}`
		: null;

	useEffect(() => {
		async function fetchDish() {
			const response = await api.get(`/dishes/${params.id}`);
			setData(response.data);
		}
		fetchDish();
	}, [params.id, data]);

	return (
		<StyledDish>
			<Header />
			<StyledMain>
				<section>
					<ToGoBack />
					{data !== undefined && (
						<StyledContent>
							<img src={imageDishURL} alt="imagem do prato" />
							<div className="container">
								<div className="text">
									<h1 className="poppins-400-medium">{data.name}</h1>
									<p className="poppins-240-regular">{data.description}</p>
									<div className="ingredients">
										{data.ingredients &&
											data.ingredients.map((ingredient) => (
												<Tag title={ingredient.name} key={ingredient.id} />
											))}
									</div>
								</div>
								<div className="container-button">
									{user.role === "customer" ? (
										<>
											<Counter />
											<Button title={`incluir ∙ R$${data.price}`} />
										</>
									) : (
										<Button
											title="editar prato"
											to={`/editDish/${params.id}`}
										/>
									)}
								</div>
							</div>
						</StyledContent>
					)}
				</section>
			</StyledMain>

			<Footer />
		</StyledDish>
	);
}
