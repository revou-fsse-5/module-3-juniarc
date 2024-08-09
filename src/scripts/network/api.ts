import { Meal } from "../types/mealsTypes";

interface ApiResponse {
    meals: Meal[]
}

const api = (() => {
	const BASE_URL: string = 'https://www.themealdb.com';

	async function getRandomRecipe(): Promise<Meal[]> {
		try {
            const response = await fetch(`${BASE_URL}/api/json/v1/1/random.php`);

            if(!response.ok) {
                throw new Error(`HTTPS error ! ${response.status}`)
            }

		    const responseJson: ApiResponse = await response.json();
		    const mealArray: Meal[] = responseJson.meals;

		    return mealArray;
        } catch (error) {
            alert(error.message);
            return [];
        }
	}

	return {
		getRandomRecipe,
	};
})();

export default api;
