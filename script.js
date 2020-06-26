

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/







window.addEventListener("load", function(){
   let form = document.getElementById("launchForm");

   

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json) {
         console.log(json);
         let missionTarget = document.querySelector("#missionTarget");
         let i = Math.floor(Math.random()*6)
         missionTarget.innerHTML = `<h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[i].name}</li>
            <li>Diameter: ${json[i].diameter}</li>
            <li>Star: ${json[i].star}</li>
            <li>Distance from Earth: ${json[i].distance}</li>
            <li>Number of Moons: ${json[i].moons}</li>
         </ol>
         <img src="${json[i].image}">`
      });
   });



   form.addEventListener("submit", function(event){
      let pilotNameInput = document.querySelector("input[name=pilotName]")
      let copilotNameInput = document.querySelector("input[name=copilotName]")
      let fuelLevelInput = document.querySelector("input[name = fuelLevel]")
      let cargoMassInput = document.querySelector("input[name=cargoMass]")
      
      let faultyItemsList = document.querySelector("#faultyItems");
      let launchStatusHeader =  document.querySelector("#launchStatus");

      
      


      

      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === ""){
         alert("all fields required")
         event.preventDefault();

      } else if (isNaN(pilotNameInput.value) && isNaN(copilotNameInput.value)  && !isNaN(fuelLevelInput.value) && !isNaN(cargoMassInput.value)){
         
      let pilotStatus = document.getElementById("pilotStatus")
      let copilotStatus = document.getElementById("copilotStatus")
      pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch!`
      copilotStatus.innerHTML = `Co-Pilot ${copilotNameInput.value} is ready for launch!`

         if (fuelLevelInput.value < 10000){
            
            let fuelLevelStatus = document.querySelector("#fuelStatus")
            fuelLevelStatus.innerHTML = "Fuel level too low for launch"
            faultyItemsList.style.visibility = "visible";
            launchStatusHeader.innerHTML = "Shuttle not ready for launch";
            launchStatusHeader.style.color = "red"

           
         }

         if (cargoMassInput.value >10000){

            let cargoStatus = document.querySelector("#cargoStatus")
            faultyItemsList.style.visibility = "visible"
            cargoStatus.innerHTML = "Shuttle is too heavy for launch!"
            launchStatusHeader.innerHTML = "Shuttle not ready for launch";
            launchStatusHeader.style.color = "red"
            
         }

         if (cargoMassInput.value <= 10000 && fuelLevelInput.value >= 10000){
            launchStatusHeader.style.color = "green"
            launchStatusHeader.innerHTML = "Shuttle is ready for launch"
         }

      event.preventDefault()


      } else {
         alert("enter valid data")
         event.preventDefault();
      }
        

   })
})