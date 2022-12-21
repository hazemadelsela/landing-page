let navbarList = document.createElement('ul')
let navbar__menu = document.querySelector('.navbar__menu')
let button = document.createElement('button')
let btnInfo = document.createElement('button')
let btnText = document.createTextNode('down')
let textButton = document.createTextNode('top')
button.appendChild(textButton)
btnInfo.appendChild(btnText)
document.body.appendChild(btnInfo)
document.body.appendChild(button)
let classButtom = btnInfo.classList.add('btn-info')
button.classList.add('info')
let sections = Array.from(document.querySelectorAll('section'))
btnInfo.addEventListener('click', function () {
    window.scrollTo({
        left: 0,
        top: 2300,
        behavior: 'smooth'
    })
})
button.addEventListener('click', () => {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
    })
})

var link = ''
let lest = document.querySelector('li')
navbarList.setAttribute('id', 'navbar__list')
window.onload = () => {
    sections.forEach((s) => {
        let data = s.getAttribute('data-nav')
        let id = s.getAttribute('id')
        let li = document.createElement('li')
        link = `<a href='#${id}' class ='menu__link'>${data}</a>`
        li.innerHTML = link
        li.addEventListener('click', (e) => {
            e.preventDefault()
            s.scrollIntoView({
                behavior: 'smooth'
            })
        })
        navbarList.appendChild(li)
    })
    navbar__menu.appendChild(navbarList)
}

window.onscroll = function () {
    if (window.scrollY >= 400) {
        button.style.display = 'block'
        btnInfo.style.display = 'none'

    }
    else {
        button.style.display = 'none'
        btnInfo.style.display = 'block'

    }
    let links = document.querySelectorAll('.navbar__menu .menu__link')
    let sectionSocroll = document.querySelectorAll('section')
    for (var activ of sectionSocroll) {
        let dataNav = activ.getAttribute('data-nav')
        if (activ.getBoundingClientRect().top >= -450 && activ.getBoundingClientRect().top <= 150) {
            activ.classList.add("your-active-class")
            links.forEach((aLink) => {
                if (aLink.textContent === dataNav) {
                    aLink.style.background = '#333'
                }
                else {
                    aLink.style.background = ''
                }
            })
        }
        else {
            activ.classList.remove("your-active-class")
        }
    }
}