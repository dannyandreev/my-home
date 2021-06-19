
/* global pages */
/* global house */

var headerNavbar = document.getElementById("header-nav-bar")
headerNavbar.addEventListener('click' , handleClick)


createNavBar()
constructAmenities()
createBedrooms()
constructHouseRules()

createBedroomClickListener()

function createBedroomClickListener(){
  var bedroomshtml = document.getElementById('bedrooms')
  bedroomshtml.addEventListener("click", handleBedroomClick)
}

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

function createBedrooms(){
  var bedroomshtml = document.getElementById('bedrooms')
  var bedrooms = house.rooms

  for(room in bedrooms) {
    bedroomshtml.appendChild(createAttribute(bedrooms, room))
  }

  for(bedroom in bedrooms) {
    if(bedrooms[bedroom].status === "display") {
      createBedroomAttributes(bedroom)
    }
  }
}

function createBedroomAttributes(bedroom){
  var bedroomAttributeshtml = document.getElementById('bedroom-attributes')
  var bedroomAttributes = house.rooms[bedroom].attributes

  for(attribute in bedroomAttributes) {
    bedroomAttributeshtml.appendChild(createAttribute(bedroomAttributes, attribute))
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

function createCarousel(bedroom){
  var images = house.rooms[bedroom].images
  var newCarousel = document.getElementById('carousel')

  console.log(images)
  for(var i = 1; i<images.length;i++) {

    console.log(images[0]+images[i])
    var newImage = document.createElement('img')
    newImage.setAttribute('src', images[0]+images[i])
    newImage.className = "carouselImage"
    newCarousel.appendChild(newImage)
  }

}

function createAttribute(attributes, attribute){
  var newAttribute = document.createElement('div')
  newAttribute.className = "flex text-font attribute-container"

  if(attributes[attribute].id){
    newAttribute.id = attributes[attribute].id
    newAttribute.className += " button"
  }


  if(attributes[attribute].status === "hidden"){
    newAttribute.className += " hidden"
  } else if (attributes[attribute].status === "unavailable"){
    newAttribute.className += " unavailable"
  }

  var imgContainer = document.createElement('div')
  imgContainer.className="center-v"

  var newAttributeIcon = document.createElement('img')
  newAttributeIcon.setAttribute('src', attributes[attribute].imgURL)
  newAttributeIcon.className="icon"

  var newAttributeTextContainer = document.createElement('div')
  newAttributeTextContainer.className="attributes-text-container center-v"

  var newAttributeTextInnerContainer = document.createElement('div')
  newAttributeTextInnerContainer.className = "main-font light"

  var newAttributeTitle =document.createElement('div')
  newAttributeTitle.className = "font-size-medium attribute-title"
  newAttributeTitle.textContent = attributes[attribute].title

  var newAttributeText =document.createElement('div')
  newAttributeText.className = "attribute-description"
  newAttributeText.textContent = attributes[attribute].description

  newAttributeTextInnerContainer.appendChild(newAttributeTitle)
  newAttributeTextInnerContainer.appendChild(newAttributeText)

  newAttributeTextContainer.appendChild(newAttributeTextInnerContainer)

  imgContainer.appendChild(newAttributeIcon)

  newAttribute.appendChild(imgContainer)
  newAttribute.appendChild(newAttributeTextContainer)

  return newAttribute
}

function handleBedroomClick(event) {
  var button = event.target.closest(".button")
  if(!button){
    return -1;
  }
  var buttonID = button.id
  var buttons = document.getElementsByClassName("button")
  var bedroomName = buttonID.replace("-","")
  var bedroomshtml = document.getElementById('bedrooms')
  var bedrooms = house.rooms

  if(!button.className.includes("unavailable")){ //do if clicked and available
    clearButtons(buttons)
    button.className = "flex text-font attribute-container button"

    clearBedroomAttributes()
    createBedroomAttributes(bedroomName)

    clearCarousel()
    createCarousel(bedroomName)
  }
}

function clearCarousel(){
  var attributes = document.getElementById("carousel")
  while (attributes.firstChild) {
        attributes.removeChild(attributes.firstChild);
  }
}

function clearBedroomAttributes(){
  var attributes = document.getElementById("bedroom-attributes")
  while (attributes.firstChild) {
        attributes.removeChild(attributes.firstChild);
  }
}

function clearButtons(buttons){
  for(button of buttons){
    if(!button.className.includes("unavailable")){
      button.className = "flex text-font attribute-container button hidden"
    }
  }
}
