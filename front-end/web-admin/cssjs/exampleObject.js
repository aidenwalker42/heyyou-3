//TEST FILE!!!

//Collapse for better readability

//Example Object with 5 pages

// NOTE: the whole pagesData object should be fetched from server and stored locally, we do not want to keep sending get requests to the server for every page load. (not really a way to go from brand page to brand page navigation wise anyways so maybe doesnt matter)
const pagesData = [
  {
    pageName: "Las Arepas De Luz",
    header: {
      headerInput: "Las Arepas De Luz", // Brand Name
      subtext: "Incluye en tu dieta balanceada una arepa saludable Colombiana", // Subtext
      bannerImage: "images/las-arepas/las-arepas-de-luz-3.jpg", // Banner Image
    },
    ourStory: {
      ourStoryHeader: "Our Story",
      ourStorySubtext:
        "From the first grain of corn to the last charcoal pressing, each step of our process is full of dedication and love. We select the best corn, we cook it, we grind it and we knead it with sea salt, that special ingredient that provides a unique and healthy touch. In addition, we incorporate chia, turmeric and quinoa, to create arepitas full of flavor and nutrition.",
    },
    panels: [
      {
        panelImage: "images/las-arepas/las-arepas-de-luz-3-crop.jpg",
        panelHeader: "What we offer",
        panelDesc:
          "Pre-grilled arepas made from 100% charcoal corn, without preservatives or additives. We offer the option of yellow or white corn, maintaining the authentic and traditional flavor of our arepas.",
        panelBtnLink: "generic.html", // Button Link
        panelEnableBtn: "enabled",
      },
      {
        panelImage: "images/las-arepas/las-arepas-de-luz-2.jpg",
        panelHeader: "Variety",
        panelDesc:
          "We have a variety of nutritious options like arepas with sea salt, chia and quinoa, perfect for those looking for healthier alternatives without losing the delicious flavor of an arepa.",
        panelBtnLink: "generic.html", // Button Link
        panelEnableBtn: "enabled",
      },
      {
        panelImage: "images/las-arepas/las-arepas-de-luz-5.jpg",
        panelHeader: "Nutrition",
        panelDesc:
          "Arepa with quinoa combines the nutritional benefits of traditional arepa with those of quinoa:\n1. High on Protein\n2. Rich in Fiber\n3. Vitamins and Minerals\n4. Gluten Free\n5. Low Glycemic Index\n6. Healthy Fatty Acids",
        panelBtnLink: "generic.html", // Button Link
        panelEnableBtn: "enabled",
      },
    ],
    footer: {
      footerHeader: "Sample Text", // Footer Header
      footerSubtext:
        "Here you can add your footer subtext. Include contact or other relevant info.", // Footer Subtext
      footerBtnLink: "https://www.facebook.com/profile.php?id=61553013937851", // Footer Button Link
      footerEnableBtn: "enabled", // Enable footer button
    },
  },
  {
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
  },
  {
    pageName: "Urban Fresh Market",
    header: {
      headerInput: "Urban Fresh Market", // Brand Name
      subtext: "Bringing fresh and organic produce to your door.", // Subtext
      bannerImage: "images/urban-fresh-market/banner.jpg", // Banner Image
    },
    ourStory: {
      ourStoryHeader: "Our Mission",
      ourStorySubtext:
        "We aim to make healthy eating accessible to everyone by delivering fresh, organic produce right to your doorstep. From farm to table, we ensure the highest quality ingredients for your family’s meals.",
    },
    panels: [
      {
        panelImage: "images/urban-fresh-market/organic-fruits.jpg",
        panelHeader: "Fresh Fruits & Vegetables",
        panelDesc:
          "We offer a wide selection of fresh, organic fruits and vegetables, sourced from local farms to ensure the best taste and nutrition.",
        panelBtnLink: "products.html", // Button Link
        panelEnableBtn: "enabled",
      },
      {
        panelImage: "images/urban-fresh-market/smoothie-ingredients.jpg",
        panelHeader: "Smoothie Packs",
        panelDesc:
          "Get everything you need for a delicious and healthy smoothie in one convenient pack. Our packs are made with organic fruits and greens to keep you energized all day long.",
        panelBtnLink: "products.html", // Button Link
        panelEnableBtn: "enabled",
      },
      {
        panelImage: "images/urban-fresh-market/eco-friendly-packaging.jpg",
        panelHeader: "Eco-Friendly Packaging",
        panelDesc:
          "We care about the planet, which is why all of our deliveries are packed with eco-friendly materials, reducing our environmental impact.",
        panelBtnLink: "about.html", // Button Link
        panelEnableBtn: "enabled",
      },
    ],
    footer: {
      footerHeader: "Join Our Community", // Footer Header
      footerSubtext:
        "Sign up today and get exclusive discounts on your first order!", // Footer Subtext
      footerBtnLink: "https://www.urbanfreshmarket.com/signup", // Footer Button Link
      footerEnableBtn: "enabled", // Enable footer button
    },
  },
  {
    pageName: "The Green Spoon",
    header: {
      headerInput: "The Green Spoon", // Brand Name
      subtext: "Healthy food, prepared fresh with love.", // Subtext
      bannerImage: "images/the-green-spoon/banner.jpg", // Banner Image
    },
    ourStory: {
      ourStoryHeader: "Our Vision",
      ourStorySubtext:
        "At The Green Spoon, we believe in nourishing both your body and soul. Our dishes are carefully crafted using fresh, locally sourced ingredients to promote a balanced and healthy lifestyle.",
    },
    panels: [
      {
        panelImage: "images/the-green-spoon/bowl-of-salad.jpg",
        panelHeader: "Fresh Bowls",
        panelDesc:
          "Our signature bowls are packed with fresh ingredients and superfoods, designed to give you a burst of energy and nutrition.",
        panelBtnLink: "menu.html", // Button Link
        panelEnableBtn: "enabled",
      },
      {
        panelImage: "images/the-green-spoon/plant-based-dishes.jpg",
        panelHeader: "Plant-Based Meals",
        panelDesc:
          "Our plant-based meals are not only healthy but also delicious, providing you with all the essential nutrients you need while keeping the planet in mind.",
        panelBtnLink: "menu.html", // Button Link
        panelEnableBtn: "enabled",
      },
      {
        panelImage: "images/the-green-spoon/smoothie-bowl.jpg",
        panelHeader: "Smoothies & Juices",
        panelDesc:
          "Refresh and rejuvenate with our variety of smoothies and cold-pressed juices made from fresh, organic fruits and vegetables.",
        panelBtnLink: "menu.html", // Button Link
        panelEnableBtn: "enabled",
      },
    ],
    footer: {
      footerHeader: "Stay Healthy", // Footer Header
      footerSubtext:
        "Join our wellness community and stay updated on new dishes and discounts!", // Footer Subtext
      footerBtnLink: "https://www.thegreenspoon.com/subscribe", // Footer Button Link
      footerEnableBtn: "enabled", // Enable footer button
    },
  },
  {
    pageName: "Brewed Bliss Coffee",
    header: {
      headerInput: "Brewed Bliss Coffee", // Brand Name
      subtext: "Crafted coffee experiences for the discerning palate.", // Subtext
      bannerImage: "images/brewed-bliss-coffee/banner.jpg", // Banner Image
    },
    ourStory: {
      ourStoryHeader: "Our Passion",
      ourStorySubtext:
        "Brewed Bliss is all about the art of coffee. From hand-picking beans to brewing the perfect cup, we’re committed to offering you the finest coffee experience with every sip.",
    },
    panels: [
      {
        panelImage: "images/brewed-bliss-coffee/coffee-beans.jpg",
        panelHeader: "Premium Coffee Beans",
        panelDesc:
          "We source our coffee beans from the world’s best coffee-growing regions, ensuring every cup is packed with rich, full-bodied flavor.",
        panelBtnLink: "shop.html", // Button Link
        panelEnableBtn: "enabled",
      },
      {
        panelImage: "images/brewed-bliss-coffee/latte-art.jpg",
        panelHeader: "Artisan Coffees",
        panelDesc:
          "From espressos to lattes, our artisan coffees are brewed to perfection by our skilled baristas, ensuring every cup is a masterpiece.",
        panelBtnLink: "shop.html", // Button Link
        panelEnableBtn: "enabled",
      },
      {
        panelImage: "images/brewed-bliss-coffee/cold-brew.jpg",
        panelHeader: "Cold Brew Specials",
        panelDesc:
          "Our cold brew coffee is made with care and precision, delivering a refreshing and smooth coffee experience perfect for warm days.",
        panelBtnLink: "shop.html", // Button Link
        panelEnableBtn: "enabled",
      },
    ],
    footer: {
      footerHeader: "Join Our Coffee Lovers' Club", // Footer Header
      footerSubtext:
        "Get access to exclusive offers, events, and coffee recipes.", // Footer Subtext
      footerBtnLink: "https://www.brewedblisscoffee.com/club", // Footer Button Link
      footerEnableBtn: "enabled", // Enable footer button
    },
  },
];

// just a Template
let blankObj = {
  pageName: "", // Blank page name
  header: {
    headerInput: "", // Blank brand name
    subtext: "", // Blank subtext
    bannerImage: "", // Blank banner image
  },
  ourStory: {
    ourStoryHeader: "", // Blank Our Story header
    ourStorySubtext: "", // Blank Our Story subtext
  },
  panels: [
    {
      panelImage: "", // Blank panel image
      panelHeader: "", // Blank panel header
      panelDesc: "", // Blank panel description
      panelBtnLink: "", // Blank button link
      panelEnableBtn: "disabled", // Default to disabled
    },
    {
      panelImage: "", // Blank panel image
      panelHeader: "", // Blank panel header
      panelDesc: "", // Blank panel description
      panelBtnLink: "", // Blank button link
      panelEnableBtn: "disabled", // Default to disabled
    },
    {
      panelImage: "", // Blank panel image
      panelHeader: "", // Blank panel header
      panelDesc: "", // Blank panel description
      panelBtnLink: "", // Blank button link
      panelEnableBtn: "disabled", // Default to disabled
    },
  ],
  footer: {
    footerHeader: "", // Blank footer header
    footerSubtext: "", // Blank footer subtext
    footerBtnLink: "", // Blank footer button link
    footerEnableBtn: "disabled", // Default to disabled
  },
};

// parse the URL to extract the query parameter and compare it against the pageName values in pagesData
function getBrandIndexFromURL() {
  // Extract the URL query string
  const params = new URLSearchParams(window.location.search);

  // Get the 'brandName' query parameter
  const brandName = params.get("brandName");

  // If 'brandName' exists, find its index in pagesData
  if (brandName) {
    const index = pagesData.findIndex(
      (page) => page.pageName.toLowerCase() === brandName.toLowerCase()
    );

    // Return the index (or -1 if not found)
    return index;
  }

  // Return -1 if no 'brandName' is in the URL
  return -1;
}

// Once you getBrandIndexFromUrl, then enter the index into this function
// Loop Through Panels: page.panels.map(...).join("") generates HTML for each panel dynamically.
// Dynamic Button Logic: Checks the panelEnableBtn or footerEnableBtn keys to conditionally render buttons.
function generatePageInnerHTML(pageIndex) {
  const page = pagesData[pageIndex];

  // Example for a header section
  const headerHTML = `
    <section id="banner" class="style2">
      <div class="inner">
        <span class="image">
          <img src="${page.header.bannerImage}" alt="${page.header.headerInput}" />
        </span>
        <header class="major">
          <h1>${page.header.headerInput}</h1>
        </header>
        <div class="content">
          <p>${page.header.subtext}</p>
        </div>
      </div>
    </section>
  `;

  // Example for the "Our Story" section
  const ourStoryHTML = `
    <section id="one">
      <div class="inner">
        <header class="major">
          <h2>${page.ourStory.ourStoryHeader}</h2>
        </header>
        <p>${page.ourStory.ourStorySubtext}</p>
      </div>
    </section>
  `;

  // Example for the "Panels" section
  const panelsHTML = page.panels
    .map(
      (panel) => `
      <section>
        <a href="${panel.panelBtnLink}" class="image">
          <img src="${panel.panelImage}" alt="${panel.panelHeader}" />
        </a>
        <div class="content">
          <div class="inner">
            <header class="major">
              <h3>${panel.panelHeader}</h3>
            </header>
            <p>${panel.panelDesc}</p>
            ${
              panel.panelEnableBtn === "enabled"
                ? `
                  <a href="${panel.panelBtnLink}" class="button">Learn more</a>
                  `
                : ""
            }
          </div>
        </div>
      </section>
    `
    )
    .join("");

  // Example for the footer section
  const footerHTML = `
    <section id="three">
      <div class="inner">
        <header class="major">
          <h2>${page.footer.footerHeader}</h2>
        </header>
        <p>${page.footer.footerSubtext}</p>
        ${
          page.footer.footerEnableBtn === "enabled"
            ? `<ul class="actions">
                <li><a href="${page.footer.footerBtnLink}" class="button next" target="_blank">Brand Information</a></li>
              </ul>`
            : ""
        }
      </div>
    </section>
  `;

  // Combine all sections into a single HTML string
  const pageInnerHTML = `
    ${headerHTML}
    ${ourStoryHTML}
    <section id="two" class="spotlights">
      ${panelsHTML}
    </section>
    ${footerHTML}
  `;

  return pageInnerHTML;
}

//Write code to insert innerHTML

/////////////////
// ADMIN PANEL //
/////////////////
// Extracts the values from all the fields in content-editor.html and returns an object that can be pushed to server
function collectPanelData() {
  //array returned
  // Get the number of panels specified
  const panelCount = parseInt(document.getElementById("panel-count").value, 10);
  const panels = [];

  for (let i = 1; i <= panelCount; i++) {
    // Dynamically construct the field IDs
    const panelImage = document.getElementById(`panel-${i}-image`)?.value || "";
    const panelHeader =
      document.getElementById(`panel-${i}-header`)?.value || "";
    const panelDesc = document.getElementById(`panel-${i}-desc`)?.value || "";
    const panelBtnLink =
      document.getElementById(`panel-${i}-btn-link`)?.value || "";
    const panelEnableBtn =
      document.getElementById(`panel-${i}-enable-btn`)?.value || "";

    // Push the collected data to the panels array
    panels.push({
      panelImage,
      panelHeader,
      panelDesc,
      panelBtnLink,
      panelEnableBtn,
    });
  }

  return panels;
}

function collectPageData() {
  //object returned
  // Collect general header data
  const brandName = document.getElementById("header-input").value;
  const subtext = document.getElementById("subtext-textarea").value;
  const bannerImage = document.getElementById("banner-image").value;

  // Collect "Our Story" data
  const ourStoryHeader = document.getElementById("our-story-header").value;
  const ourStorySubtext = document.getElementById("our-story-subtext").value;

  // Collect panels data
  const panels = collectPanelData();

  // Collect footer data
  const footerHeader = document.getElementById("footer-header").value;
  const footerSubtext = document.getElementById("footer-subtext").value;
  const footerBtnLink = document.getElementById("footer-btn-link").value;
  const footerEnableBtn = document.getElementById("footer-enable-btn").value;

  // Combine everything into one object
  // This objects format should be the same format as pagesData
  const pageData = {
    pageName: brandName, //
    header: {
      headerInput: brandName,
      subtext,
      bannerImage,
    },
    ourStory: {
      ourStoryHeader,
      ourStorySubtext,
    },
    panels, // Panels data array
    footer: {
      footerHeader,
      footerSubtext,
      footerBtnLink,
      footerEnableBtn,
    },
  };

  return pageData;
}
