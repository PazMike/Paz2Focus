//This was project 7
(function () {
  // Function to handle checkbox changes
  function updateSelections() {
    let selections = [];
    const checkboxes = document.querySelectorAll(".option-checkbox");

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        if (!selections.includes(checkbox.value)) {
          selections.push(checkbox.value);
        }
      } else {
        const index = selections.indexOf(checkbox.value);
        if (index > -1) {
          selections.splice(index, 1);
        }
      }
    });

    const selectionsOutput = document.getElementById("selections-output");
    if (selections.length > 0) {
      selectionsOutput.innerHTML = `<p>You have selected: ${selections.join(
        ", "
      )}</p>`;
    } else {
      selectionsOutput.innerHTML = `<p>No selections made yet.</p>`;
    }
  }

  document.querySelectorAll(".option-checkbox").forEach((checkbox) => {
    checkbox.addEventListener("change", updateSelections);
  });

  // Phone number validation (live feedback)
  const phoneNumberInput = document.getElementById("phone-number");
  phoneNumberInput.addEventListener("input", function () {
    const phoneNumber = phoneNumberInput.value.trim();
    const phoneRegex = /^\d+$/;
    const phoneError = document.getElementById("phone-error");

    if (!phoneRegex.test(phoneNumber)) {
      if (!phoneError) {
        const errorElement = document.createElement("p");
        errorElement.id = "phone-error";
        errorElement.style.color = "red";
        errorElement.textContent =
          "Please enter a valid phone number (only digits, no hyphens or parentheses).";
        document.getElementById("user-form").appendChild(errorElement);
      }
    } else {
      if (phoneError) {
        phoneError.remove();
      }
    }

    const phoneOutput = document.getElementById("phone-output");
    if (phoneNumber) {
      phoneOutput.innerHTML = `<p>Phone number entered: ${phoneNumber}</p>`;
    } else {
      phoneOutput.innerHTML = "";
    }
  });

  // Form submission and dynamic response display
  document
    .getElementById("user-form")
    .addEventListener("submit", function (event) {
      // Prevent the form from submitting and reloading the page
      event.preventDefault();

      // Collect values from the form fields
      const selectedOptions = [];
      document
        .querySelectorAll(".option-checkbox:checked")
        .forEach((checkbox) => {
          selectedOptions.push(checkbox.value);
        });

      const phoneNumber = document.getElementById("phone-number").value.trim();

      // Display the results dynamically in the response box
      const output = document.getElementById("response-box");
      output.innerHTML = `
            <h3>Your Submitted Information:</h3>
            <p><strong>Thank you for submitting your preferences!</strong></p>
            <p>Your selected options are: ${
              selectedOptions.length > 0
                ? selectedOptions.join(", ")
                : "No selections made."
            }</p>
            <p>Your phone number is: ${phoneNumber}</p>
          `;

      // Show the thank you message
      const thankYouMessage = document.getElementById("thankYouMessage");
      thankYouMessage.style.display = "block"; // This line ensures it is visible after submission
    });
})();
