function checkAGB() {
    const agbBox = document.getElementById("agbCheck");
    if (!agbBox.checked) {
        alert("Bitte akzeptieren Sie die AGB.");
    } else {
        window.location.href = "produkt.html";
    }
}
