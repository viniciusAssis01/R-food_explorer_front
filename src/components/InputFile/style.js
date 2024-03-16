import { styled } from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
	background: transparent;
	display: flex;
	flex-direction: column;
	gap: 16px;

	> p {
		color: ${({ theme }) => theme.COLORS.Light400};
	}

	.input-wrapper {
		display: flex;
		padding: 12px 32px;
		justify-content: center;
		align-items: center;
		background: ${({ theme }) => theme.COLORS.Dark800};
		border-radius: 8px;
		border: 0.1rem solid transparent;

		&:hover {
			border: 0.1rem solid ${({ theme }) => theme.COLORS.TintsCake100};
		}

		label {
			color: ${({ theme }) => theme.COLORS.Light100};
			cursor: pointer;
			display: flex;
			gap: 8px;
			cursor: pointer;

			input {
				display: none;
			}
		}
	}

	@media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
		.input-wrapper {
			justify-content: start;
			p {
				font-size: 1.4rem;
			}
		}
	}
`;
