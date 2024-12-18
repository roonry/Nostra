// offer chencel
var cencel = document.getElementById("cencel")
var offer = document.getElementById("offer")
cencel.addEventListener("click", function () {
  offer.style.display = "none"
})


// slider section
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const slider = document.getElementById("slider");

let currentSlide = 0;
const totalSlides = slider.children.length;

const goToSlide = (index) => {
  // Wrap around the slides
  currentSlide = (index + totalSlides) % totalSlides;
  // Move the slider to the correct position
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
};

prevButton.addEventListener("click", () => goToSlide(currentSlide - 1));
nextButton.addEventListener("click", () => goToSlide(currentSlide + 1));

// Optional: Auto slide every 3 seconds
setInterval(() => goToSlide(currentSlide + 1), 3000);

// side nav,menuicon
var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click", function () {
  sidenav.style.right = "0%"
})

closenav.addEventListener("click", function () {
  sidenav.style.right = "-50%"
})

// product search funtionality

var productContainer = document.getElementById("product-container")
var productlist = productContainer.querySelectorAll("div")
var search = document.getElementById("search")

search.addEventListener("keyup", function () {
  var enterdValue = event.target.value.toUpperCase()

  for (count = 0; count < productlist.length; count++)
  {
    var productname = productlist[count].querySelector("h2").textContent

    if(productname.toUpperCase().indexOf(enterdValue)<0)
    {
      productlist[count].style.display="none"
    }

    else{
      productlist[count].style.display="block"
    }
  }
})

