import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const gallery = galleryItems.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
        <a class="gallery__link" href=${original}>
            <img
                class="gallery__image"
                src=${preview}
                alt=${description}
                data-source=${original}
            />
        </a>
    </div>`
}).join("");

const galleryRef = document.querySelector(".gallery");
galleryRef.insertAdjacentHTML("afterbegin", gallery);


galleryRef.addEventListener('click', onClick);
function onClick(evt) {
    evt.preventDefault();
    
    window.addEventListener('keydown', onKeydown);
    console.log("ADD listener on  KEYdown");
    if (evt.target.nodeName !== "IMG") {
        window.removeEventListener('keydown', onKeydown);
        console.log("REMOVE listener on  KEYdown");
        return
    }
    const imageSrc = evt.target.dataset.source;
    const modal = basicLightbox.create(`<img src="${imageSrc}"/>`);
    modal.show();
    

    function onKeydown(evtKeydown) {
        if (evtKeydown.code === "Escape") {
            console.log("exit modal");
            window.removeEventListener('keydown', onKeydown);
            modal.close();
            return
        };
    }
}
