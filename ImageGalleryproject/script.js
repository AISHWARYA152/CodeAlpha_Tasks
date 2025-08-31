// Filter Buttons
const filterButtons = document.querySelectorAll(".filter_buttons button");
const galleryItems = document.querySelectorAll(".gallery .gallery-item");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    galleryItems.forEach(item => {
      if (filter === "all" || item.classList.contains(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;
let visibleImages = [];

function showLightbox(index) {
  visibleImages = Array.from(galleryItems)
    .filter(item => item.style.display !== "none")
    .map(item => item.querySelector("img"));

  currentIndex = index;
  lightbox.style.display = "flex";
  lightboxImg.src = visibleImages[currentIndex].src;
}

// Open Lightbox
galleryItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    const visible = Array.from(galleryItems)
      .filter(i => i.style.display !== "none");
    const img = item.querySelector("img");
    const idx = visible.indexOf(item);
    showLightbox(idx);
  });
});

// Close Lightbox
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Prev / Next Buttons
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + visibleImages.length) % visibleImages.length;
  lightboxImg.src = visibleImages[currentIndex].src;
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % visibleImages.length;
  lightboxImg.src = visibleImages[currentIndex].src;
});

// Click outside image to close
lightbox.addEventListener("click", e => {
  if (e.target === lightbox) lightbox.style.display = "none";
}); 
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    
    // Restart animation
    button.classList.remove("active");
    void button.offsetWidth; // trick to restart CSS animation
    button.classList.add("active");

    const galleryImgs = document.querySelectorAll(".gallery-item img");

galleryImgs.forEach(img => {
  img.addEventListener("click", () => {
    img.classList.add("glow");

    // Remove glow after 500ms
    setTimeout(() => {
      img.classList.remove("glow");
    }, 500);
  });
});
    // Filter images
    const filter = button.dataset.filter;
    galleryItems.forEach(item => {
      if (filter === "all" || item.classList.contains(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
}); 

