import React, { useState } from "react";

function Form() {
  // State variables for first name, last name, submitted data, and errors
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, setSubmittedData] = useState([]);
  const [errors, setErrors] = useState([]);

  // Event handler for first name input change
  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  // Event handler for last name input change
  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  // Form submission handler
  function handleSubmit(event) {
    event.preventDefault();

    // Validation: Check if the first name is not empty
    if (firstName.trim().length > 0) {
      // Create form data object
      const formData = { firstName: firstName, lastName: lastName };

      // Update submitted data array
      const dataArray = [...submittedData, formData];
      setSubmittedData(dataArray);

      // Clear input fields and errors
      setFirstName("");
      setLastName("");
      setErrors([]);
    } else {
      
      setErrors(["First name is required!"]);

    }
  }

  // Map through submitted data to create a list of submissions
  const listOfSubmissions = submittedData.map((data, index) => (
    <div key={index}>
      {data.firstName} {data.lastName}
    </div>
  ));

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} placeholder="First Name" />
        <input type="text" onChange={handleLastNameChange} value={lastName} placeholder="Last Name" />
        <button type="submit">Submit</button>
      </form>

      {/* Conditionally render error messages */}
      {errors.length > 0 &&
        errors.map((error, index) => (
          <p key={index} style={{ color: "red" }}>
            {error}
          </p>
        ))}

      <h3>Submissions</h3>
      {listOfSubmissions}
    </div>
  );
}

export default Form;
