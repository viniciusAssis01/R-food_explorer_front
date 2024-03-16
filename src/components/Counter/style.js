import { styled } from "styled-components";

export const Container = styled.div`
	user-select: none;
	width: 10rem;
	height: 3.2rem;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 14px;

	color: ${({ theme }) => theme.COLORS.Light300};

	> svg {
		height: 100%;
		font-size: 2.5rem;
		color: ${({ theme }) => theme.COLORS.Light100};
		cursor: pointer;
		flex-shrink: 0;
	}
`;
