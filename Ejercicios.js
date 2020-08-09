//--------------------------- PREGUNTA 5.6  --------------------------------

/*Realice y represente mediante diagrama de flujo y pseudocódigo un
algoritmo que lea los nombres y las edades de diez alumnos, y que los
datos se almacenen en dos vectores, y con base en esto se determine
el nombre del alumno con la edad mayor del arreglo.*/



//Solución: 



let edad =[29,28,27,33,40,35,34,27,37,29];
console.log(edad);
let nombres =["carlo","miguel","daniel","jorge","ivan","maria","martin","alejo","juan","edgar"];
console.log(nombres);

  let  mayoredad=0;

    for(let i=0; i<edad.length ; i++){
        if(mayoredad < edad[i]){
            mayoredad = edad[i];            
        }
    } 

    console.log(`Mayor de edad: ${mayoredad}`)   
    console.log(`nombre de mayor de edad: ${nombres[edad.indexOf(mayoredad)]} `)   




    
             //--------------------------- PREGUNTA 5.8  --------------------------------

/*Realice un algoritmo que lea un vector y a partir de él forme un segundo vector, de tal forma que el primer elemento pase a ser el segundo,
el segundo pase a ser el tercero, el último pase a ser el primero, y así
sucesivamente. Represéntelo mediante un diagrama de flujo.*/

/*
let arrayInicial0 = [10,29,28,27,33,60,80,20];
let arrayInicial = arrayInicial0.slice();

let arrayInicial2 = arrayInicial.pop(arrayInicial[arrayInicial]);
let arrayInicial3 = [arrayInicial.unshift(arrayInicial2)]
 
console.log(`Arreglo inicial: ${arrayInicial0}`) 
 console.log(`Arreglo final: ${arrayInicial}`) 
*/

             //--------------------------- PREGUNTA 5.10  --------------------------------

/* Realice un algoritmo que lea dos vectores de cien elementos y que calcule la suma de éstos guardando su resultado en otro vector, el cual se
debe presentar en forma impresa.*/


//Solución: 
/*
let numeros1 =[2,4,6,1,3,5,8,7,2,3];
let numeros2 =[3,1,6,1,3,5,8,7,2,3];
let resultado=[];


for(let i = 0; i < numeros1.length; i++)
{
    resultado[i] = numeros1[i] + numeros2[i];
}
 

console.log(`${numeros1}`);
console.log(`${numeros2}`);
 console.log(`${resultado}`);

*/

             //--------------------------- PREGUNTA 5.13  --------------------------------

/* Se tiene en un arreglo cien elementos representando calificaciones de
los estudiantes de una escuela. Realice un algoritmo que lea el arreglo
y calcule la calificación promedio del grupo, además, que cuente los estudiantes que obtuvieron calificaciones arriba del promedio del grupo.
Represéntelo mediante diagrama de flujo, diagrama N/S y pseudocódigo.*/

/*
let numeros1 =[12,04,16,11.2,13,15,08,07,12,03];
let resultado=0;
let suma=0;
let promedio=0;
let contador=0;
let mayores=0;
let menores=0;
 
for(let i = 0; i < numeros1.length; i++)
{   resultado = numeros1[i];
    suma  = suma + resultado;
    promedio = suma / (numeros1.length) ;
}

while(contador < numeros1.length){
    if(numeros1[contador] >= promedio){
        mayores++;
    } else if (numeros1[contador] < promedio){
        menores++;
    } 
    contador=contador + 1;
}
 
console.log(` Notas del grupo ${numeros1}`);  
 console.log(` calificación promedio del grupo: ${promedio}`);
 console.log(` Cantidad de estuudiantes con notas mayores al promedio del grupo: ${mayores}`);
 console.log(` Cantidad de estuudiantes con notas menores al promedio del grupo: ${menores}`);
*/



             //--------------------------- PREGUNTA 5.17  --------------------------------
/*
Una compañía de transporte cuenta con cinco choferes, de los cuales
se conoce: nombre, horas trabajadas cada día de la semana (seis días)
y sueldo por hora. Realice un algoritmo que:
a) Calcule el total de horas trabajadas a la semana para cada trabajador.
b) Calcule el sueldo semanal para cada uno de ellos.
c) Calcule el total que pagará la empresa.
d) Indique el nombre del trabajador que labora más horas el día lunes.
e) Imprima un reporte con todos los datos anteriores.*/


//Solución: 

let productos = [
    {
        nombre:"Jose",
        Horaspordia: 5,
        sueldoporho: 10 
       
    },  
    {
        nombre:"alan",
        Horaspordia: 2,
        sueldoporho: 5 
      
    },
    {
        nombre:"eduardo",
        Horaspordia: 3,
        sueldoporho: 3 
       
    },
    {
        nombre:"marco",
        Horaspordia: 3,
        sueldoporho: 2 
       
    },
    {
        nombre:"luis",
        Horaspordia: 3,
        sueldoporho: 6 
    },
    ]; 

    let semana=6;
    let total=0;

    for (let i = 0; i < productos.length; i++) {

        productos[i].horastrabajadasemana =  (productos[i].Horaspordia * semana);
        productos[i].horastrabajada0 =  (productos[i].Horaspordia * productos[i].sueldoporho )* semana;
        // productos[i].total   = productos[i].horastrabajada0
    }



    for (let i = 0; i < productos.length; i++) {
        console.log(`---Productos ${i + 1}---`);
        console.log(`nombre: ${productos[i].nombre}`);
        console.log(`Horas por día: ${productos[i].Horaspordia}`);
        console.log(`costo por hora: ${productos[i].sueldoporho}`);
        console.log(`La semana tiene: ${semana} días`);
        
        console.log(`horas trabajadas a la semana: ${productos[i].horastrabajadasemana}`);
        console.log(`Pago de sueldo por semana: ${productos[i].horastrabajada0}`);  
    }
    // console.log(`Pago total: ${total}`); 