// Sayt uğurla yükləndikdə
document.addEventListener("DOMContentLoaded", () => {
    console.log("Portalın neon mühərriki işə düşdü... 🌌");

    initAnimations();

    // Nailiyyətlər bölməsi
    const button = document.getElementById("nailiyyetButton");
    const section = document.getElementById("nailiyyetler");

    if (button && section) {

        button.addEventListener("click", () => {

            if (section.style.display === "none" || section.style.display === "") {
                section.style.display = "block";
            } else {
                section.style.display = "none";
            }

        });

    }
});


function initAnimations() {

    const container = document.getElementById("animation-container");

    if (container) {
        // gələcək animasiyalar üçün
    }

}
