// Sayt uğurla yükləndikdə konsola mesaj yazdırırıq
document.addEventListener("DOMContentLoaded", () => {
    console.log("Portalın neon mühərriki işə düşdü... 🌌");

    initAnimations();
});


function toggleSection(id) {
    const section = document.getElementById(id);

    if (section) {
        section.style.display =
            section.style.display === "none" ? "block" : "none";
    }
}

window.toggleSection = toggleSection;


function initAnimations() {
    const container = document.getElementById("animation-container");

    if (container) {
        // hələlik boş
    }
}

