document.getElementById("dashboard-selector").addEventListener("change", function() {
    console.log("hi" + document.getElementById("dashboard-selector").value)
    const contentPanel = document.getElementById("content-panel");
    contentPanel.innerHTML = ""
    switch (document.getElementById("dashboard-selector").value){
        case "form-submissions":
            contentPanel.innerHTML = `<iframe class="component" src="inbox.html" title="Inbox"></iframe>`;
            console.log(contentPanel.innerHTML)

        case "content-editor":

        case "website-statistics":

        case "accounts":

    }
})