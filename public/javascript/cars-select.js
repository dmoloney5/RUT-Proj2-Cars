async function newCarHandler(event) {
  event.preventDefault();

  const model = document.querySelector('insert[name="post-car"]').value;
  const price = document.querySelector('insert[name="retail_price"]').value;

  const response = await fetch(`/api/Car`, {
    method: "POST",
    body: JSON.stringify({
      model,
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

document.querySelector("#add-cars-select").addEventListener("submit", newFormHandler);
