const stickySections = [...document.querySelectorAll(".sticky")];
let images = ["./assets/image1.jpg", "./assets/image2.jpg", "./assets/image3.jpg", "./assets/image4.jpg"];

images.forEach((img) => {
   stickySections.forEach((section) => {
      let image = document.createElement("img");
      image.src = img;
      section.querySelector(".scroll_section").appendChild(image);
   });
});

window.addEventListener("scroll", (e) => {
   for (let i = 0; i < stickySections.length; i++) {
      transform(stickySections[i]);
   }
});

function transform(section) {
   const offsetTop = section.parentElement.offsetTop;
   const scrollSection = section.querySelector(".scroll_section");
   console.log(scrollSection);
   let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
   percentage = percentage < 0 ? 0 : percentage > 400 ? 400 : percentage;
   scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
}

// 901
// 2703
