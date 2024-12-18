let smallBusinessHTML = `<div class="field">
            <label for="company-name">Company Name</label>
            <input type="text" name="company-name" id="company-name" />
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
            <input type="text" name="primary-contact-name" id="primary-contact-name" placeholder="Name"/>
        </div>

        <div class="field half">
            <label for="primary-contact-title">Title</label>
            <input type="text" name="primary-contact-title" id="primary-contact-title" placeholder="CEO, CFO, Account Manager" />
        </div>

        <div class="field">
            <label for="primary-contact-email">Primary Contact Person Email Address</label>
            <input type="email" name="primary-contact-email" id="primary-contact-email" />
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
											<textarea name="message" id="message" rows="6"></textarea>
										</div>
`;
let retailerHTML = `
										<div class="field">
											<label for="company-name">Company Name</label>
											<input type="text" name="company-name" id="company-name" />
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
											<input type="text" name="primary-contact-name" id="primary-contact-name" placeholder="Name"/>
										</div>

										<div class="field half">
											<label for="primary-contact-title">Title</label>
											<input type="text" name="primary-contact-title" id="primary-contact-title" placeholder="e.g., CEO, CFO, Account Manager" />
										</div>

										<div class="field">
											<label for="primary-contact-email">Primary Contact Email Address</label>
											<input type="email" name="primary-contact-email" id="primary-contact-email" />
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
											<textarea name="message" id="message" rows="6"></textarea>
										</div>`;
let otherHTML = `										<div class="field half">
											<label for="name">Name</label>
											<input type="text" name="name" id="name" />
										</div>
										<div class="field half">
											<label for="email">Email</label>
											<input type="text" name="email" id="email" />
										</div>
                                        										<div class="field">
											<label for="message">Message</label>
											<textarea name="message" id="message" rows="6"></textarea>
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
