const lightThemeIcon = document.getElementById("light-theme");
const darkThemeIcon = document.getElementById("dark-theme");

// Função para ativar o tema claro
function activateLightTheme() {
    document.body.classList.add("theme-transition");

    document.getElementById("theme-normal").disabled = false;
    document.getElementById("theme-dark").disabled = true;

    // Alternar visibilidade dos ícones
    lightThemeIcon.style.display = "none";
    darkThemeIcon.style.display = "block";
}

function activateDarkTheme() {
    document.body.classList.add("theme-transition");

    document.getElementById("theme-normal").disabled = true;
    document.getElementById("theme-dark").disabled = false;

    darkThemeIcon.style.display = "none";
    lightThemeIcon.style.display = "block";
}

activateLightTheme();

lightThemeIcon.addEventListener("click", () => {
    activateLightTheme();
});

darkThemeIcon.addEventListener("click", () => {
    activateDarkTheme();
});
