const buttonIds = ["colorButton1", "colorButton2", "colorButton3"]

buttonIds.forEach(function(buttonId) {
    let button = document.getElementById(buttonId);

    button.addEventListener("click", function() {
    let computedStyle = window.getComputedStyle(button);
    let buttonColor = computedStyle.backgroundColor;

    document.body.style.backgroundColor = buttonColor;
    });
});
