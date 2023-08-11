document.addEventListener("DOMContentLoaded", function() {
    const passwordForm = document.getElementById("password-form");
    const content = document.getElementById("content");
  
    const submitButton = document.getElementById("submit-button");
    submitButton.addEventListener("click", function() {
      const passwordInput = document.getElementById("password-input");
      const enteredPassword = passwordInput.value;
  
      // Replace 'yourpassword' with the actual password
      if (enteredPassword === "ntce2023") {
        passwordForm.style.display = "none";
        content.style.display = "block";
      } else {
        alert("Incorrect password. Please try again.");
      }
    });
  });
  
