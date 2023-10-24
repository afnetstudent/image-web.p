document.addEventListener("DOMContentLoaded", function () {
    const patientForm = document.getElementById("patient-form");
    const patientList = document.getElementById("patients");

    patientForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get input values
        const name = document.getElementById("name").value;
        const dob = document.getElementById("dob").value;
        const email = document.getElementById("email").value;

        // Create a new patient record
        const patientRecord = document.createElement("li");
        patientRecord.innerHTML = `
            <strong>Name:</strong> ${name}<br>
            <strong>Date of Birth:</strong> ${dob}<br>
            <strong>Email:</strong> ${email}
        `;

        // Append the patient record to the list
        patientList.appendChild(patientRecord);

        // Reset the form
        patientForm.reset();
    });
});
