function openModal(image) {
    let modal = document.getElementById("imageModal");
    let modalImg = document.getElementById("modalImage");
    let caption = document.getElementById("caption");

    modalImg.src = image.src;
    caption.innerHTML = image.alt;

    modal.classList.add("show");
}

function closeModal() {
    let modal = document.getElementById("imageModal");
    modal.classList.remove("show"); // Oculta el modal
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("imageModal").classList.remove("show");
});
