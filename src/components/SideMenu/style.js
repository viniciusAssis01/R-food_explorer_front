import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const StyledContainer = styled.aside`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	background-color: ${({ theme }) => theme.COLORS.Dark400};
	position: absolute;
	top: 0px;

	@media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
		display: none;
		position: absolute;
		z-index: 4;

		transform: translateX(-100%);
		transition: transform 0.3s ease-in-out;

		&[data-menu-is-open="true"] {
			transform: translate(0);
			display: block;
		}
	}
`;

export const StyledHeader = styled.header`
	display: flex;
	gap: 16px;
	padding: 5.6rem 2.8rem 2.4rem 2.8rem;
	background-color: ${({ theme }) => theme.COLORS.Dark700};
	align-items: center;

	button {
		background-color: transparent;
		border: none;

		img {
			width: 18px;
			height: 18px;
			color: ${({ theme }) => theme.COLORS.Light100};
		}
	}

	h1 {
		color: ${({ theme }) => theme.COLORS.Light100};
	}
`;

export const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
	margin: 36px 28px;
	height: 100vh;
`;

export const StyledNav = styled.nav`
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	div {
		width: 100%;
		display: flex;
		padding: 1rem;
		align-items: flex-start;
		border-bottom: 2px solid ${({ theme }) => theme.COLORS.Dark1000};
	}
	a {
		color: ${({ theme }) => theme.COLORS.Light300};
	}
	button {
		border: none;
		background-color: transparent;
		color: ${({ theme }) => theme.COLORS.Light300};
	}
`;
