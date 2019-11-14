// functie care iti returneaza rezolutia ecranului
// o functie care iti returneaza data curenta
// o functie care iti determina pozitia geografica

function getResolution() {
  return `${window.screen.width}x${window.screen.height}`;
}

function getDate() {
  return new Date().toDateString();
}

// function getPosition() {
//   navigator.geolocation.getCurrentPosition(function(position) {
//     console.log(`${position.coords.latitude.toPrecision(4)}, 
//     ${position.coords.longitude.toPrecision(4)}`);
//   });
// }

function getPosition() {
  navigator.geolocation.getCurrentPosition(position => document.getElementById("geolocation").innerHTML = 
    `${position.coords.latitude.toPrecision(4)},${position.coords.longitude.toPrecision(4)}`
    )
     
}

function onClickDate(){
  document.getElementById("date").innerHTML = `${getDate()}`
}

function onClickResolution(){
  document.getElementById("resolution").innerHTML = `${getResolution()}`
}

( () => {
  getPosition();
})();