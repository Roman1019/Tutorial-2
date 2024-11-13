// const input = document.querySelector("#name-input");
// const span = document.querySelector("#name-output");

// input.addEventListener("input", (e) => {
//   const result = e.target.value.trim();
//   //   let my = span.textContent;
//   //   //   console.log(result);
//   //   console.log(my);
//   {
//     if (result === "") {
//       span.textContent = result;
//     } else {
//       return span.textContent;
//     }
//   }
// });

const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {
  const result = event.target.value.trim();

  spanEl.textContent = result === "" ? "Anonymous" : result;
});