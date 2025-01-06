//Example Object with 5 pages

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

/////////////

//Template

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

// Collect the values from all the fields
const brandName = document.getElementById("header-input").value;
const subtext = document.getElementById("subtext-textarea").value;
const bannerImage = document.getElementById("banner-image").files[0]; // For file input, access the first file
const ourStoryHeader = document.getElementById("our-story-header").value;
const ourStorySubtext = document.getElementById("our-story-subtext").value;
const panel1Image = document.getElementById("panel-1-image").files[0];
const panel1Header = document.getElementById("panel-1-header").value;
const panel1Desc = document.getElementById("panel-1-desc").value;
const panel1BtnLink = document.getElementById("panel-1-btn-link").value;
const panel1EnableBtn = document.getElementById("panel-1-enable-btn").value;
const panel2Image = document.getElementById("panel-2-image").files[0];
const panel2Header = document.getElementById("panel-2-header").value;
const panel2Desc = document.getElementById("panel-2-desc").value;
const panel2BtnLink = document.getElementById("panel-2-btn-link").value;
const panel2EnableBtn = document.getElementById("panel-2-enable-btn").value;
const panel3Image = document.getElementById("panel-3-image").files[0];
const panel3Header = document.getElementById("panel-3-header").value;
const panel3Desc = document.getElementById("panel-3-desc").value;
const panel3BtnLink = document.getElementById("panel-3-btn-link").value;
const panel3EnableBtn = document.getElementById("panel-3-enable-btn").value;
const footerHeader = document.getElementById("footer-header").value;
const footerSubtext = document.getElementById("footer-subtext").value;
const footerBtnLink = document.getElementById("footer-btn-link").value;
const footerEnableBtn = document.getElementById("footer-enable-btn").value;

// Output all values (you can log them or use them as needed)
console.log({
  brandName,
  subtext,
  bannerImage,
  ourStoryHeader,
  ourStorySubtext,
  panel1Image,
  panel1Header,
  panel1Desc,
  panel1BtnLink,
  panel1EnableBtn,
  panel2Image,
  panel2Header,
  panel2Desc,
  panel2BtnLink,
  panel2EnableBtn,
  panel3Image,
  panel3Header,
  panel3Desc,
  panel3BtnLink,
  panel3EnableBtn,
  footerHeader,
  footerSubtext,
  footerBtnLink,
  footerEnableBtn,
});
