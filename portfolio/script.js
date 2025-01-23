// Simple form validation for the contact form
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all the fields.");
        return;
    }

    alert("Thank you for your message, we will get back to you soon!");
    document.getElementById('contactForm').reset();
});
