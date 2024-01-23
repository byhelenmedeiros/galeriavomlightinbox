const htmlTag = document.documentElement;
const lightThemeIcon = document.getElementById("light-theme");
const darkThemeIcon = document.getElementById("dark-theme");

// Função para ativar o tema claro
function activateLightTheme() {
    htmlTag.setAttribute("data-theme", "light");

    // Ativar o estilo light
    document.getElementById("theme-light").disabled = false;
    document.getElementById("theme-dark").disabled = true;

    // Alternar visibilidade dos ícones
    lightThemeIcon.style.display = "none";
    darkThemeIcon.style.display = "block";
}

// Função para ativar o tema escuro
function activateDarkTheme() {
    htmlTag.setAttribute("data-theme", "dark");

    // Ativar o estilo dark
    document.getElementById("theme-light").disabled = true;
    document.getElementById("theme-dark").disabled = false;

    darkThemeIcon.style.display = "none";
    lightThemeIcon.style.display = "block";
}

// Verifique o valor de data-theme na inicialização e aplique o tema apropriado
if (htmlTag.getAttribute("data-theme") === "dark") {
    activateDarkTheme();
} else {
    activateLightTheme();
}

lightThemeIcon.addEventListener("click", () => {
    activateLightTheme();
});

darkThemeIcon.addEventListener("click", () => {
    activateDarkTheme();
});
