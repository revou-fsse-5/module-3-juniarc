import api from '../network/api';

const recipeServices = (() => {
	const getRandomRecipe = async () => {
		try {
			const dataFromAPI = await api.getRandomRecipe();
			return dataFromAPI;
		} catch (error) {
			alert(error.message);
		}
	};

	const getRecipeContent = (data) => {
		const [{ strCategory, strMeal, strArea, strMealThumb }] = data;

		return {
			category: strCategory,
			name: strMeal,
			place: strArea,
			imageUrl: strMealThumb,
		};
	};

	return {
		getRandomRecipe,
		getRecipeContent,
	};
})();

export default recipeServices;
