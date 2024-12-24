import { loadCustomerContactCollection } from "../loadCollections";

const sampleData = {
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
  }

async function DFCCC(submissionData) {
    const customerContactCol = await loadCustomerContactCollection()
    let requiredKeys = ["submissionType", "companyName", "product", "companyWebsite", "registeredBusinessAddress", "contactPerson", "message", "time", "convertUtcToLocal"]
    let requiredKeysCP = ["name", "title", "email", "linkedIn", "phoneNumber"]
    
    // if entries match
    if (Object.keys(submissionData) !== requiredKeys) {
        return "Submission entries to not match required keys, possibly wrong order"
    }
    // Checking if too much data
    const blob = new Blob(JSON.stringify(obj))
    if (blob.size > 100000){
        return "Submission too large"
    }
    for(let x in requiredKeys){
        if(x == "contactPerson"){
            // checking if entries match contact person
            if (Object.keys(submissionData[x] !== requiredKeysCP)){
                return "Contact person entries do not match required keys, possibly wrong order"
            }
            // checking if not a string in contact person
            for(let y in requiredKeysCP){
                if(typeof submissionData.contactPerson[y] !== "string"){
                    return "Bad Contact Person"
                }
            } 
        } else {
            // or not a string in normal
            if(typeof submissionData[x] !== "string" && x != "convertUtcToLocal"){
                return "One of the entries is not a string"
            }
            if (submissionData[x] instanceof Date && x == "convertUtcToLocal"){
                return "Bad time"
            }
        }
    }
    if(await customerContactCol.find(submissionData).toArray().length > 0){
        return "Duplicate Entry"
    }
    return "Valid"
}

export { DFCCC }