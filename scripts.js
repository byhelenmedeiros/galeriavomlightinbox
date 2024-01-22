document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll(".gallery-item");
    const lightbox = document.querySelector(".lightbox");
    const lightboxImage = document.querySelector(".lightbox-image");
    const lightboxClose = document.querySelector(".lightbox-close");
    const lightboxName = document.querySelector(".lightbox-name");
    const lightboxDescription = document.querySelector(".lightbox-description");
    const lightboxTech = document.querySelector(".lightbox-tech");
    const filterButtons = document.querySelectorAll(".filter-btn");

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
   
    function applyFilter(category, activeButton) {
        galleryItems.forEach(item => {
            if (category === 'todas' || item.getAttribute('data-category') === category) {
                item.style.display = ''; // Mostra o item
            } else {
                item.style.display = 'none'; // Oculta o item
            }
        });

        // Remover a classe 'active' de todos os botões
        filterButtons.forEach(button => {
            button.classList.remove('filter-btn-active');
        });

        // Adicionar a classe 'active' ao botão clicado
        if (activeButton) {
            activeButton.classList.add('filter-btn-active');
        }
    }

    // Evento de clique para os botões de filtro
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            applyFilter(category, this); // Passar 'this' como o botão ativo
        });
    });

    
});
//efeito de escrita 
function typeWriter(element, text, speed) {
    let i = 0;
    function typing() {
        if (i < text.length) {
            element.innerHTML = text.substring(0, i + 1) + '<span class="cursor">|</span>';
            i++;
            setTimeout(typing, speed);
        } else {
            element.innerHTML = text + '<span class="cursor">|</span>';
        }
    }
    typing();
}
const textToType = "Para ver mais detalhes sobre o projeto clique na imagem";
const speed = 100; // Velocidade da digitação em milissegundos
typeWriter(document.getElementById('typewriter-text'), textToType, speed);
