async function newCarHandler(event) {
  event.preventDefault();

  const Model = document.querySelector('insert[name="post-car"]').value;
  const price = document.querySelector('textarea[name="content"]').value;

  const response = await fetch(`/api/Car`, {
    method: "POST",
    body: JSON.stringify({
      title,
      price,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector("#add-cars-select")
  .addEventListener("submit", newFormHandler);
