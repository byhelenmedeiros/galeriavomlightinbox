document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll(".gallery-item");
    const lightbox = document.querySelector(".lightbox");
    const lightboxImage = document.querySelector(".lightbox-image");
    const lightboxClose = document.querySelector(".lightbox-close");

    galleryItems.forEach(item => {
        item.addEventListener("click", () => {
            const imageUrl = item.querySelector("img").getAttribute("data-src");
            lightboxImage.setAttribute("src", imageUrl);
            lightbox.style.display = "flex";
        });
    });

    lightboxClose.addEventListener("click", (e) => {
        e.preventDefault(); // Previne o comportamento padrão do link
        lightbox.style.display = "none";
    });

    lightboxClose.addEventListener("click", (e) => {
        e.preventDefault();
        lightbox.classList.remove("visible");
    
        setTimeout(() => {
            lightbox.style.display = 'none';
        }, 400); 
    });
});

