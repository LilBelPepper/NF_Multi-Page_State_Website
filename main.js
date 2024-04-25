// Create const variable for the elements within the form container that will be interacted with.
const inputElements = document.querySelectorAll(".contact-input");

//Create function that will display the error message 
function showValidation(elem, msg) {
    const inputErrorMsg = elem.parentNode.querySelector(".input-error")
    inputErrorMsg.innerText = msg
}

for (let i = 0; i < inputElements.length; i++) {
    const input = inputElements[i]

    // List of messages to appear with their appropriate input fields
    const msg = [
        "Invalid First Name", 
        "Invalid Last Name", 
        "Message cannot be empty"
    ]

    // Validate on blur, or validate when user clicks away from element
    input.addEventListener("blur", function(e) {
        e.target.checkValidity()
    })

    // Show validation message and update visuals to alert user
    input.addEventListener("invalid", function(e) {
        showValidation(e.target, msg[i])
        input.style.borderColor = "#e65757"
        input.style.color = "#e65757"
    })

    // Hide validation message and reset visuals to original state
    input.addEventListener("input", function(e) {
        if (e.target.validity.valid) {
            showValidation(e.target, "")
            input.style.borderColor = "#f3f3ef"
            input.style.color = ""
        }
    })
}

// Create separate function specifically for the Email Inputs
function emailMatchCheck() {
    const initialEmail = document.getElementById("email-input")
    const confirmEmail = document.getElementById("email-confirm")

    // List of messages to appear.
    const msg = [
        "Invalid email",
        "Emails do not match"]

    // Create an If Statement that checks whether the values of both Email Input Elements empty or not
    if (initialEmail.value !== "" || confirmEmail.value !== "") {

        // If not empty:
        // Create an If Statement that checks if the user input a a valid email format. 

        // If initial email valid, but not second, indicate error
        if (initialEmail.checkValidity() === true && confirmEmail.checkValidity() === false) {
            showValidation(initialEmail, "")
            showValidation(confirmEmail, msg[0])
            initialEmail.style.borderColor = "#f3f3ef"
            initialEmail.style.color = ""
            confirmEmail.style.borderColor = "#e65757"
            confirmEmail.style.color = "#e65757"
        }
        // If first email is invalid and the second is valid, indicate error
        else if (initialEmail.checkValidity() === false && confirmEmail.checkValidity() === true) {
            showValidation(initialEmail, msg[0])
            showValidation(confirmEmail, "")
            initialEmail.style.borderColor = "#e65757"
            initialEmail.style.color = "#e65757"
            confirmEmail.style.borderColor = "#f3f3ef"
            confirmEmail.style.color = ""
        }
        // If both emails are valid:
        // Create an If Statement that checks if the inputted value from both are the same
        else if (initialEmail.checkValidity() === true && confirmEmail.checkValidity() === true) {
            
            // If the input values do not strictly match each other, indicate  error
            if (initialEmail.value !== confirmEmail.value) {
            showValidation(initialEmail, msg[1])
            showValidation(confirmEmail, "")
            initialEmail.style.borderColor = "#e65757"
            initialEmail.style.color = "#e65757"
            confirmEmail.style.borderColor = "#e65757"
            confirmEmail.style.color = "#e65757"
            }

            // If both input values match, reset to original state
            else {
                showValidation(initialEmail, "") 
                showValidation(confirmEmail, "")
                initialEmail.style.borderColor = "#f3f3ef"
                initialEmail.style.color = ""
                confirmEmail.style.borderColor = "#f3f3ef"
                confirmEmail.style.color = ""
            }
        }
        // Otherwise, indicate to user that the inputted values do not look like emails
        else {
            showValidation(initialEmail, msg[0])
            initialEmail.style.borderColor = "#e65757"
            initialEmail.style.color = "#e65757"
            confirmEmail.style.borderColor = "#e65757"
            confirmEmail.style.color = "#e65757"
        }
    }

    // If email inputs are empty, indicate error visually to user
    else {
        showValidation(initialEmail, msg[0])
        initialEmail.style.borderColor = "#e65757"
        initialEmail.style.color = "#e65757"
        confirmEmail.style.borderColor = "#e65757"
        confirmEmail.style.color = "#e65757"
    }


}
