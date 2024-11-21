// const products = [
//   {
//     id: 1,
//     img: "https://www.vodafone.ua/shop/media/wysiwyg/novosti/Capture_1_large.JPG",
//     name: "Monitor",
//     price: 3000,
//     description: "23-inch monitor with Full HD resolution.",
//   },
//   {
//     id: 2,
//     img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTzWqRMI3HQiDfICHAmbArmaP4uOOIjfz0sDITv0dfkpb0mbbgX",
//     name: "Laptop",
//     price: 20000,
//     description:
//       "Lightweight and powerful laptop with a 15-inch display and SSD.",
//   },
//   {
//     id: 3,
//     img: "https://cdn.27.ua/799/66/39/6841913_1.jpeg",
//     name: "Smartphone",
//     price: 8000,
//     description: "Equipped with a triple camera and a multi-core processor.",
//   },
//   {
//     id: 4,
//     img: "https://cdn.27.ua/799/b6/16/4371990_1.jpeg",
//     name: "Tablet",
//     price: 12000,
//     description: "10-inch tablet with high performance and a Retina display.",
//   },
// ];

// const container = document.querySelector(".products");

// container.innerHTML = createMarkUp(products);

// container.addEventListener("click", handleProductClick);

// function handleProductClick(event) {
//   if (event.currentTarget === event.target) {
//     return;
//   }

//   const liEl = event.target.closest(".product-item");
//   const productid = Number(liEl.dataset.id);
//   const product = products.find(({ id }) => productid === id);

//   console.log(productid);
//   const instance = basicLightbox.create(`<div class="modal" ">
//   <img src="${product.img}", alt="${product.name}">
//   <h2>${product.name}</h2>
//   <p>${product.price}</p>
//   <p>${product.description}</p>
//   </div>`);
//   instance.show();
// }

// function createMarkUp(arr) {
//   return arr
//     .map(
//       ({
//         id,
//         img,
//         name,
//         price,
//       }) => `<li class="item product-item" data-id="${id}">
//   <img src="${img}", alt="${name}">
//   <h2>${name}</h2>
//   <p>${price}</p>
//   </li>`
//     )
//     .join("");
// }

function calculator({ a, b, c, d }) {
  const primeter = a + b + c + d;
  return primeter;
}

const primeter = calculator({ a: 10, b: 15, c: 10, d: 15 });

console.log(`Периметр будинку ${primeter}`);
