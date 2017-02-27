
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
    $("#links-list").append( linkHTML(link) )
    clearLink();
  }

  function linkHTML(link) {

      return `<div class='link' data-id='${link.id}' id="link-${link.id}">
                <p class='link-title'>${ link.title }</p>
                <p class='link-url'>${ link.url }</p>

                <p class="link_read">
                  ${ link.read }
                </p>
                <p class="link_buttons">
                  <button class="mark-read">Mark as Read</button>
                  <button class='edit-link'>Edit</button>
                  <button class='delete-link'>Delete</button>
                </p>
              </div>`
  }

  function clearLink() {
    newLinkTitle.val("");
    newLinkUrl.val("");
  }
