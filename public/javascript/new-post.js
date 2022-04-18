document.getElementById("post-submit").addEventListener("click", async (event) => {
  event.preventDefault();


  const Year = document.getElementById("year").value;
  const Make = document.getElementById("make").value;
  const Model = document.getElementById("model").value;
  const Series = document.getElementById("series").value;
  const Color = document.getElementById("color").value;
  const Mileage = document.getElementById("mileage").value;
  const Price = document.getElementById("price").value;
  const Description = document.getElementById("description").value;

  if (Year && Make && Model && Series && Color && Mileage && Price) {
    console.log("clicked",Year,Make,Price,Description,Color,Model,Series);
    const response = await fetch(`/api/cars`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Year,
        Make,
        Model,
        Series,
        Color,
        Mileage,
        Price,
        Description
      }),
    });
    if (response.ok) {
      console.log("success");
      alert("Your car has successfully been posted!");
      //document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }

})