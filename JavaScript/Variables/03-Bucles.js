/**
 * Created by jose.zurita on 9/5/17.
 */

for(var i=0;i<10; i++) {
    console.log(i);
}

while(i<20){
    console.log(i);
    i++;
}

var conHambre = false;

if(conHambre){
    console.log("Comer")
} else {
    console.log("Trabajar")
}

var numero = 5;
switch (numero) {
    case 1:
        console.log("Uno");
        break;
    case 5:
        console.log("Cinco");
        break;
    default:
        console.log("Ni uno, ni cinco");
        break;
}