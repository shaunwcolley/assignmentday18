
let currentMenu = document.getElementById('currentMenu')
let starterButton = document.getElementById("starterButton")
let buttonBar = document.getElementById("buttonBar")

let starters = dishes.filter(function(dish) {
  if (dish.course == "Starters") {
    return dish
  }
})
let entrees = dishes.filter(function(dish) {
  if (dish.course == "Entrees") {
    return dish
  }
})
let desserts = dishes.filter(function(dish) {
  if (dish.course == "Desserts") {
    return dish
  }
})

let menuItems = starters.map(function(starter) {
  return `<li>
  <img src="${starter.imageURL}"/>
  <div class="itemBody">
  <div class="itemHeader">
  <h4>${starter.title}</h4>
  <h4>$${starter.price}</4>
  </div>
  <p>${starter.description}</p>
  </div>
  </li>`
})

currentMenu.innerHTML = "<h3>Starters</h3>"
currentMenu.insertAdjacentHTML('beforeend', menuItems.join(""))

starterButton.addEventListener('click', function() {
  let menuItems = starters.map(function(starter) {
    return `<li>
    <img src="${starter.imageURL}"/>
    <div class="itemBody">
    <div class="itemHeader">
    <h4>${starter.title}</h4>
    <h4>$${starter.price}</4>
    </div>
    <p>${starter.description}</p>
    </div>
    </li>`
  })

  currentMenu.innerHTML = "<h3>Starters</h3>"
  currentMenu.insertAdjacentHTML('beforeend', menuItems.join(""))
})


entreeButton.addEventListener('click', function() {
  let menuItems = entrees.map(function(dish) {
    return `<li>
    <img src="${dish.imageURL}"/>
    <div class="itemBody">
    <div class="itemHeader">
    <h4>${dish.title}</h4>
    <h4>$${dish.price}</4>
    </div>
    <p>${dish.description}</p>
    </div>
    </li>`
  })

  currentMenu.innerHTML = "<h3>Entrees</h3>"
  currentMenu.insertAdjacentHTML('beforeend', menuItems.join(""))
})


dessertButton.addEventListener('click', function() {
  let menuItems = desserts.map(function(dish) {
    return `<li>
    <img src="${dish.imageURL}"/>
    <div class="itemBody">
    <div class="itemHeader">
    <h4>${dish.title}</h4>
    <h4>$${dish.price}</4>
    </div>
    <p>${dish.description}</p>
    </div>
    </li>`
  })
  currentMenu.innerHTML = "<h3>Desserts</h3>"
  currentMenu.insertAdjacentHTML('beforeend', menuItems.join(""))
})
