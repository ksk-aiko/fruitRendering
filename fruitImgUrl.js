/**
 * Lookup table mapping fruit names to their respective image URLs.
 *
 * This table provides the URLs for fruit images which can be used
 * to render or fetch visuals for the given fruit keys.
 *
 * @constant {Object.<string, string>} FRUIT_URL_TABLE
 * @property {string} FRUIT_URL_TABLE.banana    - URL for the banana image.
 * @property {string} FRUIT_URL_TABLE.pineapple - URL for the pineapple image.
 * @property {string} FRUIT_URL_TABLE.pear      - URL for the pear image.
 */
const FRUIT_URL_TABLE = {
  banana: "https://www.kroger.com/product/images/xlarge/front/0000000004011",
  pineapple:
    "https://www.plantgrower.org/uploads/6/5/5/4/65545169/published/pineapple.jpg?1516498929",
  pear: "https://www.producemarketguide.com/sites/default/files/Commodities.tar/Commodities/pears_commodity-page.png",
};

/**
 * Default URL for a fruit image used as fallback when no specific fruit image is available.
 * Points to a Wikimedia Commons image showing various culinary fruits from front view.
 * @type {string}
 * @constant
 */
const DEFAULT_FRUIT_URL =
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Culinary_fruits_front_view.jpg";


/**
 * Gets the image URL for a specific fruit from the fruit URL table.
 * 
 * @param {string} fruit - The name of the fruit to get the image URL for
 * @returns {string} The image URL for the specified fruit, or the default fruit URL if not found
 */
function fruitImgUrl(fruit) {
  // Get the URL from the fruitTable or return the default URL if not found
  return FRUIT_URL_TABLE[fruit] || DEFAULT_FRUIT_URL;
}


/**
 * Creates a paragraph element containing information about a fruit.
 * @param {string} fruit - The name of the fruit to display
 * @returns {HTMLParagraphElement} A paragraph element with the fruit information
 */
function createFruitParagraph(fruit) {
  const fruitP = document.createElement("p");
  fruitP.innerHTML = `Our fruit is ${fruit}`;
  return fruitP;
}

/**
 * Creates an image element for a specific fruit.
 * @param {string} fruit - The name of the fruit to create an image for
 * @returns {HTMLImageElement} An image element displaying the fruit
 */
function createFruitImage(fruit) {
  const fruitImg = document.createElement("img");
  fruitImg.src = fruitImgUrl(fruit);
  fruitImg.classList.add("fruitImg");
  return fruitImg;
}

/**
 * Renders the fruit information and image into the specified element.
 * @param {string} fruit - The name of the fruit to render
 * @param {HTMLElement} ele - The element to render the fruit information into
 */
function renderFruit(fruit, ele) {
  const fruitP = createFruitParagraph(fruit);
  const fruitImg = createFruitImage(fruit);

  const fruitDiv = document.createElement("div");
  fruitDiv.classList.add("fruitDiv");
  fruitDiv.append(fruitP);
  fruitDiv.append(fruitImg);

  ele.append(fruitDiv);
}

// Execution program
const fruitContainer = document.getElementById("fruit-container");

if (!fruitContainer) {
  console.error("Could not find the fruit container element.");
} else {
  const fruitsToRender = ["banana", "pear", "pineapple", "coconut", "grape"];

  fruitsToRender.forEach((fruit) => {
    renderFruit(fruit, fruitContainer);
  });
}
