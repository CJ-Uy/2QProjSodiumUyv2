function hide_loader() {
  const loader = document.querySelector('.loader');
  loader.className += ' hidden';
}

window.on('load', hide_loader());
