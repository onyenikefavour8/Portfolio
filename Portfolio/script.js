function submitForm() {
    // Show thank you message
    alert("Thanks for the opportunity. I will get back to you soon.");
    
}


function handleSubmit() {
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var fullName = firstName + " " + lastName;
    alert(fullName + ", thanks for reaching out!");
}

function hireMe() {
    window.location.href = "hireme.html";
}

function handleSubmit(event) {
    event.preventDefault();
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    alert("Thank you, " + firstName + " " + lastName + "! Submission complete.");
}
function redirectToForm() {
    window.location.href = "signup.html"; // Redirect to the form page
}