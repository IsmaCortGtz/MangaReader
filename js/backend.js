var CURRENT_PAGE_INDEX = 0;
var MANGA_JSON_DATA = {};
var LAST_PAGE_RENDERED = undefined;

function getPageURL(page = CURRENT_PAGE_INDEX){
  return MANGA_JSON_DATA["pages"][page];
}


function renderAllPages(){
  readerImageContainer.innerHTML = "";
  MANGA_JSON_DATA["pages"].forEach((element, index) => {
    readerImageContainer.appendChild( Components_Image(element, index) );
  })
  document.getElementById(`${CURRENT_PAGE_INDEX}-reader-img-index`).style.display = "inline";
}