import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const StyledNewDish = styled.div`
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
	padding-top: 40px;

	section {
		max-width: 1120px;
		margin: 0 auto;
		margin-top: 96px;

		h1 {
			margin-top: clamp(22px, 2vw, 24px);
		}
	}

	@media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
		padding: 1rem 3.2rem;
		section {
			margin-top: 106px;
			h1 {
				font-size: 32px;
			}
		}
	}
`;

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

export const StyleSelect = styled.div`
	width: 100%;
	background: transparent;
	display: flex;
	flex-direction: column;

	> label {
		color: ${({ theme }) => theme.COLORS.Light400};
	}

	.input-wrapper {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		background: ${({ theme }) => theme.COLORS.Dark800};
		margin-top: 1.6rem;
		border-radius: 8px;
		border: 0.1rem solid transparent;

		&:hover {
			border: 0.1rem solid ${({ theme }) => theme.COLORS.TintsCake100};
		}

		select {
			width: 100%;
			display: flex;
			height: 4.8rem;
			padding: 1.4rem;
			align-items: center;
			gap: 14px;
			background: transparent;
			border: 0.1rem solid ${({ theme }) => theme.COLORS.Dark900};
			border-radius: 0.5rem;
			color: ${({ theme }) => theme.COLORS.Light100};

			appearance: none;
			-webkit-appearence: none;
			background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.4545 7.8295C4.89384 7.39017 5.60616 7.39017 6.0455 7.8295L12 13.784L17.9545 7.8295C18.3938 7.39017 19.1062 7.39017 19.5455 7.8295C19.9848 8.26884 19.9848 8.98116 19.5455 9.4205L12.7955 16.1705C12.3562 16.6098 11.6438 16.6098 11.2045 16.1705L4.4545 9.4205C4.01517 8.98116 4.01517 8.26884 4.4545 7.8295Z' fill='%23C4C4CC'/%3E%3C/svg%3E%0A");
			background-repeat: no-repeat;
			background-position: right 16px top 50%;

			option {
				background-color: ${({ theme }) => theme.COLORS.Dark900};
				color: ${({ theme }) => theme.COLORS.Light400};
			}
		}
	}

	@media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
		.input-wrapper {
			background: ${({ theme }) => theme.COLORS.Dark900};
		}
	}
`;
