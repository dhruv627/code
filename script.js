document.getElementById("sorryBtn").addEventListener("click", function() {
    // Show the heart and cute image
    document.getElementById("heart").classList.remove("hidden");
    document.getElementById("cuteImage").classList.remove("hidden");
    document.getElementById("confetti").classList.remove("hidden");

    // Change the button text to 'Thank You'
    this.textContent = "Thank You!";
    this.style.backgroundColor = "#32CD32";

    // Redirect to your Snapchat profile (replace with your username)
    window.location.href = "https://snapchat.com/add/dhruv23007"; // Replace 'dhruv23007' with your Snapchat username
});
