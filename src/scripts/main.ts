import createDialogTemplate from './templates/dialogTemplates.js';
import {
	combineIngridientAndMeasure,
	splitInstructionsToList,
} from './utils/utils.js';
import recipeServices from './services/recipeServices.js';
import { Meal, recipeContent } from './types/mealsTypes.js';

function showLoading(isShow : boolean) : void {
	const spinner = document.querySelector('.spinner') as HTMLDivElement;
	if (isShow) {
		spinner.classList.toggle('show');
	} else {
		spinner.classList.toggle('show');
	}
}

function renderRecipe(meals: Meal[]) : void {
	const recipeContainer = document.querySelector('#recipeContainer') as HTMLDivElement;

	const ingridientsAndMeasures: string[] = combineIngridientAndMeasure(meals);
	const instructions: string[] = splitInstructionsToList(meals);
	const { name, category, place, imageUrl } =
		recipeServices.getRecipeContent(meals) as recipeContent;

	createDialogTemplate({
		name: name,
		imageUrl: imageUrl,
		place: place,
		category: category,
		recipeContainer: recipeContainer,
	});

	const ingridientAndMeasureContainer =
		document.querySelector('.ingridients-list') as HTMLUListElement;
	const instructionsContainer = document.querySelector('.instructions-list') as HTMLUListElement;

	// create ingridients + measures list
	ingridientsAndMeasures.map((item) => {
		const listItem = document.createElement('li');
		listItem.textContent = item;
		ingridientAndMeasureContainer.appendChild(listItem);
	});

	// create instructions list
	instructions.map((instruction) => {
		const listInstruction = document.createElement('li');
		listInstruction.textContent = instruction;
		instructionsContainer.appendChild(listInstruction);
	});
}

const getRecipeBtn = document.querySelector('#getRecipeBtn') as HTMLButtonElement;

getRecipeBtn.onclick = async () => {
	showLoading(true);
	const recipe = await recipeServices.getRandomRecipe();
	showLoading(false);

	console.log(recipe)

	renderRecipe(recipe);
};
