const btn = document.querySelector('.cart__buy')

btn.addEventListener('click', () => {
  document.querySelector('.add__form').classList.add('active')
})