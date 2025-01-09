const STORAGE_ZONE_NAME = "heyyou1";
const ACCESS_KEY = "53295af0-2b0d-4032-8da5fa014809-d450-470e";
const REGION = ""; // German region (use 'de' for Germany)
const BASE_HOSTNAME = "storage.bunnycdn.com";

const URL = `https://${
  REGION ? `${REGION}.` : ""
}${BASE_HOSTNAME}/${STORAGE_ZONE_NAME}/json/main.json`;

const headers = {
  AccessKey: ACCESS_KEY,
};

// Fetch the existing JSON file from Bunny CDN
axios
  .get(URL, { headers })
  .then((response) => {
    // Handle the response (the existing JSON data)
    let existingData = response.data;
    console.log("Existing JSON:", existingData);

    // Modify the existing JSON data (append or update)
    existingData.newField = "New value"; // Example of adding a new field

    // Step 2: Upload the modified JSON data back to Bunny CDN
    const updatedData = JSON.stringify(existingData);

    axios
      .put(URL, updatedData, {
        headers: {
          AccessKey: ACCESS_KEY,
          "Content-Type": "application/json",
        },
      })
      .then((uploadResponse) => {
        console.log("File successfully updated:", uploadResponse.data);
      })
      .catch((error) => {
        console.error("Error uploading updated file:", error);
      });
  })
  .catch((error) => {
    console.error("Error fetching existing file:", error);
  });

axios.get(URL, { headers }).then((response) => {
  // Handle the response (the existing JSON data)
  let existingData = response.data;
  console.log("Existing JSON:", existingData);
});
