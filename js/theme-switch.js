document.getElementById('switch').onclick = function() {
    var themeSwitch = document.getElementById('switch');

    if (document.getElementById('alexess-theme').getAttribute("href") === "/css/alexess-dark.css"
        &&
        document.getElementById('gruvbox-theme').getAttribute("href") === "/css/gruvbox-dark.css") {

        // Switch to light theme
        document.getElementById('alexess-theme').href = "/css/alexess-light.css";
        document.getElementById('gruvbox-theme').href = "/css/gruvbox-light.css";
        document.getElementById('top').className = "gruvbox-light";

        // Update Jedi/Sith toggle
        themeSwitch.textContent = "Sith";
    } else {
        // Switch to dark theme
        document.getElementById('alexess-theme').href = "/css/alexess-dark.css";
        document.getElementById('gruvbox-theme').href = "/css/gruvbox-dark.css";
        document.getElementById('top').className = "gruvbox-dark";

        // Update Jedi/Sith toggle
        themeSwitch.textContent = "Jedi";
    }
};
