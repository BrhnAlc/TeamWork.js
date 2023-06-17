
//!Soru 1:Verilen bir dizenin karakter sayısını nasıl bulabilirsiniz?

let rakam="1,2,3,4,5,6,7,";

let karekterSayısı=rakam.length;

console.log(karekterSayısı);

//!Soru 2:Bir dizenin belirli bir indeksteki karakterini nasıl alabilirsiniz?

let rakam1="1,2,3,4,5,6,7,";

let karekterSayısı1=rakam1[3];

console.log(karekterSayısı1);


//!Soru 3: Verilen bir dizeyi nasıl büyük harflere dönüştürebilirsiniz?

const meyve="armut,elma,kiraz";

const buyukHarf=meyve.toUpperCase();

console.log(buyukHarf);
//!Soru 4: Verilen bir dizeyi nasıl küçük harflere dönüştürebilirsiniz?

let sebze="Salatalık, Domates,Patates";

let kucukHarf=sebze.toLowerCase();

console.log(kucukHarf);



//!Soru 5: Bir dizenin belirli bir alt dizisini nasıl alabilirsiniz?

let alaca="merhaba, dünya";
let altDizi1=alaca.substring(0,7);
console.log(altDizi1);

let altDizi2=alaca.slice(9,14);
console.log(altDizi2);

//!split(separator): Bir dizeyi belirli bir ayırıcıya göre parçalara ayırarak bir diziye dönüştürür.

let mey="armut,elma,ayva";
console.log(mey.split(","));