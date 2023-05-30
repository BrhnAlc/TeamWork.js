 
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
//*(reduce() fonksiyonu ayrıca bir dizi içerisindeki nesneleri veya karmaşık yapıları birleştirmek veya azaltmak için de kullanılabilir. Reduce bir değer döndürür(sayı döndürür) Örneğin:)

const ogrenciler2=[
    {ad:"Burhan", yas:34},
    {ad:"Ayşe",yas:30},
    {ad:"Zeynep", yas :40}
]
 const adlar = ogrenciler2.reduce((birikim ,ogrenci)=>birikim+ " "+ogrenci.ad, "")

 console.log(adlar)


//! soru => reduce

const mayişlar = [5500, 8000, 6500, 9000, 10000, 15000, 25000]

const toplamMayiş =mayişlar.reduce((birikim,toplam)=>birikim+toplam,0)

console.log(mayişlar)
console.log(toplamMayiş)

//!soru =>reduce
//? ORNEK:maasi 6000 ile 10000 tl arasindaki arkadaslara %10 zam yapip bu maaşların toplamini hesaplayacagiz.

const zamlıMaasToplamı=mayişlar.filter((m)=>m>=6000 && m<=10000).map((m) => m*1.1).reduce((birikim,toplam)=>birikim+toplam)
console.log(zamlıMaasToplamı)


//* every()
//*-----------------------------------------------------------
//? Tum diziyi itere eder ve aldigi callback fonksiyonuna gore test gerceklestirir.Tum elemanlar icin test basarili ise true aksi takdirde false deger dondurur.
//!soru =>every()
const ages = [18, 22, 78, 34, 78, 79, 15];
 
const check =ages.every((age)=>age>=18);

console.log(check);

//* some()
//*-----------------------------------------------------------
//*Aldigi callback fonksiyonuna gore test gerceklestirir.En az bir eleman icin bile test basarili ise true aksi takdirde false deger dondurur.
//! soru => some 

const over80 = ages.some((a)=> a>=80);
 console.log(over80)

//*  DESTRUCTURING (OBJECT)

// //! 1.Yontem (. notasyon)
const car = {
  brand: "BMW",
  model: 2020,
  engine: 2000,
  colors: ["pink", "blue"],
}
const brand = car.brand 
 console.log(brand)

 // //! 2.Yontem (square bracket)v
console.log(car["model"])

//! 3. Destructure

const { brand: name, engine, colors } = car

console.log(name, engine, colors)

const { model}= car;
 console.log(model)

//* EXAMPLE: NESTED
const cars = {
    car1: {
      name: "BMW",
      model: 1990,
      engine: 1.6,
    },
    car2: {
      name: "Mercedes",
      model: 2022,
      engine: 2.0,
    },
    car3: ["anadol", "togg", "devrim"],
    car4: "kağnı",
  }

  let  {car1,car2} = cars
  let {car3,car4} = cars 

  console.log(car1)
  console.log(car3)

  const {name:c1Name, model: c1Model}=car1
const {name:c2Name , model:c2Model}=car2

console.log(c1Name,c2Name)


const {engine:c1Engine}=car1
const {engine:c2Engine}=car2

console.log(c1Engine ,c2Engine)

//! Alternativly

const {car1:{nameCar1,modelCar1,engineCar1},
car2:{nameCar2,modelCar2,engineCar2}
}=cars

console.log(car1,car2)

//* Example
const team = [
    {
      name: "Josh",
      surname: "Barry",
      job: "developer",
      age: 30,
    },
    {
      name: "Josh",
      surname: "Barry",
      job: "tester",
      age: 45,
    },
    {
      name: "Hazel",
      surname: "Nut",
      job: "team lead",
      age: 40,
    },
  ]
//? KLASIK
team.forEach((t) => {
    console.log("NAME:", t.name)
    console.log("SURNAME:", t.surname)
    console.log("JOB:", t["job"])
    console.log("AGE:", t["age"])
    console.log("**************")
  })

//? DESTR.
team.forEach((person) => {
    const { name, surname, job, age } = person
    console.log("NAME:", name)
    console.log("SURNAME:", surname)
    console.log("JOB:", job)
    console.log("AGE:", age)
    console.log("**************")
  })

const getProduct=()=>{return{
    id:"123",
    pName:"NİKE",
    price:300,
    stock:1000,
}}
console.log(getProduct())

const {pName , price}=getProduct()
//* function'un dondurdugu obje dogrudan dest. yapilabilir

//*  DESTRUCTURING (ARRAY) ismin önemi yok sıra önemli
//* 
const names = ["Ahmet", "Mehmet", "İsmet", "Saffet"]

const isim =names[2];
console.log(isim)


const [ahmet,ismet ,mehmet,ali]=names
console.log(  mehmet,ali)


//*  REST (...)
//! REST operatoru kullanici tarafindan girilen degerleri dizi icerisine konumlandirir. Cesitli kullanim alanlari vardir
//! 1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini ayri dizi yada objelere kopyalanmasini saglayabilir. 
//* REST: Array   =>sıra ve sayı önemli

const araclar = ["bmw", "merso", "ferarri", "rover", "lambo"]

const [araba1,araba2,...geriKalanalar]=araclar

console.log(araba1)
console.log(araba2)
console.log(geriKalanalar)

//! REST: Object

const kisi = {
    ad: "Canan",
    soyad: "Cano",
    yas: 33,
    meslek: "tester",
  }

 const {ad,...diğerleri}=kisi;


   console.log(ad)

   console.log(diğerleri)
 
   const {meslek,...kalanalar}=kisi

   console.log(meslek)
   console.log(kalanalar)
  
//! 2- Bir fonksiyonun argumanlarini diziye cevirmek icin kullanilabilir.

const topla = (a,b)=>a+b

console.log("SONUC:", topla(2,5,10,4))

//! REST (...) ile non-iterable olan sayilari iterable hale (diziye) cevirmiş olduk.
const toplaminiAl = (...sayilar) => {
    console.log(sayilar)
    return sayilar.reduce((t, v) => t + v, 0)
  }
  console.log("SONUC:", toplaminiAl(2, 5, 10, 4, 6, 8))
  
//*  SPREAD (...)
//! Spread operatoru ise iterables olan bir elemani bireysel degerler haline getirir

const ucanAraclar = ["drone", "heli", "ucak"]
const karaAraclari = ["Tir", "Araba", "Kamyonet", "Bisiklet"]

const tasıtlar =[ucanAraclar,karaAraclari];

console.log(tasıtlar)

console.log(tasıtlar[0][1])


const tasıtlar1=[...ucanAraclar,...karaAraclari]
console.log(tasıtlar1)



//! FOR - IN
//* for (key in object) {
//*   // code block to be executed
//* }

for (let p in people) {
    // console.log(p)
    // console.log(people[p]) //? square bracket notasyon
    console.log(people[p].salary) //? square bracket notasyon
  }
  
  //? Javascript'de Objeler default olarak iterable degildir.
  //? Ama for in ve for of donguleri ile itere edilebilirler.
  
  //? Objelerin key ve value'larini okumak icin built-in metotlar vardir.
  //? Bu mettotlar aslinda objelerin key ve/veya value'lari bir dizi olarak dondurur.
  console.log(Object.keys(people))
  console.log(Object.values(people))
  console.log(Object.entries(people))
  
  //! FOR - OF
  //* for (x of iterable) {
  //*   code block to be executed
  //* }
  
  console.log("****************")
  for (let key of Object.keys(people)) {
    console.log(key)
  }
  
  console.log("****************")
  //? people objesindeki tum salary 'leri yazdir
  for (let v of Object.values(people)) {
    console.log(v.job)
    // console.log(v["salary"]);
  }
  


















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



