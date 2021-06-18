var headerNavbar = document.getElementById("header-nav-bar")
headerNavbar.addEventListener('click' , handleClick)

for(page in pages){
  if(pages[page].navlink){
    headerNavbar.appendChild(createNavbarElements(pages[page]))


  }
  pages[page].height = document.getElementById(pages[page].id).offsetHeight //needed for link color change based on scroll
}

function createNavbarElements(page){

  var navElement = document.createElement('div')
  navElement.className = "nav-element center-v main-font light"
  var link = document.createElement('a')
  link.setAttribute('href', "#"+page.id)
  link.textContent = page.title
  link.className = "nav-link"
  navElement.appendChild(link)
  return navElement
}

function handleClick(event) {
  if (event.target.className.includes("nav-link")) {
    var navLinks = document.getElementsByClassName('nav-link')

    for(link of navLinks) {
      link.className = "nav-link"
    }
    event.target.className += " active"
  }
}
