// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
  const div = document.getElementById("missionTarget");
  div.innerHTML = `
  <h2>Mission Destination</h2>
  <ol>
  <li>Name: ${name}</li>
  <li>Diameter: ${diameter}</li>
  <li>Star: ${star}</li>
  <li>Distance from Earth: ${distance}</li>
  <li>Number of Moons: ${moons}</li>
  </ol>
  <img src=${imageURL}/>
  `;
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    }   else if (isNaN(testInput)) {
        return "Not a number";
    }   else if (testInput.type === Number) {
        return "is a number";
    }

}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    pilotInput = document.querySelector("input[name=pilotName]");
    pilotValue = pilotInput.value;
    coPilotInput = document.querySelector("input[name=coPilotName]");
    coPilotValue = coPilotInput.value;
    fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    fuelLevelValue = fuelLevelInput.value;
    cargoLevelInput = document.querySelector("input[name=CargoMass]");
    cargoLevelValue = cargoLevelInput.value;
    list = document.getElementById("faultyItems");

    if (
        validateInput(pilotValue) === "Empty" ||
        validateInput(coPilotValue) === "Empty" ||
        validateInput(fuelLevelValue) === "Empty" ||
        validateInput(cargoLevelValue) === "Empty" 
    ) {
        alert("All fields are required");
    } else if (
        validateInput(fuelLevelValue) === 'Not a number' ||
        validateInput(cargoLevelValue) === 'Not a number' 
    ) { alert("Must enter a number");
    } else {
        list.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot ${pilotValue} is ready for launch!`;
        coPilotStatus.innerHTML = `CoPilot ${coPilotValue} is ready for launch!`;
    }

    if (fuelLevelValue <= 9999) {
        launchStatus.innerText = "Shuttle not ready for launch.";
        launchStatus.style.color = "red";
        fuelStatus.innerText = "Fuel Status not low.";
    } else if (cargoLevelValue >= 9999) {
        launchStatus.innerText = "Shuttle not ready for launch.";
        launchStatus.style.color = "red";
        cargoStatus.innerText = "Too much weight on shuttle.";
    } else {
        launchStatus.innerText = "Shuttle is ready for launch!";
        launchStatus.style.color = "green";
    }
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let randomIndex = (Math.floor(Math.random()*planets.length));
    return planets[randomIndex];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
