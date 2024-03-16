import styled from "styled-components";

export const Container = styled.div`
	max-width: 18.3rem;
	height: 3.2rem;
	padding: 1rem 1.6rem;

	display: flex;
	align-items: center;
	justify-content: center;
	align-items: center;

	background-color: ${({ theme, $isnew }) =>
		$isnew ? "transparent" : theme.COLORS.Light600};
	color: ${({ theme }) => theme.COLORS.Light100};
	border: ${({ theme, $isnew }) =>
		$isnew ? `1px dashed ${theme.COLORS.Light500}` : "none"};
	border-radius: 0.8rem;
	padding-right: 16px;

	> input {
		background: none;
		border: none;
		outline: none;
		width: 100%;

		color: ${({ theme }) => theme.COLORS.Light100};
		background: transparent;

		border: none;

		&::placeholder {
			color: ${({ theme }) => theme.COLORS.Light500};
		}
		&:focus {
			outline: none;
		}
	}

	> button {
		border: none;
		background: none;
		color: ${({ theme, $isnew }) =>
			$isnew ? theme.COLORS.Light500 : theme.COLORS.Light100};
		outline: none;
	}

	.button-delete {
		color: ${({ theme }) => theme.COLORS.TintsTomato300};
	}

	.button-add {
		color: ${({ theme }) => theme.COLORS.TintsCake200};
	}
`;
