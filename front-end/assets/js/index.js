import { getAPI } from './api.js'

let smallBusinessHTML = `<div class="field">
            <label for="company-name">Company Name</label>
            <input type="text" name="company-name" id="company-name" required/>
        </div>

        <div class="field">
            <label for="product">Product</label>
            <input type="text" name="product" id="product" />
        </div>

        <div class="field">
            <label for="company-website">Company Website</label>
            <input type="text" name="company-website" id="company-website" placeholder="https://example.com" />
        </div>

        <div class="field">
            <label for="business-address">Registered Business Address</label>
            <input type="text" name="business-address" id="business-address" />
        </div>

        <div class="field half">
            <label for="primary-contact-name">Primary Contact</label>
            <input type="text" name="primary-contact-name" id="primary-contact-name" placeholder="Name" required/>
        </div>

        <div class="field half">
            <label for="primary-contact-title">Title</label>
            <input type="text" name="primary-contact-title" id="primary-contact-title" placeholder="CEO, CFO, Account Manager" />
        </div>

        <div class="field">
            <label for="primary-contact-email">Primary Contact Person Email Address</label>
            <input type="email" name="primary-contact-email" id="primary-contact-email" required/>
        </div>

        <div class="field">
            <label for="primary-contact-linkedin">Primary Contact LinkedIn</label>
            <input type="text" name="primary-contact-linkedin" id="primary-contact-linkedin" placeholder="https://linkedin.com/in/username" />
        </div>

        <div class="field">
            <label for="primary-contact-phone">Primary Contact Phone Number</label>
            <input type="tel" name="primary-contact-phone" id="primary-contact-phone" placeholder="e.g., +1 (123) 456-7890" />
        </div>
        										<div class="field">
											<label for="message">Message</label>
											<textarea name="message" id="message" rows="6" required></textarea>
										</div>
`;
let retailerHTML = `
										<div class="field">
											<label for="company-name">Company Name</label>
											<input type="text" name="company-name" id="company-name" required/>
										</div>

										<div class="field">
											<label for="company-website">Company Website</label>
											<input type="text" name="company-website" id="company-website" placeholder="https://example.com" />
										</div>

										<div class="field">
											<label for="business-address">Registered Business Address</label>
											<input type="text" name="business-address" id="business-address" />
										</div>

										<div class="field">
											<label for="company-type">Company Type</label>
											<input type="text" name="company-type" id="company-type" placeholder="e.g., LLC, Corporation, Partnership" />
										</div>

										<div class="field">
											<label for="tax-id">Tax Identification Number (TIN) or Employer Identification Number (EIN)</label>
											<input type="text" name="tax-id" id="tax-id" placeholder="e.g., 12-3456789" />
										</div>

										<div class="field half">
											<label for="primary-contact-name">Primary Contact</label>
											<input type="text" name="primary-contact-name" id="primary-contact-name" placeholder="Name" required/>
										</div>

										<div class="field half">
											<label for="primary-contact-title">Title</label>
											<input type="text" name="primary-contact-title" id="primary-contact-title" placeholder="e.g., CEO, CFO, Account Manager" />
										</div>

										<div class="field">
											<label for="primary-contact-email">Primary Contact Email Address</label>
											<input type="email" name="primary-contact-email" id="primary-contact-email" required/>
										</div>

										<div class="field">
											<label for="primary-contact-linkedin">Primary Contact LinkedIn</label>
											<input type="text" name="primary-contact-linkedin" id="primary-contact-linkedin" placeholder="https://linkedin.com/in/username" />
										</div>

										<div class="field">
											<label for="primary-contact-phone">Primary Contact Phone Number</label>
											<input type="tel" name="primary-contact-phone" id="primary-contact-phone" placeholder="e.g., +1 (123) 456-7890"/>
										</div>
										<div class="field">
											<label for="message">Message</label>
											<textarea name="message" id="message" rows="6" required></textarea>
										</div>`;
let otherHTML = `										<div class="field half">
											<label for="name">Name</label>
											<input type="text" name="name" id="name" required/>
										</div>
										<div class="field half">
											<label for="email">Email</label>
											<input type="text" name="email" id="email" required/>
										</div>
                                        										<div class="field">
											<label for="message">Message</label>
											<textarea name="message" id="message" rows="6" required></textarea>
										</div>`;

function handleRadioClick(radio) {
  const contactField = document.getElementById("contact-field");
  if (radio.id === "radio-retailer") {
    contactField.innerHTML = retailerHTML;
  }
  if (radio.id === "radio-small-business") {
    contactField.innerHTML = smallBusinessHTML;
  }
  if (radio.id === "radio-other") {
    contactField.innerHTML = otherHTML;
  }
}

//// CONTACT US SUBMIT HANDLER

document
  .querySelector("#contact form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(event.target); // Get form data
    let formObject = Object.fromEntries(formData.entries()); // Convert FormData to a plain object

    // Get the selected radio button id
    const selectedRadioId =
      document.querySelector('input[name="radio-contact"]:checked')?.id || "";
    formObject["selected-radio-id"] = selectedRadioId;

    // Add current timestamp (UTC)
    formObject["submission-timestamp"] = new Date().toISOString();

    console.log(formObject); // Log the object

    // Format form data based on selected radio button
    formObject = convertFormData(formObject);

    console.log(formObject);
    // Carlo send formObject to server
    submitFormToApi(formObject)
  });
  
async function submitFormToApi(formObject) {
  let res
  try {
    res = await axios.post(getAPI() + "customerContact", formObject);
  } catch (err) {
    console.error(err);
    res = { data: { msg: "Failed to post" } };
  }
  return res.data.msg
}

const convertTime = (timeStr) => {
  const utcDate = new Date(timeStr); // Convert UTC time string to Date object
  const options = {
    month: "2-digit",
    day: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  return utcDate
    .toLocaleString("en-US", options)
    .replace(/,/, "")
    .replace(/:/g, ":")
    .toLowerCase();
}

function convertFormData(formData) {
  // First, formatting time...
  let timeStr = formData["submission-timestamp"] || new Date().toISOString()
  let timeConv = convertTime(timeStr)
  //This formats the form data into the exact format used when displaying the inbox
  const baseFormat = {
    message: formData["message"] || "",
    time: timeStr,
    convertUtcToLocal: timeConv
  };

  const submissionType = formData["selected-radio-id"].split("-")[1] || "other";
  switch (submissionType) {
    case "retailer":
      return {
        ...baseFormat,
        submissionType: "retailer",
        companyName: formData["company-name"] || "wtf",
        companyWebsite: formData["company-website"] || "",
        registeredBusinessAddress: formData["business-address"] || "",
        companyType: formData["company-type"] || "",
        tinOrEin: formData["tax-id"] || "",
        contactPerson: getContactPerson(formData),
      };
    case "small-business":
      return {
        ...baseFormat,
        submissionType: "small-business",
        companyName: formData["company-name"] || "",
        product: formData["product"] || "",
        companyWebsite: formData["company-website"] || "",
        registeredBusinessAddress: formData["business-address"] || "",
        contactPerson: getContactPerson(formData),
      };
    default:
      return {
        ...baseFormat,
        submissionType: "other",
        name: formData["name"] || "",
        email: formData["email"] || "",
      };
  }
}

function getContactPerson(formData) {
  return {
    name: formData["primary-contact-name"] || "",
    title: formData["primary-contact-title"] || "",
    email: formData["primary-contact-email"] || "",
    linkedIn: formData["primary-contact-linkedin"] || "",
    phoneNumber: formData["primary-contact-phone"] || "",
  };
}

////
