/**
 *  getRandomRecipe test scenario
 *
 *  getRandomRecipe function
 *  - should return mealArray when data fetching sucsess
 *  - should return [] when data fetching failed
 */

import api from "../network/api";
import recipeServices from './recipeServices';
import { Meal, recipeContent } from "../types/mealsTypes";

const fakeMealArray: Meal[] = [
    {
        idMeal: '52785',
        strMeal: 'Dal fry',
        strDrinkAlternate: null,
        strCategory: 'Vegetarian',
        strArea: 'Indian',
        strInstructions: 'Fake instructions',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg',
        strTags: 'Curry,Vegetarian,Cake',
        strYoutube: 'https://www.youtube.com/watch?v=J4D855Q9-jg',
        strIngredient1: 'Toor dal',
        strIngredient2: 'Water',
        strIngredient3: 'Salt',
        strIngredient4: 'Turmeric',
        strIngredient5: 'Ghee',
        strIngredient6: 'Chopped tomatoes',
        strIngredient7: 'Cumin seeds',
        strIngredient8: 'Mustard Seeds',
        strIngredient9: 'Bay Leaf',
        strIngredient10: 'Green Chili',
        strIngredient11: 'Ginger',
        strIngredient12: 'Cilantro',
        strIngredient13: 'Red Pepper',
        strIngredient14: 'Salt',
        strIngredient15: 'Sugar',
        strIngredient16: 'Garam Masala',
        strIngredient17: '',
        strIngredient18: '',
        strIngredient19: '',
        strIngredient20: '',
        strMeasure1: '1 cup',
        strMeasure2: '2-1/2 cups',
        strMeasure3: '1 tsp',
        strMeasure4: '1/4 tsp',
        strMeasure5: '3 tbs',
        strMeasure6: '1 cup',
        strMeasure7: '1/2 tsp',
        strMeasure8: '1/2 tsp',
        strMeasure9: '2',
        strMeasure10: '1 tbs chopped',
        strMeasure11: '2 tsp shredded',
        strMeasure12: '2 tbs ',
        strMeasure13: '1/2 tsp',
        strMeasure14: '1/2 tsp',
        strMeasure15: '1 tsp',
        strMeasure16: '1/4 tsp',
        strMeasure17: '',
        strMeasure18: '',
        strMeasure19: '',
        strMeasure20: '',
        strSource: 'https://www.instagram.com/p/BO21bpYD3Fu',
        strImageSource: null,
        strCreativeCommonsConfirmed: null,
        dateModified: null,
    },
];

// mock
window.alert = jest.fn();

api.getRandomRecipe = jest.fn();

describe('getRandmoRecipe function', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	it('should return mealArray when data fetching success', async () => {
		// arrange
        (api.getRandomRecipe as jest.Mock).mockResolvedValue(fakeMealArray);
      
        // action
        const meals: Meal[] = await recipeServices.getRandomRecipe();

        // assert
        expect(meals).toEqual(fakeMealArray);
	});

    it('should return [] when data fetching failed', async () => {
        // arrange
        const fakeErrorResponse: string = 'Ups, something went wrong';
        (api.getRandomRecipe as jest.Mock).mockRejectedValue(new Error(fakeErrorResponse));

        // action
        const meals: Meal[] = await recipeServices.getRandomRecipe();

        // assert
        expect(meals).toEqual([]);
        expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse);
    });
});

/**
 *  getRecipeContent test scenario
 *
 *  getRecipeContent function
 *  - should return ovject when receive data
 */

describe('getRecipeContent function', () => {
    it('should return ovject when receive data' ,() => {
        // arrange
        const fakeStrCategory = 'Vegetarian';
        const fakeStrMeal = 'Dal fry';
        const fakeStrArea = 'Indian';
        const fakeStrMealThumb = 'https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg';

        // action
        const recipeContent: recipeContent = recipeServices.getRecipeContent(fakeMealArray);

        // assert
        expect(recipeContent).toEqual({
            category: fakeStrCategory,
			name: fakeStrMeal,
			place: fakeStrArea,
			imageUrl: fakeStrMealThumb,
        });
    });
});
