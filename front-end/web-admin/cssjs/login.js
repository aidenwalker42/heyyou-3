import { getAPI } from "../../assets/js/api.js"

document
  .querySelector("#login-username")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      // code for enter
      login();
    }
  });

document
  .querySelector("#login-password")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      // code for enter
      login();
    }
  });

let attemptCount = 0;

async function login() {
  let username = document.getElementById("login-username").value;
  let password = document.getElementById("login-password").value;
  let res;
  console.log(getAPI())
  try {
    res = await axios.get(getAPI() + "admins", {
      params: { username: username, password: password },
    });
  } catch (err) {
    console.error(err);
    res = { data: { msg: "fail" } };
  }
  if (res.data.msg == "Login Successful!") {
    window.open("./admin-panel.html", "_self"); //maybe load in html from server eventually
  } else {
    attemptCount++;
    // Get the login container element where the error message will go
    const loginContainer = document.querySelector(".login-container");
    // If error exists
    const existingError = document.querySelector(".error-message");
    if (existingError) {
      existingError.remove();
    }

    // Create a "Login Failed" message with the attempt count
    const errorMessage = document.createElement("p");
    errorMessage.textContent = `Login Failed (x${attemptCount})`;
    errorMessage.classList.add("error-message"); // Add a class for styling
    errorMessage.style.color = "red"; // Optional: Style it as red

    // Insert the error message below the password field
    loginContainer.appendChild(errorMessage);
  }
  console.log(res.data);
}
