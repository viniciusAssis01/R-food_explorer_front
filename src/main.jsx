import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.js";
import GlobalStyle from "./styles/global.js";
import Typography from "./styles/typography.js";

import { Routes } from "./routes/index.jsx";
import { AuthProvider } from "./hooks/auth.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Typography />
			<AuthProvider>
				<Routes />
			</AuthProvider>
		</ThemeProvider>
	</React.StrictMode>
);
