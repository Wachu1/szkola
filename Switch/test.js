const date = new Date();
let hour = date.getHours();
let day = date.getDay();
let user = prompt("Proszę podaj imię");

if (hour < 12) {
  document.querySelector("#hour").innerHTML = `<h4> Dzień dobry ${user} </h4>`;
}else if ((hour >= 12) && (hour < 18)){
  document.querySelector("#hour").innerHTML = `<h4> Miłego popołudna ${user} </h4>`;
}else{
  document.querySelector("#hour").innerHTML = `<h4> Dobry wieczór ${user} </h4>`;
}


if((day == 0) && (day == 6)){
  var weekend = "Nareszczcie Weekned!"
 } else{
   let normalDay = 6 - day;
   if(normalDay == 1){
    var weekend = `do weekendu został ${normalDay} dzień`
   }else{
    var weekend = `do weekendu zostały ${normalDay} dni`
   }
}
  

switch (day){
  case 0:
    document.querySelector("#day").innerHTML = `<b>Dziś jest niedziela ${weekend}</b>`;
    break;
  case 1:
    document.querySelector("#day").innerHTML = `<b>Dziś jest poniedziałek ${weekend} </b>`;
    break;
  case 2:
    document.querySelector("#day").innerHTML = `<b>Dziś jest wtorek ${weekend}</b>`;
    break;
  case 3:
    document.querySelector("#day").innerHTML = `<b>Dziś jest środa ${weekend}</b>`;
    break;
  case 4:
    document.querySelector("#day").innerHTML = `<b>Dziś jest czwartek ${weekend}</b>`;
    break;
  case 5:
    document.querySelector("#day").innerHTML = `<b>Dziś jest piątek ${weekend}</b>`;
    break;
  case 6:
    document.querySelector("#day").innerHTML = `<b>Dziś jest sobota ${weekend}</b>`;
    break;
  default:
      console.log("Przykro mi niepoprawy dzien tygodnia");
}



