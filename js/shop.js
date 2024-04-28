

const buttons = document.querySelectorAll('.tab__btn')

// const tabs = document.querySelectorAll('.tab__item')


buttons.forEach(el => {
  el.addEventListener('click', () => {
    document.querySelector('.tab__btn.active').classList.remove('active')
    el.classList.add('active')
    // el.id
    console.log(el.getAttribute('data-tab'));

    document.querySelector('.tab__item.active').classList.remove('active')
    document.getElementById(el.getAttribute('data-tab')).classList.add('active')
  })
})
