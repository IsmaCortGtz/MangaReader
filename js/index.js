if (navigator.serviceWorker) {
  navigator.serviceWorker.register('./sw.js').then((registration) => {
    if (!navigator.serviceWorker.controller) return;
    
    if (registration.waiting) {
      window.alert(getTranslationKey("ALERT_UPDATE"));
      console.log(getTranslationKey("ALERT_UPDATE"));
      registration.waiting.postMessage({ updateSw: true });
      return;
    }

    if (registration.installing) {
      registration.addEventListener('statechange', function(){
        if (registration.installing.state == 'installed'){
          window.alert(getTranslationKey("ALERT_UPDATE"));
          console.log(getTranslationKey("ALERT_UPDATE"));
          registration.installing.postMessage({ updateSw: true });
          return;          
        }
      });
    }
  })
}


// Screens containers
const fileContainer = document.getElementById("file-container");
const readerContainer = document.getElementById("reader-container");



// File picker screen elements
const filePickerInput = document.getElementById("file-picker");
const filePickerButton = document.getElementById("file-picker-button");
const filePickerButtonText = document.getElementById("file-picker-button-text");
const fileContinueButton = document.getElementById("continue-button");
const fileContinueButtonSpan = document.getElementById("continue-button-span");
const editFileSavedButton = document.getElementById("edit-file-saved-button");
const editSavedJsonArea = document.getElementById("json-saved-data-string");
const jsonSavedButtonsContainer = document.getElementById("json-saved-buttons-container");
const jsonsavedCancelButton = document.getElementById("json-saved-cancel");
const jsonSavedSaveButton = document.getElementById("json-saved-save");


// Reader screen elements
const readerBackButton = document.getElementById("reader-back-button");
const readerBackButtonText = document.getElementById("reader-back-button-text");
const readerPageNumber = document.getElementById("reader-page-number");
const readerPageText = document.getElementById("reader-page-text");
const readerImageContainer = document.getElementById("reader-image-container");
const readerPrevButton = document.getElementById("reader-prev-button");
const readerNextButton = document.getElementById("reader-next-button");


// Translation

fileContinueButtonSpan.innerHTML = getTranslationKey("NEXT_BUTTON");
editFileSavedButton.innerHTML = getTranslationKey("EDIT_SAVED_JSON_BUTTON");
jsonsavedCancelButton.innerHTML = getTranslationKey("CACEL_BUTTON");
jsonSavedSaveButton.innerHTML = getTranslationKey("SAVE_BUTTON");
readerPageText.innerHTML = getTranslationKey("PAGE_NUMBER_SPAN");
readerBackButtonText.innerHTML = getTranslationKey("BACK_BUTTON");


if (filePickerInput.files.length === 1) {
  filePickerButtonText.innerHTML = filePickerInput.files[0].name;
}else{
  filePickerButtonText.innerHTML = getTranslationKey("UPLOAD_BUTTON");
}

filePickerInput.onchange = () => {
  if (filePickerInput.files.length === 1) {
    filePickerButtonText.innerHTML = filePickerInput.files[0].name;
  }else{
    filePickerButtonText.innerHTML = getTranslationKey("UPLOAD_BUTTON");
  }
};