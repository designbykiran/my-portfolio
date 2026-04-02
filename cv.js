document.addEventListener("DOMContentLoaded", function () {
    const icon = document.getElementById("closeIcon");

    icon.addEventListener("click", function () {
        window.location.href = "index.html";//change the page location.
    });
});