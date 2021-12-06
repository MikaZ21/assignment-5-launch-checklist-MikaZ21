// Write your JavaScript code here!

//const { myFetch } = require("./scriptHelper");

//const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {
    let listedPlanets;

    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet from the list of planets and add that information to your destination.
        let selPlanet = pickPlanet(listedPlanets);  //1 planet
        console.log(selPlanet);
        addDestinationInfo(document, selPlanet.name, selPlanet.diameter, selPlanet.star, selPlanet.distance, selPlanet.moons, selPlanet.image);
     });
 

    let form = document.querySelector("form");
    let list = document.getElementById("faultyItems");
    list.style.visibility = "hidden";

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Hello");

    let pilotInput = document.querySelector("input[name=pilotName]");
    let pilot = pilotInput.value;

    let coPilotInput = document.querySelector("input[name=copilotName]");
    let coPilot = coPilotInput.value;

    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let fuelLevel = fuelLevelInput.value;

    let cargoMassInput = document.querySelector("input[name=cargoMass]");
    let cargoMass = cargoMassInput.value;

    formSubmission(document, list, pilot, coPilot, fuelLevel, cargoMass);

    // event.target.pilotName.value = "";
    // event.target.copilotName.value = "";
  });  
});