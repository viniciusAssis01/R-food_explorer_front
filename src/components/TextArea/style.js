import styled from "styled-components";

export const Container = styled.textarea`
	width: 100%;
	height: 236px;

	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
	color: ${({ theme }) => theme.COLORS.WHITE};

	border: none;
	resize: none;
	border-radius: 10px;
	padding: 19px 16px;
	outline: none;

	&::placeholder {
		color: ${({ theme }) => theme.COLORS.GRAY_300};
	}
`;
