
$(document).ready(function(){


  $("#new-link").on('click', createLink);
})

function createLink(event){
  event.preventDefault();
  console.log("win")


 $.ajax({
   type: "POST",
    url: "/api/v1/links",
    data: getLinkData(),
    success: function(response){
      renderLink(response)
    },
    error: function(error){
      displayFailure(error)
    },
  })
}

function getLinkData() {
  var newLinkTitle = $("#link_title").val();
  var newLinkUrl   = $("#link_url").val();
  return {title: newLinkTitle, url: newLinkUrl}
}
  function renderLink(link){
    $("#links-list").prepend( linkHTML(link) )
    clearLink();
  }

  function linkHTML(link) {
    if (link.read) {
      var button = "<button id=" + link.id + " class='mark-read'>Mark as unRead</button>"
    } else {
      var button = "<button id=" + link.id + " class='mark-read'>Mark as Read</button>"
    }


      return `<tr class='link' data-id='${link.id}' id="link-${link.id}">
                <td class='link-title'>${ link.title }</td>
                <td class='link-url'>${ link.url }</td>

                <td class="link_read"> ${ link.read }</td>
                <td class="link_buttons"> ${button}</td>
                
                <td>
                <form  action="/links/${link.id}/edit">
                <input type="submit" value="Edit">
                </form>
                </td>

              </tr>`
  }

  function clearLink() {
    $("#link_title").val("");
    $("#link_url").val("");
  }
