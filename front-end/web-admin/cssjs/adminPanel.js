document
  .getElementById("dashboard-selector")
  .addEventListener("change", function () {
    const selectedValue = this.value;
    const contentPanel = document.querySelector(".content-panel");

    if (selectedValue === "form-submissions") {
      // Insert predetermined HTML for Form Submissions
      contentPanel.innerHTML = `
      <h4>Inbox</h4>
        <label for="business-type">Select submission category:</label>
        <select id="business-type" name="business-type">
            <option value="" disabled selected>Select...</option>
            <option value="retailer">Retailer</option>
            <option value="small-business">Small Business</option>
            <option value="other">Other</option>
        </select>
        <div class="table-wrapper" id="table-wrapper">
    </div>
`;
      setupBusinessTypeListener(); //function located in inboxHandler.js. needs to run when form submissions is selected
    } else {
      // Clear content if another option is selected
      contentPanel.innerHTML = "";
    }
  });
