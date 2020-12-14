let nombre1 = 34.589456;
console.log("nombre 1 = " + Math.floor(nombre1));

let nombre2 = 68.412784 ;
console.log("nombre 2 = " + Math.floor(nombre2));

let nombre3 = 39.456 ;
console.log("nombre 3 = " + Math.ceil(nombre3));

let nombre4 = 27.34876541;
console.log('nombre 4 = ' + Math.ceil(nombre4));

let nombre5 = 5.68;
console.log('nombre 5 = ' + Math.round(nombre5));

let nombre6 = 5.41;
console.log('nombre 6 = ' + Math.round(nombre6));

let nombre7 = 6.12457;
console.log('nombre 7 = ' + nombre7.toFixed(0));

let nombre8 = 9.568124;
console.log('nombre 8 = ' + nombre8.toFixed(0));

function minim (nb1, nb2, nb3, nb4, nb5) {
    console.log(Math.min(nb1, nb2, nb3, nb4, nb5));
}

function  maxim (nb1, nb2, nb3, nb4, nb5) {
    console.log(Math.max(nb1, nb2, nb3, nb4, nb5));
}

minim(5, 1, 12, -1, 45);
minim(9, 12, 16, 44, 3);

maxim(5, 1, 12, -1, 45);
maxim(9, 12, 16, 44, 3);

let nombre9 = -6;
console.log(Math.abs(nombre9));

let nombre10 = -56;
console.log(Math.abs(nombre10));
