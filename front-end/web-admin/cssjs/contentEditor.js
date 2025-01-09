let WIPPageObject = {
  pageName: "Delicious Bites",
  header: {
    headerInput: "Delicious Bites", // Brand Name
    subtext: "Gourmet snacks that tantalize your taste buds.", // Subtext
    bannerImage: "images/delicious-bites/banner.jpg", // Banner Image
  },
  ourStory: {
    ourStoryHeader: "Our Journey",
    ourStorySubtext:
      "From humble beginnings, we crafted the perfect bite-sized treats to bring people together. Every snack is made with the finest ingredients, bringing you a taste of happiness in every bite.",
  },
  panels: [
    {
      panelImage: "images/delicious-bites/snack1.jpg",
      panelHeader: "Gourmet Bites",
      panelDesc:
        "Our gourmet bites come in a variety of flavors, made from fresh, locally sourced ingredients. Each bite is designed to deliver a burst of flavor and a delightful texture.",
      panelBtnLink: "products.html", // Button Link
      panelEnableBtn: "enabled",
    },
    {
      panelImage: "images/delicious-bites/snack2.jpg",
      panelHeader: "Healthy Choices",
      panelDesc:
        "We believe in healthy eating without compromising on taste. Our snacks are made with organic, gluten-free, and non-GMO ingredients, perfect for those who care about what they eat.",
      panelBtnLink: "products.html", // Button Link
      panelEnableBtn: "enabled",
    },
    {
      panelImage: "images/delicious-bites/snack3.jpg",
      panelHeader: "Vegan Options",
      panelDesc:
        "Looking for vegan-friendly snacks? We offer a wide range of delicious plant-based treats, crafted with the same attention to quality and flavor.",
      panelBtnLink: "products.html", // Button Link
      panelEnableBtn: "enabled",
    },
  ],
  footer: {
    footerHeader: "Stay Connected", // Footer Header
    footerSubtext:
      "Join our newsletter for the latest updates and exclusive offers.", // Footer Subtext
    footerBtnLink: "https://www.deliciousbites.com/subscribe", // Footer Button Link
    footerEnableBtn: "enabled", // Enable footer button
  },
};

// Function for generating html panels based on page number
const getPanelHTML = (panelNumber) => {
  return `<section id="panel-${panelNumber}">
				<label for="panel-${panelNumber}-image">Panel ${panelNumber} Image:</label>
				<input type="text" id="panelImage-${panelNumber}" name="panel-${panelNumber}-image" placeholder="Enter Image URL">
				
				<label for="panel-${panelNumber}-header">Panel ${panelNumber} Header:</label>
				<input type="text" id="panelHeader-${panelNumber}" name="panel-${panelNumber}-header" placeholder="Enter Panel ${panelNumber} Header">
				
				<label for="panel-${panelNumber}-desc">Panel ${panelNumber} Description:</label>
				<textarea id="panelDesc-${panelNumber}" name="panel-${panelNumber}-desc" placeholder="Enter Panel ${panelNumber} Description"></textarea>
				<label for="panel-${panelNumber}-enable-btn">Enable/Disable Button:</label>
				<select id="panelEnableBtn-${panelNumber}" name="panel-${panelNumber}-enable-btn">
					<option value="enabled">Enable</option>
					<option value="disabled">Disable</option>
				</select>

				<label for="panel-${panelNumber}-btn-link">Button Link:</label>
				<input type="text" id="panelBtnLink-${panelNumber}" name="panel-${panelNumber}-btn-link" placeholder="Enter Button Link">
				
			</section>`;
};

const renderPanels = () => {
  // Generating panels html with correct count
  let panelsHTML = ``;
  for (let x in WIPPageObject.panels) {
    panelsHTML += getPanelHTML(x);
  }
  document.getElementById("panels-container").innerHTML = panelsHTML;
  // Filling in inputs with appropriate values
  let i = 0;
  for (let x of WIPPageObject.panels) {
    console.log(x);
    // For each field in the panels
    for (let y of Object.keys(x)) {
      console.log(y);
      document.getElementById(y + "-" + i).value = x[y];
    }

    i++;
  }
};

// GO
// renderPanels()

// Event Listeners
document.getElementById("page-selector").addEventListener("change", () => {
  document.getElementById("page-selector").value;
});

document
  .getElementById("create-page-button")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default anchor behavior

    // Show the form
    const form = document.getElementById("brand-form");
    form.style.display = "block";

    // Clear all form inputs
    const inputs = form.querySelectorAll("input, textarea");
    inputs.forEach((input) => {
      if (input.type !== "submit") {
        input.value = "";
      }
    });
    // Clear the panels container
    const panelsContainer = document.getElementById("panels-container");
    panelsContainer.innerHTML = ""; // Removes all child elements
  });

document
  .getElementById("set-panel-count")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor behavior

    // Get the panel count input value
    const panelCountInput = document.getElementById("panel-count").value;
    const panelCount = parseInt(panelCountInput, 10); // Convert to an integer

    // Get the panels container
    const panelsContainer = document.getElementById("panels-container");

    // Validate input
    if (isNaN(panelCount) || panelCount <= 0) {
      alert("Please enter a valid number of panels.");
      return;
    }
    if (panelCount > 10) {
      alert("You cannot create more than 10 panels.");
      return;
    }

    const existingPanels = panelsContainer.querySelectorAll(
      "section[id^='panel-']"
    );
    const existingPanelCount = existingPanels.length;

    // If the new panel count is less than the existing count
    if (panelCount < existingPanelCount) {
      let confirmDeleteNeeded = false;

      // Iterate through panels to decide which ones to delete
      for (let i = panelCount + 1; i <= existingPanelCount; i++) {
        const panel = document.getElementById(`panel-${i}`);
        if (panel) {
          // Check if the panel has any non-empty inputs
          const inputs = panel.querySelectorAll("input, textarea");
          const hasData = Array.from(inputs).some(
            (input) => input.value.trim() !== ""
          );

          if (hasData) {
            confirmDeleteNeeded = true;
          } else {
            // Delete the panel immediately if it has no data
            panel.remove();
          }
        }
      }

      // Ask for confirmation only if there are panels with data
      if (confirmDeleteNeeded) {
        const confirmDelete = confirm(
          "Reducing the panel count will delete some panels with data. Do you want to proceed?"
        );
        if (!confirmDelete) {
          return; // Exit if the user cancels
        }

        // Remove remaining panels above the new count
        for (let i = panelCount + 1; i <= existingPanelCount; i++) {
          const panelToRemove = document.getElementById(`panel-${i}`);
          if (panelToRemove) {
            panelToRemove.remove();
          }
        }
      }
    } else if (panelCount > existingPanelCount) {
      // Add new panels if the new count is greater
      for (let i = existingPanelCount + 1; i <= panelCount; i++) {
        const panelHTML = `
                <section id="panel-${i}">
                  <label for="panel-${i}-image">Panel ${i} Image:</label>
                  <input type="text" id="panelImage-${i}" name="panel-${i}-image" placeholder="Enter Image URL">
                  <label for="panel-${i}-image-file">or Choose File:</label>
                  <input type="file" id="panelImageFile-${i}" name="panel-${i}-image-file">

                  <p id="error-message-${i}" style="color: red; display: none;">
                      Please select only one option: either input a URL or choose a file.
                  </p>

                  <label for="panel-${i}-header">Panel ${i} Header:</label>
                  <input type="text" id="panelHeader-${i}" name="panel-${i}-header" placeholder="Enter Panel ${i} Header">
                                  
                  <label for="panel-${i}-desc">Panel ${i} Description:</label>
                  <textarea id="panelDesc-${i}" name="panel-${i}-desc" placeholder="Enter Panel ${i} Description"></textarea>
                                  
                  <label for="panel-${i}-enable-btn">Enable/Disable Button:</label>
                  <select id="panelEnableBtn-${i}" name="panel-${i}-enable-btn" data-id="${i}" class="enable-btn">
                    <option value="disabled" selected>Disable</option>
                    <option value="enabled">Enable</option>
                  </select>

                  <div id="panelButtonFields-${i}" class="button-fields" style="display: none;">
                    <label for="panel-${i}-btn-text">Button Text:</label>
                    <input type="text" id="panelBtnText-${i}" name="panel-${i}-btn-text" placeholder="Enter Button Text">

                    <label for="panel-${i}-btn-link">Button Link:</label>
                    <input type="text" id="panelBtnLink-${i}" name="panel-${i}-btn-link" placeholder="Enter Button Link">
                  </div>
                  <hr>
              </section>
            `;
        panelsContainer.insertAdjacentHTML("beforeend", panelHTML);
      }
    }
  });

document.body.addEventListener("change", function (event) {
  //Event delegation: Instead of attaching the event listener to each individual button, we attach it to the document.body (or another common parent element).
  if (event.target.classList.contains("enable-btn")) {
    const selector = event.target; // The button that triggered the event
    const id = selector.getAttribute("data-id"); // Get the unique ID for this button
    const fieldsContainer =
      id === "footer"
        ? document.getElementById("footerButtonFields")
        : document.getElementById(`panelButtonFields-${id}`);

    if (selector.value === "enabled") {
      fieldsContainer.style.display = "block"; // Show fields when enabled
    } else {
      fieldsContainer.style.display = "none"; // Hide fields when disabled

      // Clear the inputs when disabling
      const inputs = fieldsContainer.querySelectorAll("input");
      inputs.forEach((input) => {
        input.value = "";
      });
    }
  }
});

document
  .getElementById("brand-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    let isFormValid = true;
    const formData = {}; // Object to hold all form data

    // Validate Banner Image
    const bannerImageUrlInput = document.getElementById("banner-image");
    const bannerImageFileInput = document.getElementById("banner-image-file");
    const bannerErrorMessage = document.getElementById("banner-error-message");

    if (bannerImageUrlInput.value.trim() && bannerImageFileInput.value) {
      bannerErrorMessage.style.display = "block";
      isFormValid = false;
    } else {
      bannerErrorMessage.style.display = "none";
    }

    // Validate and collect other form data
    const inputs = document.querySelectorAll(
      "#brand-form input, #brand-form textarea"
    );
    inputs.forEach((input) => {
      if (input.type !== "submit") {
        formData[input.name] = input.value; // Collect input data
      }
    });

    // Collect Footer Data (header, subtext, enable button, button text, and link)
    const footerHeader = document.getElementById("footer-header").value;
    const footerSubtext = document.getElementById("footer-subtext").value;
    const footerEnableBtn = document.getElementById("footer-enable-btn");
    formData.footer = {
      header: footerHeader,
      subtext: footerSubtext,
      isEnabled: footerEnableBtn.value === "enabled",
      buttonText: document.getElementById("footer-btn-text").value,
      buttonLink: document.getElementById("footer-btn-link").value,
    };

    // Validate Panel Images and collect panel data
    const panelsContainer = document.getElementById("panels-container");
    const panels = panelsContainer.querySelectorAll("section[id^='panel-']");
    formData.panels = []; // Initialize an array to hold panel data

    panels.forEach((panel) => {
      const panelId = panel.id.split("-")[1]; // Extract panel number
      const panelData = {};

      // Panel Image URL or File
      const imageUrlInput = document.getElementById(`panelImage-${panelId}`);
      const fileInput = document.getElementById(`panelImageFile-${panelId}`);
      const errorMessage = document.getElementById(`error-message-${panelId}`);

      if (imageUrlInput.value.trim() && fileInput.value) {
        // If conflicting image inputs...
        errorMessage.style.display = "block";
        isFormValid = false;
      } else {
        errorMessage.style.display = "none";
      }

      // Collect panel data
      panelData.imageUrl = imageUrlInput.value.trim();
      panelData.file = fileInput.value.trim();
      panelData.header = document.getElementById(
        `panelHeader-${panelId}`
      ).value;
      panelData.description = document.getElementById(
        `panelDesc-${panelId}`
      ).value;

      // Collect enable button status
      const enableBtn = document.getElementById(`panelEnableBtn-${panelId}`);
      panelData.isEnabled = enableBtn.value === "enabled";

      // Collect button text and link if enabled
      if (panelData.isEnabled) {
        panelData.buttonText = document.getElementById(
          `panelBtnText-${panelId}`
        ).value;
        panelData.buttonLink = document.getElementById(
          `panelBtnLink-${panelId}`
        ).value;
      }

      // Push panel data into the panels array
      formData.panels.push(panelData);
    });

    // Final form validation check
    if (!isFormValid) {
      alert("Please fix the errors before submitting the form.");
      return;
    }

    // If valid, proceed with form submission logic
    console.log("Form Data: ", formData);
    alert("Changes Published successfully!");
    // You can now send this formData object to the server or process it further
  });
