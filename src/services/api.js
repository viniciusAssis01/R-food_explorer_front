import axios from "axios";

export const api = axios.create({
	baseURL: "https://r-food-explorer-api.onrender.com",
	withCredentials: true,
});
//http://localhost:3333
