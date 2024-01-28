const date = new Date();
let hour = date.getHours();
let day = date.getDay();
let name = prompt("Proszę podaj imię");

if (hour < 12) {
  document.querySelector("#hour").innerHTML = '<h4>" Dzień dobry " + name </h4>';
}else if ((hour >= 12) && (hour < 18)){
    document.querySelector("#hour").innerHTML = '<h4>"Miłego popołudnia" + name </h4>';
}else if

