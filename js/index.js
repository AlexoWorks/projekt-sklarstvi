const carousel = document.querySelector(".carousel");
const beforeButton = document.getElementById("before-button");
const nextButton = document.getElementById("next-button");


// Function to normalize scroll values
function normalizeScrollValues(value) {
    return Math.round(value); // Round scroll positions for consistency
}

// Function to update button visibility dynamically
function updateButtonVisibility() {
    const scrollLeft = normalizeScrollValues(carousel.scrollLeft);
    const maxScrollLeft = normalizeScrollValues(carousel.scrollWidth - carousel.clientWidth);

    // Hide "before-button" if scrolled to the start
    if (scrollLeft <= 0) {
        beforeButton.classList.add("display-none");
    } else {
        beforeButton.classList.remove("display-none");
    }

    // Hide "next-button" if scrolled to the end
    if (scrollLeft >= maxScrollLeft) {
        nextButton.classList.add("display-none");
    } else {
        nextButton.classList.remove("display-none");
    }
}

// Scroll to next view
function scrollToNextItems() {
    const scrollAmount = document.querySelector(".carousel_card").offsetWidth + 20; // Adjust for gap
    carousel.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
    });
}

// Scroll to previous view
function scrollToPreviousItems() {
    const scrollAmount = document.querySelector(".carousel_card").offsetWidth + 20; // Adjust for gap
    carousel.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
    });
}

// Attach scroll event listener to dynamically update button visibility
carousel.addEventListener("scroll", updateButtonVisibility);

// Initial check for button visibility
updateButtonVisibility();