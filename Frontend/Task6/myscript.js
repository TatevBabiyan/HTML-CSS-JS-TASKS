document.getElementById("toggleButton").addEventListener("click", toggleParagraph);

function toggleParagraph() {
    var paragraph = document.getElementById("myParagraph");
    var button = document.getElementById("toggleButton");

    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
        button.textContent = "Hide";
    } else {
        paragraph.style.display = "none";
        button.textContent = "Show";
    }
}
