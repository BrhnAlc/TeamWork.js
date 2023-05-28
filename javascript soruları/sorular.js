
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



