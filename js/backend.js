var CURRENT_CHAPTER_INDEX = undefined;
var CURRENT_PAGE_INDEX = 0;
var MANGA_JSON_DATA = {};

function getPageURL(chapter = CURRENT_CHAPTER_INDEX, page = CURRENT_PAGE_INDEX){
  return MANGA_JSON_DATA["chapters"][chapter]["pages"][page];
}

function updatePageData(){
  CURRENT_LAST_CHAPTER_INDEX = MANGA_JSON_DATA["chapters"].length - 1;
  CURRENT_LAST_PAGE_INDEX = MANGA_JSON_DATA["chapters"][CURRENT_CHAPTER_INDEX]["pages"].length - 1;
}

function renderChaptersList(){
  chaptersMangaTitle.innerHTML = MANGA_JSON_DATA["manga-name"];
  MANGA_JSON_DATA["chapters"].forEach((element, index) => {
    let newCard = Components_ChapterCard(MANGA_JSON_DATA["icon-base64"], element["name"], index);
    chaptersCardContainer.appendChild(newCard);
  });
}


function renderAllPages(chapterIndex = CURRENT_CHAPTER_INDEX){
  MANGA_JSON_DATA["chapters"][chapterIndex]["pages"].forEach((element, index) => {
    readerImageContainer.appendChild( Components_Image(element, index) );
  })
  document.getElementById(`${CURRENT_PAGE_INDEX}-reader-img-index`).style.display = "inline";
}