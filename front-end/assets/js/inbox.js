document.addEventListener("DOMContentLoaded", function () {
  var coll = document.getElementsByClassName("collapsible");
  for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      var content = this.nextElementSibling;
      if (content.style.display === "table-row") {
        content.style.display = "none";
      } else {
        content.style.display = "table-row";
      }
    });
  }
});
