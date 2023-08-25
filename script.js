/******w***********
    
    Project 2 Javascript
    Name: Zach Jordan
    Date: 2023 08 21
    Description: This JS file is responible for the validatio nand functionality of the emailed message form.
                 This program displays errors if there are any in the form and once the form in completed, an email is sent to the email adress of the content creater.
                 (In this case Kyle Peters).

******************/

document.addEventListener("DOMContentLoaded", load);

function load() {
    document.getElementById("form").addEventListener("submit", sendEmail);
    hideAllErrors();
}

function sendEmail(e) {
    e.preventDefault();

    if (formhaserrors()) {
        return false;
    }

    // Prepare the email parameters
    const params = {
        to_email: "kyle.peters505@gmail.com",
        from_name: document.getElementById("name_input").value,
        message: document.getElementById("msg_input").value,
        from_email: document.getElementById("email_input").value
    };

    // Send the email
    emailjs.send("service_r4z7yvs", "template_askphvt", params)
    .then(function(response) {
        console.log("Email sent:", response);
        alert("Email sent successfully!");

        // Reset the form
        document.getElementById("form").reset();
    })
    .catch(function(error) {
        console.error("Email failed to send:", error);
        alert("Email failed to send. Please try again later.");
    });
}

function formhaserrors() {
    
    // Test name validation
    let nameError = false;
    const nameInput = document.getElementById('name_input');
    
    // If name value is empty then error is true
    if(nameInput.value==='') {
        document.getElementById("name_input_error").style.visibility = "visible";
        nameError = true;
    } else {
        document.getElementById("name_input_error").style.visibility = "hidden";
    }

    // Test email email validation
    let emailError = false;
    const emailInput = document.getElementById("email_input");
    const emailPatters = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPatters.test(emailInput.value)) {
        document.getElementById("email_input_error").style.visibility = "visible";
        emailError = true;
    }   else {
        document.getElementById("email_input_error").style.visibility = "hidden";
    }

    // Test message box validation
    let msgError = false;
    const msgInput = document.getElementById("msg_input");

    // If msg value is empty then error is true
    if (msgInput.value === '') {
        document.getElementById("msg_input_error").style.visibility = "visible";
        msgError = true;
    } else {
        document.getElementById("msg_input_error").style.visibility = "hidden";
    }

    return nameError || emailError || msgError;
}

function hideAllErrors() {
	//	Get an array of the error fields
	var errorFields = document.getElementsByClassName("error");

	//	Loop through each error field
	for(var i = 0;i < errorFields.length; i++){
		//	Hide the error field
		errorFields[i].style.visibility = "hidden";
    }
}