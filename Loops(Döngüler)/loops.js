// // // //!1 den 10 a kadar yazdıralım

//  for(let i=1; i<=20;i++){
//      if(i<=20){
//          console.log(i)
//      }
//  }


//  for(let  i=1;  i<10; i++ ){
//     console.log(i);
//  }

//  for(let i=0; i<10; i=i+2  )
//  console.log(i)


// for(let i=0; i<10; i++){
//     if(i%2==0){
//         console.log("burhan");
//     }else{
//         console.log("AYŞE");
//     }
// }

// // ** en büyükk ve en küçük sayıyı bulma
// let Arr = [40, 55, 11, 90, 18, 76, 24, 83, 66, 88, 46, 69, 48, 96, 42, 18, 13, 33, 4, 42]

// let largest = Arr[0]
// let samllast =Arr [0]

// for (let i =0 ; i< Arr.length; i++)

// if(Arr[i] > largest ){
//     largest=Arr[i]{

//         else if (Arr[i] >samllast)
// samllast=Arr[i]
//     }
// }
//* tek sayıları bulalım

// let tek=[]
// let cift=[]
// for(i=0; i<Arr.length;a++){
//     if(Arr[i]%2===1){
//         tek.push(Arr[a])
//     }else{
//         even.push(Arr[a])
//     }

// }
// console.log(tek);
// console.log(cift);

//*


//  let tutulanSayı=Math.trunc(Math.random()*10)
//  console.log(tutulanSayı);

//  for (let i=0 ; i<5 ; i++)
//     {
//         (let tahmin= prompt("lütfen 1 den 10 kadar bir sayı giriniz"))}{
//             ifif(tahmin >10 ){
//                 alert("10 dan küçük bir sayı giriniz")
//             }
//         }
// console.log(tahmin);

let tutulanSayi = Math.trunc(Math.random()*10)
console.log(tutulanSayi);
let counter = 5
for(let i = 0  ; i < 5 ; i++){
    counter--
    let tahmin = prompt("Lutfen 1 ile 10 arasinda bir sayi giriniz.." + counter + " " + "Kadar hakkiniz kaldi")
    if(tahmin > 10){
        alert("10 dan kucuk bir sayi girin!!!")
    }else if(tahmin == tutulanSayi){
        alert("Tebrikler Kazandiniz!!!")
        break
    }else if(tahmin >  tutulanSayi){
        alert("Daha kucuk bir sayi giriniz")
    }else{alert("Daha buyuk bir sayi giriniz ")}
}















// // //! 1 den 10 a  kadar çift sayıları yazalım
//  for(let i=0;i<=10;i=i+2){
//      console.log(i)
//  }

// //!bir dizideki sayılarıntoplamını hesaplayan uygulamayı for döngüsü ile yazınız
// const sayı =[1,2,3,4,5,6,7];
// let sum=0;

// for(let i=0; i<sayı.length; i++ ){
// sum+=sayı[i];
// console.log(sum)
// }
// console.log(sum)
// //!------------- ÖRNEK -------------------
//? grades'in ortalamasini hesaplayiniz.
//  const grades = [55, 77, 23, 89, 100, 44, 33, 45]

//  let sum = 0;
//  for(let i=0; i<grades.length;   i++){

//     sum+=grades[i]
//     console.log(sum)
//  }
//  console.log("SUM:",sum)
//  console.log("AVG:",sum/grades.length)


 //!grades dizisindeki notların 50'den kucuk olanları ve buyuk olanları 2 ayri diziye kaydediniz.
// const grades = [55, 77, 23, 89, 100, 44, 33, 45]
// const lessThan50=[];
// const equalOrBiggerThan50=[];

// for(let j=0; j<grades.length;  j++){
// if(grades[j]<50){
//     lessThan50.push(grades[j])
// }else{
//     equalOrBiggerThan50.push(grades[j])
// }
// }
// console.log(lessThan50)
// console.log(equalOrBiggerThan50)

// //!Bir dizideki tüm elemanların topplamını bulan programı FOR IN ile yazınız.
// const sayılar=[12,34,56,78,89,90]
// let sonuc=0;
// for(let i in sayılar){
//     sonuc+=sayılar[i];
// }
// console.log(sonuc)


// soru-1 1000 ile 2000 arasındaki 13 e bölümünden kalanı 3 olan sayıları konsola yazdırınız ?

// let a = [1, 2, 3, 4, 5]
// let sayac = 0

// for (let i = 1000; i < 2000; i++) {
//   if (i % 13 == 3) {
//     console.log(i)
//     sayac++
//   }
// }
// console.log(sayac)

// soru-2 kullanıcıdan alınan 5 adet sayının ortalamasını konsola yazdırınız ?

// let sayac = 0
// let toplam = 0

// while (sayac < 5) {
//   let sayi = +prompt('Lütfen Bir sayı giriniz')
//   toplam += sayi

//   sayac++
// }

// console.log(toplam / sayac);

// soru-3 Kullanıcıdan alınan sayıları negatif girilene kadar toplayan ve sonucunu konsola yazdıran kodu yazınız ?(while)

// let durum = true
// let sum = 0

// while (durum) {
//   let sayi = +prompt('Sayı giriniz')

//   if (sayi < 0) {

//     durum = false
//     continue
//   }

//   sum += sayi
// }

// console.log(sum)

// let durum1 = true
// let sum2 = 0

// while (durum1) {
//   let sayi = +prompt('Sayı giriniz')

//   if (sayi < 0) {

//     break
//   }

//   sum2 += sayi
// }

// console.log(sum2)

// soru-4 sizden 1'den 100'e kadar sayıları konsola yazdırmanız istenmektedir ancak 3'ün katlarına gelince 'Fizz', 5'in katlarına glince 'Buzz' yazacak. Hem 'ün hemde 5'in katına geldiğinde ise 'FizzBuzz' yazdırmanız istenmektedir.

// soru-5 Bir sayının(number) basamak sayısını yazdıran kodu yazınız ?(Math.floor)

// soru-6 Kullanıcıdan alınan n adet kadar olan Fibonacci dizisini aralarında boşluk olan string şekilde konsola yazdırınız ?  // 0 1 1 2 3 5 8 13

// soru-7 Aşağıdaki çıktıyı konsola yazdırınız

// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

// let stars = ''
// for (let i = 0; i < 5; i++) {
//   stars += '\n'
//   for (let j = 0; j < 5; j++) {
//     stars += '* '
//   }
// }
// console.log(stars)

// soru-8 Aşağıdaki çıktıyı konsola yazdırınız ?

// 0
// 00
// 000
// 0000
// 00000
// 000000
