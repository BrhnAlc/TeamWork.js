//!Türkçe karekter kullanmamalıyız.
//*Arada boşluk kabul etmez.
//?Sayı ile başlayamaz
var maasAli =5000;
var maasCan =6000;

zam =0.35;

console.log(maasAli+ (maasAli*zam)); //*ali maas

console.log(maasCan+(maasCan*zam)); //* can maas

var urunAdı = "iphone 13"; //* string
let urunFiyat=15000; //? Number

console.log(typeof urunAdı);
console.log(typeof urunFiyat);

let sayı1 = "120";
let sayı2 = "140";
 console.log(sayı1+sayı2)

 let sayı3= 120;
 let sayı4= 140;
 console.log(sayı3+sayı4)

 var alaca1="Burhan"
var  alaca2="Alaca"
console.log(alaca1+" "+alaca2)

let sayı5="120";
let sayı6="140";

console.log(Number(sayı5)+ +(sayı6))

let isim ="Burhan";
let soyad ="Alaca";
console.log(isim+" " +soyad)

let sayı = 120;
let urun ="Kotlar";
 console.log(sayı+ " "+ "Kotlar")


 let sınavNotu=40;
if(sınavNotu>=50){
    console.log("Tebrikler, geçtiniz.")

}else
if(sınavNotu<50){
    console.log("Üzgünüz,kaldınız")
}

let not = 80;
let basarılımı=(not>=50);
console.log(basarılımı);
console.log(typeof basarılımı);


let yas ;
console.log(yas);
console.log(typeof yas);

let age = "";
console.log(age)
console.log(typeof age)


// * 1-İki öğrecinin aşağıdaki bilgilerini değişkenler içerisinde saklayınız.

// *      öğrenci 1:
// *       isim                 :ada bilgi
// *       doğum tarihi          :2012
// *       matematik notları     :70,70,80

// *       öğrenci 2:
// *          isim               :yiğit bilgi
// *          doğum tarihi        :2010
// *          matematik notları    :40,40,50


  let ogr1_adı="Ada"
  let ogr1_soyad="Bilgi";
  let ogr1_dogumTarihi="2010";
  let ogr1_matematik1=70;
  let ogr1_matematik2=70;
  let ogr1_matematik3=80;
  


  let ogr2_Ad= "Yiğit";
  let ogr2_Soyad="Bilgi";
  let ogr2_DogomTarihi="2010";
  let ogr2_matematik1=40;
  let ogr2_matematik2=40;
  let ogr2_matematik3=50;

  

 let ogr1_yas=2023-ogr1_dogumTarihi;
  console.log(ogr1_adı,ogr1_soyad, ogr1_yas,ogr1_matematik1)


  let suankiYıl= new Date().getFullYear();

  let ogr2_yas = suankiYıl-ogr1_dogumTarihi;
  console.log(ogr1_yas);

// * 3-Öğrencilerinin ders ortalama notunu değişkenede saklayınız. 
  
  let ogr1_ortalama = (ogr1_matematik1 + ogr1_matematik2 + ogr1_matematik3) / 3;
  console.log(parseFloat(ogr1_ortalama))
  console.log(typeof ogr1_ortalama)

  let ogr2_ortalama =(ogr2_matematik1 +ogr2_matematik2+ogr2_matematik3)/3;
  console.log(parseInt(ogr2_ortalama));

  //* 4 -  öğrencilerinin 50 geçme notuna göre başarılı durumlarını değişkende saklayınız.

  console.log(ogr1_ortalama>=50);
  console.log(ogr2_ortalama>=50);