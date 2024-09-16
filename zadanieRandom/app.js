let los = Math.floor((Math.random()*10)+1);
console.log(los);
let answer = prompt("wpisz liczbę");
while (los != answer){      //Do poki los nie jest rowny wpisanej liczbie petla bedzie sie wykonywac

     answer = prompt("wpisz liczbę");

    if(los == answer){
        document.querySelector("h1").innerHTML = "BRAWO ZGADŁEŚ";
    }else{
        alert("spróbuj ponownie");
    }
}




