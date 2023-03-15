import axios from 'axios';

export const categoriesApi = axios.create({
	baseURL: 'http://localhost:3000',
});
