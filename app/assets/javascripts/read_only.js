$( document ).ready(function(){
  $("#filter-read").on("click", function(){
    var filter = true;
    var table = document.getElementById("link-table");
    var tr = table.getElementsByTagName("tr");

    for (i = 1; i < tr.length; i++) {
      var td = tr[i].children[2]
      if (td) {
        if (td.innerHTML == " true") {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  })
})
