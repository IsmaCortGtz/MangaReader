var MANGAS_CHAPTERS_ALREADY_READ = {}

function saveDataInLocal(){
  window.localStorage.setItem("watched-mangas", JSON.stringify(MANGAS_CHAPTERS_ALREADY_READ));
}

function getDataInLocal(){

  if (localStorage.getItem("watched-mangas") === null) {
    return;
  }

  MANGAS_CHAPTERS_ALREADY_READ = JSON.parse(window.localStorage.getItem("watched-mangas"));
  
}

getDataInLocal();