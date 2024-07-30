const createDialogTemplate = ({ name, imageUrl, place, category , recipeContainer}) => {
	const dialog = document.createElement('dialog');

	dialog.className = 'detail-recipe-dialog';
	dialog.innerHTML = `
        <div class="detail-recipe-container">
            <header class="detail-recipe-header">
              <h1 class="detail-recipe-title">Random Recipe</h1>
              <button class="detail-recipe-close-btn" id="detailRecipeCloseBtn">
                <svg
                  class="close-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                  />
                </svg>
              </button>
            </header>
            <div class="detail-recipe-body">
              <div class="detail-recipe-img-container skeleton">
                <img class="detail-recipe-img skeleton" src="${imageUrl}" alt="${name}" />
              </div>
              <div class="detail-recipe-text-container">
                <p class="detail-recipe-title-text">
                  Name : <span class="detail-recipe-name">${name}</span> (
                  <span class="detail-recipe-country">${place}</span> )
                </p>
                <p class="detail-recipe-title-text">
                  Category : <span class="detail-recipe-category">${category}</span>
                </p>
                <div class="ingridients-container">
                  <p class="ingridients-title">Ingridients :</p>
                  <ul class="ingridients-list"></ul>
                </div>
                <div class="instructions-container">
                  <p class="instructions-title">Instructions :</p>
                  <ol class="instructions-list"></ol>
                </div>
              </div>
            </div>
          </div>
    `;

	dialog.open = true;
	recipeContainer.appendChild(dialog);

	const closeBtn = document.querySelector('#detailRecipeCloseBtn');
	closeBtn.onclick = () => {
		dialog.remove();
	};
};

export default createDialogTemplate;