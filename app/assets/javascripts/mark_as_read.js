$( document ).ready(function(){
  $("#links-list").on('click', ".mark-read", function(element){
    $('#links-list').empty()
    var id = this.parentElement.parentElement.getAttribute("data-id")
    var theUrl = "/api/v1/links/" + id
    $.ajax({
      type: "PUT" ,
       url: "/api/v1/links/" + id,
       data: {id: id} ,
       success: function(response){
         renderAllLinks()
       },
       error: function(error){
         renderAllLinks()
       }
     })
  })
})
