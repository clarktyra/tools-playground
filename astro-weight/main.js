const solarSystem = "https://i.pinimg.com/originals/f4/34/45/f4344541fcceb55e5d4453b08cd82178.jpg"
document.body.style.backgroundImage = `url(${solarSystem})`;
document.body.style.backgroundSize = "cover"

const planets = [
  [
    "Pluto",
    0.06,
    "https://images.unsplash.com/photo-1614314107768-6018061b5b72?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDM4ODV8MHwxfHNlYXJjaHwxfHxQbHV0b3xlbnwwfHx8fDE2MTY3MzkxMjA&ixlib=rb-1.2.1&q=85",
  ],
  [
    "Neptune",
    1.148,
    "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDM4ODV8MHwxfHNlYXJjaHwxfHxOZXB0dW5lfGVufDB8fHx8MTYxNjczOTE0MQ&ixlib=rb-1.2.1&q=85",
  ],
  [
    "Uranus",
    0.917,
    "https://images.unsplash.com/photo-1614732484003-ef9881555dc3?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDM4ODV8MHwxfHNlYXJjaHwxfHxVcmFudXN8ZW58MHx8fHwxNjE2NzM5MTgx&ixlib=rb-1.2.1&q=85",
  ],
  [
    "Saturn",
    1.139,
    "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDM4ODV8MHwxfHNlYXJjaHwxfHxTYXR1cm58ZW58MHx8fHwxNjE2NzM5MTkx&ixlib=rb-1.2.1&q=85",
  ],
  [
    "Jupiter",
    2.64,
    "https://www.nasa.gov/sites/default/files/thumbnails/image/stsci-h-p1936a-m-1999x2000.png",
  ],
  [
    "Mars",
    0.3895,
    "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
  ],
  [
    "Moon",
    0.1655,
    "https://scitechdaily.com/images/Lunar-Reconnaissance-Orbiter-Moon-scaled.jpg",
  ],
  [
    "Earth",
    1,
    "https://i1.wp.com/www.travindy.com/wp-content/uploads/2018/04/Planet-Earth-Article-Image.jpg?fit=1920%2C1920&ssl=1",
  ],
  [
    "Venus",
    0.9032,
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/PIA23791-Venus-NewlyProcessedView-20200608.jpg",
  ],
  [
    "Mercury",
    0.377,
    "https://upload.wikimedia.org/wikipedia/commons/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg",
  ],
  [
    "Sun",
    27.9,
    "https://i.insider.com/5d51622e558a356f0b728a13?width=1053&format=jpeg",
  ],
];

planets.reverse()
planets.forEach(function (planet) {
  const element1 = document.createElement("option");
  element1.text = planet[0];
  element1.value = planet[0];
  document.getElementById("planets").append(element1);
});

calculateWeight = (weight, planetName) => {
  for (let i = 0; i < planets.length; i++) {
    if (planets[i][0] == planetName) {
      var multiplier = planets[i][1];
    }
  }
  return multiplier * weight;
}

handleClickEvent = (e) => {
  e.preventDefault();
  const userWeight = $("#user-weight").val();
  const planetName = $("#planets").val();
  const result = calculateWeight(userWeight, planetName);
  $("#output").text(
    " If you were on " + planetName + ", you would weigh " + result + "lbs!"
  )
  for (let piece of planets) {
    if (planetName === piece[0]) {
      // $("#outputImage").attr("src", piece[2]);
      document.body.style.backgroundImage = `url('${piece[2]}')`;
      document.body.style.backgroundSize = "cover"


    }
  }
}

$("#calculate-button").click(handleClickEvent);
