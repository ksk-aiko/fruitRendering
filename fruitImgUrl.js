const FRUIT_URL_TABLE = {
  banana: "https://www.kroger.com/product/images/xlarge/front/0000000004011",
  pineapple:
    "https://www.plantgrower.org/uploads/6/5/5/4/65545169/published/pineapple.jpg?1516498929",
  pear: "https://www.producemarketguide.com/sites/default/files/Commodities.tar/Commodities/pears_commodity-page.png",
};

const DEFAULT_FRUIT_URL =
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Culinary_fruits_front_view.jpg";

function fruitImgUrl(fruit) {
  // Get the URL from the fruitTable or return the default URL if not found
  return FRUIT_URL_TABLE[fruit] || DEFAULT_FRUIT_URL;
}

// function to insert the input fruit into the element
function renderFruit(fruit, ele) {
  const fruitP = document.createElement("p");
  fruitP.innerHTML = `Our fruit is ${fruit}`;

  const fruitImg = document.createElement("img");
  fruitImg.src = fruitImgUrl(fruit);

  fruitImg.classList.add("fruitImg");

  const fruitDiv = document.createElement("div");
  fruitDiv.classList.add("fruitDiv");
  fruitDiv.append(fruitP);
  fruitDiv.append(fruitImg);

  ele.append(fruitDiv);
}

// Execution program
const fruitContainer = document.getElementById("fruit-container");
const fruitsToRender = ["banana", "pear", "pineapple", "coconut", "grape"];

fruitsToRender.forEach((fruit) => {
  renderFruit(fruit, fruitContainer);
});
