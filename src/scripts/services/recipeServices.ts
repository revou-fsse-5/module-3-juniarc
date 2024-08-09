import api from '../network/api';
import { Meal, recipeContent } from '../types/mealsTypes';

const recipeServices = (() => {
	const getRandomRecipe = async (): Promise<Meal[]> => {
		try {
			const dataFromAPI: Meal[] = await api.getRandomRecipe();
			return dataFromAPI;
		} catch (error : unknown) {
			if (error instanceof Error) {
				alert(error.message);
			} else {
				alert('An unknown error occurred');
			}
			return [];
	
		}
	};

	const getRecipeContent = (data: Meal[]) : recipeContent => {
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