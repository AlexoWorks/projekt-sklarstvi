//NAVBAR
function toggleNavbar() {
  const navbarContent1 = document.getElementById("navbar-item2");
  const navbarContent2 = document.getElementById("navbar-item3");
  const navbarPaddingBottom = document.getElementById("navbar");

  // Toggle class for showing/hiding the navbar
  if (navbarContent1.classList.contains("hidden")) {
    navbarContent1.classList.remove("hidden");
    navbarContent2.classList.remove("hidden");
    navbarPaddingBottom.classList.add("paddingheight");
  } else {
    navbarContent1.classList.add("hidden");
    navbarContent2.classList.add("hidden");
    navbarPaddingBottom.classList.remove("paddingheight");
  }
}

//Scroll to top button and links buttons
const scrollBtn = document.getElementById("scrollToTop");
const btnBar = document.getElementById("buttonsDiv");
const linksBar = document.getElementById("linksBar");
const upbuttonpath = document.querySelector(".upbuttonpath");

scrollBtn.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

})

const footerHeight = document.querySelector("footer");

window.addEventListener("scroll", () => {

  const footerTop = footerHeight.offsetTop;
  const windowBottom = window.scrollY + window.innerHeight;

  if (window.scrollY < 200) {
    scrollBtn.style.opacity = "0";
    scrollBtn.style.visibility = "hidden";

  } else {
    scrollBtn.style.opacity = "100%";
    scrollBtn.style.visibility = "visible";
  }

  if (windowBottom > footerTop) {
    linksBar.style.opacity = "0";
    linksBar.style.visibility = "hidden";
    scrollBtn.style.backgroundColor = "white";
    upbuttonpath.style.fill = "var(--MAIN_COLOR_1)";

  } else {
    linksBar.style.opacity = "100%";
    linksBar.style.visibility = "visible";
    scrollBtn.style.backgroundColor = "var(--MAIN_COLOR_1)";
    upbuttonpath.style.fill = "white";
  }

})