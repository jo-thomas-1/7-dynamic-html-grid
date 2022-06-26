console.clear();

let temp_clothing_container = document.createElement("div");
temp_clothing_container.classList.add("row", "justify-center", "card_container");

let temp_accessories_container = document.createElement("div");
temp_accessories_container.classList.add("row", "justify-center", "card_container");

for(let i = 0; i < productList.length; i++)
{
	let temp_card, temp_element;

	// create card element
	temp_card = document.createElement("div");
	temp_card.classList.add("card", "row");
	if(productList[i]["isAccessory"]) temp_card.id = "accessories_" + productList[i]["id"];
	else temp_card.id = "clothing_" + productList[i]["id"];

	// card link - a
	temp_element = document.createElement("a");
	temp_element.classList.add("column");
	temp_element.href = "product.html?product_id=" + productList[i]["id"];
	temp_card.appendChild(temp_element);

	// image container div
	temp_element = document.createElement("div");
	temp_element.classList.add("image");
	temp_card.querySelector("a").appendChild(temp_element);

	// image
	temp_element = document.createElement("img");
	temp_element.src = productList[i]["preview"];
	temp_card.querySelector(".image").appendChild(temp_element);

	// details container div
	temp_element = document.createElement("div");
	temp_element.classList.add("column", "details");
	temp_card.querySelector("a").appendChild(temp_element);

	// card title h3
	temp_element = document.createElement("h3");
	temp_element.classList.add("title");
	temp_element.appendChild(document.createTextNode(productList[i]["name"]));
	temp_card.querySelector(".details").appendChild(temp_element);

	// card subtitle h4
	temp_element = document.createElement("h4");
	temp_element.classList.add("subtitle");
	temp_element.appendChild(document.createTextNode(productList[i]["brand"]));
	temp_card.querySelector(".details").appendChild(temp_element);

	// card price h5
	temp_element = document.createElement("h5");
	temp_element.classList.add("price");
	temp_element.appendChild(document.createTextNode("Rs " + productList[i]["price"]));
	temp_card.querySelector(".details").appendChild(temp_element);

	console.log(temp_card);

	if(productList[i]["isAccessory"]) temp_accessories_container.appendChild(temp_card);
	else temp_clothing_container.appendChild(temp_card);
}

document.getElementById("clothing").appendChild(temp_clothing_container);
document.getElementById("accessories").appendChild(temp_accessories_container);


/*
	sample html code for card

	<div class="card row" id="1">
		<a class="column" href="product.html?product_id=1">
			<div class="image">
				<img src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg">
			</div>
			<div class="column details">
				<h3 class="title">Men Navy Blue Solid Sweatshirt</h3>
				<h4 class="subtitle">United Colors of Benetton</h4>
				<h5 class="price">Rs 2599</h5>
			</div>
		</a>
	</div>
*/