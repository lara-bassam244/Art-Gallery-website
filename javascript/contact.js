document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    alert("Form submitted successfully!");

    let formData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        message: message
    };
    localStorage.setItem("formData", JSON.stringify(formData));

    document.getElementById("contactForm").reset();
});