const carousels = document.querySelectorAll('.eshop_card-carousel-parent');

carousels.forEach(carousel => {
    const carousel3 = carousel.querySelector('.eshop_card-carousel');
    const prevBtn = carousel.querySelector('.prev-btn');
    const nextBtn = carousel.querySelector('.next-btn');
    const buttons = carousel.querySelectorAll('.carousel-btn');
    const images = carousel.querySelectorAll('.eshop_image-parent');

    // Hide buttons if there is only one image
    if (images.length < 2) {
        buttons.forEach(button => {
            button.style.display = "none";
        });
    }

    // Flag to prevent stacking scroll events
    let isScrolling = false;

    // Update button visibility based on scroll position
    function updateButtons() {
        // Use clientWidth instead of offsetWidth if you want the inner width without borders
        const scrollLeft = carousel3.scrollLeft;
        const maxScrollLeft = carousel3.scrollWidth - carousel3.clientWidth;
        
        // Hide prevBtn if at the beginning (or nearly there)
        if (scrollLeft <= 0) {
            prevBtn.style.display = "none";
        } else {
            prevBtn.style.display = "block";
        }

        // Hide nextBtn if at the end (or nearly there)
        if (scrollLeft >= maxScrollLeft - 1) {
            nextBtn.style.display = "none";
        } else {
            nextBtn.style.display = "block";
        }
    }

    // Call updateButtons initially
    updateButtons();

    // Helper function to perform scrolling
    function scrollCarousel(distance) {
        if (isScrolling) return;
        isScrolling = true;
        carousel3.scrollBy({
            left: distance,
            behavior: 'smooth'
        });

        // After scrolling completes, update the buttons
        setTimeout(() => {
            isScrolling = false;
            updateButtons();
        }, 350);
    }

    prevBtn.addEventListener('click', () => {
        scrollCarousel(-carousel3.offsetWidth);
    });

    nextBtn.addEventListener('click', () => {
        scrollCarousel(carousel3.offsetWidth);
    });

    // Listen to manual scroll events (if the user scrolls with a mouse or touch)
    carousel3.addEventListener('scroll', () => {
        updateButtons();
    });
});

const eshopcards = document.querySelectorAll(".eshop_card");

if(eshopcards.length < 20){

morepostsbutton.style.display="none";

}