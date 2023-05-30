//! Nesneler(objects)

const itSchool={
  name :"clarusway",
  location:"U.S.",
  established:"2019",
}
console.log(itSchool.name);
console.log(itSchool.location);
console.log(itSchool.established);

itSchool.firstAlumniyear = "2020";
itSchool["First Graduate Year"] ="2020";
console.log(itSchool)

itSchool.established="2020";
itSchool["First Graduate Year"] ="2021";
console.log(itSchool)

delete itSchool.established;
delete itSchool["First Graduate Year"];
console.log(itSchool)


const student ={
  name:"Burhan",
  age:34,
  mark:{
    sciense:70,
    math:75
  }



}
console.log(student.name);
console.log(student.age);
console.log(student.mark.sciense);
console.log(student.mark.math)


const dog ={
  name:"rocky",
  legs:4,
  tail:1,
  qualities:["loyalty","companionship"]
}

console.log(dog.name);
console.log(dog.legs);
console.log(dog["tail"]);

const person ={
  firstNane:"Burhan",
  lastName:"Alaca",
  fullName:function(){
    return `${this.firstName}  ${this.lestName}`;
  },
  greet:function() {console.log("hello");},
  greet2() {console.log("hello2")}

}
console.log(person.fullName());
person.greet();
person.greet2();



class Araba {
  constructor(marka, model, renk) {
    this.marka = marka;
    this.model = model;
    this.renk = renk;
  }

  bilgileriGoster() {
    console.log(`Marka: ${this.marka}, Model: ${this.model}, Renk: ${this.renk}`);
  }
}

// Araba sınıfından bir nesne oluşturma
let arabam = new Araba("Toyota", "Corolla", "Siyah");

// Nesnenin işlevlerine erişme
arabam.bilgileriGoster(); // Çıktı: Marka: Toyota, Model: Corolla, Renk: Siyah

//*Diziler sirali bellek bolgeleridir.Bu yuzden dizilere indeksleme ile erisebiliriz. Ancak daha karmasik (unstructured) verilerimiz icin  Object'leri kullanabiliriz.Object'lerde Key-value (property-value) yapisi kullanilir.Herhangi bir veriyi erismek icin property (key) adi kullanilir.


//* ---------------------------------------------------------
//* 1- Object literal (En cok tercih edilen yontem)
const car = {
  brand: "Mercedes",
  model: 2020,
  engine: 2000,
  speed: 5,
  color: ["pink", "black", "blue", "green"],
};
console.log(car)


//? Objenin okunmasi (Read)
console.log(car.brand) //*. notasyonu ile erişim.
console.log(car.color)

car.color.forEach((c) =>console.log(c))


//? Objenin degerinin degisitirilmesi (write)
car.speed=7
car.color="morcivert"
car.class = "E"
// console.log(car)

//* 2) Square Bracket yontemi ile erisim
//! bu yontem key isimlerinin degiskenlerde saklanmasına izin verdigi icin dinamik olarak obje erişimlerde kullanılabilir.

// console.log("ENGINE:" , car ["engine"])

const myKey=prompt(
 "Araba ile ilgili Neyi ogrenmek istersiniz: speed, color,engine ..."

)
alert(car[myKey])

//* ---------------------------------------------------------
//* 2- Object() class'ından new Operatörü ile
//* ---------------------------------------------------------
const myCar = new Object();
myCar.brand ="Mercedes"
myCar.model=2022
myCar.speed=7

// console.log(myCar.speed)
console.log(myCar.brand)

console.log(myCar)

//* 3- object constructor'i kullanarak (OOP ile ayrintilandirilacak)

function Personel(id,name,age,salary){
  this.id=id
  this.name=name
  this.age=age
  this.salary=salary
}

const person1=new Personel("45313060136","burhan alaca", 34 ,30000)
const person2=new Personel("12345612125", "ayse alaca", 33, 20000)

console.log(person1)



//* ======================================================
//*              Object Metotlari
//* ======================================================
const personel ={
  name: "Ahmet",
  surname: "Canan",
  dob: 1990,
  salary: 30000,
  drivingLicense: true,
  calculateAge: function (){
    return new Date().getFullYear()-this.dob
  }, 
}
console.log(personel.name+ " "+personel.surname)

console.log(personel.calculateAge())

//*NOT: arrow fonksiyonlari ozellikle callback fonksiyonu olarak kullanilmak ve bu fonksiyonlarda this keyword kullanim gereksinimini kaldirmak icin gelistirilmistir. Lexical context'e sahiptirler.Dolayisiyla, bir obje fonksiyonu olarak kullanilirsa, this kelimesi global scope'u (window nesnesini) gösterir. Bunu engellemek için object fonksiyonlarini tanimlarken diger (func. expression veya declaration) yontemlerini kullanabilir.
// console.log(personel.summary())



//********************************************************
//* JSON => Javascript Object Notation
//********************************************************
const team = [
  { name: "Ahmet", surname: "Can", job: "Developer", age: 30 },
  { name: "Mary", surname: "Bary", job: "tester", age: 22 },
  { name: "Hazel", surname: "Nut", job: "developer", age: 20 },
]
console.log(team)
console.log(team[1])

console.log(team[2].age)


//* Ornek1: team dizisindeki job'lari tek tek yazdiriniz.
team.forEach((p) => console.log(p.job))


//* Ornek2: age'leri bir artirarak yeni bir diziye saklayiniz.

const personelAges = team.map((person) => person.age + 1)
console.log(personelAges)


//*Ornek3: name ve surname'leri birlestirip buyuk harfe ceviren ve bunu fullName key'i ile saklayan, ayni zamanda age degerlerini arttirarak age key'ine saklayan ve olusan diziyi donduren kodu yazınız.


const teamFullName = team.map((p) => {
  return {
    fullName: p.name.toUpperCase() + " " + p.surname.toUpperCase(),
    age: p.age + 5,
  }
})
console.log(teamFullName1)


//? Alternative way
const teamFullName1 = team.map((p) => ({
  fullName: p.name.toUpperCase() + " " + p.surname.toUpperCase(),
  age: p.age + 5,
}))

console.log(teamFullName1)





const carData = [
    {
      id: 1,
      make: 'Toyota',
      model: 'Camry',
      year: 2020,
      color: 'Silver',
      mileage: 25000,
      engine: {
        type: "V6",
        horsepower: 300,
        cylinders: 6
      }
    },
    {
      id: 2,
      make: 'Honda',
      model: 'Accord',
      year: 2019,
      color: 'White',
      mileage: 20000,
      engine: {
        type: "V4",
        horsepower: 140,
        cylinders: 4
      }
    },
    {
      id: 3,
      make: 'Ford',
      model: 'Mustang',
      year: 2018,
      color: 'Red',
      mileage: 15000,
      engine: {
        type: "V8",
        horsepower: 400,
        cylinders: 8
      }
    },
    {
      id: 4,
      make: 'Chevrolet',
      model: 'Camaro',
      year: 2017,
      color: 'Black',
      mileage: 10000,
       engine: {
        type: "V4",
        horsepower: 200,
        cylinders: 4
      }
    },
    {
      id: 5,
      make: 'Dodge',
      model: 'Challenger',
      year: 2016,
      color: 'Blue',
      mileage: 5000,
       engine: {
        type: "V6",
        horsepower: 250,
        cylinders: 6
      }
    },
    {
      id: 6,
      make: 'BMW',
      model: '3 Series',
      year: 2015,
      color: 'Silver',
      mileage: 35000,
       engine: {
        type: "V8",
        horsepower: 400,
        cylinders: 8
      }
    },
    {
      id: 7,
      make: 'Audi',
      model: 'A4',
      year: 2014,
      color: 'Black',
      mileage: 30000,
       engine: {
        type: "V4",
        horsepower: 220,
        cylinders: 4
      }
    },
    {
      id: 8,
      make: 'Mercedes-Benz',
      model: 'C-Class',
      year: 2013,
      color: 'White',
      mileage: 25000,
       engine: {
        type: "V6",
        horsepower: 280,
        cylinders: 6
      }
    },
    {
      id: 9,
      make: 'Volkswagen',
      model: 'Golf',
      year: 2012,
      color: 'Red',
      mileage: 20000,
       engine: {
        type: "V4",
        horsepower: 180,
        cylinders: 4
      }
    },
    {
      id: 10,
      make: 'Tesla',
      model: 'Model S',
      year: 2011,
      color: 'Silver',
      mileage: 15000,
       engine: {
        type: "V4",
        horsepower: 260,
        cylinders: 4
      }
    },
  ]
  
  
  // 1- Rengi gümüş olan arabaları bir listeye ata.
  
  
  
  
  // 2- 2015 yılından sonra üretilmiş arabaları bir listeye ata.
  
  
  
  
  // 3- Arabaların ortalama kilometre değerini hesapla.
  
  
  
  
  
  // 4- 8 silindirli araçları listele
  
  
  
  
  
  
  // 5- Farklı uzunlukta olması muhtemel iki listeden İlki key'lerden, ikincisi ise Value'lardan oluşmaktadır. Yine key ve value'lardan oluşan bir obje döndüren bir fonksiyon yazınız. Yeterli value yoksa, kalan keylerin değeri null olmalıdır. Yeterli anahtar yoksa, değerlerin geri kalanını yok sayın.
  // keys = ['a', 'b', 'c', 'd']
  // values = [1, 2, 3]
  // createDict(keys, values) // returns {'a': 1, 'b': 2, 'c': 3, 'd': null}
  
  
  
  
  // 6- Bir obje içerisindeki key ve value'ları değiştirin. Yani key'ler value'lar olmalı ve value'lar key'ler olmalıdır.
  // Örnek: {a: 1, b: 2, c: 3}  -->  {1: 'a', 2: 'b', 3: 'c'}
  // Not: Eğer bir value birden fazla key'e sahipse, son key'i kullanın.
  
  
  
  
  
  
  // 7-  Size bazı dilleri ve verilen dillerdeki test sonuçlarınızı içeren bir dictionarj obj verilir. Test puanınızın en az 60 olduğu dillerin listesini sonuçların azalan sırasına göre döndürün.
  // Not: puanlar her zaman benzersiz olacaktır (bu nedenle yinelenen değerler olmayacaktır)
  // örnekler
  // {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
  // {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
  // {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
  // let results = {"Java": 10, "Ruby": 80, "Python": 95}
  
  
  
  
  // 8-  Soru: Bir restoranın menüsündeki yemekleri temsil eden bir nesne dizisi olduğunu düşünelim. Her yemek nesnesi, yemek adı ve fiyatı gibi özelliklere sahiptir. Bu nesne dizisini kullanarak menüdeki her yemeğin adını ve fiyatını ekrana yazdıran bir JavaScript kodu nasıl yazılır?
  
  
  
  
  // 9-  Bir alışveriş sepetindeki ürünlerin listesini içeren bir dizi verilmiştir. Her bir ürün bir nesne olarak temsil edilmektedir ve her bir ürünün adı, fiyatı ve stok durumu bilgilerini içermektedir. Aşağıdaki gibi bir dizi verilmiştir:
  // let sepet = [
  //   { ad: 'Kalem', fiyat: 5, stok: 10 },
  //   { ad: 'Defter', fiyat: 10, stok: 5 },
  //   { ad: 'Silgi', fiyat: 2, stok: 3 },
  //   { ad: 'Kalemtraş', fiyat: 3, stok: 2 }
  // ];
  // Bu sepetin içindeki ürünlerin fiyatlarının toplamını bulmak için hangi array methodlarını kullanırsınız?
  
  
  
  
  // 10  Her kitap bir nesne olarak temsil edilmekte ve kitap adı, yazarı ve yayın tarihi gibi özelliklere sahip. Bu kitap koleksiyonunu kullanarak yayın tarihi 1950'dan önce olan kitapların listesini eski tarihten başlayarak sıralayıp ekrana yazdırın?
  
  
  
  