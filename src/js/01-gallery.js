// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// import "simplelightbox/css/simple-lightbox.min.css";
// Change code below this line
const galleryEl = document.querySelector(".gallery");

 const galleryArr = galleryItems.map(element => {
    const image = `<a class="gallery__item" href=${element.original}>
    <img class="gallery__image" src=${element.preview} alt=${element.description} />
  </a>`
  return image
});
galleryEl.insertAdjacentHTML("beforeend",galleryArr.join(" "))

var lightbox = new SimpleLightbox('.gallery a', {captionsData: "alt",captionPosition:"bottom",captionDelay : 250 });


console.log(galleryItems);
