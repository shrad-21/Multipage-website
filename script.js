
function showMenu() {
    document.getElementById("menu").classList.add("show");
    document.body.classList.add("no-scroll");
}

function hideMenu() {
    document.getElementById("menu").classList.remove("show");
    document.body.classList.remove("no-scroll");
}


// form- contact us
document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    
    let isValid = true;

    clearErrors();

    // Name 
    const name = document.getElementById("name");
    const nameRegex = /^[A-Za-z]+$/;
    if (!name.value.trim()) {
        showError("nameError", "Name is required.");    //name-error is the id
        isValid = false;
    } else if (!nameRegex.test(name.value)) {
        showError("nameError", "Name should only contain alphabets.");
        isValid = false;
    }

    // Email validation
    const email = document.getElementById("email");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
        showError("emailError", "Email is required.");
        isValid = false;
    } else if (!emailRegex.test(email.value)) {
        showError("emailError", "Enter a valid email.");
        isValid = false;
    }

    // Subject validation
    const subject = document.getElementById("subject");
    if (!subject.value.trim()) {
        showError("subjectError", "Subject is required.");
        isValid = false;
    }

    // Message validation
    const message = document.getElementById("message");
    if (!message.value.trim()) {
        showError("messageError", "Message is required.");
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
    }
});

function showError(id, message) {
    document.getElementById(id).textContent = message;
}

function clearErrors() {
    const errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach(element => {
        element.textContent = "";
    });
}
