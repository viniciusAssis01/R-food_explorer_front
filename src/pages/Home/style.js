import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const StyledHome = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	overflow-x: hidden;
`;

export const Content = styled.div`
	margin-top: 11.4rem;
	width: 100%;
	flex-grow: 1;
`;

export const StyledMain = styled.main`
	max-width: 112rem;
	height: 100%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
`;

export const StyledPresentation = styled.figure`
	position: relative;
	width: 100%;
	height: clamp(95px, 23vw, 260px);
	margin-top: clamp(4.4rem, 10vw, 16.4rem);
	padding-right: clamp(2.1rem, 7vw, 7rem);
	border-radius: 0.8rem;
	background: ${({ theme }) => theme.COLORS.Gradients200};

	display: flex;
	justify-content: flex-end;
	align-items: center;

	> div {
		width: fit-content;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: end;
		justify-content: center;

		> img {
			position: absolute;
			bottom: 0;
			left: min(10%, -2.1rem);
			z-index: 1;
			width: clamp(19.1rem, 46vw, 63.2rem);
		}

		h2 {
			z-index: 1;
			white-space: nowrap;
			color: ${({ theme }) => theme.COLORS.Light300};
			font-family: var(--poppins-font-family);
			font-size: clamp(1.2rem, 3.5vw, 4rem);
			font-weight: 500;
			line-height: 140%;
		}

		p {
			z-index: 1;
			width: clamp(55%, 37vw, 100%);
			color: ${({ theme }) => theme.COLORS.Light300};
			font-family: var(--roboto-font-family);
			font-size: clamp(0.88rem, 1.4vw, 1.6rem);
			font-weight: 400;
			line-height: 100%;
		}
	}

	@media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
		width: 90%;
		align-self: center;
	}
`;

export const StyledList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 48px;
	margin-top: 62px;
	margin-bottom: clamp(24px, 4vw, 46px);

	.container-list {
		display: flex;
		flex-direction: column;
		gap: 23px;

		a {
			background-color: red;
		}
	}

	@media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
		margin-left: 2rem;
	}
`;
