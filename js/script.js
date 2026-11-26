
// MENU MOBILE

const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");

    const menuAberto = nav.classList.contains("active");

    menuToggle.textContent = menuAberto ? "✕" : "☰";
    menuToggle.setAttribute("aria-expanded", menuAberto);
    menuToggle.setAttribute(
        "aria-label",
        menuAberto ? "Fechar menu" : "Abrir menu"
    );
});


// FECHAR MENU AO CLICAR EM UM LINK

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");
    });
});


// ATUALIZAR ANO

const currentYear = document.getElementById("current-year");

currentYear.textContent = new Date().getFullYear();


// ANIMAÇÕES AO ROLAR A PÁGINA

const elementos = document.querySelectorAll(
    ".about-content, .about-image, .section-heading, .product-card, .contact-item"
);

if ("IntersectionObserver" in window) {

    document.documentElement.classList.add("js-reveal");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    elementos.forEach((elemento) => {
        elemento.classList.add("reveal");
        observer.observe(elemento);
    });

} else {

    // Se o navegador não suportar animações,
    // os elementos continuam visíveis.

    elementos.forEach((elemento) => {
        elemento.classList.add("visible");
    });

}
