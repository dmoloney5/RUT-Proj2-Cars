document.getElementById("search-submit").addEventListener("click", async(event) => {
  event.preventDefault();
  console.log("clicked");

  var make = document.getElementById("make").value;
  var mileage = document.getElementById("mileage").value;
  var price = document.getElementById("price").value;
  //var body= document.getElementById("body").value;
  console.log(make, mileage, price);

  const response = await fetch(`/api/cars/${make}/${mileage}/${price}`, {
    method: "GET",

    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    var data = await response.json()
    console.log("success",data);
    var carSearchHTML = ""
    for(let i=0;i<data.length;i++){
      carSearchHTML += `<div class="w-md m-2 rounded overflow-hidden shadow-lg">
      <div class="px-6 py-4">
        <div id="car-title" class="font-bold text-xl mb-2 grid grid-cols-2">
          <h2 class="p-3">${data[i].Make} ${data[i].Model}</h2>
          <button id="save-car" type="button"
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">Save</button>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span id="year"
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Year:
           ${data[i].Year}</span>
          <span id="make"
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Make:
            ${data[i].Make}</span>
          <span id="model"
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Model:
            ${data[i].Model}</span>
          <span id="series"
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Series:
            ${data[i].Series}</span>
          <span id="color"
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Exterior
            Color: ${data[i].Color}</span>
          <span id="mileage"
            class="in line-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Mileage:
            ${data[i].Mileage}</span>
          <span id="price"
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Price:
            ${data[i].Price}</span>
        </div>
        <div class="px-6 py-4 bg-gray-100 rounded">
          <p id="description" class="text-gray-700 text-base"><span class="font-bold">Seller's Description:</span> ${data[i].Description}</p>
        </div>
      </div>
    </div>`
    }
    console.log(carSearchHTML);
    document.getElementById("car-display").innerHTML = carSearchHTML;
    //alert("Your search was successful!");
  } else {
    alert(response.statusText);
  }

})
