import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const StyledDish = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: relative;
	overflow: auto;
`;

export const StyledMain = styled.main`
	width: 100%;
	margin-top: clamp(114px, 3vw, 40px);

	section {
		width: clamp(31.6rem, 82vw, 112rem);
		margin: 0 auto;
		margin-top: clamp(3.657rem, 8vw, 9.6rem);
		display: flex;
		flex-direction: column;
		gap: clamp(1.6rem, 4vw, 4.2rem);
	}
`;

export const StyledContent = styled.div`
	display: flex;
	flex-direction: row;
	gap: clamp(16px, 2vw, 47px);
	align-items: center;

	img {
		width: clamp(264px, 29vw, 390px);
		height: clamp(264px, 29vw, 390px);
	}

	.container {
		display: flex;
		flex-direction: column;
		gap: 48px;

		.text {
			display: flex;
			flex-direction: column;
			gap: 24px;

			h1 {
				color: ${({ theme }) => theme.COLORS.Light300};
			}

			p {
				color: ${({ theme }) => theme.COLORS.Light300};
			}

			.ingredients {
				display: flex;
				gap: 12px;
			}
		}

		.container-button {
			align-self: flex-start;
			display: flex;
			gap: 33px;
		}
	}

	@media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
		flex-direction: column;
		margin-bottom: 54px;

		.container {
			.text {
				text-align: center;

				.ingredients {
					justify-content: center;
					padding: 0px 28px;
					flex-wrap: wrap;
					gap: 24px 24px;
					width: 316px;
				}
			}

			.container-button {
				align-self: center;
				width: 100%;
				align-items: center;

				a {
					width: 100%;
				}
			}
		}
	}
`;
