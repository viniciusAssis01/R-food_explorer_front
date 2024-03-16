import { FiPlus, FiX } from "react-icons/fi";

import { Container } from "./style";

export function NoteItem({ isNew = false, value, onClick, ...rest }) {
	return (
		<Container $isnew={isNew}>
			<input
				type="text"
				value={value}
				readOnly={!isNew}
				{...rest}
				className="roboto-160"
			/>

			<button
				type="button"
				onClick={onClick}
				className={isNew ? "button-add " : "button-delete"}
			>
				{isNew ? <FiPlus /> : <FiX />}
			</button>
		</Container>
	);
}
