// function loadSubmissions() {
//   //detect what category is selected

//   const categorySelected = document.getElementById("business-type").value;

//   // Get all submissions from that category
//   const filteredSubmissions = submissionsData.filter(
//     (submission) => submission.submissionType === categorySelected
//   );

//   // Set page to 1 (not implemented yet)

//   // Table we will insert html into
//   const tableWrapper = document.getElementById("table-wrapper");
//   tableWrapper.innerHTML = "";

//   // Define table headers for each category
//   const headers = {
//     retailer: [
//       "Company Name",
//       "Primary Contact",
//       "Email Address",
//       "Phone Number",
//       "Time Submitted",
//     ],
//     "small-business": [
//       "Company Name",
//       "Primary Contact",
//       "Product",
//       "Email Address",
//       "Phone Number",
//       "Time Submitted",
//     ],
//     other: ["Name", "Email", "Message"],
//   };

//   // Build the table structure
//   const selectedHeaders = headers[categorySelected];
//   if (selectedHeaders) {
//     let tableHTML = `
//       <table>
//         <thead>
//           <tr>
//             ${selectedHeaders.map((header) => `<th>${header}</th>`).join("")}
//           </tr>
//         </thead>
//         <tbody>
//     `;

//     // Generate rows based on filtered submissions
//     filteredSubmissions.forEach((submission) => {
//       if (categorySelected === "retailer") {
//         tableHTML += `
//           <tr class="collapsible">
//             <td>${submission.companyName}</td>
//             <td>${submission.contactPerson.name}</td>
//             <td><a href="mailto:${submission.contactPerson.email}">${submission.contactPerson.email}</a></td>
//             <td class="phone-num">${submission.contactPerson.phoneNumber}</td>
//             <td>${submission.time}</td>
//           </tr>
//           <tr class="content">
//             <td colspan="${selectedHeaders.length}">
//               <strong>Company Name:</strong> ${submission.companyName}<br>
//               <strong>Primary Contact:</strong> ${submission.contactPerson.name}, ${submission.contactPerson.title}<br>
//               <strong>Email:</strong> <a href="mailto:${submission.contactPerson.email}">${submission.contactPerson.email}</a><br>
//               <strong>Company Website:</strong> <a href="${submission.companyWebsite}">${submission.companyWebsite}</a><br>
//               <strong>Registered Business Address:</strong> ${submission.registeredBusinessAddress}<br>
//               <strong>Company Type:</strong> ${submission.companyType}<br>
//               <strong>TIN or EIN:</strong> ${submission.tinOrEin}<br>
//               <strong>Primary Contact LinkedIn:</strong> <a href="${submission.contactPerson.linkedIn}">LinkedIn Profile</a><br>
//               <strong>Message:</strong> ${submission.message}
//             </td>
//           </tr>
//         `;
//       } else if (categorySelected === "small-business") {
//         tableHTML += `
//           <tr class="collapsible">
//             <td>${submission.companyName}</td>
//             <td>${submission.contactPerson.name}</td>
//             <td>${submission.product}</td>
//             <td><a href="mailto:${submission.contactPerson.email}">${submission.contactPerson.email}</a></td>
//             <td class="phone-num">${submission.contactPerson.phoneNumber}</td>
//             <td>${submission.time}</td>
//           </tr>
//           <tr class="content">
//             <td colspan="${selectedHeaders.length}">
//               <strong>Company Name:</strong> ${submission.companyName}<br>
//               <strong>Primary Contact:</strong> ${submission.contactPerson.name}, ${submission.contactPerson.title}<br>
//               <strong>Product:</strong> ${submission.product}<br>
//               <strong>Email:</strong> <a href="mailto:${submission.contactPerson.email}">${submission.contactPerson.email}</a><br>
//               <strong>Company Website:</strong> <a href="${submission.companyWebsite}">${submission.companyWebsite}</a><br>
//               <strong>Registered Business Address:</strong> ${submission.registeredBusinessAddress}<br>
//               <strong>Primary Contact LinkedIn:</strong> <a href="${submission.contactPerson.linkedIn}">LinkedIn Profile</a><br>
//               <strong>Message:</strong> ${submission.message}
//             </td>
//           </tr>
//         `;
//       } else if (categorySelected === "other") {
//         tableHTML += `
//           <tr class="collapsible">
//             <td>${submission.name}</td>
//             <td><a href="mailto:${submission.email}">${submission.email}</a></td>
//             <td>${submission.message}</td>
//             <td>${submission.time}</td>
//           </tr>
//         `;
//       }
//     });

//     tableHTML += `
//         </tbody>
//       </table>
//     `;

//     tableWrapper.innerHTML = tableHTML;
//   }

//   //make collapsable
//   var coll = document.getElementsByClassName("collapsible");
//   for (var i = 0; i < coll.length; i++) {
//     coll[i].addEventListener("click", function () {
//       var content = this.nextElementSibling;
//       if (content.style.display === "table-row") {
//         content.style.display = "none";
//       } else {
//         content.style.display = "table-row";
//       }
//     });
//   }
// }

function loadSubmissions(page = 1) {
  // Detect what category is selected
  const categorySelected = document.getElementById("business-type").value;

  // Get all submissions from that category
  const filteredSubmissions = submissionsData.filter(
    (submission) => submission.submissionType === categorySelected
  );

  // Pagination setup
  const submissionsPerPage = 20;
  const totalPages = Math.ceil(filteredSubmissions.length / submissionsPerPage);

  // Calculate start and end indexes for the current page
  const startIndex = (page - 1) * submissionsPerPage;
  const endIndex = startIndex + submissionsPerPage;
  const submissionsToDisplay = filteredSubmissions.slice(startIndex, endIndex);

  // Table we will insert HTML into
  const tableWrapper = document.getElementById("table-wrapper");
  tableWrapper.innerHTML = "";

  // Define table headers for each category
  const headers = {
    retailer: [
      "Company Name",
      "Primary Contact",
      "Email Address",
      "Phone Number",
      "Time Submitted",
    ],
    "small-business": [
      "Company Name",
      "Primary Contact",
      "Product",
      "Email Address",
      "Phone Number",
      "Time Submitted",
    ],
    other: ["Name", "Email", "Message"],
  };

  // Build the table structure
  const selectedHeaders = headers[categorySelected];
  if (selectedHeaders) {
    let tableHTML = `
      <table>
        <thead>
          <tr>
            ${selectedHeaders.map((header) => `<th>${header}</th>`).join("")}
          </tr>
        </thead>
        <tbody>
    `;

    // Generate rows based on filtered submissions
    submissionsToDisplay.forEach((submission) => {
      if (categorySelected === "retailer") {
        tableHTML += `
          <tr class="collapsible">
            <td>${submission.companyName}</td>
            <td>${submission.contactPerson.name}</td>
            <td><a href="mailto:${submission.contactPerson.email}">${submission.contactPerson.email}</a></td>
            <td class="phone-num">${submission.contactPerson.phoneNumber}</td>
            <td>${submission.time}</td>
          </tr>
          <tr class="content">
            <td colspan="${selectedHeaders.length}">
              <strong>Company Name:</strong> ${submission.companyName}<br>
              <strong>Primary Contact:</strong> ${submission.contactPerson.name}, ${submission.contactPerson.title}<br>
              <strong>Email:</strong> <a href="mailto:${submission.contactPerson.email}">${submission.contactPerson.email}</a><br>
              <strong>Company Website:</strong> <a href="${submission.companyWebsite}">${submission.companyWebsite}</a><br>
              <strong>Registered Business Address:</strong> ${submission.registeredBusinessAddress}<br>
              <strong>Company Type:</strong> ${submission.companyType}<br>
              <strong>TIN or EIN:</strong> ${submission.tinOrEin}<br>
              <strong>Primary Contact LinkedIn:</strong> <a href="${submission.contactPerson.linkedIn}">LinkedIn Profile</a><br>
              <strong>Message:</strong> ${submission.message}
            </td>
          </tr>
        `;
      } else if (categorySelected === "small-business") {
        tableHTML += `
          <tr class="collapsible">
            <td>${submission.companyName}</td>
            <td>${submission.contactPerson.name}</td>
            <td>${submission.product}</td>
            <td><a href="mailto:${submission.contactPerson.email}">${submission.contactPerson.email}</a></td>
            <td class="phone-num">${submission.contactPerson.phoneNumber}</td>
            <td>${submission.time}</td>
          </tr>
          <tr class="content">
            <td colspan="${selectedHeaders.length}">
              <strong>Company Name:</strong> ${submission.companyName}<br>
              <strong>Primary Contact:</strong> ${submission.contactPerson.name}, ${submission.contactPerson.title}<br>
              <strong>Product:</strong> ${submission.product}<br>
              <strong>Email:</strong> <a href="mailto:${submission.contactPerson.email}">${submission.contactPerson.email}</a><br>
              <strong>Company Website:</strong> <a href="${submission.companyWebsite}">${submission.companyWebsite}</a><br>
              <strong>Registered Business Address:</strong> ${submission.registeredBusinessAddress}<br>
              <strong>Primary Contact LinkedIn:</strong> <a href="${submission.contactPerson.linkedIn}">LinkedIn Profile</a><br>
              <strong>Message:</strong> ${submission.message}
            </td>
          </tr>
        `;
      } else if (categorySelected === "other") {
        tableHTML += `
          <tr class="collapsible">
            <td>${submission.name}</td>
            <td><a href="mailto:${submission.email}">${submission.email}</a></td>
            <td>${submission.message}</td>
            <td>${submission.time}</td>
          </tr>
          <tr class="content">
            <td colspan="${selectedHeaders.length}">
              <strong>Company Name:</strong> ${submission.name}<br>
              <strong>Email:</strong> <a href="mailto:${submission.email}">${submission.email}</a><br>
              <strong>Message:</strong> ${submission.message}<br>
            </td>
          </tr>
        `;
      }
    });

    tableHTML += `</tbody></table>`;

    // Add pagination
    tableHTML += `
      <ul class="pagination">
        <li><a href="#" class="button small ${
          page === 1 ? "disabled" : ""
        }" data-page="${page - 1}">Prev</a></li>
    `;

    for (let i = 1; i <= totalPages; i++) {
      tableHTML += `
        <li><a href="#" class="page ${
          i === page ? "active" : ""
        }" data-page="${i}">${i}</a></li>
      `;
    }

    tableHTML += `
        <li><a href="#" class="button small ${
          page === totalPages ? "disabled" : ""
        }" data-page="${page + 1}">Next</a></li>
      </ul>
    `;

    tableWrapper.innerHTML = tableHTML;

    // Add event listeners for pagination buttons
    document.querySelectorAll(".pagination a").forEach((button) => {
      if (!button.classList.contains("disabled")) {
        button.addEventListener("click", (e) => {
          e.preventDefault();
          const newPage = parseInt(button.dataset.page, 10);
          loadSubmissions(newPage);
        });
      }
    });

    // Make rows collapsible
    const collapsibleRows = document.getElementsByClassName("collapsible");
    for (const row of collapsibleRows) {
      row.addEventListener("click", function () {
        const content = this.nextElementSibling;
        content.style.display =
          content.style.display === "table-row" ? "none" : "table-row";
      });
    }
  }
}

function setupBusinessTypeListener() {
  const businessTypeSelect = document.getElementById("business-type");

  if (businessTypeSelect) {
    businessTypeSelect.addEventListener("change", () => {
      loadSubmissions();
    });
  }
}

function changePage(num) {
  //change page to num
  //detect category
  //get those 20 submissions
  //make data into a html format and insert it
}

// Sample Data Format
let submissionsData = [
  {
    submissionType: "retailer",
    companyName: "Example Corp",
    companyWebsite: "https://example.com",
    registeredBusinessAddress: "123 Business St, Dallas, TX 75201",
    companyType: "LLC",
    tinOrEin: "12-3456789",
    contactPerson: {
      name: "John Doe",
      title: "CEO",
      email: "john.doe@example.com",
      linkedIn: "https://www.LinkedIn.com",
      phoneNumber: "123",
    },
    message: "Hello, we are interested in partnering with your company.",
    time: "3:30pm",
  },
  {
    submissionType: "retailer",
    companyName: "Example Corp",
    companyWebsite: "https://example.com",
    registeredBusinessAddress: "123 Business St, Dallas, TX 75201",
    companyType: "LLC",
    tinOrEin: "12-3456789",
    contactPerson: {
      name: "John Doe",
      title: "CEO",
      email: "john.doe@example.com",
      linkedIn: "https://www.LinkedIn.com",
      phoneNumber: "123",
    },
    message: "Hello, we are interested in partnering with your company.",
    time: "3:30pm",
  },
  {
    submissionType: "other",
    name: "Aiden Walker",
    email: "bob@bob.com",
    message: "Hello, we are interested in partnering with your company.",
    time: "3:31pm",
  },
  {
    submissionType: "small-business",
    companyName: "Example Corp",
    product: "Candy",
    companyWebsite: "https://example.com",
    registeredBusinessAddress: "123 Business St, Dallas, TX 75201",
    contactPerson: {
      name: "John Doe",
      title: "CEO",
      email: "john.doe@example.com",
      linkedIn: "https://www.LinkedIn.com",
      phoneNumber: "4698655785",
    },
    message: "Hello, we are interested in partnering with your company.",
    time: "3:30pm",
  },
];

//Generate random data
const generateRandomSubmissions = () => {
  const categories = ["retailer", "small-business", "other"];
  let submissions = [];

  for (let i = 0; i < 1000; i++) {
    const category = categories[Math.floor(Math.random() * categories.length)];

    if (category === "retailer") {
      submissions.push({
        submissionType: "retailer",
        companyName: `Retailer Corp ${i + 1}`,
        companyWebsite: `https://retailer${i + 1}.com`,
        registeredBusinessAddress: `${i + 1} Retailer St, Dallas, TX 75201`,
        companyType: i % 2 === 0 ? "LLC" : "Corporation",
        tinOrEin: `12-34${567890 + i}`,
        contactPerson: {
          name: `Retailer Contact ${i + 1}`,
          title: i % 2 === 0 ? "CEO" : "Manager",
          email: `contact${i + 1}@retailer.com`,
          linkedIn: `https://linkedin.com/in/retailer${i + 1}`,
          phoneNumber: `123-456-78${i.toString().padStart(2, "0")}`,
        },
        message: `Hello, this is retailer ${
          i + 1
        }, and we're interested in partnering with you.`,
        time: `${2 + (i % 12)}:${i % 60}pm`,
      });
    } else if (category === "small-business") {
      submissions.push({
        submissionType: "small-business",
        companyName: `Small Biz ${i + 1}`,
        product: `Product ${i + 1}`,
        companyWebsite: `https://smallbiz${i + 1}.com`,
        registeredBusinessAddress: `${i + 1} Small Biz St, Dallas, TX 75201`,
        contactPerson: {
          name: `Small Biz Contact ${i + 1}`,
          title: "Owner",
          email: `owner${i + 1}@smallbiz.com`,
          linkedIn: `https://linkedin.com/in/smallbiz${i + 1}`,
          phoneNumber: `456-789-12${i.toString().padStart(2, "0")}`,
        },
        message: `Hello, this is small business ${
          i + 1
        }, and we would like to discuss opportunities.`,
        time: `${9 + (i % 12)}:${(15 + i) % 60}am`,
      });
    } else if (category === "other") {
      submissions.push({
        submissionType: "other",
        name: `Other Name ${i + 1}`,
        email: `other${i + 1}@example.com`,
        message: `Hi, this is an inquiry from other contact ${i + 1}.`,
        time: `${11 + (i % 12)}:${(30 + i) % 60}pm`,
      });
    }
  }

  return submissions;
};

// Generate 1000 submissions
submissionsData = generateRandomSubmissions();