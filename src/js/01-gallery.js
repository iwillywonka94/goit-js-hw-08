import { galleryItems } from './gallery-items';
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";

const gallery = document.querySelector(".gallery")
const itemsGallery = galleryItems.map(item => 
    `<a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}"/>
    </a>`
).join("");
gallery.insertAdjacentHTML("afterbegin", itemsGallery);

const lightbox = new SimpleLightbox('.gallery a', {captionsData: "alt", captionDelay: 250, showCounter: false});