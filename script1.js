window.addEventListener("scroll", function() {
    console.log("You're scrolling through the Virgin Active Gym page!");
});
document.getElementById("emailLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default mailto behavior
    const email = "info@virginactive.com";
    const subject = "Inquiry from Virgin Active Gym Website";
    const body = "Hello Virgin Active Team,\n\nI would like to inquire about ...";
    
    // Confirmation before opening email client
    if (confirm("Do you want to open your email client to contact us?")) {
        // Open the email client with predefined subject and body
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });