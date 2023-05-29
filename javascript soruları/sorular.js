 
// let a = null;
// console.log(typeof a);


//! Aşağıdaki kodun çıktısı ne olacaktır?
// let x = 1;
// let y = 0;
// while (x < 4) {
//  x++;
//  y += x * 3;
//  console.log(y);
// }


//!Aşağıdaki kodun çıktısı ne olacaktır?
let x = true + true + true * 5;
console.log(x);

//!Aşağıdaki kod parçacığının çıktısı ne olacaktır?
console.log(11 + "10");

//!Aşağıdaki kod parçacığının çıktısı ne olacaktır?
let a;
const b = 25;
let c = "Text";
console.log((a && b) || c);

//*(map() fonksiyonu, bir dizi veya bir haritadaki her bir öğe üzerinde belirli bir işlem yapmanızı ve sonuçlarını yeni bir dizi olarak döndürmenizi sağlar.map() fonksiyonu, orijinal diziyi değiştirmez, sadece her bir öğe üzerinde işlem yaparak yeni bir dizi döndürür. Bu nedenle, sayilar dizisi hala aynı kalır..İşte map() fonksiyonunu kullanarak basit bir örnek:)


const sayılar = [1,2,3,4,5,6,7];

const kareleri = sayılar.map(sayı=> sayı*sayı);
console.log(kareleri);


//*(map() fonksiyonu aynı zamanda bir dizi içerisindeki nesneleri dönüştürmek için de kullanılabilir. Örneğin)
const ogrenciler =[
    {ad:"Ali",yas:20},
    {ad:"Burhan", yas:34},
    {ad:"Mehmet" , yas:24}
]
const isimler= ogrenciler.map(ogrenci => ogrenci.ad);
const yas = ogrenciler.map(ogrenci=>ogrenci.yas)
console.log(isimler)
console.log(yas)


//!soru => map
const array1 = [1,4,9,16];

const map1 = array1.map(x=> x*2);
 
console.log(map1)

//!soru =>filter
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word=>word.length>4);
console.log(result)

//!soru => forEach()

const sayılar2 =[1,2,3,4,5,6,7,8,9];

sayılar2.forEach(sayı=> {
    console.log(sayı*sayı)
})

//*soru =>reduce
//!(reduce() fonksiyonu, bir dizi veya bir harita üzerindeki tüm öğeleri birleştirerek veya azaltarak tek bir değer elde etmenizi sağlar.reduce() fonksiyonu, bir başlangıç değeri (opsiyonel olarak belirtilebilir) ve bir geri çağırma fonksiyonu alır. Geri çağırma fonksiyonu, her bir öğeyi ve birikim değerini alır ve bir sonraki birikim değerini döndürür. En sonunda, reduce() fonksiyonu birikim değerini döndürür.İşte reduce() fonksiyonunu kullanarak basit bir örnek:)

const rakamlar = [1,2,3,4,5,6];

const toplam = rakamlar.reduce((birikim , rakam)=>birikim+rakam,0);

console.log(toplam)

//!soru => reduce
//*(reduce() fonksiyonu ayrıca bir dizi içerisindeki nesneleri veya karmaşık yapıları birleştirmek veya azaltmak için de kullanılabilir. Örneğin:)

const ogrenciler2=[
    {ad:"Burhan", yas:34},
    {ad:"Ayşe",yas:30},
    {ad:"Zeynep", yas :40}
]
 const adlar = ogrenciler2.reduce((birikim ,ogrenci)=>birikim+ " "+ogrenci.ad, "")


 console.log(adlar)






//** */ 1- Celsius değerini Fahrenheit değerine dönüştüren bir fonksiyon yazınız? (Celsius × 9/5) + 32 = Fahrenheit



//  console.log(calFahrenheit(30)) // output:86
// function calFahrenheit(deg){
//     let hesapla=(deg*9)/5+32
//     console.log(hesapla)
// }




// ?2- Belirli bir string ifadenin tersini bulan fonksiyonu yazınız?
// *console.log(reverseString('hello world')) // output: dlrow olleh

// let str = 'hello world'
// reversesString(str)
//  function reversesString(str){
//     for(let i=0; str.length;)
//  }
// console.log(reverseString('hello world'))

// function reverseString(str) {
//   let newStr = ''

//   for (let i = str.length - 1; i >= 0; i--) {
//     newStr += str[i]
//   }

//   return newStr



//! 3- Belirli bir string ifadenin palindrome olup olmadığını bulan fonksiyonu yazınız?
//* const string = 'selles'
//? console.log(isPalindrome(string)) // output: true
//    const string = 'alila'

// console.log(isPalindrome(string)) // output: true

// function isPalindrome(str) {
//   let newStr = ''

//   for (let i = str.length - 1; i >= 0; i--) {
//     newStr += str[i]
//   }

//   if (str == newStr) {
//     return true
//   } else {
//     return false



//** */ 4- Belirli bir string ifadenin içindeki sesli harfleri bulan fonksiyonu yazınız?(includes)
// console.log(findVowels('hello world')) // output: eoo
//  console.log(findVowels('hello world')) // output: eoo

// const str1 = 'hello world'

// function findVowels(str) {
//   let vowels = ''
//   let sesliler = 'aeıioöuü'

//   for (let i = 0; i < str.length; i++) {
//     if (sesliler.includes(str[i])) {
//       vowels += str[i]
//     }
//   }

//   return vowels
// }

// console.log(findVowels('hello world'))



// 5- Belirli bir sayının tam bölenlerinin toplamını bulan fonksiyonu yazınız?
// console.log(sumOfDivisors(12)) // output: 28






// 6- Belirli bir sayının asal olup olmadığını bulan fonksiyonu yazınız?
// console.log(isPrime(7)) // output: true





// 7- Bir sayının faktöriyelini hesaplayan bir fonksiyon yazınız.
// console.log(factorial(5)) // output: 120




// 8- Bir dizi içerisindeki en büyük sayıyı bulan bir fonksiyon yazınız.
// console.log(findMax([1, 2, 3, 4, 5, 6, 7, 8, 9])) // output: 9




// 9- Bir dizi içerisindeki sayıları toplayan bir fonksiyon yazınız.
// console.log(sumOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9])) // output: 45





// 10-Girilen bir cümledeki kelime sayısını bulan bir fonksiyon yazınız.

// console.log(findWordCount('hello world')) // output: 2





// 11- Girilen bir sayının pozitif çarpanlarını bulan bir fonksiyon yazınız
// console.log(findPositiveDivisors(12)) // output: [1, 2, 3, 4, 6, 12]



