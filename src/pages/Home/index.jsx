/* import { CardItem } from "../../components/CardItem"; */
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { CardItem } from "../../components/CardItem";

import {
	StyledMain,
	StyledHome,
	StyledPresentation,
	Content,
	StyledList,
} from "./style";

import cookieFruit from "../../assets/dishes/cookies.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";

export function Home() {
	const [search, setSearch] = useState("");
	const [dishes, setDishes] = useState([]);
	const [snacks, setSnacks] = useState([]);
	const [drinks, setDrinks] = useState([]);
	const [desserts, setDesserts] = useState([]);
	const navigate = useNavigate();

	function handleDetailsDishes(id) {
		navigate(`/dishes/${id}`);
	}

	useEffect(() => {
		async function fetchDishes() {
			let response = await api.get(
				`/dishes?name=${search}&ingredients=${search}`
			);
			setDishes(response.data);
		}

		fetchDishes();
	}, [search]);

	useEffect(() => {
		const snacks = dishes.filter((dishe) => dishe.category === "refeição");
		setSnacks(snacks);
		const drinks = dishes.filter((dishe) => dishe.category === "bebida");
		setDrinks(drinks);
		const desserts = dishes.filter((dishe) => dishe.category === "sobremesa");
		setDesserts(desserts);
	}, [dishes]);

	return (
		<>
			<StyledHome>
				<Header setSearch={setSearch} />
				<Content>
					<StyledMain>
						<StyledPresentation>
							<div>
								<img src={cookieFruit} alt="Biscoito de Frutas" />
								<h2>Sabores inigualáveis</h2>
								<p>Sinta o cuidado do preparo com ingredientes selecionados</p>
							</div>
						</StyledPresentation>

						<StyledList>
							<div className="container-list">
								<h2 className="poppins-320-medium">Refeições</h2>
								<Splide
									options={{
										fixedWidth: "fit-content",
										gap: "2.7rem",
										rewind: false,
										pagination: false,
									}}
									aria-label="dish carousel"
								>
									{snacks.map((snack) => (
										<SplideSlide key={String(snack.id)}>
											<li
												key={snack.id}
												onClick={() => handleDetailsDishes(snack.id)}
											>
												<CardItem data={snack} />
											</li>
										</SplideSlide>
									))}
								</Splide>
							</div>

							<div className="container-list">
								<h2 className="poppins-320-medium">Sobremesas</h2>
								<Splide
									options={{
										fixedWidth: "fit-content",
										gap: "2.7rem",
										rewind: false,
										pagination: false,
									}}
									aria-label="dish carousel"
								>
									{desserts.map((dessert) => (
										<SplideSlide key={String(dessert.id)}>
											<li
												key={dessert.id}
												onClick={() => handleDetailsDishes(dessert.id)}
											>
												<CardItem data={dessert} />
											</li>
										</SplideSlide>
									))}
								</Splide>
							</div>

							<div className="container-list">
								<h2 className="poppins-320-medium">Bebidas</h2>
								<Splide
									options={{
										fixedWidth: "fit-content",
										gap: "2.7rem",
										rewind: false,
										pagination: false,
									}}
									aria-label="dish carousel"
								>
									{drinks.map((drink) => (
										<SplideSlide key={String(drink.id)}>
											<li
												key={drink.id}
												onClick={() => handleDetailsDishes(drink.id)}
											>
												<CardItem data={drink} />
											</li>
										</SplideSlide>
									))}
								</Splide>
							</div>
						</StyledList>
					</StyledMain>
				</Content>

				<Footer />
			</StyledHome>
		</>
	);
}
