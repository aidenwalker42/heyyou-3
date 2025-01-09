import { getAPI } from '../../assets/js/api.js'

let WIPPageObject={
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
  }

  let emptyPageObject={
    pageName: "",
    header: {
      headerInput: "", // Brand Name
      subtext: "", // Subtext
      bannerImage: "", // Banner Image
    },
    ourStory: {
      ourStoryHeader: "",
      ourStorySubtext:
        "",
    },
    panels: [
      {
        panelImage: "",
        panelHeader: "",
        panelDesc: "",
        panelBtnLink: "", // Button Link
        panelEnableBtn: "",
      }
    ],
    footer: {
      footerHeader: "", // Footer Header
      footerSubtext: "", // Footer Subtext
      footerBtnLink: "", // Footer Button Link
      footerEnableBtn: "", // Enable footer button
    },
  }


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
				
			</section>`
}

const renderPanels = (pageData) => {
	// Generating panels html with correct count
	let panelsHTML = ``
	for (let x in pageData.panels){
		panelsHTML += getPanelHTML(x)
	}
    document.getElementById("panels-container").innerHTML = panelsHTML
	// Filling in inputs with appropriate values
	let i = 0
	for (let x of pageData.panels){
		console.log(x)
		// For each field in the panels
		for (let y of Object.keys(x)){
			console.log(y)
			document.getElementById(y + "-" + i).value = x[y]
		}
		

		i++
	}
}

async function loadPageNames() {
  // getting list of brand/page names
  let res;
  try {
    res = await axios.get(getAPI() + "websiteModification", {
      params: {
        getType: "getPageNames"
      }
    });
  } catch (err) {
    console.error(err)
    return "fail"
  }

  // Building selection HTML
  let selectionHTML = `<option value="" disabled selected>Select...</option>`
  for (let pageName of res.data) {
    selectionHTML += `<option value="${pageName}">${pageName}</option>`
  }
}


// INCOMPLETE
async function loadBrandData(pageName) {
  let res;
  try {
    res = await axios.get(getAPI() + "websiteModification", {
      params: {
        username: sessionStorage.getItem("username"),
        password: sessionStorage.getItem("password"),
        getType: "getBrandData",
        pageName: pageName
      }
    });
  } catch (err) {
    console.error(err)
    return "fail"
  }

  // Setting Field Values to data
  // Camelcase to dashed
  let dashed = camel.replace(/[A-Z]/g, m => "-" + m.toLowerCase());

  document.getElementById("header-input").value = res.data
}




// GO
renderPanels(WIPPageObject)

document.addEventListener("DOMContentLoaded", function () {
  // Load page names
  loadPageNames()

});



// Event Listeners
document.getElementById("page-selector").addEventListener("change", () => {
	document.getElementById("page-selector").value
  loadBrandData()
})


let listOfElements = ["header-input", "subtext-textarea", "banner-image", "our-story-header", "our-story-subtext",
  "footer-header", "footer-subtext", "footer-btn-link", "footer-enable-btn"
]
document.getElementById("create-page-btn").addEventListener("click", () => {
  // console.log("Create Page")
  for (let element of listOfElements) {
    document.getElementById(element).value = ""
  }
})



