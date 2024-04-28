
window.addEventListener('scroll', () => {
  if (window.scrollY > 108) {
    document.querySelector('header').classList.add('fix')
  }
  else {
    document.querySelector('header').classList.remove('fix')
  }
})