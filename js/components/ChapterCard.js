function ComponentsHandler_ChapterCard(chapterIndex, chapterName){
  
  if (CURRENT_CHAPTER_INDEX != parseInt(chapterIndex)){
    readerImageContainer.innerHTML = "";
    CURRENT_CHAPTER_INDEX = parseInt(chapterIndex);
    renderAllPages(parseInt(chapterIndex));
  }
  
  document.title = chapterName;
  
  readerPageNumber.innerHTML = CURRENT_PAGE_INDEX + 1 + " / " + MANGA_JSON_DATA["chapters"][CURRENT_CHAPTER_INDEX]["pages"].length ;
  document.getElementById(`${CURRENT_PAGE_INDEX}-reader-img-index`).style.display = "inline";
  fileContainer.style.display = "none";
  chaptersContainer.style.display = "none";
  readerContainer.style.display = "flex";
}




function Components_ChapterCard(imageSRC, chapterName, chapterIndex){

  let chapterCard = document.createElement("div");
  chapterCard.setAttribute("class", "chapter-card");
  chapterCard.setAttribute("index", chapterIndex);

  let imgCard = document.createElement("img");
  imgCard.setAttribute("class", "chapter-card-icon");
  imgCard.setAttribute("src", imageSRC);

  let nameCard = document.createElement("span");
  nameCard.setAttribute("class", "chapter-card-name");
  nameCard.innerHTML = chapterName;

  let stateCard = document.createElement("span");
  stateCard.setAttribute("class", "chapter-state");
  stateCard.innerHTML = "✖";

  if (MANGAS_CHAPTERS_ALREADY_READ[MANGA_JSON_DATA["manga-name"]] === undefined) {
    MANGAS_CHAPTERS_ALREADY_READ[MANGA_JSON_DATA["manga-name"]] = []
  }

  if (MANGAS_CHAPTERS_ALREADY_READ[MANGA_JSON_DATA["manga-name"]].includes(chapterName) ){
    stateCard.classList.toggle("chapter-state-watched");
    stateCard.innerHTML = "✔";
  }


  stateCard.addEventListener("click", () => {
    stateCard.classList.toggle("chapter-state-watched");
    if (stateCard.innerHTML === "✖"){
      stateCard.innerHTML = "✔";
      MANGAS_CHAPTERS_ALREADY_READ[MANGA_JSON_DATA["manga-name"]].push(chapterName)
    }else{
      stateCard.innerHTML = "✖";
      MANGAS_CHAPTERS_ALREADY_READ[MANGA_JSON_DATA["manga-name"]].splice(MANGAS_CHAPTERS_ALREADY_READ[MANGA_JSON_DATA["manga-name"]].indexOf(chapterName), 1) 
    }
    saveDataInLocal();
  })

  nameCard.addEventListener("click", () => {
    ComponentsHandler_ChapterCard(chapterIndex, chapterName);
  });
  imgCard.addEventListener("click", () => {
    ComponentsHandler_ChapterCard(chapterIndex, chapterName);
  });

  chapterCard.appendChild(imgCard);
  chapterCard.appendChild(nameCard);
  chapterCard.appendChild(stateCard);

  return chapterCard;
}