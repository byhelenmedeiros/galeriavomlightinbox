document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll(".gallery-item");
    const lightbox = document.querySelector(".lightbox");
    const lightboxImage = document.querySelector(".lightbox-image");
    const lightboxClose = document.querySelector(".lightbox-close");
    const lightboxName = document.querySelector(".lightbox-name");
    const lightboxDescription = document.querySelector(".lightbox-description");
    const lightboxTech = document.querySelector(".lightbox-tech");
    function openLightbox() {
        lightbox.classList.add("visible");
        lightbox.style.display = "flex";
    }
    function closeLightbox() {
        lightbox.classList.remove("visible");

        setTimeout(() => {
            lightbox.style.display = 'none';
        }, 100);
    }

    // Abre o lightbox
    galleryItems.forEach(item => {
        item.addEventListener("click", () => {
            const imgElement = item.querySelector("img");
            const imageUrl = imgElement.getAttribute("data-src");
            const name = imgElement.getAttribute("data-name");
            const description = imgElement.getAttribute("data-description");
            const techAttribute = imgElement.getAttribute("data-tech");
            const projectLink = imgElement.getAttribute("data-link");

            lightboxImage.setAttribute("src", imageUrl);
            lightboxName.textContent = name;
            lightboxDescription.textContent = description;

            lightboxTech.innerHTML = '';
            if (techAttribute) {
                const techList = techAttribute.split(", ");
                const techIcons = techList.map(tech => {
                    const icon = document.createElement("i");
                    icon.className = `bi ${tech}`;
                    return icon;
                });
                techIcons.forEach(icon => lightboxTech.appendChild(icon));
            }

            if (projectLink) {
                const projectLinkElement = document.createElement("a");
                projectLinkElement.setAttribute("href", projectLink);
                projectLinkElement.textContent = "Visualizar Projeto";
                projectLinkElement.target = "_blank"; 
                projectLinkElement.classList.add("project-link"); 
                lightboxTech.appendChild(projectLinkElement);
            }

            openLightbox(); 
        });
    });

    // Fecha o lightbox
    lightboxClose.addEventListener("click", (e) => {
        e.preventDefault(); 
        closeLightbox(); 
    });

    // Fecha o lightbox ao pressionar a tecla "Esc"
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.style.display === 'flex') {
            closeLightbox();
        }
    });

    // Fecha o lightbox ao clicar fora do conteúdo do lightbox
    lightbox.addEventListener("click", function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
});
