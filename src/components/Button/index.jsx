import { Container } from "./style";

export function Button({
	icon: Icon,
	title,
	loading = false,
	save = false,
	to,
	...rest
}) {
	return (
		<Container
			to={to}
			type="button"
			disabled={loading}
			{...rest}
			$save={save}
			className="poppins-100-medium"
		>
			{Icon && <Icon />}
			{loading ? "carregando..." : title}
		</Container>
	);
}
