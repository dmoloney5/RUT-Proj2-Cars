document.getElementById("post-submit").addEventListener("click", () => {
  event.preventDefault();
  console.log("clicked");

  const year = document.getElementById("year").value;
  const make = document.getElementById("make").value;
  const model = document.getElementById("model").value;
  const series = document.getElementById("series").value;
  const color= document.getElementById("color").value;
  const mileage = document.getElementById("mileage").value;
  const price = document.getElementById("price").value;
  const description = document.getElementById("description").value;

  const response = await fetch(`/api/Car`, {
    method: "POST",
    body: JSON.stringify({
      year,
      make,
      model,
      series,
      color,
      mileage,
      price,
      description
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    console.log("success");

    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }

})