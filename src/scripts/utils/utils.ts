import { Meal } from '../types/mealsTypes';

const combineIngridientAndMeasure = (meals: Meal[] = []) : string[] => {
	const combinedIngAndMeasure: string[] = [];
	const MAX_INGRIDIENTS: number = 20;

	meals.forEach((meal) => {
		for (let i = 1; i <= MAX_INGRIDIENTS; i++) {
			const ingridientKey: keyof Meal = `strIngredient${i}` as keyof Meal;
			const measureKey: keyof Meal = `strMeasure${i}` as keyof Meal;

			// Search property of meal that contains key value
			const ingridientValue: string = meal[ingridientKey] || '';
			const measureValue: string = meal[measureKey] || '';

			if (ingridientValue && measureValue) {
				combinedIngAndMeasure.push(`${ingridientValue} : ${measureValue}`);
			}
		}
	});

	return combinedIngAndMeasure;
};

const splitInstructionsToList = (meals: Meal[] = []) : string[] => {
	const [{ strInstructions }] = meals;

	// split instructions by dots and white space
	const steps: string[] = strInstructions.split(/(?<=\.)\s+/);

	console.log(steps);

	return steps;
};

export { combineIngridientAndMeasure, splitInstructionsToList };