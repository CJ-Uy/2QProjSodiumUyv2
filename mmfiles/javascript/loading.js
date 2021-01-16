function hide_loader() {
  const loader = document.querySelector('.loader');
  loader.className += ' hidden';
}

window.addEventListener('load', hide_loader());