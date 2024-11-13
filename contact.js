document.getElementById("contactForm").onsubmit = function(event) {
    event.preventDefault();

    // Simulate form submission and show response message
    document.getElementById("responseMessage").style.display = "block";

    // Optional: Hide the message after a few seconds
    setTimeout(function() {
        document.getElementById("responseMessage").style.display = "none";
    }, 3000);
};