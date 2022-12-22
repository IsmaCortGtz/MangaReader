JSON_TRANLATION_KEYS = {
  "en": {
    "UPLOAD_BUTTON": "Upload File",
    "NEXT_BUTTON": "Next",
    "EDIT_SAVED_JSON_BUTTON": "Edit JSON of manga read",
    "CACEL_BUTTON": "Cancel",
    "SAVE_BUTTON": "Save",
    "BACK_BUTTON": "Back",
    "PAGE_NUMBER_SPAN": "Page number",
    "ALERT_NEED_ONE_FILE": "You need to uploud just one file",
    "ALERT_FILE_NEED_BE_JSON": "The file need to be a JSON",
    "ALERT_WRONG_JSON_FORMAT": "Error: JSON format is wrong",
    "ALERT_UPDATE": "App updated. Close to apply"
  },
  "es": {
    "UPLOAD_BUTTON": "Subir Archivo",
    "NEXT_BUTTON": "Siguiente",
    "EDIT_SAVED_JSON_BUTTON": "Editar JSON de mangas leídos",
    "CACEL_BUTTON": "Cancelar",
    "SAVE_BUTTON": "Guardar",
    "BACK_BUTTON": "Atrás",
    "PAGE_NUMBER_SPAN": "Página número",
    "ALERT_NEED_ONE_FILE": "Necesitás subir solo un archivo",
    "ALERT_FILE_NEED_BE_JSON": "El archivo debe ser JSON",
    "ALERT_WRONG_JSON_FORMAT": "Error: formato JSON incorrecto",
    "ALERT_UPDATE": "Actualización disponible. Cierra la app para aplicar"
  }
}

function getTranslationKey(key){
  if (Object.keys(JSON_TRANLATION_KEYS).includes(navigator.language)){
    return JSON_TRANLATION_KEYS[navigator.language][key];
  }

  if (Object.keys(JSON_TRANLATION_KEYS).includes(navigator.language.split("-")[0])){
    return JSON_TRANLATION_KEYS[navigator.language.split("-")[0]][key];
  }

  return JSON_TRANLATION_KEYS["en"][key];
}