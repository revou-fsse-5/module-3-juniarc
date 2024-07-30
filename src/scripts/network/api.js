const api = (() => {
	const BASE_URL = 'https://www.themealdb.com';

	async function getRandomRecipe() {
		const response = await fetch(`${BASE_URL}/api/json/v1/1/random.php`);

		const responseJson = await response.json();
		const mealArray = await responseJson.meals;

		return mealArray;
	}

	return {
		getRandomRecipe,
	};
})();

export default api;
