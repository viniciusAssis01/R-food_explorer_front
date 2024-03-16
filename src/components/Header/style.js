import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const StyledHeader = styled.header`
	width: 100%;
	display: flex;
	padding: 24px 123px;
	gap: clamp(16px, 3vw, 32px);
	align-items: center;
	justify-content: center;
	background: ${({ theme }) => theme.COLORS.Dark600};
	position: fixed;
	z-index: 2;

	.button_menu {
		border: none;
		background-color: transparent;
		display: none;
	}

	.container-brand_search {
		display: flex;
		align-items: center;
		gap: 32px;
	}

	.container-buttons {
		button {
			border: none;
			background-color: transparent;
			display: none;
		}
	}

	@media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
		padding: 5.6rem 2.8rem 2.4rem 2.8rem;

		.button_menu {
			display: block;
		}

		.container-brand_search {
			display: flex;
			justify-content: center;
			flex: 1 0 0;
		}
		.container-buttons {
			a {
				display: none;
			}
			button {
				display: block;
			}
		}
	}
`;

export const StyledBrand = styled.div`
	display: flex;
	gap: clamp(8px, 1px, 10px);

	img {
		width: clamp(2.4rem, 3vw, 3rem);
		height: clamp(2.4rem, 3vw, 3rem);
		flex-shrink: 0;
	}

	.brandAdm {
		display: flex;
		flex-direction: column;

		span {
			color: ${({ theme }) => theme.COLORS.TintsCake200};
			align-self: flex-end;
		}
	}

	@media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
		.brandAdm {
			flex-direction: row;
			gap: 8px;
		}
	}
`;

export const StyledSignOut = styled.button`
	background-color: transparent;
	border: none;
	@media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
		display: none;
	}
`;

export const StyledSearch = styled.div`
	position: relative;
	background-color: ${({ theme }) => theme.COLORS.Dark900};
	border-radius: 5px;
	display: flex;
	height: 48px;
	padding: 12px 14px;
	justify-content: center;
	align-items: center;
	gap: 14px;
	flex: 1 0 0;
	width: 581px;

	&:hover {
		border: 1px solid ${({ theme }) => theme.COLORS.light100};
	}

	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border-width: 0;
	}
	svg {
		font-size: 25px;
	}

	input {
		background-color: transparent;
		width: 344px;
		font-family: var(--roboto-font-family);
		font-size: 16px;
		font-weight: 400;
		border: 1px solid transparent;
		color: ${({ theme }) => theme.COLORS.Light500};

		&::placeholder {
			color: ${({ theme }) => theme.COLORS.Light500};
		}

		&:focus {
			outline: none;
		}

		&:hover {
			border: 1px solid transparent;
		}
	}

	@media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
		display: none;
	}
`;
