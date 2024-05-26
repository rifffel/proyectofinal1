
let topping= "oreo";
let precio = 0;
let preciofinal = 0;
let helado=10;

if(topping=="oreo"){
    precio=10;
}else if(topping=="kitkat"){
    precio=15;
}else if(topping=="kinder"){
    precio=25;
}else{
    console.log("no tenemos este topping")
}

preciofinal=helado+precio;
console.log("el helado cuesta $"+ preciofinal)

let animales= ["gallo", "pez", "loro", "raton"];
animales.push("tortuga");
for(let i=0; i<animales.length; 1++)
    {
        console.log(animales[i]);
    }

    
let num = 8; 
let sum = 0;    
while (num <= 10) {
  sum += num;  
  num++;        
}


console.log("La suma de los números del 1 al 10 es: " + sum);

let resultado
let numero3=28;
let numero4=30;
function suma_Y_muestra(){
    resultado=suma+muestra;
    alert("el resultado es"+resultado);
}
suma_Y_muestra();