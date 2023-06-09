
//!  1. Sass is a _____.
 //! 1. Sass bir _____.

//? A. Scripting language 
//? B. Markup language
//? C. CSS pre-processor
//? D. Programming Language

//**(CSS ön işlemcisi, CSS yazma sürecini daha verimli ve etkili hale getirmek için kullanılan bir araçtır. CSS ön işlemcileri, CSS yazımında tekrar eden kodu azaltır, daha düzenli bir yapı oluşturmayı sağlar ve daha hızlı ve kolay bir şekilde stil sayfaları oluşturmamıza yardımcı olur.) */


//!2. Sass stands for ______.
//!2. Sass, ______ anlamına gelir.

//?  A. Anlamsal Olarak Harika Stil Sayfası
//?  B. Sözdizimsel Olarak Harika Stil Sayfası
//?  C. Basit Harika Stil Sayfası
//?  D. Sözdizimine Dayalı Müthiş Stil Sayfası

//*(B. Sözdizimsel Olarak Harika Stil Sayfası."Sözdizimsel Olarak Harika Stil Sayfası" ifadesi, Sass'ın CSS ön işlemcisi olarak kullanılan bir teknoloji olduğunu ve CSS yazımını daha güçlü, esnek ve kolay hale getiren bir dildir.. Değişkenler, fonksiyonlar, mixin'ler, miras alma ve daha fazlasını içeren özellikleriyle CSS yazma sürecini geliştirir..)

//! 3. What are the benefits of using SASS?
//! 3. SASS kullanmanın faydaları nelerdir?

//?  A. CSS için kendi sözdizimini sağlayan bir ön işleme dilidir.
//?  B. CSS'nin tüm özelliklerini içeren ve açık kaynaklı bir ön işlemci olan, kodlanmış bir CSS üst kümesidir.
//?  C. Daha kararlı ve güçlü CSS uzantısı ve stil belgeleri daha net ve yapısal olarak
//?  D. Yukarıdakilerin hepsi
//*(Sass kullanmanın faydaları şunları içerir: A. CSS için kendi sözdizimini sağlayan bir ön işleme dilidir: Sass, CSS'nin sözdizimini genişleterek daha esnek ve güçlü bir dil sağlar. Değişkenler, fonksiyonlar, mixin'ler ve diğer özelliklerle CSS yazma sürecini geliştirir B. CSS'nin tüm özelliklerini içeren ve açık kaynaklı bir ön işlemci olan, kodlanmış bir CSS üst kümesidir: Sass, CSS'nin tüm özelliklerini destekler ve daha da fazlasını ekler. Bu sayede CSS yazımını daha modüler, yönetilebilir ve hızlı hale getirir C. Daha kararlı ve güçlü CSS uzantısı ve stil belgeleri daha net ve yapısal olarak: Sass, daha düzenli ve yapısal bir CSS kodlama yöntemi sunar. Stil sayfalarını daha kolay okunabilir, sürdürülebilir ve güncellenebilir hale getirir Bu faydalar, Sass'ın CSS yazım sürecini geliştirmek, kodun daha verimli yönetilmesini sağlamak ve stil sayfalarının daha etkili bir şekilde oluşturulmasını desteklemek için kullanılan bir araç olduğunu gösterir.


//! 4. In which year was SASS introduced?
//! 4. SASS hangi yılda tanıtıldı?
//? A. 2005 
//? B. 2006 
//? C. 2008
//? D. 2009
//*(2006 yılında Natalie Weizenbaum tarafından tanıtılmıştır. )


//!5. Which of the following directive displays the SassScript expression value as fatal error?
//!5. Aşağıdaki yönergelerden hangisi SassScript ifade değerini önemli hata olarak görüntüler?

//? A. @error
//? B. @warn
//? C. @at-root
//? D. None of the above

//*(@error yönergesi, SassScript ifade değerini önemli bir hata olarak görüntüler. Eğer bir SassScript ifadesi belirli bir koşulu sağlamaz veya beklenmeyen bir değere sahipse, @error yönergesi kullanılarak bu durum önemli bir hata olarak belirtilir ve derleme sürecinde hata mesajı gösterilir.)

//!  ÖRNEK

//  $width : 120 px ;

// @if $width > 100px {
//   @error "Genişlik 100 pikselden büyük olamaz!";
// }
//*(Yukarıdaki örnekte, $width değişkeni 120 piksel olarak tanımlanmıştır. Ardından, @if bloğu içinde $width'in 100 pikselden büyük olup olmadığı kontrol edilir. Eğer koşul doğru ise, yani $width 100 pikselden büyük ise, @error yönergesi çalışır ve "Genişlik 100 pikselden büyük olamaz!" şeklinde bir hata mesajı gösterilir.Bu şekilde, SassScript ifadesi belirli bir koşulu sağlamadığında veya beklenmeyen bir değere sahip olduğunda, @error yönergesi kullanılarak bu durum önemli bir hata olarak işaretlenir ve derleme sürecinde hata mesajı verilir. Bu, geliştiricilere hataları tespit etmelerine ve düzeltmelerine yardımcı olur.)

//! 6. SASS was created by...
//! 6. SASS tarafından oluşturuldu..

//?  A. Linus Torvalds 
//?  B. Brendan Eich 
//?  C. Hampton Catlin
//?  D. Guido van Rossum

//*(Hampton Catlin ve Natalie Weizenbaum tarafından oluşturulmuştur. Hampton Catlin, web tasarımcısı ve geliştiricisi olarak Sass'ı yaratmış, Natalie Weizenbaum ise Ruby(bir programlama dilidir- basit, anlaşılır ve esnek bir sözdizimine sahiptir-sloganı "Basitlik ve Mutluluk"tır ) programlama dili kullanarak Sass'ın ilk sürümünü geliştirmiştir. Sass'ın ilk sürümü 2006 yılında tanıtılmıştır.)


//! 7. In Sass, which of the following is the correct way to define a variable?
//! 7. Sass'ta, bir değişkeni tanımlamanın doğru yolu aşağıdakilerden hangisidir?

//?  A. #primary-color: #888;
//?  B. @primary-color: #888;
//?  C. %primary-color: #888;
//?  D. $primary-color: #888;

//*(Yukarıdaki örnekte, $ana-renk isimli bir değişken tanımlanmış ve değeri #888 olarak atanmıştır. Değişken ismi arasında tire - kullanılabilir ve değer ataması yapılırken : işareti kullanılır. Bu şekilde, $ana-renk değişkeni Sass stil sayfasında kullanılmak üzere saklanır ve istendiğinde çağrılabilir.)

//! 8. Which is the correct syntax to declare a variable "myfonts" assigning the two font names?
//! 8. İki yazı tipi adını atayan bir "myfonts" değişkenini bildirmek için doğru sözdizimi hangisidir?

//? A. $myfonts: Helvetica, and sans-serif;
//? B. $myfonts: Helvetica, sans-serif;
//? C. $myfonts: "Helvetica, sans-serif";
//? D. $myfonts: "Helvetica+sans-serif";

//*("myfonts" değişkenine iki yazı tipi adını virgülle ayırarak atamaktır. "myfonts" isimli değişkene "Helvetica" ve "sans-serif" yazı tipleri atanmıştır. Çift tırnak içinde yazı tipi adları verilirken, virgülle ayırarak her bir yazı tipini tanımlamak önemlidir.)

//! 9. Which directive is used to create CSS code that is to be reused throughout the website?
//! 9. Web sitesinde yeniden kullanılacak CSS kodunu oluşturmak için hangi yönerge kullanılır?


//?  A. @import
//?  B. @define
//?  C. @mixin
//?  D. All of the above
//*(Web sitesinde yeniden kullanılacak CSS kodunu oluşturmak için Sass'ta @mixin yönergesi kullanılır.@mixin, Sass'ta kullanılan bir yönergedir ve stil kurallarının tekrar kullanılabilir bir bloğunu tanımlamak için kullanılır. @mixin, bir grup stil özelliğini bir isim altında toplamak ve daha sonra istenildiğinde çağırmak için kullanılır.)

// @mixin genel-stil {
//     font-family: Arial, sans-serif;
//     font-size: 16px;
//     color: #333;
//   }
  //*(Yukarıdaki örnekte, genel-stil adında bir @mixin tanımlanmıştır. Bu @mixin içinde, font ailesi, font boyutu ve renk gibi genel stil özellikleri belirtilmiştir. Bu @mixin daha sonra istenilen stil kuralları için kullanılabilir.)

//   .element {
//     @include genel-stil;
//     padding: 10px;
//     background-color: #f5f5f5;
//   }

  //*(örnekte, element adında bir CSS sınıfı belirlenmiştir. genel-stil adlı @mixin bu sınıfa @include yönergesiyle dahil edilmiştir. Böylece, element sınıfı için genel-stil içerisindeki stil özellikleri yeniden kullanılarak kullanılmıştır. @mixin yönergesi, stil kodunun tekrarlanmasını engeller ve kodun daha modüler ve yeniden kullanılabilir hale gelmesini sağlar.)


//! 10. Which directive is used to share a set of CSS properties from one selector to another?
//! 10. Bir CSS özelliği kümesini bir seçiciden diğerine paylaşmak için hangi yönerge kullanılır?
//?  A. @share 
//?  B. @import 
//?  C. @transfer
//?  D. @extend

//*(Bir CSS özelliği kümesini bir seçiciden diğerine paylaşmak için Sass'ta @extend yönergesi kullanılır.@extend yönergesi, bir seçiciye tanımlanan stil kurallarını başka bir seçiciye aktarmak için kullanılır. Bu sayede stil tekrarından kaçınılır ve kod daha temiz ve sürdürülebilir hale gelir.)
// .kutu {
//     background-color: #f5f5f5;
//     border: 1px solid #ccc;
//     padding: 10px;
//   }
  //*kutu adında bir CSS sınıfı tanımlanmış ve bazı stil özellikleri belirtilmiştir:
  //!Bu stil kurallarını başka bir sınıfa aktarmak için @extend yönergesi kullanılabilir:
  
//   .yeni-kutu {
//     @extend .kutu;
//     color: #333;
//   }
  //*örnekte, .yeni-kutu sınıfı .kutu sınıfını genişletiyor (@extend .kutu;). Bu şekilde .yeni-kutu sınıfı, .kutu sınıfının stil özelliklerini de devralmış olur. Ayrıca, .yeni-kutu sınıfına ek olarak color özelliği de belirtilmiştir.

//! Sonuç olarak, .yeni-kutu sınıfı hem .kutu sınıfının stil özelliklerini içerecektir hem de ek olarak belirtilen color özelliğini taşıyacaktır. Bu şekilde kod tekrarından kaçınılmış ve stil özellikleri paylaşılmış olur.


//! 11. What is the output of this code block?
//! 11. Bu kod bloğunun çıktısı nedir?

let daltones = ['joe', 'Jack', 'Willam', 'Averell']
daltones.shift() //!İlk elemanı siler ('joe')
daltones.pop()  //! Son elemanı siler ('Averell')
console.log(daltones)
//? A. ['joe', Jack']
//? B. []
//? C. ['Jack', 'Willam']
//? D. ['joe','Averell']

//*(daltones adında bir dizi tanımlanmıştır. shift() metodu dizinin ilk elemanını siler ve dizinin boyutunu bir azaltır. pop() metodu ise dizinin son elemanını siler ve dizinin boyutunu bir azaltır. İlk olarak, shift() metodu kullanılarak 'joe' isimli ilk eleman silinir. Ardından, pop() metodu kullanılarak 'Averell' isimli son eleman silinir)


//! 12. What is the output of this code block?
//! 12. Bu kod bloğunun çıktısı nedir?

 
let daltones = ['joe', 'Jack', 'Willam', 'Averell']

 for(let i =0; i< daltones.length; i++){
  if(i == 1){
  continue;
  }
  console.log(daltones[i]);
 }
//? A. Jack
//? B. joe, Jack
//? C. joe, Jack, Willam
//? D. joe, Willam, Averell

//*İlk olarak, daltones adında bir dizi tanımlanıyor: let daltones = ['joe', 'Jack', 'Willam', 'Averell'].Ardından, for döngüsü kullanılarak dizinin elemanları üzerinde dönülüyor: for(let i = 0; i < daltones.length; i++).i değişkeni 0'dan başlatılıyor ve daltones.length değeri kadar döngü çalışacak şekilde ayarlanıyor. Bu durumda daltones dizisinin uzunluğu 4 olduğu için döngü 4 kez çalışacak.
//!Her döngü adımında i değeri bir artırılıyor (i++).Döngü bloğuna geçildiğinde, if koşulu kontrol ediliyor: if(i == 1).Eğer i değeri 1'e eşitse, continue ifadesi çalışacak ve döngüdeki o adım atlanacak.Bu durumda, sadece i değeri 1 olmadığı sürece döngü bloğu içindeki kodlar çalışacak.  i değeri 1 olmadığında (i == 1 koşulu sağlanmadığında), daltones[i] ifadesi dizinin o anki indeksindeki elemanı temsil eder ve konsola yazdırılır.
//*Sonuç olarak, verilen kod parçası daltones dizisindeki elemanları döngü içinde tek tek kontrol eder. Ancak i değeri 1 olduğunda (if(i == 1) koşulu sağlandığında), continue ifadesiyle o adım atlanır. Bu nedenle, konsola sadece 'joe', 'Willam' ve 'Averell' isimleri yazdırılır. 'Jack' ismi atlanır çünkü i değeri 1'e eşittir.


//!13. What is the new avengers array after this code block?
//!13. Bu kod bloğundan sonraki yeni avengers dizisi nedir?

 let avengers = ['Iron Man', 'Captain America', 'Black Widow', 'Hulk']
 avengers.splice(2,1,'Thor', 'Hawkeye');

//? A. ['Black Widow'] 
//? B. index error
//? C. ['Iron Man', 'Captain America', 'Thor', 'Hawkeye', 'Hulk']
//? D. ['Iron Man', 'Captain America', 'Thor', 'Hawkeye','Black Widow', 'Hulk']
//!splice() yöntemi, belirtilen indeksten başlayarak silme işlemini gerçekleştirir ve aynı zamanda yeni elemanları ekler.)
//*(İlk olarak, avengers adında bir dizi tanımlanıyor:  splice() yöntemi kullanılarak avengers dizisinde değişiklik yapılıyor. İlk parametre olan 2, dizide hangi indexten başlanacağını belirtir. Bu durumda, 2 indeks, "Black Widow" elemanını temsil eder. İkinci parametre olan 1, kaç elemanın silineceğini belirtir. Bu durumda, 1 eleman ("Black Widow") silinecektir.Sonraki parametreler olan 'Thor' ve 'Hawkeye', eklenmek istenen yeni elemanları temsil eder.)





//! 14. Write a for loop for iterate languages?
//! 14. Yinelenen diller için bir for döngüsü yaz?

 let fullStack = {
  languages: ["JavaScript", "React", "HTML"],
  jira: true,
  gitHub: true,
  difficulty: 8,
 }
 for(){
 write your code here
 }
 
output : JavaScript, React, HTML

//* İlk olarak, fullStack adında bir nesne (obje) tanımlanır. 
//!for döngüsünü kullanarak "languages" özelliğindeki dilleri yazdırabiliriz:
for (let i = 0; i < fullStack.languages.length; i++) {
    // Döngü bloğu burada gelecek
  }
  //*Döngü bloğuna geçildiğinde, her döngü adımında bir dil öğesini fullStack.languages dizisinden alıp yazdırabiliriz:

for (let i = 0; i < fullStack.languages.length; i++) {
  console.log(fullStack.languages[i]);
}
//!fullStack.languages[i] ifadesi, her döngü adımında "languages" özelliği içindeki dilin değerini temsil eder.console.log() fonksiyonu ile bu değer konsola yazdırılır.Döngü her adımda bir dil öğesini alır ve konsola yazdırır. Bu durumda, "JavaScript", "React" ve "HTML" dilleri konsola yazdırılacaktır.



//! 15. Write a code for get fullStack object's keys
//! 15. fullStack nesnesinin anahtarlarını almak için bir kod yazın

let fullStack = {
 languages: ["JavaScript", "React", "HTML"],
 jira: true,
 gitHub: true,
 difficulty: 8,
}
output : languages, jira, gitHub, difficulty

//!İlk olara fullStack adında bir nesne (obje) tanımlanır. Bu nesne, "languages" (diller), "jira", "gitHub" ve "difficulty" gibi özelliklere sahiptir:
//*Anahtarları almak için Object.keys() yöntemini kullanabilir...

let keys = Object.keys(fullStack);

//!Object.keys() yöntemi, bir nesnenin anahtarlarını içeren bir dizi döndürür. fullStack nesnesini Object.keys() yöntemine geçirerek keys adında bir dizi elde edersiniz.
console.log(keys); //!fonksiyonu ile keys dizisi konsola yazdırılır.




//! 16. Write a method to get myCar's age
//! 16. myCar'ın yaşını öğrenmek için bir yöntem yazın
 const myCar = {
  make : 'ford',
  model : 'Mustang',
  year : 1965,
  color : 'Black'
  }
   Write your code here 
  myCar.age = 
 myCar.age(2023) //Output: 58


// Interview Questions 15m
// 1. What Are The Number Methods in javaScript?
// 2. What Is Javascript Date Object?
// 3. What Are Date Methods?
// 4. Explain how to define a variable in Sass?
// 5. Explain what is the difference between Sass and SCSS?

