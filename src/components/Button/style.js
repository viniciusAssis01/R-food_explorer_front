import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
	height: 4.8rem;
	display: flex;
	gap: 8px;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	border-radius: 0.5rem;
	padding: 1.2rem 2.4rem;
	border: none;
	background-color: ${({ theme, $save }) =>
		$save ? theme.COLORS.TintsTomato400 : theme.COLORS.TintsTomato100};

	color: ${({ theme }) => theme.COLORS.Light100};

	transition: filter 0.4s ease-in-out;

	&:hover {
		filter: brightness(90%);
	}

	&:disabled {
		opacity: 0.5;
		cursor: auto;
	}

	> svg {
		font-size: 1.9rem;
	}
`;
