var bedroomshtml = document.getElementById('bedrooms')
var bedrooms = house.rooms

var amenitieshtml = document.getElementById('amenities')
var amenities = house.amenities

var ruleshtml = document.getElementById('rules')
var rules = house.rules

var bedroomAttributeshtml = document.getElementById('bedroom-attributes')
var attributes = house.rooms.bedroom2.attributes


for(room in bedrooms) {
  bedroomshtml.appendChild(createBedroom(room))
}

for(amenitie in amenities) {
  amenitieshtml.appendChild(createAttribute(amenities, amenitie))
}

for(rule in rules) {
  ruleshtml.appendChild(createAttribute(rules, rule))
}

for(attribute in attributes) {
  bedroomAttributeshtml.appendChild(createAttribute(attributes, attribute))
}


function createBedroom(room){
  var newBedroom = document.createElement('div')
  newBedroom.className = "flexAndWrap sansSerif"

  var newBedroomTextContainer = document.createElement('div')
  newBedroomTextContainer.className = "center"

  var  newBedroomText = document.createElement('div')
  newBedroomText.className = "font-weight-medium"
  newBedroomText.id = "bedroom"+bedrooms[room].number
  newBedroomText.textContent = bedrooms[room].name

  var newBedroomButtonContainer = document.createElement('div')
  newBedroomButtonContainer.className="button-container center"

  var newBedroomButton = document.createElement('button')

  if(bedrooms[room].dateAvailable){
    newBedroomButton.className="button available"
    newBedroomButton.textContent = "Available " + bedrooms[room].dateAvailable
  } else {
    newBedroomButton.className="button"
    newBedroomButton.textContent = "Not Available"
  }

  if(bedrooms[room].display === "active"){
    newBedroomButton.className += " active"
  }

  newBedroomButtonContainer.appendChild(newBedroomButton)
  newBedroomTextContainer.appendChild(newBedroomText)

  newBedroom.appendChild(newBedroomTextContainer)
  newBedroom.appendChild(newBedroomButtonContainer)

  return newBedroom
}

function createAttribute(attributes, attribute){
  var newAttribute = document.createElement('div')
  newAttribute.className = "flexAndWrap sansSerif amenitie-container"

  var imgContainer = document.createElement('div')
  imgContainer.className="center"

  var newAttributeIcon = document.createElement('img')
  newAttributeIcon.setAttribute('src', attributes[attribute].imgURL)
  newAttributeIcon.className="icon"

  var newAttributeTextContainer = document.createElement('div')
  newAttributeTextContainer.className="amenities-text-container center"

  var newAttributeTextInnerContainer = document.createElement('div')
  newAttributeTextInnerContainer.className = "inner-text-container"

  var newAttributeTitle =document.createElement('div')
  newAttributeTitle.className = "font-weight-medium"
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
