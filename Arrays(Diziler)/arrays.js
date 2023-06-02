//*JavaScript'te diziler, birden çok değeri tek bir değişken altında saklamak için kullanılan veri yapılarıdır. Diziler, virgülle ayrılmış değerlerin köşeli parantezler içinde tanımlandığı bir liste şeklinde temsil edilir. İşte bir örnek:

let renkler = ["Kırmızı", "Mavi", "Yeşil"];

//*Dizilerin elemanları, 0'dan başlayarak sıfırdan başlayan bir indeks numarasıyla erişilebilir. İndeks numaraları köşeli parantez içinde belirtilir. İşte örnek bir kullanım:

console.log(renkler[0]);  // Çıktı: Kırmızı
console.log(renkler[1]);  // Çıktı: Mavi
console.log(renkler[2]);  // Çıktı: Yeşil

//*Dizi elemanlarını değiştirmek veya yeni elemanlar eklemek için indeks numarasını kullanarak erişebilirsiniz. İşte bir örnek:

renkler[1] = "Sarı";  // Mavi elemanını Sarı ile değiştirir
renkler[3] = "Turuncu";  // Yeni bir eleman ekler

console.log(renkler);  // Çıktı: ["Kırmızı", "Sarı", "Yeşil", "Turuncu"

//*Dizi elemanlarını eklemek veya silmek için çeşitli dizi yöntemleri ve özellikleri vardır. Örneğin, push() yöntemiyle yeni bir eleman dizinin sonuna eklenir veya pop() yöntemiyle son eleman diziden çıkarılabilir. Bunlar sadece bazı temel dizi işlemleridir.



const name = [];
const x = name.length;
console.log (x);

//*Verdiğiniz kodun çıktısı 0 olacaktır. Çünkü name adlı dizi boş olduğu için eleman sayısı da 0 olarak hesaplanır. name.length ifadesi, bir dizinin içindeki eleman sayısını döndürür. Boş bir dizi olduğu için eleman sayısı 0 olur ve bu değer x değişkenine atanır.




// //!örnek
// //* grades'in ortalamasını hesaplayınız .
// const grades = [55,77,23,89,100,44,33,45]
// let sum =0
// for(let i=0;i<grades.length; i++ ){
//     sum+=grades[i]
// }
// console.log("AVG",(sum/grades.length).toFixed(2))


//*!örnek
//*grades dizisindeki notların 50'den küçük olanları ve büyük olanları  2 ayrı diziye kaydediniz.


const grades = [55,77,23,89,100,44,33,45]

const lessThan50=[]
const equalorBiggerThan50=[]

for(let j=0; j <grades.length; j++){ 
if(grades[j] <50){
    lessThan50.push(grades[j])
}else {
    equalorBiggerThan50.push(grades[j])
}
}

console.log(lessThan50)
console.log(equalorBiggerThan50)

// diziler


// let a= sayilar1.shift()
// console.log(a)
// console.log(sayilar1)
//  let c = isimler.shift()
//  console.log(c)
//  console.log(isimler)

// let b = ogrenciler.shift()
// console.log(b)
// console.log(ogrenciler)


// let b=isimler.shift()
// console.log(b)


// let a=ogrenciler.filter((x)=>x.yas>20 && x.yas<46)
// console.log(a)
// console.log(sayilar1)

//dec


// let a= Array.of(5)
// console.log(a);
// console.log(sayilar)





 const sayilar = [1, 50, 2, 41, 41, 84, 8, 35, 3]
 const isimler = ['sezer', 'ali', 'hasan', 'ayse']
 const ogrenciler = [
     {id : 12, isim : "sezer", yas : 30},
     {id : 22, isim : "hasan", yas : 15},
     {id : 32, isim : "fatma", yas : 55},
     {id : 13, isim : "nuriye", yas : 19},
     {id : 92, isim : "kemal", yas : 45},
     {id : 15, isim : "mustafa", yas : 75},
     {id : 44, isim : "ceren", yas : 30}
 ];










 
//  const yas = [30,15,55,19,45,75,30];

//  const toplamYas = yas.reduce((a,b) => (a+b),0)/7;
 
//  console.log(toplamYas); //*çıktı: 269








// let a= sayilar.reduce((x,y)=> x+y)
//  console.log(a);
//  console.log(sayilar)





//! sıralam ayapıyor
// let a= sayilar.sort()
// console.log(a);
// console.log(sayilar)

// let a= sayilar.sort((a,b)=> a-b) küçükten büğüğe
// console.log(a);
// console.log(sayilar)

// let a= sayilar.sort((a,b)=> b-a) büyükten küçüğe doğru
// console.log(a);
// console.log(sayilar)



// let a= isimler.sort().reverse()// *direk tersine döndüürü
// console.log(a);
// console.log(isimler)


//  let a= sayilar.sort().reverse()
//  console.log(a);
//  console.log(sayilar)





// //! soru 1: bir dizideki sayıların ortalamasını bulan fonksiyonu yazınız?

// function ortalamaBul(dizi) {
//     var toplam = dizi.reduce(function(a, b) {
//       return a + b;
//     }, 0);
//     var adet = dizi.length;
//     var ortalama = toplam / adet;
//     return ortalama;
//   }
  
//   // Örnek kullanım:
//   var sayilar = [4, 6, 8, 12, 2];
//   console.log(ortalamaBul(sayilar));

// //! soru 2: Bir prağraftaki sesliharflerin sayısını bulan fonksiyonu yazınız?

// function sesliHarfSayisiBul(paragraf) {
//     var sesliHarfler = ['a', 'e', 'ı', 'i', 'o', 'ö', 'u', 'ü'];
//     var sayac = 0;
    
//     for (var i = 0; i < paragraf.length; i++) {
//       var karakter = paragraf[i].toLowerCase();
      
//       if (sesliHarfler.includes(karakter)) {
//         sayac++;
//       }
//     }
    
//     return sayac;
//   }
  
//   // Örnek kullanım:
//   var metin = "Bu bir örnek cümledir.";
//   console.log(sesliHarfSayisiBul(metin));

// //! soru 3: Bir dizideki en büyük sayıyı bulan fonksiyonu yazınız?



//! soru 4: Bir cümleyi alın ve kelimeleri ters sırayla birleştirerek yeni bir cümle oluşturun.




//! soru 5: Soru: Bir isim listesi oluşturmak istiyorsunuz. İlk başta boş bir diziyle başlayın. Kullanıcıdan klavyeden  isimleri alarak listeye ekleyin. Kullanıcı 'q' tuşuna basana kadar isim eklemeye devam edin. Kullanıcı 'q' tuşuna bastığında en son eklediği ismi listeden çıkarın ve sonuçları konsola yazdırın.



//! soru 6: Soru: Bir dizi içerisindeki sayıların karesini alarak her bir sayıyı konsola yazdırın.



//! soru 7: Soru: Bir dizi içerisindeki sayıların karesini alarak yeni bir dizi oluşturun. Ardından, bu yeni dizideki çift sayıları filtreleyerek sadece çift sayıları içeren bir başka dizi oluşturun.

//!örnek

// const letters = ['A', 'B', 'C', ,'E'];
// for (let i = 0; i < letters.length; i++) {
//   console.log(letters[i]);
// }

// const letters = ['A', 'B', 'C', ,'E'];
// letters.forEach((letter) => {
//   console.log(letter);
// });