import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const gallery = galleryItems.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}"
        data-source=${original}/>
    </a>
    </div>`
    
    // const gItem = document.createElement("a");
    // gItem.className = "gallery__link";
    // gItem.href = original;
    // const image = document.createElement("img")
    // image.src = preview;
    // image.alt = description;
    // image.dataset.source = original;
    // image.className = "gallery__image";

    // gItem.appendChild(image);
    // return (gItem);
}).join("");

const galleryRef = document.querySelector(".gallery");
galleryRef.insertAdjacentHTML("afterbegin", gallery);
// galleryRef.append(...gallery); // join - надо удалить


galleryRef.addEventListener('click', onClick);
function onClick(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== "IMG") {
        return
    }
    const imageSrc = evt.target.dataset.source;
    console.log(imageSrc);
    const modal = basicLightbox.create(`<img src="${imageSrc}"/>`);
    modal.show();
    // window.addEventListener('keydown', onKeydown);
}

// function onKeydown(evtKeydown) {
//     console.log(evtKeydown);
//     if (evtKeydown.code === "Escape") {
//         console.log("exit modal");
//         galleryRef.removeEventListener('keydown', onKeydown);
//         modal.close(); // Не работает !!! - modal is not defined
//     };
// }
 


