import { loadAdminsCollection } from "./loadCollections.js";

async function checkCredentials(username, password) {
    const adminsCol = await loadAdminsCollection()
    let credentialsValid
    
    // Searching for entry with both username and password in database
    let adminReturn = await adminsCol.find({username: username, password: password}).toArray()

    // If one exists: true, else: false
    if(adminReturn[0] != undefined){
        credentialsValid = true
    } else {
        credentialsValid = false
    }

    // Return
    return credentialsValid
}

export {checkCredentials}