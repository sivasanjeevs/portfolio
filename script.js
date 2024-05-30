document.addEventListener("DOMContentLoaded", function() {
    function isMobileDevice() {
        return /Mobi|Android/i.test(navigator.userAgent);
    }

    const content = document.getElementById("content");
    const errorMessage = document.getElementById("error-message");

    if (isMobileDevice()) {
        content.classList.add("hidden");
        errorMessage.style.display = "block";
    } else {
        errorMessage.classList.add("hidden");
    }
});
