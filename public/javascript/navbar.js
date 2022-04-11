document.querySelector("#user-menu-button").addEventListener("click", () => {

    if(document.querySelector("#profile-dropdown").classList.contains("invisible")) {
        document.querySelector("#profile-dropdown").classList.remove("invisible");
        document.querySelector("#profile-dropdown").classList.add("visible");
    } else {
        document.querySelector("#profile-dropdown").classList.remove("visible");
        document.querySelector("#profile-dropdown").classList.add("invisible");
    }
   
})

// document.querySelector("body").addEventListener("click", (event) => {
//     // hide profile dropdown
//     console.log(event.target)

//     if(event.target.id === "user-menu-button") {
//         document.querySelector("#profile-dropdown").classList.remove("visible");
//         document.querySelector("#profile-dropdown").classList.add("invisible");
//     }

// })

document.querySelector("#hamburger").addEventListener("click", () => {

    if(document.querySelector("#mobile-menu").classList.contains("hidden")) {
        document.querySelector("#mobile-menu").classList.remove("hidden");
        document.querySelector("#mobile-menu").classList.add("block");
    } else {
        document.querySelector("#mobile-menu").classList.remove("block");
        document.querySelector("#mobile-menu").classList.add("hidden");
    }
   
})