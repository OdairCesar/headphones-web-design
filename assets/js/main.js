/*---------------------- Show Menu ----------------------*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close'),
  navLink = document.querySelectorAll('.nav__link'),
  header = document.getElementById('header'),
  sections = document.querySelectorAll('section[id]')

if (navMenu) {
  /* Menu Show */
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu')
    })
  }

  /* Menu Hidden */
  if (navClose) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu')
    })
  }
}

/*---------------------- Remove Menu Mobile ----------------------*/
function linkAction(){
  if(navMenu){
    navMenu.classList.remove('show-menu')
  }
}

if(navLink){
  navLink.forEach(n => n.addEventListener('click', linkAction))
}

/*---------------------- Change Background Header ----------------------*/
function scrollHeader(){
  if(header){
    this.scrollY >= 50 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header')
  }
}
window.addEventListener('scroll', scrollHeader)

/*---------------------- Show Scroll Up ----------------------*/
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up')
  // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
  this.scrollY >= 200 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*---------------------- Scroll Sections Active Link ----------------------*/
function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id')

    scrollY > sectionTop && scrollY <= sectionTop + sectionHeight ?
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
      :
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
  })
}
window.addEventListener('scroll', scrollActive)