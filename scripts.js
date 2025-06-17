const products = {
  1: {
    name: "Red Classic Shirt",
    price: "$25.00",
    description: "A bold red shirt made with 100% cotton.",
    image: "img/shirt1.jpg",
    sizes: ["S", "M", "L"],
    colors: ["Red", "White", "Black"]
  },
  2: {
    name: "Ocean Blue Tee",
    price: "$29.00",
    description: "Soft and light, perfect for summer days.",
    image: "img/shirt2.jpg",
    sizes: ["S", "M", "L"],
    colors: ["Blue", "Gray", "Navy"]
  },
  3: {
    name: "Black Long Sleeve",
    price: "$35.00",
    description: "Sleek black design with modern fit.",
    image: "img/shirt3.jpg",
    sizes: ["M", "L", "XL"],
    colors: ["Black", "Dark Gray"]
  }
};

function getProductId() {
  const params = new URLSearchParams(location.search);
  return params.get("id");
}

function displayProduct() {
  const id = getProductId();
  const p = products[id];
  if (!p) return;
  document.getElementById("product").innerHTML = `
    <h2>${p.name}</h2>
    <img src="${p.image}" style="width:300px"/>
    <p>${p.description}</p>
    <p><strong>${p.price}</strong></p>
    <p>Sizes: ${p.sizes.join(", ")}</p>
    <p>Colors: ${p.colors.join(", ")}</p>
  `;
}

function addToCart() {
  alert("Item added to cart (simulated). Payment coming soon!");
}

if (document.getElementById("product")) {
  displayProduct();
}
