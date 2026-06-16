// Sayt uğurla yükləndikdə konsola mesaj yazdırırıq
document.addEventListener("DOMContentLoaded", () => {
    console.log("Portalın neon mühərriki işə düşdü... 🌌");

    initAnimations();
});


function toggleSection(id) {
    const section = document.getElementById(id);

    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}


function initAnimations() {
    const container = document.getElementById("animation-container");

    if (container) {
        // hələlik boş
    }
}
