import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Container = styled(Link)`
	padding: 1.2rem 3.2rem;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.8rem;
	width: clamp(10.6rem, 16vw, 21.6rem);

	background-color: ${({ theme }) => theme.COLORS.TintsTomato100};
	color: ${({ theme }) => theme.COLORS.Light100};
	border: none;
	border-radius: 5px;
`;
