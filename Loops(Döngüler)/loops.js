

//?For döngüsü nedir ve nasıl kullanılır?
//*For döngüsü, belirli bir başlangıç noktasından başlayarak belirli bir koşulu sağladığı sürece tekrarlanan bir döngü yapısıdır. Genellikle bir sayaç kullanarak çalışır ve döngü her tekrarda sayaç değerini günceller. Sözdizimi şu şekildedir:

// for (başlangıç; koşul; artış) {
//     // Yapılacak işlemler
//   }

  //*Başlangıç, döngünün başlangıç değerini belirtir. Koşul, döngünün çalışmasını kontrol eden bir ifadedir ve sağlandığı sürece döngü devam eder. Artış, her döngü tekrarında sayaç değerinin nasıl güncelleneceğini belirtir.

  //?For döngüsünde kullanılan başlangıç, koşul ve artış nasıl belirlenir?
//*For döngüsünde başlangıç, döngünün başlangıç değerini belirtir. Koşul, döngünün çalışmasını kontrol eden bir ifadedir ve doğru olduğu sürece döngü devam eder. Artış, her döngü tekrarında sayaç değerinin nasıl güncelleneceğini belirtir.

//?For döngüsünde kullanılan değişkenin adı neden genellikle "i" olarak seçilir?
//*"For" döngüsünde genellikle "i" olarak adlandırılan bir değişken kullanılır. Bu, "index" kelimesinin kısaltmasıdır ve genellikle döngü içinde indis veya sayaç olarak kullanılır. Ancak, değişkenin adı isteğe bağlı olarak seçilebilir.

//?For döngüsünde döngü bloğunda hangi işlemler yapılabilir?
//*For döngüsü bloğunda, döngünün her tekrarında yapılacak işlemler yer alır. Örneğin, bir dizi elemanlarını işlemek, belirli bir aralıkta matematiksel işlemler yapmak veya belirli bir koşulu sağladığında bir şeyi gerçekleştirmek gibi işlemler yapılabilir.

//?For döngüsünde başlangıç, koşul ve artış değerleri kaç tür veri tipi alabilir?
//*Başlangıç, koşul ve artış değerleri sayısal değerler olabilir. Bunlar genellikle tam sayılar veya ondalık sayılar kullanılarak tanımlanır. Ancak, diğer veri tipleri de sayısal değere dönüştürülebilir ve kullanılabilir.

//?For döngüsünde başlangıç, koşul ve artış değerlerini değişkenlerle belirleyebilir miyim?
//*Evet, for döngüsünde başlangıç, koşul ve artış değerleri değişkenlerle belirlenebilir. Önceden tanımlanmış değişkenler veya hesaplanan değerler kullanılabilir. Bu, döngünün daha esnek ve dinamik olmasını sağlar.

//?For döngüsünde artış değeri negatif olabilir mi?
//*Evet, for döngüsünde artış değeri negatif olabilir. Bu durumda, başlangıç değeri daha büyük olan bir sayıdan başlayarak koşulun sağlandığı bir değere doğru azalır. Örneğin, for (let i = 10; i >= 0; i--) şeklinde bir döngü, 10'dan 0'a kadar olan sayıları azaltarak çalışır.

//?For döngüsünde kaç adet ifade kullanılabilir?
//*or döngüsünde başlangıç, koşul ve artış ifadeleri olmak üzere üç adet ifade kullanılabilir. Bu ifadeler arasında noktalı virgülle ayrım yapılır ve her bir ifade isteğe bağlı olarak atlanabilir.

//?For döngüsünde başlangıç, koşul veya artış ifadesini atlamak mümkün mü?
//*Evet, for döngüsünde başlangıç, koşul veya artış ifadeleri atlanabilir. Bu durumda, ilgili ifade yerine boş bırakılabilir. Örneğin, for (;; i++) şeklinde bir döngü, başlangıç ve koşul ifadelerini atlayarak sürekli bir döngü oluşturur.

//?For döngüsünde birden fazla koşul ifadesi kullanabilir miyim?
//*Hayır, for döngüsünde yalnızca tek bir koşul ifadesi kullanılabilir. Ancak, bu koşul ifadesi içinde mantıksal operatörler (&&, ||) kullanarak birden fazla koşulu birleştirebilirsiniz.

//?Örnek : 1'den 10'a kadar olan sayıları ekrana yazdırmak.

for(let i=1;i<=10;i++){
console.log(i);
}

//?Örnek: Bir dizideki elemanları toplamak.
  let numbers=[1,2,3,4,5];
  let sum=0;

for (let i=0; i<numbers.length; i++){
    sum +=numbers[i];
}
console.log(sum);

//?Örnek: Bir kelimenin harflerini ters çevirmek.

const word="Merhaba";
let reverseWord="";

for(let i=word.length-1; i>0; i--){
    reverseWord+=word[i];
}
console.log(reverseWord);


//?Örnek: Belirli bir sayıya kadar olan çift sayıları ekrana yazdırmak.

const limit =20;
for(let i=0; i<=limit; i+=2){
    console.log(i);
}