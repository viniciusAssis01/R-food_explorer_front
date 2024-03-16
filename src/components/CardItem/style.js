import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const StyledContainer = styled.div`
	width: clamp(210px, 23vw, 304px);
	display: flex;
	flex-direction: column;
	gap: clamp(12px, 2vw, 15px);
	padding: 24px;
	align-items: center;
	overflow: hidden;
	background-color: ${({ theme }) => theme.COLORS.Dark200};
	border-radius: 0.8rem;
	border: 1px solid ${({ theme }) => theme.COLORS.Dark300};
	cursor: pointer;

	img {
		width: clamp(8.8rem, 13vw, 17.6rem);
		height: clamp(8.8rem, 13vw, 17.6rem);
		justify-content: center;
		align-items: center;
		flex-shrink: 0;
		object-fit: cover;
	}

	h2 {
		color: ${({ theme }) => theme.COLORS.Light300};
	}
	h2 + p {
		color: ${({ theme }) => theme.COLORS.Light400};
	}
	p {
		color: ${({ theme }) => theme.COLORS.TintsCake200};
	}

	.interactCard {
		display: flex;
		gap: 16px;
		align-items: center;

		button {
			padding: 12px 24px;
			justify-content: center;
			align-items: center;
			border-radius: 5px;
			background-color: ${({ theme }) => theme.COLORS.TintsTomato100};
			color: ${({ theme }) => theme.COLORS.Light100};
			border: none;
		}
	}

	@media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
		h2 + p {
			display: none;
		}

		.interactCard {
			flex-direction: column;
			width: 162px;
			justify-content: center;

			.container-counter {
				display: flex;
				align-items: center;
				justify-content: center;
			}

			button {
				font-size: 1.4rem;
			}
		}
	}
`;
