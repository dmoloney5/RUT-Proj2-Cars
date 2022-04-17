document.getElementById("search-submit").addEventListener("click", () => {
  console.log("clicked");

  var make = document.getElementById("make").value;
  var mileage = document.getElementById("mileage").value;
  var price = document.getElementById("price").value;
  //var body= document.getElementById("body").value;

  const response = await fetch(`/api/cars/${make}/${mileage}/${price}`, {
    method: "GET",

    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    console.log("success");
    alert("Your search was successful!");
  } else {
    alert(response.statusText);
  }

})
