import { Container } from "./style";

export default function Input({
	icon: Icon,
	identifier,
	label,
	margin = false,
	...rest
}) {
	return (
		<Container $margin={margin}>
			{label && <label htmlFor={identifier}>{label}</label>}
			<div className="input-wrapper">
				{Icon && <Icon />}
				<input {...rest} />
			</div>
		</Container>
	);
}
