// let list = [2,3,4,5,6,7,8,9,10];

// for(let i = 0; i < list.length; i++){

//     document.write(i);

// }

// const arr = [1,2,3,4,5];

//  for (let a = 0; a < arr.length; a++){
//     document.write(arr[a] *2);
// }


 /*
            Zadanie z petla for
            1. Napisz tablice elementow od -6 do 6
            2. Dodaj wszystkie elementy w tablicy do 
                siebie, pokaz sume w konsoli 
            3. Podczas iteracji tablicji pokaz tylko w konosli liczby wieksze od zera
        */


let arr = [-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6]
let sum = 0;
for(let i = 0; i < arr.length; i++ ){
    let num = arr[i];
    sum += num;
    if( arr[i] > 0) document.write(arr[i] )

}
document.write('<br>' + sum);