import { styled } from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
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
