const date = new Date();
let hour = date.getHours();
let day = date.getDay();
let user = prompt("Proszę podaj imię");

if (hour < 12) {
  document.querySelector("#hour").innerHTML = `<h4> Dzień dobry ${user} </h4>`;
}else if ((hour >= 12) && (hour < 18)){
    document.querySelector("#hour").innerHTML = `<h4> Miłego popołudna ${user} </h4>`;
}else if ((hour >= 18) && (hour < 24)){
  document.querySelector("#hour").innerHTML = `<h4> Dobry wieczór ${user} </h4>`;
}

