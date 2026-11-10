
// ==========================================
// ELEIR | TERAPIAS HOLÍSTICAS
// JavaScript principal
// ==========================================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

// ABRIR E FECHAR MENU MOBILE

menuToggle.addEventListener("click", () => {

    const aberto = navMenu.classList.toggle("active");

    menuToggle.classList.toggle("active", aberto);

    menuToggle.setAttribute("aria-expanded", aberto);

    menuToggle.setAttribute(
        "aria-label",
        aberto ? "Fechar menu" : "Abrir menu"
    );

});

// FECHAR MENU AO CLICAR EM UM LINK

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");
        menuToggle.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");

    });

});

// FECHAR MENU COM ESC

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        navMenu.classList.remove("active");
        menuToggle.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");

    }

});

// FECHAR MENU SE A TELA VOLTAR PARA DESKTOP

window.addEventListener("resize", () => {

    if (window.innerWidth > 768) {

        navMenu.classList.remove("active");
        menuToggle.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

    }

});