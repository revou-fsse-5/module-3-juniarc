const combineIngridientAndMeasure = (data = []) => {
	const combinedIngAndMeasure = [];
	const MAX_INGRIDIENTS = 20;

	data.forEach((object) => {
		for (let i = 1; i <= MAX_INGRIDIENTS; i++) {
			const ingridientKey = `strIngredient${i}`;
			const measureKey = `strMeasure${i}`;

			// Search property of object that contains key value
			const ingridientValue = object[ingridientKey] || '';
			const measureValue = object[measureKey] || '';

			if (ingridientValue && measureValue) {
				combinedIngAndMeasure.push(`${ingridientValue} : ${measureValue}`);
			}
		}
	});

	return combinedIngAndMeasure;
};

const splitInstructionsToList = (data = []) => {
	const [{ strInstructions }] = data;

	// split instructions by dots and white space
	const steps = strInstructions.split(/(?<=\.)\s+/);

	return steps;
};

export { combineIngridientAndMeasure, splitInstructionsToList };
