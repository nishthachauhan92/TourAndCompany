// ********** set date ************
// select span
const date = (document.getElementById('date').innerHTML =
  new Date().getFullYear())

// ********** nav toggle ************
// select button and links
const navBtn = document.getElementById('nav-toggle')
const links = document.getElementById('nav-links')
// add event listener
navBtn.addEventListener('click', () => {
  links.classList.toggle('show-links')
})

// Carousel JS
var slidePosition = 1
SlideShow(slidePosition)

// forward/Back controls
function plusSlides(n) {
  SlideShow((slidePosition += n))
}

//  images controls
function currentSlide(n) {
  SlideShow((slidePosition = n))
}

function SlideShow(n) {
  var i
  var slides = document.getElementsByClassName('Containers')
  var circles = document.getElementsByClassName('dots')
  if (n > slides.length) {
    slidePosition = 1
  }
  if (n < 1) {
    slidePosition = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(' enable', '')
  }
  slides[slidePosition - 1].style.display = 'block'
  circles[slidePosition - 1].className += ' enable'
}

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link')
scrollLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    // prevent default
    e.preventDefault()
    links.classList.remove('show-links')

    const id = e.target.getAttribute('href').slice(1)
    const element = document.getElementById(id)
    //
    let position = element.offsetTop - 62

    window.scrollTo({
      left: 0,
      // top: element.offsetTop,
      top: position,
      behavior: 'smooth',
    })
  })
})
