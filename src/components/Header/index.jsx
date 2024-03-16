import polygonHeader from "../../assets/icons/polygonHeader.svg";
import { FiSearch } from "react-icons/fi";
import OrderButton from "../OrderButton";
import SignOut from "../../assets/icons/signOut.svg";
import {
	StyledHeader,
	StyledBrand,
	StyledSignOut,
	StyledSearch,
} from "./style";

import menu from "../../assets/icons/menu.svg";
import { SideMenu } from "../SideMenu";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import receipt from "../../assets/icons/receipt.svg";

export function Header({ setSearch = false }) {
	const [menuIsOpen, setMenuIsOpen] = useState(false);

	const { signOut, user } = useAuth();

	function handleSignOut() {
		signOut();
	}

	return (
		<StyledHeader>
			{menuIsOpen ? (
				<SideMenu menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
			) : (
				<>
					<button
						className="button_menu"
						onClick={() => setMenuIsOpen(!menuIsOpen)}
					>
						<img src={menu} alt="" />
					</button>
					<div className="container-brand_search">
						<StyledBrand>
							<img src={polygonHeader} alt="logo food explorer" />
							<div className="brandAdm ">
								<h1 className="roboto-240-bold">food explorer</h1>
								{user.role === "admin" && (
									<span className="roboto-120-regular">admin</span>
								)}
							</div>
						</StyledBrand>

						<StyledSearch>
							<label className="sr-only" htmlFor="">
								buscar
							</label>
							<FiSearch />
							<input
								type="text"
								placeholder="Busque por pratos ou ingredientes"
								onChange={(e) => setSearch(e.target.value)}
							/>
						</StyledSearch>
					</div>

					<div className="container-buttons">
						{user.role === "admin" ? (
							<OrderButton title="Novo Prato" to="/new" />
						) : (
							<OrderButton icon={receipt} to="#" title="Pedidos" />
						)}
						{user.role === "customer" && (
							<button>
								<img src={receipt} alt="comanda" />
							</button>
						)}
					</div>

					<StyledSignOut onClick={handleSignOut}>
						<img src={SignOut} alt="sair" />
					</StyledSignOut>
				</>
			)}
		</StyledHeader>
	);
}
