/*TÖMBÖK*/

var tomb=[];
var tomb2=[1,2,3,4,5];
var tomb3=[5];
console.log(tomb.length);
console.log(tomb2.length);
console.log(tomb3.length);
console.log(tomb2[0]);

var gyumolcs=["alma","körte","szilva","narancs","szőlő","eper","ananász"]
var gyumolcsSzin = ["piros","sárga","kék","sárga","zöld","piros","sárga"]
var gyumolcsAr = [200,180,320,310,500,3000,1400]
for (let index = 0; index < gyumolcs.length; index++) {
    console.log(gyumolcs[index]);
    
}

/*Van-e sárga gyümölcs?*/
var index=0;
while (index<gyumolcsSzin.length && !(gyumolcsSzin[index]==="sárga")) {
    index++;
}

var vane=index<gyumolcsSzin.length;
console.log(vane);

/*Hány sárga gyümölcs van?*/
index = 0;
var sargak = 0;
while (index<gyumolcsSzin.length) {
    if (gyumolcsSzin[index]==="sárga") {
        sargak+=1;
    }
    index++;
}
console.log("Sárga gyümölcsök száma: ", sargak)

/*Mennyi a gyümölcsök összértéke?*/
index = 0;
var osszertek = 0;
while (index<gyumolcsAr.length) {
    osszertek+=gyumolcsAr[index];
    index++;
}
console.log("A gyümölcsök összértéke: ", osszertek)

/*Piros vagy sárga gyümölcsből van több?*/
index = 0;
sargak = 0;
pirosak = 0;
while (index<gyumolcsSzin.length) {
    if (gyumolcsSzin[index]==="sárga") {
        sargak+=1;
    } else if (gyumolcsSzin[index]==="piros"){
        pirosak+=1;
    }
    index++;
}
if(sargak>pirosak){
    console.log("Sárga gyümölcsből van több.")
} else if(pirosak>sargak){
    console.log("Piros gyümölcsből van több.")
}

/*Van-e 100Ft alatti gyümölcs?*/
index = 0;
var alatti = false;
while (index<gyumolcsAr.length && alatti) {
    if(gyumolcsAr[index]<100) {
        alatti =true;
    }
}
if (alatti = true) {
    console.log("Van 100Ft alatti gyümölcs.")
}else if(alatti = false) {
    console.log("Nincs 100Ft alatti gyümölcs.")
}

/*Mennyi a gyümölcsök átlagára?*/