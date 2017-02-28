$( document ).ready(function(){
  $("#filter-s").on("keyup", function(){
    var input = document.getElementById("search");
    var filter = input.value.toUpperCase();
    var table = document.getElementById("link-table");
    var tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
      var td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  })
})
