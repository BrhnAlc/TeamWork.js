//!  DEĞİŞKENLER

//!Türkçe karekter kullanmamalıyız..
//!Arada boşluk olmamamlı


//* Değişken NEDİR:javaScript'de değişkenler, verileri saklamak ve kullanmak için kullanılan isimlendirilmiş depolama alanlarıdır. Değişkenler, farklı veri türlerini (sayılar, metinler, diziler, nesneler vb.) ve değerleri temsil edebilir. Bir değişkenin değeri, atanan değerle ilişkilendirilir ve programın farklı noktalarında bu değere erişilebilir.

//*JavaScript'de değişken tanımlamak için var, let veya const anahtar kelimelerini kullanabilirsiniz. İşlev içinde tanımlanan değişkenler lokal (yerel) değişkenler olarak kabul edilirken, işlev dışında tanımlanan değişkenler global değişkenler olarak kabul edilir.

//? var -Anahtar kelimesiyle değişken tanımlama ****let -Anahtar kelimesiyle değişken tanımlama (ES6'dan itibaren)****const -anahtar kelimesiyle sabit (değiştirilemez) değişken tanımlama (ES6'dan itibaren):Değişkenler, bir kez tanımlandıktan sonra istediğiniz kadar kez yeniden atanabilirler:Değişken isimleri, harfle veya alt çizgi (_) ile başlamalıdır ve harfler, sayılar veya alt çizgilerden oluşabilir. Büyük/küçük harf duyarlılığına sahiptirler, yani age ve Age farklı değişkenlerdir.

var maasAli=5000;
var maasCan=7000;
var zam=0.35;

console.log(maasAli+(zam*maasAli));
console.log(maasCan+(zam*maasCan));

       //!DEĞİŞKEN TÜRLERİ

//*Karekterler topluluğu string dir.Bunlar tırnaklar içerisinde  kullanıyoruz..
var urunAdı="iphone 13";//*string
 let urunFiyat=15000;   //*number

console.log(typeof urunAdı);
console.log(typeof urunFiyat);





















// var maasCan = 6000;
// var zam= 0.35
// console.log(maasAli+ (maasAli*0.35))
// console.log(maasCan+(maasCan*0.35))




// let urunAdı = "iphone 13"
// let urunFiyat= 15000;

// console.log(typeof urunAdı)
// console.log(typeof urunFiyat)

// let sayı1 ="10"
// let sayı2= "30"

// console.log(sayı1+sayı2)

// let sayı3 = 10;
// let sayı4= 30;

// console.log(typeof sayı3 , typeof sayı4)
// console.log(sayı3 + sayı4)

// let sayı5 = "10";
// let sayı6="30";
 
// console.log(Number(sayı5)+ Number(sayı6))

// let sayı7=10;
// let sayı8=30;

// console.log(sayı7.toString()+ sayı8.toString())


// let isim= "Burhan";
// let  soyad= "Alaca";


// console.log(isim + " "+ soyad)


// let sınavNotu =80;

// let basarılımı = (sınavNotu >= 50)

// console.log( typeof   basarılımı)
// console.log(basarılımı)


// let yas;
// console.log(yas);
// console.log(typeof yas);


// let yas1 = " ";

// console.log(yas1)
// console.log(typeof yas1)

// //*1- iki öğrencinin aşağıdaki bilgilerini değişkenler içerisinde saklayınız.

// //* öğrenci 1:
// //* isim             :burhan bilgi
// //* doğum tarihi     :1988
// //* matematik notları :70,70,80

// //* öğrenci 1:
// //* isim             :ayşe alaca alaca
// //* doğum tarihi     :1989
// //* matematik notları :40,50,80

// //!öğrencilerin yaş bilgilerini değişkende tutunuz.

//   let ogr1_ad = "Ada";
//   let ogr1_soyad = "Bilgili";
//   let ogr1_dogumTarihi="2010"
//   let ogr1_matematik1=70;
//   let ogr1_matematik2=70;
//   let ogr1_matematik3=70;

//   let org1_ortalama=(ogr1_matematik1+ogr1_matematik2+ogr1_matematik3)/3;
//   console.log(org1_ortalama)
// console.log(org1_ortalama>=50);



// let ogr2_ad= "Ayşe";
// let ogr2_soyad ="alaca"
// let ogr2_dogumTarihi="2011"
// let ogr2_matematik1=40;
// let ogr2_matematik2=60;
// let ogr2_matematik3=70;



// let ogr2_ortalama=(ogr2_matematik1+ogr2_matematik2+ogr2_matematik3)/3;
// console.log(parseInt(ogr2_ortalama))
// console.log(ogr2_ortalama>=50)

// let ogr1_yas=2023-ogr1_dogumTarihi;
// console.log(ogr1_yas)

// let suankiYıl=new Date().getFullYear();

// let ogr2_yas=new Date().getFullYear()-ogr2_dogumTarihi;
// console.log(ogr2_yas)

 