import createDialogTemplate from './templates/dialogTemplates.js';
import {
	combineIngridientAndMeasure,
	splitInstructionsToList,
} from './utils/utils.js';
import recipeServices from './services/recipeServices.js';

function showLoading(isShow) {
	const spinner = document.querySelector('.spinner');
	if (isShow) {
		spinner.classList.toggle('show');
	} else {
		spinner.classList.toggle('show');
	}
}

function renderRecipe(data) {
	const recipeContainer = document.querySelector('#recipeContainer');

	const ingridientsAndMeasures = combineIngridientAndMeasure(data);
	const instructions = splitInstructionsToList(data);
	const { name, category, place, imageUrl } =
		recipeServices.getRecipeContent(data);

	createDialogTemplate({
		name: name,
		imageUrl: imageUrl,
		place: place,
		category: category,
		ingridientsAndMeasures: ingridientsAndMeasures,
		instructions: instructions,
		recipeContainer: recipeContainer,
	});

	const ingridientAndMeasureContainer =
		document.querySelector('.ingridients-list');
	const instructionsContainer = document.querySelector('.instructions-list');

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

const getRecipeBtn = document.querySelector('#getRecipeBtn');

getRecipeBtn.onclick = async () => {
	showLoading(true);
	const recipe = await recipeServices.getRandomRecipe();
	showLoading(false);

	renderRecipe(recipe);
};
