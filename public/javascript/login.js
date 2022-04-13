// async function loginFormHandler(event) {
//   event.preventDefault();

//   const email = document.querySelector("#email-address").value.trim();
//   const password = document.querySelector("#password").value.trim();

//   if (email && password) {
//     const response = await fetch("/api/users/login", {
//       method: "post",
//       body: JSON.stringify({
//         email,
//         password,
//       }),
//       headers: { "Content-Type": "application/json" },
//     });

//     if (response.ok) {
//       document.location.replace("/dashboard");
//     } else {
//       alert(response.statusText);
//     }
//   }
// }

// document
//   .querySelector("#login-form")
//   .addEventListener("submit", loginFormHandler);

const loginFormHandler = async function(event) {
  event.preventDefault();
  const emailEl = document.querySelector("#email-address");
  const passwordEl = document.querySelector("#password");
  fetch("/api/users/login", {
    method: "post",
    body: JSON.stringify({
      email: emailEl.value,
      password: passwordEl.value
    }),
    headers: { "Content-Type": "application/json" }
  })
    .then(function() {
      document.location.replace("/dashboard");
    })
    .catch(err => console.log(err));
};
document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);