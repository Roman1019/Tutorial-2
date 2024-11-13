const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const total = {
    email: event.target.elements.email.value.trim(),
    password: event.target.elements.password.value.trim(),
  };

  if (
    event.target.elements.email.value.trim() === "" ||
    event.target.elements.password.value.trim() === ""
  ) {
    return alert("All form fields must be filled in");
  }
  console.log(total);
  form.reset();
});

// const form = document.querySelector(".login-form");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const total = {
//     email: event.target.elements.email.value.trim(),
//     password: event.target.elements.password.value.trim(),
//   };

//   if (
//     event.target.elements.email.value.trim() === "" ||
//     event.target.elements.password.value.trim() === ""
//   ) {
//     return alert("All form fields must be filled in");
//   }
//   console.log(total);

//   event.target.reset();
// });
// const form = document.querySelector(".login-form");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const data = {
//     email: event.target.elements.email.value.trim(),
//     password: event.target.elements.password.value.trim(),
//   };
//   if (data.email === "" || data.password == "") {
//     return alert("All form fields must be filled in");
//   }
//   console.log(data);
//   event.target.reset();
// });

// const formEl = document.querySelector(".login-form");
// formEl.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const email = event.target.elements.email.value.trim();
//   const password = event.target.elements.password.value.trim();
//   if (email === "" || password === "") {
//     alert("All form fields must be filled in");
//     return;
//   }
//   console.log({ email, password });
//   formEl.reset();
// });
