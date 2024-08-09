/**
 * combineIngridientAndMeasure test scenario
 * combineIngridientAndMeasure function :
 * - should return combinedIngAndMeasure ass arrayOfString when receive meals data
 */

import { Meal } from "../types/mealsTypes";
import { combineIngridientAndMeasure } from "./utils";

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
        strIngredient3: '',
        strIngredient4: '',
        strIngredient5: '',
        strIngredient6: '',
        strIngredient7: '',
        strIngredient8: '',
        strIngredient9: '',
        strIngredient10: '',
        strIngredient11: '',
        strIngredient12: '',
        strIngredient13: '',
        strIngredient14: '',
        strIngredient15: '',
        strIngredient16: '',
        strIngredient17: '',
        strIngredient18: '',
        strIngredient19: '',
        strIngredient20: '',
        strMeasure1: '1 cup',
        strMeasure2: '2-1/2 cups',
        strMeasure3: '',
        strMeasure4: '',
        strMeasure5: '',
        strMeasure6: '',
        strMeasure7: '',
        strMeasure8: '',
        strMeasure9: '',
        strMeasure10: '',
        strMeasure11: '',
        strMeasure12: '',
        strMeasure13: '',
        strMeasure14: '',
        strMeasure15: '',
        strMeasure16: '',
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

describe('combineIngridientAndMeasure function', () => {
    it('should return combinedIngAndMeasure ass arrayOfString when receive meals data', () => {
        // arrange
        const fakeCombinedIngAndMeasure: string[] = [
            'Toor dal : 1 cup',
            'Water : 2-1/2 cups'
        ]

        // action
        const combinedIngAndMeasure: string[] = combineIngridientAndMeasure(fakeMealArray);

        // assert
        expect(combinedIngAndMeasure).toEqual(fakeCombinedIngAndMeasure);
    });
})