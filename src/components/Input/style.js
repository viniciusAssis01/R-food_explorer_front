import { styled } from "styled-components";

export const Container = styled.div`
	width: 100%;
	background: transparent;
	display: flex;
	flex-direction: column;

	margin-bottom: ${({ $margin }) => ($margin ? "0rem" : "3.2rem")};

	> label {
		color: ${({ theme }) => theme.COLORS.Light400};
		font-family: var(--roboto-font-family);
		font-size: 1.6rem;
		font-weight: 400;
	}

	.input-wrapper {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		background: ${({ theme, $margin }) =>
			$margin ? theme.COLORS.Dark800 : theme.COLORS.Dark900};
		margin-top: ${({ $margin }) => ($margin ? `1.6rem` : `0.8rem`)};
		border-radius: 8px;
		border: 0.1rem solid transparent;

		&:hover {
			border: 0.1rem solid
				${({ theme, $margin }) =>
					$margin ? theme.COLORS.TintsCake100 : theme.COLORS.Light400};
		}

		svg {
			font-size: 1.9rem;
			margin: 0 16px;
		}

		input {
			width: 100%;
			height: 4.8rem;
			padding: 1.2rem 1.4rem;
			background: transparent;
			border: 0.1rem solid ${({ theme }) => theme.COLORS.Dark900};
			border-radius: 0.8rem;
			caret-color: currentColor;
			outline: none;
			font-size: 1.6rem;
			font-family: var(--roboto-font-family);
			font-weight: 400;
			color: ${({ theme }) => theme.COLORS.Light100};

			&::placeholder {
				color: ${({ theme }) => theme.COLORS.Light500};
			}

			&:focus {
				border: 1px solid transparent;
			}

			&:hover {
				border: 1px solid transparent;
			}
		}
	}
`;
