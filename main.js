var headerNavbar = document.getElementById("header-nav-bar")
headerNavbar.addEventListener('click' , handleClick)


createNavBar()
constructHouseRules()
constructAmenities()

function createNavBar(){
  for(page in pages){
    if(pages[page].navlink){
      headerNavbar.appendChild(createNavbarElements(pages[page]))
    }
  pages[page].height = document.getElementById(pages[page].id).offsetHeight //needed for link color change based on scroll
  }
}



function constructAmenities(){
  var amenitieshtml = document.getElementById('amenities')
  var amenities = house.amenities

  for(amenitie in amenities) {
    amenitieshtml.appendChild(createAttribute(amenities, amenitie))
  }
}

function constructHouseRules(){
  var ruleshtml = document.getElementById('rules')
  var rules = house.rules

  for(rule in rules) {
    ruleshtml.appendChild(createAttribute(rules, rule))
  }
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

function createAttribute(attributes, attribute){
  var newAttribute = document.createElement('div')
  newAttribute.className = "flex text-font amenitie-container"

  var imgContainer = document.createElement('div')
  imgContainer.className="center-v"

  var newAttributeIcon = document.createElement('img')
  newAttributeIcon.setAttribute('src', attributes[attribute].imgURL)
  newAttributeIcon.className="icon"

  var newAttributeTextContainer = document.createElement('div')
  newAttributeTextContainer.className="amenities-text-container center-v"

  var newAttributeTextInnerContainer = document.createElement('div')
  newAttributeTextInnerContainer.className = "main-font light"

  var newAttributeTitle =document.createElement('div')
  newAttributeTitle.className = "font-size-medium"
  newAttributeTitle.textContent = attributes[attribute].title

  var newAttributeText =document.createElement('div')
  newAttributeText.className = "amenitie-description"
  newAttributeText.textContent = attributes[attribute].description

  newAttributeTextInnerContainer.appendChild(newAttributeTitle)
  newAttributeTextInnerContainer.appendChild(newAttributeText)

  newAttributeTextContainer.appendChild(newAttributeTextInnerContainer)

  imgContainer.appendChild(newAttributeIcon)

  newAttribute.appendChild(imgContainer)
  newAttribute.appendChild(newAttributeTextContainer)

  return newAttribute
}
