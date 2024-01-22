document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll(".gallery-item");
    const lightbox = document.querySelector(".lightbox");
    const lightboxImage = document.querySelector(".lightbox-image");
    const lightboxClose = document.querySelector(".lightbox-close");
    const lightboxName = document.querySelector(".lightbox-name");
    const lightboxDescription = document.querySelector(".lightbox-description");
    const lightboxTech = document.querySelector(".lightbox-tech");

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

            // Limpa o conteúdo anterior e adiciona os ícones de tecnologia
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

            // Adiciona o link do projeto, se disponível
            if (projectLink) {
                const projectLinkElement = document.createElement("a");
                projectLinkElement.setAttribute("href", projectLink);
                projectLinkElement.textContent = "Visualizar Projeto";
                projectLinkElement.target = "_blank"; // Abre em uma nova aba
                projectLinkElement.classList.add("project-link"); // Adiciona uma classe para estilização (opcional)
                lightboxTech.appendChild(projectLinkElement);
            }

            lightbox.classList.add("visible");
            lightbox.style.display = "flex";
        });
    });

    // Fecha o lightbox 
    lightboxClose.addEventListener("click", (e) => {
        e.preventDefault(); 
        lightbox.classList.remove("visible");
    
        setTimeout(() => {
            lightbox.style.display = 'none';
        }, 400); // Tempo para a transição (ajustável)
    });
});
