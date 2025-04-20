function openModal(imageSrc, captionText) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const caption = document.getElementById("modalCaption");

  modal.style.display = "block";
  modalImg.src = imageSrc;
  caption.textContent = captionText;
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}
