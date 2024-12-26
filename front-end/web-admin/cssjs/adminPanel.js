document
  .getElementById("dashboard-selector")
  .addEventListener("change", function () {
    const contentPanel = document.getElementById("content-panel");
    contentPanel.innerHTML = "";
    console.log(sessionStorage.getItem("username"));
    switch (document.getElementById("dashboard-selector").value) {
      case "form-submissions":
        contentPanel.innerHTML = `<iframe class="component" src="inbox.html" title="Inbox"></iframe>`;

      case "content-editor":

      case "website-statistics":

      case "accounts":
    }
  });
