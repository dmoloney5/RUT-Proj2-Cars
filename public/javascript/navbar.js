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

var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

// Change the icons inside the button based on previous settings
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  themeToggleLightIcon.classList.remove("hidden");
} else {
  themeToggleDarkIcon.classList.remove("hidden");
}

var themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", function () {
  // toggle icons inside button
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  // if set via local storage previously
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }

    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
});