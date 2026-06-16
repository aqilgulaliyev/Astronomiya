// Sayt uğurla yükləndikdə konsola mesaj yazdırırıq
document.addEventListener("DOMContentLoaded", () => {
    console.log("Portalın neon mühərriki işə düşdü... 🌌");

    initAnimations();
});


function toggleSection(id) {
    window.toggleSection = function(id) {
    const section = document.getElementById(id);

    if (section) {
        if (section.style.display === "none" || section.style.display === "") {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    }
}

window.toggleSection = toggleSection;


function initAnimations() {
    const container = document.getElementById("animation-container");

    if (container) {
        // hələlik boş
    }
}

