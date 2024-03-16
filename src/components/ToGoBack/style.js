import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
	width: fit-content;
	display: flex;
	align-items: center;
	user-select: none;
	cursor: pointer;

	color: ${({ theme }) => theme.COLORS.Light300};

	> svg {
		font-size: clamp(2.4rem, 4vw, 3.2rem);
		padding-top: 0.1rem;
	}

	transition: filter 0.4s ease-in-out;

	&:hover {
		filter: brightness(70%);
	}
`;
