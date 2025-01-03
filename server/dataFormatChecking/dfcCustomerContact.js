import { loadCustomerContactCollection } from "../loadCollections.js";

let submissionsData = [
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
    time: "2024-12-23T15:30:15.000Z", // UTC time
    convertUtcToLocal: function () {
      const utcDate = new Date(this.time); // Convert UTC time string to Date object
      const options = {
        month: "2-digit",
        day: "2-digit",
        year: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true, // Ensure am/pm format
      };
      const localDate = utcDate.toLocaleString("en-US", options); // Convert to local time in desired format
      return localDate.replace(/,/, "").replace(/:/g, ":").toLowerCase(); // Clean up the format
    },
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
    time: "2024-12-24T01:11:56.000Z", // UTC time
    convertUtcToLocal: function () {
      const utcDate = new Date(this.time); // Convert UTC time string to Date object
      const options = {
        month: "2-digit",
        day: "2-digit",
        year: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true, // Ensure am/pm format
      };
      const localDate = utcDate.toLocaleString("en-US", options); // Convert to local time in desired format
      return localDate.replace(/,/, "").replace(/:/g, ":").toLowerCase(); // Clean up the format
    },
  },
  {
    submissionType: "other",
    name: "Aiden Walker",
    email: "bob@bob.com",
    message: "Hello, we are interested in partnering with your company.",
    time: "2024-12-23T15:30:15.000Z", // UTC time
    convertUtcToLocal: function () {
      const utcDate = new Date(this.time); // Convert UTC time string to Date object
      const options = {
        month: "2-digit",
        day: "2-digit",
        year: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true, // Ensure am/pm format
      };
      const localDate = utcDate.toLocaleString("en-US", options); // Convert to local time in desired format
      return localDate.replace(/,/, "").replace(/:/g, ":").toLowerCase(); // Clean up the format
    },
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
    time: "2024-12-23T15:30:15.000Z", // UTC time
    convertUtcToLocal: function () {
      const utcDate = new Date(this.time); // Convert UTC time string to Date object
      const options = {
        month: "2-digit",
        day: "2-digit",
        year: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true, // Ensure am/pm format
      };
      const localDate = utcDate.toLocaleString("en-US", options); // Convert to local time in desired format
      return localDate.replace(/,/, "").replace(/:/g, ":").toLowerCase(); // Clean up the format
    },
  },
];

async function DFCCC(submissionData) {
  const customerContactCol = await loadCustomerContactCollection();
  let requiredKeysSB = [
    "submissionType",
    "companyName",
    "product",
    "companyWebsite",
    "registeredBusinessAddress",
    "contactPerson",
    "message",
    "time",
  ];
  let requiredKeysR = [
    "submissionType",
    "companyName",
    "companyWebsite",
    "registeredBusinessAddress",
    "companyType",
    "tinOrEin",
    "contactPerson",
    "message",
    "time",
  ];
  let requiredKeysO = ["submissionType", "name", "email", "message", "time"];

  let requiredKeysCP = ["name", "title", "email", "linkedIn", "phoneNumber"];
  // First checking submission type
  let currentRK = [];
  switch (submissionData.submissionType) {
    case "small-business":
      if (entryDiscrepancyChecker(submissionData, requiredKeysSB)) {
        return "Submission entries to not match required keys, possibly wrong order";
      }
      currentRK = requiredKeysSB;
      break;
    case "retailer":
      if (entryDiscrepancyChecker(submissionData, requiredKeysR)) {
        return "Submission entries to not match required keys, possibly wrong order";
      }
      currentRK = requiredKeysR;
      break;
    case "other":
      if (entryDiscrepancyChecker(submissionData, requiredKeysO)) {
        return "Submission entries to not match required keys, possibly wrong order";
      }
      currentRK = requiredKeysO;
      break;
    default:
      return "Invalid submission type";
  }

  // Checking if too much data
  console.log(JSON.stringify(submissionData).length);
  if (JSON.stringify(submissionData).length > 5000) {
    return "Submission too large";
  }
  for (let x of currentRK) {
    if (x == "contactPerson") {
      // checking if entries match contact person
      if (entryDiscrepancyChecker(submissionData[x], requiredKeysCP)) {
        return "Contact person entries do not match required keys, possibly wrong order";
      }
      // checking if not a string in contact person
      for (let y of requiredKeysCP) {
        if (typeof submissionData.contactPerson[y] !== "string") {
          return "Bad Contact Person";
        }
      }
    } else {
      // or not a string in normal
      if (typeof submissionData[x] !== "string" && x != "convertUtcToLocal") {
        console.log(x);
        return "One of the entries is not a string";
      }
      if (typeof submissionData[x] !== "function" && x == "convertUtcToLocal") {
        return "Bad time";
      }
    }
  }
  // Cloning submission data first...
  let newSubmissionData = JSON.parse(JSON.stringify(submissionData));
  // And removing time
  delete newSubmissionData.time;
  delete newSubmissionData.convertUtcToLocal;
  console.log(newSubmissionData);
  // Checking for duplicates...
  let duplicateEntries = await customerContactCol
    .find(newSubmissionData)
    .toArray();
  console.log(duplicateEntries);
  if (duplicateEntries.length > 0) {
    return "Duplicate Entry";
  }
  return "Valid";
}

const entryDiscrepancyChecker = (submissionData, requiredKeys) => {
  // if entries match
  if (
    JSON.stringify(Object.keys(submissionData).sort()) !==
    JSON.stringify(requiredKeys.sort())
  ) {
    return true;
  }
  return false;
};

export { DFCCC };
