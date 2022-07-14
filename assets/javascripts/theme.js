document.onclick = function (e) {
  let modals = document.querySelectorAll('.info-modal');
  let parentNode = e.target.parentNode;
  let currentModal;

  if (parentNode) {
    infoContainer = parentNode.closest('.info-container');

    if (infoContainer) {
      currentModal = infoContainer.querySelector('.info-modal');
    }
  }

  for (i = 0; i < modals.length; ++i) {
    if (modals[i] !== currentModal) {
      modals[i].style.display = 'none';
    }
  };

  if (currentModal) {
    currentModal.style.display = 'block';
  }
}
