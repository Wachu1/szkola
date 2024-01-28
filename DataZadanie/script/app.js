//const data = parseInt(prompt("Która jest godzina"));
const data = new Date();

if(data.getHours() < 12 ){
    document.querySelector("#main").innerHTML = "Good morning!";
}else if((data.getHours() > 11) && (data.getHours() < 18)){
    document.querySelector("#main").innerHTML = "Good afternoon!";
}else if((data.getHours() > 17) && (data.getHours() <= 24)){
    document.querySelector("#main").innerHTML = "Good evening!";
}

/*
if(data < 12 ){
    document.querySelector("#main").innerHTML = "Good morning!";
}else if(data > 11 && data < 18){
    document.querySelector("#main").innerHTML = "Good afternoon!";
}else if(data > 17 && data < 24){
    document.querySelector("#main").innerHTML = "Good evening!";
}*/

const day = data.getDay();
switch (day){
    case 0:
        document.write("Niedziela");
        console.log("Niedziela");
        break;
    case 1:
        document.write("Poniedziałek");
        console.log("Poniedziałek");
        break;
    case 2:
        document.write("Wtorek");
        console.log("Wtorek");
        break;
    case 3:
        document.write("Środa");
        console.log("Środa");
        break;
    case 4:
        document.write("Czwartek");
        console.log("Czwartek");
        break;
    case 5:
        document.write("Piątek");
        console.log("Piątek");
        break;
    case 6:
        documen.write("Sobota");
        console.log("Sobota");
        break;
    default:
        console.log("Przykro mi niepoprawy dzien tygodnia");
}
