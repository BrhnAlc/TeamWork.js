//*Ask Questions 15m
//*Soru Sor 15dk

//!1. ___________ sets the style rule to different media types.
//!1. ___________ stil kuralını farklı ortam türleri için ayarlar.
A. @extend 
B. @import
C. @debug
D. @media

//! 2. Which of the following directive is used to share rules and relationships between selectors?
//! 2. Seçiciler arasında kuralları ve ilişkileri paylaşmak için aşağıdaki yönergelerden hangisi kullanılır?
//*(Seçiciler arasında kuralları ve ilişkileri paylaşmak için "@extend" yönergesi kullanılır. "@extend" yönergesi, bir CSS seçicisine başka bir seçicinin özelliklerini genişletmek veya miras almak için kullanılır. Böylece stil kurallarını tekrar kullanabilir ve stil tabanlı bir yaklaşım benimseyebilirsiniz. Bu şekilde, stil kuralı paylaşımı ve yeniden kullanımı sağlanır.Diğer seçenekler arasında "@media" yönergesi, belirli medya sorgularına göre stil kurallarını uygulamak için kullanılır. "@at-root" yönergesi ise stil kurallarını belirli bir kök seviyesinde uygulamak için kullanılır. Ancak, seçiciler arasında kuralları ve ilişkileri paylaşmak için kullanılan doğru yönerge "@extend" (A) seçeneğidir.)
A. @extend 
D. @media 
C. @at-root 
D. None of the above 

//!3. Which class indicates red colored border in bootsrap?
//!3. Önyüklemede hangi sınıf kırmızı renkli kenarlığı gösterir?
//*( "border border-warning" sınıfı, önyüklemede kırmızı renkli kenarlığı gösterir.)
A. border warning
B. border border-danger
C. border border-warning
D. border-danger

//!4. Which class indicates lowercased text in bootsrap?
//!4. Önyüklemede küçük harfli metni hangi sınıf gösterir?
//*(Önyükleme (Bootstrap) çerçevesinde küçük harfli metni göstermek için "text-lowercase" sınıfı kullanılır. Bu sınıf, metni küçük harflerle görüntülemek için kullanılır.Cevap C'dir. "text-lowercase" sınıfı, önyüklemede küçük harfli metni gösterir.)
küçük harf
A. lowercase
B. text-lowercased
C. text-lowercase 
D. txt-lowercased

//!5. Which class adds zebra-stripes to a table?
//!5. Hangi sınıf bir masaya zebra çizgileri ekler?
//*(".table-striped" sınıfı bir masaya zebra çizgileri ekler. Bu sınıf, Bootstrap çerçevesinde kullanılan bir sınıftır ve tablonun satırlarına alternatif arka plan renkleri uygular. Böylece, masadaki satırlar arasında zebra deseni oluşturarak daha okunabilir bir görünüm elde edilir.Cevap C'dir. ".table-striped" sınıfı, bir masaya zebra çizgilerini ekler. Bu sınıf, tablonun satırlarına sıralı olarak farklı arka plan renkleri uygular, böylece alternatif satırlar arasında farklılık oluşur.)
A. .table-zebra
B. .table-bordered 
C. .table-striped
D. .even and .odd

//!6. Given this code, which statement will evaluate to false?
//!6. Bu kod verildiğinde, hangi ifade yanlış olarak değerlendirilecektir?
const a = { x: 1 };
const b = { x: 1 };
A. a === b
B. a != b
C. a.x === b.x
D. a['x'] === b['x']

//!7. What is the output of this code?
//!7. Bu kodun çıktısı nedir?
//*(Kodun adımları şu şekildedir: Boş bir dizi olan "scores" oluşturulur "scores" dizisine 1 ve 2 elemanları "push()" yöntemiyle eklenir, dizi [1, 2] şeklinde olur "pop()" yöntemi kullanılarak dizinin son elemanı çıkarılır, bu durumda 2 çıkarılır ve dizi [1] şeklinde olur "scores" dizisine 3 ve 4 elemanları "push()" yöntemiyle eklenir, dizi [1, 3, 4] şeklinde olur "pop()" yöntemi kullanılarak dizinin son elemanı çıkarılır, bu durumda 4 çıkarılır ve dizi [1, 3] şeklinde olur "reduce()" yöntemi kullanılarak "scores" dizisinin elemanları toplanır. Başlangıç değeri olmadığı için toplama işlemi dizinin ilk iki elemanı olan 1 ve 3 ile başlar ve sonuç 4 olur Son olarak, "console.log()" ile "score" değişkeninin değeri olan 4 yazdırılır Dolayısıyla, kodun çıktısı "4" olacaktır)
let scores = [];
scores.push(1, 2);
scores.pop();
scores.push(3, 4);
scores.pop();
score = scores.reduce((a, b) => a + b);
console.log(score);
A. 3
B. 4
C. 6
D. 7

//!8. What is the output of this code?
//!8. Bu kodun çıktısı nedir?
//*(Kodun adımları şu şekildedir: "cat" adında bir obje oluşturulur ve "name" özelliği "Athena" olarak atanır "swap" adında bir fonksiyon tanımlanır ve "feline" parametresi alır. Fonksiyon içinde, "feline" objesinin "name" özelliği "Wild" olarak değiştirilir Ardından, "feline" objesi başka bir objeyle ({ name: 'Tabby' }) değiştirilir "swap" fonksiyonu "cat" objesini argüman olarak çağrıldığında, "cat" objesinin referansı "feline" parametresine atanır İlk olarak, "feline.name" değeri "Wild" olarak değiştirilir Ancak, "feline" objesi başka bir objeyle değiştirildiğinde, bu değişiklik sadece fonksiyonun içindeki yerel bir değişkeni etkiler. "cat" objesi hala orijinal olarak kalmaktadır Son olarak, "console.log(cat.name)" ifadesi kullanılarak "cat" objesinin "name" özelliği yazdırılır Bu durumda, "cat" objesinin "name" özelliği "Wild" olarak değiştirildiği için çıktı "Wild" olacaktır Dolayısıyla, kodun çıktısı "Wild" olacaktır.)
let cat = { name: 'Athena' };
function swap(feline) {
 feline.name = 'Wild';
 feline = { name: 'Tabby' };
}
swap(cat);
console.log(cat.name);
A. Wild
B. undefined
C. Tabby
D. Athena

//!9. What will this code print to the console?
//!9. Bu kod konsola ne yazdıracak?
//*(Kodun adımları şu şekildedir: "myFunc" adında bir ok işlevi (arrow function) tanımlanır. İçinde "a" adında bir yerel değişken oluşturulur ve değeri 2 olarak atanır. Daha sonra bir iç içe ok işlevi (inner arrow function) döndürülür Ana kapsamdaki "a" adında başka bir değişken oluşturulur ve değeri 1 olarak atanır "myFunc()" çağrısı yapılır ve dönen iç içe ok işlevi "test" adlı bir değişkene atanır "test()" çağrısı yapılarak iç içe ok işlevi çalıştırılır İç içe ok işlev içinde "a" değişkeni, kendi kapsamında tanımlandığı için, değeri 2 olarak kalır "console.log()" kullanılarak "a is 2" metni konsola yazdırılır Sonuç olarak, kodun çıktısı "a is 2" olarak konsola yazdırılır.)
const myFunc = () => {
 const a = 2;
 return () => console.log('a is ' + a);
};
const a = 1;
const test = myFunc();
test();
A. a is 1
B. a is 2 
C. a is undefined
D. arIt won't print anything.ray

//!10. How would you add a data item named animal with a value of sloth to local storage?
//!10. Tembellik değerine sahip hayvan adlı bir veri öğesini yerel depolamaya nasıl eklersiniz?
//*(Yerel depolamaya bir veri öğesi eklemek için localStorage.setItem() yöntemini kullanırız. Bu yöntem iki parametre alır: bir anahtar (key) ve bir değer (value). Bu durumda, "animal" adında bir anahtar ve "sloth" adında bir değerle bir veri öğesini yerel depolamaya eklemek istiyoruz. Doğru kod şu şekildedir: javascript Copy code localStorage.setItem("animal", "sloth"); Bu kod, "animal" anahtarını kullanarak "sloth" değerini yerel depolamaya ekler.)
A. LocalStorage.setItem = {"animal", "sloth"};
B. localStorage.setItem({animal:"sloth"});
C. localStorage.setItem(["animal","sloth"]);
D. localStorage.setItem("animal","sloth")

//!11. What will be the output of the following code snippet?
//!11. Aşağıdaki kod parçacığının çıktısı ne olacaktır?
//*(Kodda bir obje olan obj1 tanımlanırken, first özelliği iki kez tanımlanmıştır. JavaScript objeleri anahtar-değer çiftleri olarak tutar ve aynı anahtarı birden fazla kez tanımlarsanız, son tanımlanan değeri kullanır. Bu durumda, first özelliği önce 20 değeriyle tanımlanmış, ardından 30 değeriyle güncellenmiş ve en son olarak 50 değeriyle güncellenmiştir. Dolayısıyla, obj1 objesinin son hali { first: 50, second: 30 } olacaktır.)
const obj1 = { first: 20, second: 30, first: 50 };
console.log(obj1);
A. first: 30 , second: 20
B. first: 30 , second: 50
C. first: 50 , second: 30
D. None of the above


//!12. What does … operator do in JS
//!12. Operatör JS'de ne yapar?
//*"..." (üç nokta) operatörü veya yayma (spread) operatörü, JavaScript'te çeşitli bağlamlarda kullanılan bir operatördür. Aşağıda, "..." operatörünün bazı kullanımlarını açıklamaktayım: Dizi ve nesne literallerinde yayma operatörü: Dizi literallerinde: Bir dizi içindeki elemanları veya başka bir diziyi, fonksiyon argümanlarını veya başka bir yerde kullanılacak diziye yayabilirsiniz. const arr1 = [1, 2, 3]; const arr2 = [...arr1, 4, 5, 6]; console.log(arr2); // [1, 2, 3, 4, 5, 6] Nesne literallerinde: Bir nesnenin özelliklerini başka bir nesneye kopyalayabilir veya bir nesnenin özelliklerini ve değerlerini genişletebilirsiniz. Örnek: javascript Copy code const obj1 = { x: 1, y: 2 }; const obj2 = { ...obj1, z: 3 }; console.log(obj2); // { x: 1, y: 2, z: 3 } Fonksiyon çağrılarında yayma operatörü: Bir fonksiyon çağrısında, bir dizinin veya argümanların elemanlarını ayrıştırarak fonksiyona geçirebilirsiniz. Örnek: const arr = [1, 2, 3]; myFunction(...arr); // myFunction(1, 2, 3) Destructuring (Yıkım) işlemlerinde yayma operatörü: Destructuring işlemlerinde, bir nesnenin veya dizinin bazı elemanlarını ayırarak ayrı değişkenlere atayabilirsiniz. const arr = [1, 2, 3, 4, 5]; const [first, second, ...rest] = arr; console.log(first); // 1 console.log(second); // 2 console.log(rest); // [3, 4, 5] Bu kullanımlar, yayma operatörünün bazı örnekleridir. "..." operatörü, genellikle veri yapılarını kopyalamak, birleştirmek veya ayrıştırmak için kullanılan güçlü bir araçtır. Örnek:
A. Describe datatype of undefined
B. Describe datatype of null
C. Used to spread iterables to individual elements
D. None of the above

//!13. What value is assigned to total after this code executes?
//!13. Bu kod yürütüldükten sonra total'e hangi değer atanır?
//*(Kod yürütüldükten sonra total değişkenine değer olarak 10 atanır. Kodun adımları şu şekildedir sum adında bir fonksiyon tanımlanır. Bu fonksiyon üç parametre alır: num1, num2 ve num3 İkinci ve üçüncü parametrelere varsayılan değerler olarak sırasıyla 2 ve 3 atanır values adında bir dizi tanımlanır ve [1, 5] değeriyle başlatılır sum fonksiyonu çağrılırken, ilk parametre olarak 4 değeri verilir ve yayma operatörü (...) kullanılarak values dizisi parametre olarak geçilir Fonksiyon içinde, num1 değeri 4, num2 değeri 1, ve num3 değeri 5 olarak alır Fonksiyon içinde yapılan hesaplama sonucunda 4 + 1 + 5 işlemi gerçekleştirilir ve sonuç olarak 10 elde edilir Bu sonuç, total değişkenine atanır Sonuç olarak, total değişkeninin değeri 10 olur Dolayısıyla, kod yürütüldükten sonra total değişkenine 10 değeri atanır.)
function sum(num1, num2 = 2, num3 = 3) {
 return num1 + num2 + num3;
}
let values = [1, 5];
let total = sum(4, ...values);
A. 8
B. 10
C. 6
D. 7

//!14. How would you check if the word "pot" is in the word "potato"?
//!14. "Patates" kelimesinde "pot" kelimesinin olup olmadığını nasıl kontrol edersiniz?
A. "potato".contains("pot");
B. "potato".includes("Pot")
C. "pot".indexOf("potato") !== -1
D. "potato".includes("pot")

//!15. How would you change the color of this header to pink?
//!15. Bu başlığın rengini pembeye nasıl değiştirirsiniz?
<h2 id="automobile">BMW</h2>
A. document.getElementById("automobile").style.color = "pink";
B. document.getElementByName("automobile").style.color = "pink";
C. document.getElementsByTagName("h2").style.color = "pink";
D. document.getElementByName("h2").style.color = "pink";



//!  Interview Questions 15m
//!  Mülakat Soruları 15dk

//!1. How can one create an alert in Bootstrap?
//!1. Bootstrap'te uyarı nasıl oluşturulur?
//*Bootstrap'te uyarı (alert) oluşturmak için alert bileşeni kullanılır. Aşağıda Bootstrap 5'in kullanımı için bir örnek verilmiştir:
//!<div class="alert alert-warning" role="alert">
//!  Bu bir uyarıdır!
//!  </div>
//*  alert-primary: Mavi renkte bir uyarı.
//*  alert-secondary: Gri renkte bir uyarı.
//*  alert-success: Yeşil renkte bir uyarı.
//*  alert-danger: Kırmızı renkte bir uyarı.
//*  alert-info: Bilgi amaçlı bir uyarı.
//*  alert-light: Açık renkte bir uyarı.
//*  alert-dark: Koyu renkte bir uyarı.

//!2. What are JavaScript events?
//!2. JavaScript olayları nedir?

//!3. Is it possible to use an arrow function as an event handler? If yes, then how?
//!3. Ok işlevini olay işleyici olarak kullanmak mümkün müdür? Evet ise, o zaman nasıl?

//!4. In Bootstrap, how do you make navigation elements?
//!4. Bootstrap'te gezinti öğelerini nasıl yaparsınız?