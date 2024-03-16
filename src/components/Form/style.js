import styled from "styled-components";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const StyledForm = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: clamp(2.4rem, 3vw, 3.2rem);
	margin-top: clamp(2.4rem, 3vw, 3.2rem);
	margin-bottom: clamp(5.3rem, 9vw, 11.6rem);
`;

export const Container3 = styled.div`
	width: 100%;
	display: flex;
	gap: 32px;

	.inputName {
		flex: 2 0 0;
	}
	.inputSelect {
		flex: 1 0 0;
	}

	@media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
		flex-direction: column;
	}
`;

export const Container2 = styled.div`
	width: 100%;
	display: flex;
	gap: clamp(24px, 3vw, 32px);

	.container-ingredients {
		display: flex;
		flex-direction: column;
		gap: 16px;
		flex: 4 0 0;

		p {
			color: ${({ theme }) => theme.COLORS.Light400};
		}

		.noteItems {
			display: flex;
			background-color: ${({ theme }) => theme.COLORS.Dark800};
			gap: 16px;
			border-radius: 8px;
			flex: 1 0 0;
			padding: 4px 8px;
			flex-wrap: wrap;
			border: 1px solid ${({ theme }) => theme.COLORS.Dark900};

			&:focus {
				outline: none;
			}

			&:hover {
				border: 0.1rem solid ${({ theme }) => theme.COLORS.TintsCake100};
			}
		}
	}

	.inputPrice {
		flex: 1 0 0;
	}

	@media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
		flex-direction: column;

		.container-ingredients {
			display: flex;

			.noteItems {
				flex-direction: row;
			}
		}
	}
`;

export const ContainerTextArea = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 16px;

	label {
		color: ${({ theme }) => theme.COLORS.Light400};
	}

	textarea {
		resize: none;
		background-color: ${({ theme }) => theme.COLORS.Dark800};
		border: 1px solid ${({ theme }) => theme.COLORS.Dark800};
		height: 172px;
		border-radius: 8px;
		padding: 14px;
		word-wrap: break-word;
		overflow-wrap: break-word;
		hyphens: auto;

		color: ${({ theme }) => theme.COLORS.Light100};
		::placeholder {
			color: ${({ theme }) => theme.COLORS.Light500};
			hyphens: auto;
		}
		border: 1px solid ${({ theme }) => theme.COLORS.Dark900};

		&:focus {
			outline: none;
		}
		&:hover {
			border: 0.1rem solid ${({ theme }) => theme.COLORS.TintsCake100};
		}
	}
`;

export const ContainerButtons = styled.div`
	width: 100%;
	display: flex;
	justify-content: end;
	align-self: flex-end;

	.buttons {
		display: flex;
		gap: 32px;
	}

	@media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
		justify-content: center;
		.buttons {
			width: 100%;
			button {
				font-size: 1.4rem;
			}
		}
	}
`;
