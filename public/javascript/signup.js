async function signupFormHandler(event) {
  event.preventDefault();
// capture user input 
  const username = document.querySelector("#username").value.trim();
  const email = document.querySelector("#email-address").value.trim();
  const phone = document.querySelector("#phone-number").value.trim();
  const location = document.querySelector("#location").value.trim();
  const password = document.querySelector("#password").value.trim();

  if (username && email && phone && location && password) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        username,
        email,
        phone,
        location,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      console.log("success");

      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);
