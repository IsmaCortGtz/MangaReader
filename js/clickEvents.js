// FIle picker screen
fileContinueButton.addEventListener("click", async () => {

  if (filePickerInput.files.length != 1){
    window.alert(getTranslationKey("ALERT_NEED_ONE_FILE"));
    console.error(`The numbers of files need to be 1, not ${filePickerInput.files.length}`)
    return;
  }

  let myFile = filePickerInput.files[0];

  if (myFile.type != "application/json"){ 
    console.error(`The file isn't JSON, is ${myFile.type}`);
    window.alert(getTranslationKey("ALERT_FILE_NEED_BE_JSON"));
    return;
  }

  let fileText = await myFile.text();
  MANGA_JSON_DATA = JSON.parse(fileText);

  renderChaptersList();

  document.title = MANGA_JSON_DATA["manga-name"];
  fileContainer.style.display = "none";
  readerContainer.style.display = "none";
  chaptersContainer.style.display = "flex";
});

editFileSavedButton.addEventListener("click", () => {
  editSavedJsonArea.value = JSON.stringify(MANGAS_CHAPTERS_ALREADY_READ, null, 4);
  editFileSavedButton.style.display = "none";
  editSavedJsonArea.style.display = "inline-block";
  jsonSavedButtonsContainer.style.display = "flex";
})

jsonsavedCancelButton.addEventListener("click", () => {
  editFileSavedButton.style.display = "block";
  editSavedJsonArea.style.display = "none";
  jsonSavedButtonsContainer.style.display = "none";
})

jsonSavedSaveButton.addEventListener("click", () => {
  editFileSavedButton.style.display = "block";
  editSavedJsonArea.style.display = "none";
  jsonSavedButtonsContainer.style.display = "none";

  try {
    MANGAS_CHAPTERS_ALREADY_READ = JSON.parse(editSavedJsonArea.value);
    saveDataInLocal();
  } catch(e) {
    console.error(e);
    window.alert(getTranslationKey("ALERT_WRONG_JSON_FORMAT"));
  }
  
})







// Chapters screen
chaptersBackButton.addEventListener("click", () => {
  document.title = "Manga Reader";
  fileContainer.style.display = "flex";
  readerContainer.style.display = "none";
  chaptersContainer.style.display = "none";
  readerImageContainer.innerHTML = "";
  chaptersCardContainer.innerHTML = "";
  CURRENT_CHAPTER_INDEX = undefined;
})








// Reader Screen
readerBackButton.addEventListener("click", () => {
  document.title = MANGA_JSON_DATA["manga-name"];
  document.getElementById(`${CURRENT_PAGE_INDEX}-reader-img-index`).style.display = "none";
  CURRENT_PAGE_INDEX = 0;
  fileContainer.style.display = "none";
  readerContainer.style.display = "none";
  chaptersContainer.style.display = "flex";
});


readerPrevButton.addEventListener("click", () => {
  if (CURRENT_PAGE_INDEX <= 0){ 
    return
  }

  document.getElementById(`${CURRENT_PAGE_INDEX}-reader-img-index`).style.display = "none";
  CURRENT_PAGE_INDEX -= 1;
  document.getElementById(`${CURRENT_PAGE_INDEX}-reader-img-index`).style.display = "inline";
  readerPageNumber.innerHTML = CURRENT_PAGE_INDEX + 1 + " / " + MANGA_JSON_DATA["chapters"][CURRENT_CHAPTER_INDEX]["pages"].length ;

});


readerNextButton.addEventListener("click", () => {
  if (CURRENT_PAGE_INDEX >= (MANGA_JSON_DATA["chapters"][CURRENT_CHAPTER_INDEX]["pages"].length - 1)){ 
    return
  }

  document.getElementById(`${CURRENT_PAGE_INDEX}-reader-img-index`).style.display = "none";
  CURRENT_PAGE_INDEX += 1;
  document.getElementById(`${CURRENT_PAGE_INDEX}-reader-img-index`).style.display = "inline";
  readerPageNumber.innerHTML = CURRENT_PAGE_INDEX + 1 + " / " + MANGA_JSON_DATA["chapters"][CURRENT_CHAPTER_INDEX]["pages"].length ;
});