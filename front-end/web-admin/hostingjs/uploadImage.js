let root =
  "https://storage.bunnycdn.com/heyyou1/?AccessKey=53295af0-2b0d-4032-8da5fa014809-d450-470e"; //root

const STORAGE_ZONE_NAME = "heyyou1";
const ACCESS_KEY = "53295af0-2b0d-4032-8da5fa014809-d450-470e";
const REGION = ""; // German region (use 'de' for Germany)
const BASE_HOSTNAME = "storage.bunnycdn.com";

const URL = `https://${
  REGION ? `${REGION}.` : ""
}${BASE_HOSTNAME}/${STORAGE_ZONE_NAME}/img/`;

const headers = {
  AccessKey: ACCESS_KEY,
  "Content-Type": "application/octet-stream",
  accept: "application/json",
};

// Create a file input element dynamically
const input = document.createElement("input");
input.type = "file";
input.accept = "image/*"; // Accepts image files (or change as needed)
document.body.appendChild(input);

// When a file is selected, upload it
input.addEventListener("change", () => {
  const file = input.files[0];
  let finalURL = URL + file.name;
  console.log(finalURL);
  if (!file) {
    console.log("No file selected.");
    return;
  }

  // Upload the file using axios
  const formData = new FormData();
  formData.append("file", file);
  axios
    .put(finalURL, file, { headers })
    .then((response) => {
      console.log("File uploaded successfully:", response.data);
      //if the file uploads, take the finalURL and add Read-Only access key "?AccessKey=fca11f72-f165-433f-becf76644287-5c6f-4e76" to the end and its ready to be sent to server
    })
    .catch((error) => {
      console.error("Error uploading file:", error);
    });
});
