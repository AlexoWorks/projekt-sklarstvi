document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".blog_card-carousel");

  carousels.forEach((carousel) => {
    const images = carousel.querySelectorAll(".blog_card-image");

    if (images.length > 1) {
      const overlay = document.createElement("div");
      overlay.className = "image-count-overlay";
      overlay.textContent = `+${images.length - 1} další`;
      carousel.style.position = "relative";
      overlay.style.position = "absolute";
      overlay.style.background = "rgba(0,0,0,.4)";
      overlay.style.background = "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,.0) 65%, rgba(255,255,255,0) 100%)";
      overlay.style.color = "#fff";
      overlay.style.borderRadius = "0";
      overlay.style.cursor = "pointer";
      overlay.style.width = "100%";
      overlay.style.height = "100%";
      overlay.style.fontSize = "3rem";
      overlay.style.fontFamily = "DM Sans";
      overlay.style.textAlign = "center";
      overlay.style.padding = "auto 0";
      overlay.style.alignContent = "center";
      overlay.style.border

      carousel.appendChild(overlay);

      overlay.addEventListener("click", () => {
        createPopup(images);
      });
    }
  });
});

const blogposts = document.querySelectorAll(".blog_card");

blogposts.forEach((blogpost) => {

  const images = blogpost.querySelectorAll(".blog_card-image");

  if (images.length === 0) {
    blogpost.style.flexDirection = "column";
  }
})

//THE FULLSCREEN WINDOW DISPLAYING THE POPUP

function createPopup(images) {
  const popup = document.createElement("div");
  popup.className = "image-popup";
  popup.style.position = "fixed";
  popup.style.top = "0";
  popup.style.left = "0";
  popup.style.width = "100%";
  popup.style.height = "100%";
  popup.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  popup.style.display = "flex";
  popup.style.justifyContent = "center";
  popup.style.alignItems = "center";
  popup.style.zIndex = "10000";
  popup.addEventListener("click", () => {
    document.body.removeChild(popup);
  });

  const popupContent = document.createElement("div");
  popupContent.className = "custom-popup";
  popupContent.style.position = "relative";
  popupContent.style.width = "60%";
  popupContent.style.height = "70%";
  popupContent.style.overflow = "auto";
  popupContent.style.backgroundColor = "rgba(255, 255, 255, 1)";
  popupContent.style.padding = "20px";


  images.forEach((img) => {
    const imgClone = img.cloneNode(true);
    imgClone.style.display = "block";
    imgClone.style.marginBottom = "10px";
    imgClone.style.justifySelf = "center";
    imgClone.style.position = "relative";
    imgClone.style.height = "100%";
    imgClone.style.objectFit = "contain";

    popupContent.appendChild(imgClone);
  });

  const closeButton = document.createElement("button");
  closeButton.textContent = "Zavřít";
  closeButton.style.position = "fixed";
  closeButton.style.top = "10px";
  closeButton.style.right = "10px";
  closeButton.style.backgroundColor = "#333";
  closeButton.style.color = "#fff";
  closeButton.style.border = "none";
  closeButton.style.padding = "5px 10px";
  closeButton.style.cursor = "pointer";
  closeButton.style.borderRadius = "5px";
  closeButton.addEventListener("click", () => {
    document.body.removeChild(popup);
  });

  popupContent.appendChild(closeButton);
  popup.appendChild(popupContent);
  document.body.appendChild(popup);
}

const morepostsbutton = document.querySelector("#morepostsbutton");

if(blogposts.length < 10){

morepostsbutton.style.display="none";

}