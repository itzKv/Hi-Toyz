// Function to validate the form inputs
function validation() {
    var name = document.forms["Formfill"]["Name"].value;
    var email = document.forms["Formfill"]["Email"].value;
    var password = document.forms["Formfill"]["Password"].value;
    var dateOfBirth = document.forms["Formfill"]["Date"].value;
    var termsCheckbox = document.forms["Formfill"]["terms"].checked;

    // Perform validation checks
    if (name === "") {
        document.getElementById("result").innerHTML = "Please enter your name";
        return false;
    }
    
    if (email === "") {
        document.getElementById("result").innerHTML = "Please enter your email address";
        return false;
    }
    
    if (password === "") {
        document.getElementById("result").innerHTML = "Please enter a password";
        return false;
    }
    
    if (dateOfBirth === "") {
        document.getElementById("result").innerHTML = "Please enter your date of birth";
        return false;
    }
    
    if (!termsCheckbox) {
        document.getElementById("result").innerHTML = "Please agree to the Terms and Privacy Policy";
        return false;
    }

    // If all validation checks pass, show the popup
    showPopup();
    return false; // Prevent form submission
}

// Function to show the popup
function showPopup() {
    document.getElementById("popup").classList.add("open-slide");
    setTimeout(redirectToHomePage, 3000); // Redirect after 3 seconds (adjust as needed)
  }
// Function to close the popup
function closeSlide() {
    var popup = document.getElementById("popup");
    popup.classList.remove("open-slide");
}

// Event listener to close the popup when the "OK" button is clicked
var okButton = document.querySelector(".popup button");
okButton.addEventListener("click", closeSlide);

