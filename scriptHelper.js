// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
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
        <img src="${imageUrl}" >
    `;
};
  
            
function validateInput(testInput) {
        //console.log(testInput,(testInput === ""));
        if (testInput === "") {
           return "Empty";
        } else if (isNaN(testInput)) {
           return "Not a Number";
        } else if (isNaN(testInput) === false) {
           return "Is a Number";
        }
 };

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
        let faultyItems = document.getElementById("faultyItems");
        let pilotStatus = document.getElementById("pilotStatus");
        let copilotStatus = document.getElementById("copilotStatus");
        let fuelStatus = document.getElementById("fuelStatus");
        let cargoStatus = document.getElementById("cargoStatus");

        if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || 
        validateInput(fuelLevel) === "Empty" || validateInput(cargoMass) === "Empty") {
        alert("All fields are required");
        } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || 
        validateInput(fuelLevel) === "Not a Number" || validateInput(cargoMass) === "Not a Number") {
        alert("Invalid input!");
            } else {
            document.getElementById("faultyItems").style.visibility = "visible";
            document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
            document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;

            if(fuelLevel <= 10000 && cargoMass <= 10000){
                document.getElementById("faultyItems").style.visibility = "visible";
                document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
                document.getElementById("launchStatus").style.color = "red";
                document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
                document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
            } 
            if (fuelLevel >= 10000 && cargoMass >= 10000) {
                document.getElementById("faultyItems").style.visibility = "visible";
                document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
                document.getElementById("launchStatus").style.color = "red";
                document.getElementById("fuelStatus").innerHTML = "Fuel Level high enough for launch";
                document.getElementById("cargoStatus").innerHTML = "Cargo mass too high for launch";
            } 
            if ( fuelLevel >= 10000 && cargoMass <= 10000) {
                document.getElementById("launchStatus").innerHTML = "Shuttle Ready for Launch";
                document.getElementById("launchStatus").style.color = "green";
                // document.getElementById("fuelStatus").innerHTML = "Fuel Level high enough for launch";
                // document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
                document.getElementById("faultyItems").style.visibility = "hidden";
            }
        }
};

async function myFetch() {
        let planetsReturned;

        planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json")
        .then( function(response) {
            return response.json();
            });

        return planetsReturned;
};

function pickPlanet(planets) {
        const missionDestination = Math.floor(Math.random()*planets.length);
        return planets[missionDestination]
};

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;


