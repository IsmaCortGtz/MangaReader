if (navigator.serviceWorker) {
  navigator.serviceWorker.register('./sw.js');
}


// Screens containers
const fileContainer = document.getElementById("file-container");
const chaptersContainer = document.getElementById("chapters-container");
const readerContainer = document.getElementById("reader-container");



// File picker screen elements
const filePickerInput = document.getElementById("file-picker");
const filePickerButton = document.getElementById("file-picker-button");
const fileContinueButton = document.getElementById("continue-button");
const editFileSavedButton = document.getElementById("edit-file-saved-button");
const editSavedJsonArea = document.getElementById("json-saved-data-string");
const jsonSavedButtonsContainer = document.getElementById("json-saved-buttons-container");
const jsonsavedCancelButton = document.getElementById("json-saved-cancel");
const jsonSavedSaveButton = document.getElementById("json-saved-save");

// Chapters screen elemets
const chaptersMangaTitle = document.getElementById("manga-name-title");
const chaptersBackButton = document.getElementById("chapters-back-button");
const chaptersCardContainer = document.getElementById("card-container");

// Reader screen elements
const readerBackButton = document.getElementById("reader-back-button");
const readerPageNumber = document.getElementById("reade-page-number");
const readerImageContainer = document.getElementById("reader-image-container");
const readerPrevButton = document.getElementById("reader-prev-button");
const readerNextButton = document.getElementById("reader-next-button");


if (filePickerInput.files.length === 1) {
  filePickerButton.innerHTML = filePickerInput.files[0].name;
}else{
  filePickerButton.innerHTML = "Upload File";
}

filePickerInput.onchange = () => {
  if (filePickerInput.files.length === 1) {
    filePickerButton.innerHTML = filePickerInput.files[0].name;
  }else{
    filePickerButton.innerHTML = "Upload File";
  }
};