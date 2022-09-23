const bulat = document.querySelector('#bulat');

bulat.addEventListener('mouseenter', () => {
  if(!bulat.classList.contains('hover')) {
    bulat.classList.add('hover');
  }
});

bulat.addEventListener('mouseleave', () => {
  if(bulat.classList.contains('hover')) {
    bulat.classList.remove('hover');
  }
});