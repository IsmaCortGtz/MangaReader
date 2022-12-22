function Components_Image(imageURL, imageIndex){

  let imageElement = document.createElement("img");
  imageElement.setAttribute("class", "reader-img");
  imageElement.setAttribute("alt", `Manga page number ${imageIndex + 1}`);
  imageElement.setAttribute("id", `${imageIndex}-reader-img-index`);
  imageElement.setAttribute("src", imageURL);
  imageElement.setAttribute("style", "display: none;")
  
  return imageElement;
}