function showAnimation(element) {
    element.classList.add("animate");

    setTimeout(function() {
        element.classList.remove("animate");
    }, 1000);
}

function openModal() {
    document.querySelector(".modal").style.display = "block";
}

function closeModal() {
    document.querySelector(".modal").style.display = "none";
}