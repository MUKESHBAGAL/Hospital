// scripts.js
document.getElementById("new-patient-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form values
    const name = document.getElementById("patient-name").value;
    const age = document.getElementById("patient-age").value;
    const gender = document.getElementById("patient-gender").value;

    // Create a new row in the table
    const tableBody = document.getElementById("patient-table-body");
    const newRow = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = name;

    const ageCell = document.createElement("td");
    ageCell.textContent = age;

    const genderCell = document.createElement("td");
    genderCell.textContent = gender;

    newRow.appendChild(nameCell);
    newRow.appendChild(ageCell);
    newRow.appendChild(genderCell);

    tableBody.appendChild(newRow);

    // Reset the form fields after adding a patient
    document.getElementById("new-patient-form").reset();
});

// Handle clearing the form fields
document.getElementById("clear-form").addEventListener("click", function() {
    document.getElementById("new-patient-form").reset();
});

// Handle clearing all patient data from the list
document.getElementById("clear-all").addEventListener("click", function() {
    const tableBody = document.getElementById("patient-table-body");

    // Clear all child nodes from the table body
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }
});
