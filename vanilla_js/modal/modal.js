(function () {
  "use strict";
  const modalButton = document.querySelector("#modalButton");
  const modalForm = document.querySelector("#modalForm");
  const close = document.querySelector("#close");

  modalButton.addEventListener("click", () => {
    if (modalForm.className === "rtvc d-none") {
      modalForm.className = "rtvc formFadeIn";
    } else {
      modalForm.className = "rtvc formFadeOut";
      setTimeout(() => {
        modalForm.style.display = "none";
      }, 1500);
    }
  });

  close.addEventListener("click", () => {
    modalForm.className = "rtvc formFadeOut";
    setTimeout(() => {
      modalForm.style.display = "none";
    }, 1500);
  });
})();
