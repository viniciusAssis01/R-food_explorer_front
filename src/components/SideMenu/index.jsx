import { Footer } from "../Footer";
import toClose from "../../assets/icons/toClose.svg";
import Input from "../Input";
import { FiSearch } from "react-icons/fi";
import { StyledHeader, StyledContainer, StyledNav, StyledMain } from "./style";
import { useAuth } from "../../hooks/auth";

export function SideMenu({ menuIsOpen, setMenuIsOpen }) {
	const { signOut, user } = useAuth();

	function handleSignOut() {
		signOut();
	}

	return (
		<StyledContainer data-menu-is-open={menuIsOpen}>
			<StyledHeader>
				<button onClick={() => setMenuIsOpen(!menuIsOpen)}>
					<img src={toClose} alt="fechar menu lateral" />
				</button>
				<h1 className="roboto-210">Menu</h1>
			</StyledHeader>

			<StyledMain>
				<Input
					type="text"
					placeholder="Busque por pratos ou ingredientes"
					icon={FiSearch}
				/>

				<StyledNav>
					{user.role === "admin" && (
						<div>
							<a href="/new" className="poppins-240">
								Novo prato
							</a>
						</div>
					)}
					<div>
						<a className="poppins-240" onClick={handleSignOut} href="/">
							sair
						</a>
					</div>
				</StyledNav>
			</StyledMain>

			<Footer />
		</StyledContainer>
	);
}
