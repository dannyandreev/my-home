const CONFIGURATION = { "capabilities": {}, "locations": [{
  "title": "Light House",
  "address1": "126 Jordan St",
  "address2": "Santa Cruz, CA 95060, USA",
  "coords": { "lat": 36.97663937789158, "lng": -122.03377977294909 },
  "placeId": "ChIJ586bwS1AjoARBMu5ozDwS0E" }],
  "mapOptions": {"zoom": 5},
  "mapsApiKey": "AIzaSyAqEIWhLwHZVz-cjQcspvsphqFrLA4Exmo"
};

var house = {
  "title": "Light House",
  "address1": "126 Jordan St",
  "address2": "Santa Cruz, CA 95060, USA",
  "amenities": {
    "utilities":    {"title": "Utilites", "included": true,"description": "All utilites included - Water/Electricity/Gas/Garbage.", "imgURL": "./images/icons8-electricity-64.png"},
    "wifi":         {"title": "WiFi", "included": true,"description": "Best available in Santa Cruz - Xfinity - 400MBs Download - 40MBs Upload.", "imgURL": "./images/icons8-wi-fi-64.png"},
    "cleaning":     {"title": "Cleaners", "included": true,"description": "We have cleaning ladies that come twice a month to clean common spaces and the rooms.", "imgURL": "./images/icons8-housekeeper-80.png"},
    "washer-drier": {"title": "Washer and Drier", "included": true,"description": "A washer and drier are located on the first floor.", "imgURL": "./images/icons8-washing-machine-64.png"},
    "kitchen":      {"title": "Kitchen", "included": true,"description": "The kitchen has an oven, dishwasher, 4 refridgerators, microwave and plenty of cupboard space for everyone.", "imgURL": "./images/icons8-kitchen-room-80.png"},
    "insurance":    {"title": "Insurance", "included": true,"description": "We have renters insurance that covers theft, natural disasters and accidents.", "imgURL": "./images/icons8-shield-100.png"},
    "parking":      {"title": "Parking", "included": true,"description": "There is a large amount of on-street parking. No registration required.", "imgURL": "./images/icons8-parking-64.png"},
    "parking":      {"title": "Bus", "included": true,"description": "There is bus station 30 seconds from the house going directly to UCSC.", "imgURL": "./images/icons8-bus-64.png"},
    "maintainance": {"title": "Maintainance", "included": true,"description": "Out handyman will come and fix appliances/bathrooms if they break.", "imgURL": "./images/icons8-maintenance-80.png"},
    "outdoor":      {"title": "Outdoor Space", "included": true,"description": "We have a large backyard with a garden, grill, and tables.", "imgURL": "./images/icons8-large-tree-96.png"}
  },
  "rules": {
    "pets":         {"title": "No Pets", "description": "No furry pets, the owners are extremely allegic so its a health concern. Reptiles, fish, and small birds are fine.", "imgURL": "./images/icons8-pets-512.png"},
    "occupancy":    {"title": "Occupancy", "description": "We dont allow subleting of the rooms. The rooms are are for a single person each.", "imgURL": "./images/icons8-crowd-96.png"},
    "guests":       {"title": "Guest Policy", "description": "You are welcome to have guests over but they cannot stay over for more than 10 days in the month.", "imgURL": "./images/icons8-friends-96.png"},
    "smoking":      {"title": "No Smoking", "description": "No smoking indoors.", "imgURL": "./images/icons8-smoking-96.png"},
    "general":      {"title": "General Etiquette", "included": true,"description": "None of these have been an issues so we really just ask that you are curtious to your fellow housemates.", "imgURL": "./images/icons8-house-keys-96.png"}
  },
  "rooms": {
    "bedroom1": {"display": "inActive", "name": "Bedroom 1", "tenant": null, "number": "1", "dateAvailable": null,
      "attributes": {
        "price":     {"title": "Price", "description": "xxxx$/mo", "imgURL": "./images/icons8-price-tag-64.png"},
        "deposit":   {"title": "Security Deposit", "description": "xxxx$", "imgURL": "./images/icons8-safe-96.png"},
        "lease":     {"title": "Lease Terms", "description": "12 month minimum.", "imgURL": "./images/icons8-house-keys-96.png"},
        "area":      {"title": "Area", "description": "160sqft", "imgURL": "./images/icons8-floor-plan-64.png"},
        "furniture": {"title": "Furniture", "description": "This room comes furnishes with a table, dresser, and bed", "imgURL": "./images/icons8-table-64.png"}
      }
    },
    "bedroom2": {"display": "active", "name": "Bedroom 2", "number": "2", "tenant": "Sakoya", "dateAvailable": "Dec, 1",
      "attributes": {
        "price":     {"title": "Price", "description": "1260$/mo", "imgURL": "./images/icons8-price-tag-64.png"},
        "deposit":   {"title": "Security Deposit", "description": "2620$", "imgURL": "./images/icons8-safe-96.png"},
        "lease":     {"title": "Lease Terms", "description": "12 month minimum.", "imgURL": "./images/icons8-house-keys-96.png"},
        "area":      {"title": "Area", "description": "160sqft", "imgURL": "./images/icons8-floor-plan-64.png"},
        "furniture": {"title": "Furniture", "description": "This room comes furnishes with a table, chair, and bed.", "imgURL": "./images/icons8-table-64.png"}
      }
    },
    "bedroom3": {"display": "inActive","name": "Bedroom 3", "number": "3", "price": 1050, "tenant": "Aksu", "area": 120, "dateAvailable": "Dec, 1",
      "attributes": {
        "price":     {"title": "Price", "description": "1260$/mo", "imgURL": ""},
        "deposit":   {"title": "Security Deposit", "description": "2620$", "imgURL": ""},
        "lease":     {"title": "Lease Terms", "description": "12 month minimum.", "imgURL": ""},
        "area":      {"title": "Area", "description": "160sqft", "imgURL": ""},
        "furniture": {"title": "Furniture", "description": "This room comes furnishes with a table, chair, and bed.", "imgURL": ""}
      }
    },
    "bedroom4": {"display": "inActive","name": "Bedroom 4", "number": "4", "price": 1260, "tenant": "Marcel", "area": 160, "dateAvailable": "Dec, 1",
      "attributes": {
        "price":     {"title": "Price", "description": "1260$/mo", "imgURL": ""},
        "deposit":   {"title": "Security Deposit", "description": "2620$", "imgURL": ""},
        "lease":     {"title": "Lease Terms", "description": "12 month minimum.", "imgURL": ""},
        "area":      {"title": "Area", "description": "160sqft", "imgURL": ""},
        "furniture": {"title": "Furniture", "description": "This room comes furnishes with a table, chair, and bed.", "imgURL": ""}
      }
    },
    "bedroom5": {"display": "inActive","name": "Bedroom 5", "number": "5", "price": 1025, "tenant": "Jennifer", "area": 120, "dateAvailable": "July 17",
      "attributes": {
        "price":     {"title": "Price", "description": "1260$/mo", "imgURL": ""},
        "deposit":   {"title": "Security Deposit", "description": "2620$", "imgURL": ""},
        "lease":     {"title": "Lease Terms", "description": "12 month minimum.", "imgURL": ""},
        "area":      {"title": "Area", "description": "160sqft", "imgURL": ""},
        "furniture": {"title": "Furniture", "description": "This room comes furnishes with a table, chair, and bed.", "imgURL": ""}
      }
    },
    "bedroom6": {"display": "inActive","name": "Bedroom 6", "number": "6", "price": 1025, "tenant": "William", "area": 120, "dateAvailable": "July, 1",
      "attributes": {
        "price":     {"title": "Price", "description": "1260$/mo", "imgURL": ""},
        "deposit":   {"title": "Security Deposit", "description": "2620$", "imgURL": ""},
        "lease":     {"title": "Lease Terms", "description": "12 month minimum.", "imgURL": ""},
        "area":      {"title": "Area", "description": "160sqft", "imgURL": ""},
        "furniture": {"title": "Furniture", "description": "This room comes furnishes with a table, chair, and bed.", "imgURL": ""}
      }
    },
    "bedroom7": {"display": "inActive","name": "Bedroom 7", "number": "7", "price": 1260, "tenant": "Rhiannon", "area": 160, "dateAvailable": "July, 1",
      "attributes": {
        "price":     {"title": "Price", "description": "1260$/mo", "imgURL": ""},
        "deposit":   {"title": "Security Deposit", "description": "2620$", "imgURL": ""},
        "lease":     {"title": "Lease Terms", "description": "12 month minimum.", "imgURL": ""},
        "area":      {"title": "Area", "description": "160sqft", "imgURL": ""},
        "furniture": {"title": "Furniture", "description": "This room comes furnishes with a table, chair, and bed.", "imgURL": ""}
      }
    }
  },
}
