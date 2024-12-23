document.getElementById("dashboard-selector").addEventListener("change", function() {
    console.log("hi" + document.getElementById("dashboard-selector").value)
    const contentPanel = document.getElementById("content-panel");
    switch (document.getElementById("dashboard-selector").value){
        case "form-submissions":
            contentPanel.innerHTML = `hello`;
            //                <iframe src="inbox.html" title="Inbox"></iframe>

        case "content-editor":

        case "website-statistics":

        case "accounts":

    }
    document.getElementById("content-panel").innerHTML = `
    <iframe
    `
})