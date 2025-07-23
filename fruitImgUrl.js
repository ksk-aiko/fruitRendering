/**
 * Get the image URL for a specific fruit.
 * @param {string} fruit - The name of the fruit.
 * @returns {string} - The image URL of the fruit.
 */
function fruitImgUrl(fruit) {
    const fruitTable = {
        "banana": "https://www.kroger.com/product/images/xlarge/front/0000000004011",
        "pineapple": "https://www.plantgrower.org/uploads/6/5/5/4/65545169/published/pineapple.jpg?1516498929",
        "pear": "https://www.producemarketguide.com/sites/default/files/Commodities.tar/Commodities/pears_commodity-page.png"
    }
    const defaultUrl = "https://upload.wikimedia.org/wikipedia/commons/2/2f/Culinary_fruits_front_view.jpg";

    // Get the URL from the fruitTable or return the default URL if not found
    return fruitTable[fruit] || defaultUrl;
}

// 入力されたfruitを要素に挿入する関数
function renderFruit(fruit, ele) {
    // 要素の作成
    let fruitP = document.createElement("p");
    fruitP.innerHTML = "Our fruit is : " + fruit;
    // img要素の作成
    let fruitImg = document.createElement("img");
    // imgタグへsrc属性の追加
    fruitImg.src = fruitImgUrl(fruit);
    // imgタグへclass属性の追加
    fruitImg.classList.add("fruitImg");
    // div要素に入れる
    let fruitDiv = document.createElement("div");
    fruitDiv.classList.add("fruitDiv");
    fruitDiv.append(fruitP);
    fruitDiv.append(fruitImg);
    // コンテナの中に入れる
    ele.append(fruitDiv);
}

// 実行プログラム
let fruitContainer = document.getElementById("fruit-container");
renderFruit("banana", fruitContainer);
renderFruit("pear", fruitContainer);
renderFruit("pineapple", fruitContainer);
renderFruit("coconut", fruitContainer);
renderFruit("grape", fruitContainer);