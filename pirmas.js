"use-strict"

var masyvas = [];

for(let i = 0; i < 100; i++ ){
    masyvas[i] = i;
}

//isvesti visus lyginius ir nuli

for(let i = 0; i < masyvas.length; i++){
    if(masyvas[i] % 2 == 0){
        // console.log(masyvas[i]);
    }
}


//isvesti visus nelyginius
for(let i = 0; i < masyvas.length; i++){
    if(masyvas[i] % 2 == 1){
        //  console.log(masyvas[i]);
    }
}

//isvesti dalinancius is 5 ir nuli
for(let i = 0; i < masyvas.length; i++){
    if(masyvas[i] % 5 == 0){
        // console.log(masyvas[i]);
    }
}

//isvesti lyginius kurie dalijasi is 3 ir nulis :D
var skaiciavimas = 0;
for(let i = 0; i < masyvas.length; i++){
    if(masyvas[i] % 2 == 0 && masyvas[i] % 3 == 0){
        skaiciavimas++;
    }
}
// console.log(skaiciavimas);


//valgymas vienu daugiau kiekviena diena
var likutis = 16;
skaiciavimas = 0;
while(likutis > 0)
{
    skaiciavimas++;
    likutis -= skaiciavimas;
}

console.log(skaiciavimas);

//ideti i masyva paspaudus mygtuka

var masyvas2 = [];
skaiciavimas = 0;
document.getElementById("button").addEventListener("click", prideti);

function prideti(){
    if(isNaN(parseInt(document.getElementById("input").value))){
        alert("skaicius ne skaicius");
        return 0;
    }
    masyvas2[skaiciavimas] = parseInt(document.getElementById("input").value);
    skaiciavimas++;
    document.getElementById("output").innerHTML = masyvas2;
}

//antra
//2. Sukurkite skriptą, kuris n-ženklį skaičių sudeda į masyvą. Masyvas vėliau apverčiamas. Pvz: Jei skačius 123, apverstas masyvas [3, 2, 1].
let rev = 0;
let num = 123456;
let masyvas3 = [];
while(num != 0){
	masyvas3[rev] = num % 10;
  rev++;
  num = Math.floor(num/10);
}

console.log("Reverse number : "+masyvas3);
//trecia
//3. Sukurkite skriptą, kuris nuordytame intervale pildo 3 masyvus: į vieną masyvą sudeda visus lyginius skaičius, į kitą - nelyginius, į trečią - skaičius, kurie dalinasi iš 5.
let masyvaspenki = [];
let masyvasnelyg = [];
let masyvaslyg = [];
let mas1, mas2, mas3 = 0;
for(let i = 0; i < 100; i++){
    if(i % 5 == 0){
        masyvaspenki[mas3] = i;
        mas3++;
    }
    else if (i % 2 == 0){
        masyvaslyg[mas2] = i;
        mas2++;
    }
    else{
        masyvasnelyg[mas1] = i;
        mas1++;
    }
}