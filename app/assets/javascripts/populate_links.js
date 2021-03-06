function renderAllLinks(){
  $.ajax({
    type: "GET",
    url: "/api/v1/all_links",
    data: getLinkData(),
    success: function(response){
      whipeLinks()
      renderLinks(response)
    },
  })
}


function renderLinks(response){
  for (var i = 0; i < response.length; i++) {
    $("#links-list").append( linkHTML(response[i]) )
  }
}

function whipeLinks(){
  $("link_list").empty()
}

renderAllLinks()
