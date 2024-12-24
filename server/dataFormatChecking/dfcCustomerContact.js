const sampleData = {
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
}

const DFCCC = (submissionData) => {
    let requiredKeys = ["submissionType", "companyName", "companyWebsite", "registeredBusinessAddress", "companyType", "tinOrEin", "conactPerson", "message", "time"]
    let requiredKeysCP = ["name", "title", "email", "linkedIn", "phoneNumber"]
    if (Object.keys(submissionData) !== requiredKeys)
    for(let x in requiredKeys){
        if(x == "contactPerson"){
            // 
            for(let y in requiredKeysCP){
                if(typeof submissionData.contactPerson[y] !== "string"){
                    return false
                }
            } 
        } else {
            // or not a string
            if(typeof submissionData[x] !== "string"){
                return false
            }
        }
    }
    return true
}

export { DFCCC }