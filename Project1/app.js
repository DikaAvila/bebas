const monyetTutup = document.querySelector('.close');
const monyetBuka = document.querySelector('.open');

//menambahkan eventListener
monyetTutup.addEventListener('click', () => {
  if (monyetBuka.classList.contains('open')) {
    monyetBuka.classList.add('active');
    monyetTutup.classList.remove('active');
  }
});

monyetBuka.addEventListener('click', () => {
  if (monyetTutup.classList.contains('close')) {
    monyetTutup.classList.add('active');
    monyetBuka.classList.remove('active');
  }
});