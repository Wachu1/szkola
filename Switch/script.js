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

//let dayList = ["Niedziela", "poniedziałek", "wtorek", "sroda", ];

switch (day){
  case 0:
    document.querySelector("#day").innerHTML = `<b>Dziś jest niedziela </b>`;
    break;
  case 1:
    document.querySelector("#day").innerHTML = `<b>Dziś jest poniedziałek </b>`;
    break;
  case 2:
    document.querySelector("#day").innerHTML = `<b>Dziś jest wtorek </b>`;
    break;
  case 3:
    document.querySelector("#day").innerHTML = `<b>Dziś jest środa </b>`;
    break;
  case 4:
    document.querySelector("#day").innerHTML = `<b>Dziś jest czwartek </b>`;
    break;
  case 5:
    document.querySelector("#day").innerHTML = `<b>Dziś jest piątek </b>`;
    break;
  case 6:
    document.querySelector("#day").innerHTML = `<b>Dziś jest sobota </b>`;
    break;
  default:
      console.log("Przykro mi niepoprawy dzien tygodnia");
}






