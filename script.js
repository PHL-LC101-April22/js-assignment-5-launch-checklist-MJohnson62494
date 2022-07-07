// Write your JavaScript code here!

const { addDestinationInfo, formSubmission } = require("./scriptHelper");

window.addEventListener("load", function () {
    let listedPlanets;
    let listedPlanetsResponse = myFetch();

    listedPlanetsResponse
    .then(function (result) {
        listedPlanets = result;

})
.then(function () {
    let chosenPlanet = pickPlanet(listedPlanets);
    addDestinationInfo(
        document,
        chosenPlanet.name,
        chosenPlanet.diameter,
        chosenPlanet.star,
        chosenPlanet.distance,
        chosenPlanet.moons,
        chosenPlanet.image
    );
});

let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    pilotInput = document.querySelector("input[name=pilotName]");
    pilotValue = pilotInput.value;
    coPilotInput = document.querySelector("input[name=coPilotName]");
    coPilotValue = coPilotInput.value;
    fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    fuelLevelValue = fuelLevelInput.value;
    cargoLevelInput = document.querySelector("input[name=cargoLevel]");
    cargoLevelValue = cargoMassInput.value;
});

let list = document.getElementById("faultyItems");
formSubmission(
    document,
    list,
    PilotValue,
    coPilotValue,
    fuelLevelValue,
    cargoMassValue
);
});

   
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   