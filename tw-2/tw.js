Ask Questions 15m
//!1. Which of the following is correct about Hex Code format of CSS colors?
//!1. CSS renklerinin Hex Code formatı ile ilgili aşağıdakilerden hangisi doğrudur?
//*(Hexadecimal (Onaltılık) Temsili: Hex Code formatı, onaltılık (hexadecimal) sistemi kullanır. Bu sistemde, 0'dan 9'a kadar olan sayılar 0-9 aralığında temsil edilirken, 10'dan 15'e kadar olan sayılar A-F harfleriyle temsil edilir. Örneğin, 0-15 arasındaki sayılar şu şekilde temsil edilir: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F.RGB Kanalları: Hex Code formatı, kırmızı (red), yeşil (green) ve mavi (blue) renk kanallarını temsil eder. Bu kanalların değerleri 0 ile 255 arasında olabilir. Hex Code formatında, her kanal için iki haneli bir onaltılık sayı kullanılır. Örneğin, #FF0000 tamamen kırmızı renktir (#FF kırmızı kanalın maksimum değeri olan 255'i temsil eder, diğer kanallar ise sıfır).sembolü: Hex Code formatının başında genellikle bir # sembolü bulunur. Bu sembol, renk değerlerinin başladığını belirtir. Örneğin, #00FF00 yeşil renktir.Kısaltmalar: Bazı renkler, aynı değeri temsil ettiğinden dolayı kısaltılarak yazılabilir. Örneğin, #FF0000 yerine #F00 şeklinde kısaltılabilir. Benzer şekilde, #FFFFFF yerine #FFF veya #000000 yerine #000 şeklinde kısaltmalar yapılabilir.Şeffaflık: Hex Code formatıyla birlikte RGBA (Red, Green, Blue, Alpha) değeri kullanılarak renklere şeffaflık (opaklık) eklemek mümkündür. Alpha kanalı, 0 ile 1 arasında bir değer alır ve 0 şeffaf, 1 ise tamamen opak bir renk anlamına gelir. Örneğin, #FF0000FF tamamen opak kırmızı renktir.Hex Code formatı, CSS'te renk değerlerini belirtmek için yaygın olarak kullanılır. Bu formata aşina olmak, renkleri doğru bir şekilde tanımlamak ve CSS dosyalarında renkleri kullanmak için önemlidir.)
A. The first two digits(RR) represent a red value
B. The next two are a green value (GG)
C. The last are the blue value (BB) 
D. All of the above

//!2. Which operator returns true if the two compared values are not equal?
//!2. Karşılaştırılan iki değer eşit değilse hangi operatör true değerini döndürür?
//*(Karşılaştırılan iki değer eşit olmadığında "eşit değil" operatörü olan "!=" (farklı) operatörü true değerini döndürür. Bu operatör, iki değerin eşit olmadığını kontrol etmek için kullanılır.)
A. <>
B. ~
C. ==! 
D. !==

//!3. When would you use a conditional statement?
//!3. Ne zaman koşullu bir ifade kullanırsınız?
//*(Koşullu ifadeler, programlama dilinde birden fazla seçenek arasında seçim yapmak için kullanılır. Bir koşulun doğru olup olmadığını kontrol ederek, belirli bir duruma veya koşula bağlı olarak farklı kod bloklarının çalıştırılmasını sağlar. Bu durumda, kodunuzun farklı şartlara göre farklı işlemler yapmasını sağlamak için koşullu ifadeleri kullanırsınız.)
A. When you want to reuse a set of statements multiple times.
B. When you want your code to choose between multiple options.
C. When you want to group data together.
D. When you want to loop through a group of statement.


//!4. Why would you include a "use strict" statement in a JavaScript file?
//!4. Bir JavaScript dosyasına neden "katı kullanım" ifadesi eklersiniz?
//*(JavaScript'te "use strict" ifadesi, "katı kullanım" (strict mode) olarak bilinen bir özelliği etkinleştirir. Bu ifade, JavaScript kodunun daha sıkı bir şekilde yorumlanmasını sağlar ve bazı hatalı veya potansiyel sorunlu kod yapılarının kullanımını engeller. "use strict" ifadesini JavaScript dosyalarına eklemek için aşağıdaki gibi bir satır kullanılır:javascript Copy code"use strict";"katı kullanım" ifadesi eklemenin bazı nedenleri şunlar olabilir:Daha güvenli kod: "katı kullanım" modu, bazı hatalı kod yapılarının kullanılmasını engeller veya hata mesajlarını oluşturur. Bu sayede kodun daha güvenli olmasını sağlar.Daha iyi hata ayıklama: "katı kullanım" modu, hataları daha erken yakalamayı ve daha ayrıntılı hata mesajları sağlamayı sağlar. Bu, hataları tespit etme ve düzeltme sürecini kolaylaştırır.Daha sıkı JavaScript standartları: "katı kullanım" modu, bazı eski veya karmaşık JavaScript davranışlarını devre dışı bırakarak, daha tutarlı bir dil davranışı elde etmeyi amaçlar. Bu, tarayıcılar arasında uyumluluğu artırabilir ve beklenmeyen sonuçların önlenmesine yardımcı olabilir.İyi kodlama alışkanlıklarını teşvik etmek: "katı kullanım" modu, bazı sık kullanılan hatalı veya hafife alınan kodlama alışkanlıklarını engeller. Bu, daha iyi bir kod kalitesi ve daha sürdürülebilir bir kod tabanı oluşturulmasına yardımcı olur.Bunlar, "katı kullanım" ifadesini JavaScript dosyalarına eklemenin bazı yaygın nedenleridir. Ancak, belirli bir proje veya geliştirme ortamına bağlı olarak, "katı kullanım" modunu kullanmanın avantajları ve gerekliliği farklılık göst)
A. to tell parsers to interpret your JavaScript syntax loosely
B. to tell parsers to enforce all JavaScript syntax rules when processing your code
//*("katı kullanım" ifadesi, JavaScript ayrıştırıcısına kodu daha sıkı bir şekilde yorumlaması talimatını verir. Bu mod, JavaScript kodunun daha katı bir şekilde uygulanmasını sağlar ve bazı hatalı veya riskli kod yapılarının kullanımını engeller. Ayrıca, JavaScript kodunu daha tutarlı ve güvenli hale getirir.)
C. to instruct the browser to automatically fix any errors it finds in the code
D. to enable ES6 features in your code


//!5. Which of the following values is not a Boolean false?
//!5. Aşağıdaki değerlerden hangisi bir Boolean false değildir?
//*(A. Boolean("false") ifadesi bir Boolean false değerine eşit değildir.Seçeneklerin açıklamaları:A. Boolean("false"): Bu ifade bir string ("false") değerini Boolean'a dönüştürür. Boş olmayan herhangi bir string true olarak değerlendirilir. Dolayısıyla, Boolean("false") ifadesi true değerini döndürür.B. Boolean(""): Bu ifade bir boş stringi Boolean'a dönüştürür. Boş bir string false olarak değerlendirilir. Dolayısıyla, Boolean("") ifadesi false değerini döndürür.C. Boolean(NaN): NaN (Not-a-Number) değeri, bir sayı olmayan veya hesaplanamayan bir değeri temsil eder. NaN her zaman false olarak değerlendirilir. Dolayısıyla, Boolean(NaN) ifadesi false değerini döndürür.D. Boolean(0): 0 değeri false olarak değerlendirilir. Dolayısıyla, Boolean(0) ifadesi false değerini döndürür.Sonuç olarak, sadece A seçeneği (Boolean("false")) bir Boolean false değeri değildir ve true değerini döndürür.)
A. Boolean("false")
B. Boolean("")
C. Boolean(NaN)
D. Boolean(0)

//!6. What will be the width of the div element given below?
//!6. Aşağıda verilen div elemanının genişliği ne kadar olacaktır?
//*(Verilen CSS stil tanımına göre, div elemanının genişliği aşağıdaki gibi hesaplanır:width: 200px; -> Genişlik 200 piksel olarak ayarlanır.Padding: 20px; -> Sol ve sağ kenarlara 20 piksel iç boşluk ekler. Bu, içerik alanının genişliği üzerinde etkili olur.border: 5px solid blue; -> 5 piksel kalınlığında bir mavi kenarlık ekler. Bu kenarlık, içerik alanının dışına doğru genişler.margin: 0; -> Kenar boşluğu yok.box-sizing: content-box; -> Kutu modeli "content-box" olarak ayarlanmıştır. Bu, padding ve border değerlerinin içeriğin genişliğini etkilemediği anlamına gelirSonuç olarak, içerik alanının genişliği 200 piksel olarak belirlenmiştir. Ancak, padding ve border değerleri içeriğin dışına doğru genişlediği için, toplam genişlik, içeriğin genişliği + padding + border olarak hesaplanır. Bu durumda, içerik alanının genişliği 200 piksel olduğu için toplam genişlik şu şekilde olur200px (içerik genişliği) + 2 x 20px (sol ve sağ padding) + 2 x 5px (sol ve sağ border) = 250pYani, div elemanının genişliği 250 piksel olacaktır.)

div {
 width: 200px;
 padding: 20px;
 border: 5px solid blue;
 margin: 0;
 box-sizing: content-box;
}
A. 220px
B. 240px
C. 250px
D. 200px

//!7. What value should be passed to the width parameter if we want an element, say a table, to span the
//!entire width of the screen?
//!7. Bir öğenin, örneğin bir tablonun, tabloyu yaymasını istiyorsak, genişlik parametresine hangi değeri iletmeliyiz?
//!ekranın tüm genişliği?
//*(Eğer bir öğenin, örneğin bir tablonun, kendisini içeren alanı tamamen kaplamasını istiyorsanız, genişlik parametresine "100%" değerini iletebilirsiniz.)
A. 100%
B. 50%
C. 0%
D. inherit

//!8. Which of the following properties is used to align text in CSS?
//!8. CSS'de metni hizalamak için aşağıdaki özelliklerden hangisi kullanılır?
//*(CSS'de metni hizalamak için "text-align" özelliği kullanılır. Bu özellik, metnin yatay olarak nasıl hizalandığını belirlemek için kullanılır. "text-align" özelliğinin değerleri şunlardır:"left": Metni sola hizalar."right": Metni sağa hizalar."center": Metni ortalar."justify": Metni her iki kenara doğru yayarak hizalar.)
A. text
B. text-alignment
C. text-position
D. text-align

//!9. Which of the following CSS properties specifies the stack order of elements?
//!9. Aşağıdaki CSS özelliklerinden hangisi öğelerin yığın sırasını belirtir?
//*(CSS'de öğelerin yığın sırasını belirtmek için "z-index" özelliği kullanılır. "z-index" özelliği, öğelerin dikey üst üste binme düzenini kontrol etmek için kullanılır. Bu özellik, bir öğenin diğer öğelerin önünde veya arkasında olmasını sağlar."z-index" özelliği, pozisyon değeri "relative", "absolute" veya "fixed" olan öğelerde kullanılabilir. Özelliğin değeri, bir sayı veya "auto" olabilir. Sayı ne kadar yüksekse, öğenin diğer öğelerin üzerinde olma olasılığı o kadar artar.)
A. z-index
B. overlap
C. margin
D. padding


//!10. Which of the following are units of relative length in CSS?
//!10. Aşağıdakilerden hangisi CSS'deki göreli uzunluk birimlerindendir?
//*(Doğru cevap: D. All of the above (Hepsi)Aşağıdakiler CSS'deki göreli uzunluk birimlerindendir:A. em: Öğenin varsayılan yazı tipi boyutunu temsil eder.B. rem: Kök (root) elementin yazı tipi boyutunu temsil eder.C. vmax: Tarayıcının görüntüleme alanının en büyük boyutunun bir yüzdesi olarak belirtilir.Yani, "em", "rem" ve "vmax" hepsi göreli uzunluk birimleridir. Bu nedenle, doğru cevap "D. All of the above"olacaktır.)
A. em
B. rem
C. vmax
D. All od the above


//!11. How can we add more importance to a property/value than normal?
//!11. Bir özelliğe/değere normalden daha fazla nasıl önem verebiliriz?
//*(Bir özelliğe veya değere normalden daha fazla önem vermek için CSS'de kullanılan yöntem, !important ifadesini kullanmaktır.CSS'de !important ifadesi, bir stil kuralının diğer kural ve etkilerden daha üstün olmasını sağlar. Bir stil kuralına !important eklenirse, o kural diğer kural ve etkilerden öncelikli olarak değerlendirilir ve uygulanır.)
A. !important
B. important
C. bold
D. None of the above

//!12. What will be the output of the following code snippet?
//!12. Aşağıdaki kod parçacığının çıktısı ne olacaktır?
//*(Verilen kod parçacığının çıktısı "object" olacaktır.JavaScript'te, "typeof" operatörü bir değerin veri türünü döndürür. Ancak "null" özel bir değerdir ve "typeof" operatörü tarafından "object" olarak sınıflandırılır. Bu bir dil hatasıdır ve "null" aslında bir nesne değil, "null" olarak bilinen bir değerdir. Bu durum, JavaScript'in geçmişinden kaynaklanan bir tutarsızlık olarak kabul edilir.Yani, "typeof a" ifadesi "object" değerini döndürecektir.)
let a = null;
console.log(typeof a);
A. null
B. undefined
C. object
D. string

//!13. What will be the output of the following code snippet?
//!13. Aşağıdaki kodun çıktısı ne olacaktır?
let x = 1;
let y = 0;
while (x < 4) {
 x++;
 y += x * 3;
 console.log(y);
}
A. 2 5 9
B. 6 15 27
C. 4 10 18
D. 8 20 36

//!14. What will be the output of the following code snippet?
//!14. Aşağıdaki kod parçacığının çıktısı ne olacaktır?
//*(Verilen ifadeyi çözmek için operatör önceliğini ve tiplere dönüşümü dikkate almalısınız.JavaScript'te true değeri, sayısal bir değere dönüştürüldüğünde 1'e eşittir. Ayrıca matematiksel operatörlerin işlem sırası kuralları geçerlidirVerilen ifadeyi adım adım çözelimtrue * 5 ifadesi 5 değerini verir, çünkü true 1'e dönüştürülürtrue + true ifadesi 2 değerini verir, çünkü her iki true ifadesi de 1'e dönüştürülürSon olarak, 2 + 5 ifadesi 7 değerini verir, çünkü toplama işlemi yapılırBu durumda, console.log(x) ifadesiyle çıktı olarak 7 alınacaktır.)
let x = true + true + true * 5;
console.log(x);
A. 5
B. undefined
C. 7
D. 0

//!15. What will be the output of the following code snippet?
//!15. Aşağıdaki kod parçacığının çıktısı ne olacaktır?
//*(Verilen kodun çıktısı "number" olacaktır.NaN (Not-a-Number), JavaScript'te sayısal bir değer olarak tanımlanan ancak geçerli bir sayısal değeri ifade etmeyen bir özel değerdir. NaN, matematiksel işlemler sonucunda geçersiz bir sonuç döndüğünde veya sayısal olmayan bir değerlematematiksel işlem yapıldığında ortaya çıkar.typeof operatörü, bir değerin veri türünü döndürür. NaN, JavaScript'te "number" veri türüne ait bir değer olarak kabuledilir. Bu nedenle console.log(typeof NaN) ifadesinin çıktısı "number" olacaktır.)
console.log(typeof NaN);
A. Object
B. Number
C. String
D. Undefined


//!16. What will be the output of the following code snippet?
//!16. Aşağıdaki kod parçacığının çıktısı ne olacaktır?
//*(JavaScript'te, bir sayı ile bir dizeyi (+) operatörüyle birleştirdiğinizde, sayı otomatik olarak dizeye dönüştürülür ve iki değer birleştirilir.Burada, 11 sayısı bir dizede "11" olarak temsil edilir. Daha sonra "11" dizesi ile "10" dizesi birleştirilerek "1110" dizesi elde edilirYani, çıktı "1110" olacaktır.)
console.log(11 + "10");
A. Error
B. 21
C. 1110
D. 11

//!17. What will be the output of the following code snippet?
//!17. Aşağıdaki kod parçacığının çıktısı ne olacaktır?
//*(Verilen kod parçacığının çıktısı "Text" olacaktır.Kod parçacığındaki işlem adımlarını ayrıntılı olarak açıklayalıma değişkeni tanımlanmış ancak bir değer atanmamıştır, bu nedenle değeri undefined olurb değişkeni const ile tanımlanmış ve 25 değeriyle başlatılmıştırc değişkeni let ile tanımlanmış ve "Text" değeriyle başlatılmıştır(a && b) ifadesi a ve b değişkenlerinin değerlerini mantıksal olarak ve işlemine tabi tutar. Ancak a değeri undefined olduğu için bu ifade undefined değerini döndürür|| operatörü, sol tarafındaki ifade false, null, undefined veya boş bir dize olduğunda sağ tarafındaki ifadeyi döndürürDolayısıyla, (a && b) || c ifadesi undefined olduğu için c değerini döndürürSonuç olarak, console.log((a && b) || c) ifadesi "Text" değerini konsola yazdırırYani, çıktı "Text" olacaktır.)
let a;
const b = 25;
let c = "Text";
console.log((a && b) || c);

A. 25
B. undefined
C. error
D. Text


//!18. What will be the output of the following code snippet?
//!18. Aşağıdaki kod parçacığının çıktısı ne olacaktır?
//*(Verilen kod parçacığının çıktısı "undefined" olacaktır. Kod parçacığındaki işlem adımlarını ayrıntılı olarak açıklayalım a değişkeni tanımlanmış ancak bir değer atanmamıştır, bu nedenle değeri undefined olur b değişkeni const ile tanımlanmış ve 25 değeriyle başlatılmıştır c değişkeni let ile tanımlanmış ve "Text" değeriyle başlatılmıştır a && b && c ifadesi a, b ve c değişkenlerinin değerlerini mantıksal olarak ve işlemine tabi tutar. Ancak a değeri undefined olduğu için bu ifade undefined değerini döndürür Dolayısıyla, console.log(a && b && c) ifadesi undefined değerini konsola yazdırır Yani, çıktı "undefined" olacaktır. Seçenek B doğrudur.)
let a;
const b = 25;
let c = "Text";
console.log(a && b && c);
A. 25
B. undefined
C. error
D. Text


//!19. What will be the output of the following code snippet?
//!19. Aşağıdaki kod parçacığının çıktısı ne olacaktır?
//*(Verilen kod parçacığının çıktısı "25" olacaktır. Kod parçacığındaki işlem adımlarını ayrıntılı olarak açıklayalım a değişkeni tanımlanmış ancak bir değer atanmamıştır, bu nedenle değeri undefined olur b değişkeni const ile tanımlanmış ve 25 değeriyle başlatılmıştır c değişkeni let ile tanımlanmış ve "Text" değeriyle başlatılmıştır a || b || c ifadesi a, b ve c değişkenlerinin değerlerini mantıksal olarak veya işlemine tabi tutar. Bu ifade soldan sağa değerleri kontrol eder ve ilk bulduğu true değeri veya son değeri döndürür a değeri undefined olduğu için bu ifade b değerini döndürür Dolayısıyla, console.log(a || b || c) ifadesi 25 değerini konsola yazdırır Yani, çıktı çıktı "25" olacaktır. Seçenek A doğrudur. )
let a;
const b = 25;
let c = "Text";
console.log(a || b || c);
A. 25
B. undefined
C. error
D. Text


Interview Questions 15m
Mülakat Soruları 15dk
//!1. What are the escape characters in JavaScript?
//!1. JavaScript'teki kaçış karakterleri nelerdir
//?(JavaScript'te kullanılan bazı kaçış karakterleri şunlardır:\n: Yeni satır karakteri.\r: Satır başına dönüş karakteri.\': Tek tırnak işareti.\": Çift tırnak işareti.\\: Ters eğik çizgi (backslash).\t: Sekme karakteri.\b: Geriye dönüş karakteri.\f: Form besleme karakteri.\uXXXX: Unicode karakteri (XXXX, karakterin Unicode kod noktasının dört haneli onaltılık değerini temsil eder).Bu kaçış karakterleri, özel anlam taşıyan karakterleri temsil etmek veya belirli bir etkiyi elde etmek için kullanılır. Örneğin, metin içinde yeni satır eklemek için \n kullanabilir veya metin içinde tek tırnak işareti gösterme)


//!2. What is JavaScript ‘Strict Mode’?
//!2. 
//*(JavaScript'de "Strict Mode" veya "Katı Mod", daha katı bir JavaScript yürütme modunu ifade eder. Katı Mod, JavaScript kodunun daha güvenli, tutarlı ve hatasız olmasını sağlayan bir dizi ek kuralı etkinleştirir.Katı Mod'un bazı özellikleri ve etkileri şunlardırHata yakalama: Katı Mod, bazı hataları hataya dönüştürerek kodun daha güvenli bir şekilde çalışmasını sağlar. Örneğin, değişken atama hatası veya tanımlanmamış değişken kullanımı gibi hatalar katı bir şekilde bildirilirİçerikte daha sıkı standartlar: Katı Mod, bazı hatalı veya karmaşık kodlama pratiklerini kısıtlar ve JavaScript standartlarının daha sıkı bir şekilde uygulanmasını sağlar. Örneğin, belirsiz değişken tanımlama veya etiketlenmiş fonksiyon ifadeleri gibi dilin bazı özelliklerine ilişkin kısıtlamalar getirirDaha iyi performans optimizasyonu: Katı Mod, JavaScript yürütme sürecini optimize etmek için bazı iyileştirmeler yapar. Bu, kodun daha hızlı çalışmasını ve daha iyi performans göstermesini sağlar.)



//!3. What is the difference between ‘var’ and ‘let’ keyword?
//!3. "var" ve "let" anahtar kelimeleri arasındaki fark nedir?
//*("var" ve "let" anahtar kelimeleri JavaScript'te değişken tanımlamak için kullanılan iki farklı deyimdir. Aralarındaki bazı temel farklar şunlardır:Kapsam: "var" değişkenleri, işlev kapsamıyla sınırlıdır (function scope), yani tanımlandığı işlev içinde geçerlidir. "let" değişkenleri ise blok kapsamıyla sınırlıdır (block scope), yani tanımlandığı blok (if, for, while gibi) içinde geçerlidir.javascripCopy codfunction example()   var x = 10  let y = 20  console.log(x); // 1  console.log(y); // 2example()console.log(x); // ReferenceError: x is not defineconsole.log(y); // ReferenceError: y is not defineİşlev yükseltmesi (hoisting): "var" değişkenleri, tanımlandığı kapsamın başına yükseltilir. Bu, değişkenin tanımlandığından önce kullanılabileceği anlamına gelir. "let" değişkenleri ise tanımlandığı satırda yükseltilmez ve tanımlandığından önce kullanılmaya çalışıldığında ReferenceError hatası alını javascrip Copy cod console.log(x); // undefine var x = 10 console.log(y); // ReferenceError: y is not define let y = 20 Tekrar tanımlama: "var" değişkenleri aynı kapsamda tekrar tanımlanabilir ve üzerine yazılır. "let" değişkenleri ise aynı kapsamda tekrar tanımlanmaya izin vermez javascrip Copy cod var x = 10 var x = 20; // Geçerl let y = 10 let y = 20; // SyntaxError: Identifier 'y' has already been declare İç kapsam çakışması (block scope): "var" değişkenleri işlev kapsamında olmalarına rağmen, bir ifade veya döngü içinde tanımlanmaları durumunda dışarıdan da erişilebilirler. Bu, beklenmedik hatalara ve yanlış değerlere neden olabilir. "let" değişkenleri ise blok kapsamı nedeniyle sadece tanımlandıkları blok içinde erişilebilirler javascrip Copy cod function example()    if (true)      var x = 10     let y = 20      console.log(x); // 1   console.log(y); // ReferenceError: y is not define example() Bu farklar göz önüne alındığında, "let" anahtar kelimesi genellikle "var" anahtar kelimesine tercih edilir. "let" kullanımı, daha sıkı kapsam kontrolü ve daha öngörülebil 


//!4. What is JavaScript Hoisting?
//!4.
//*(JavaScript kaldırma (hoisting), JavaScript motorunun kodu yürütmeden önce değişken tanımlamalarını ve fonksiyon bildirimlerini "yukarı doğru" taşıdığı bir davranıştır. Bu, değişkenleri ve fonksiyonları, kodun ilgili kapsamının başına taşır ve tanımlamaların gerçekleştiği yerden önce kullanılmalarına izin verir. JavaScript kaldırma, "var" anahtar kelimesiyle tanımlanan değişkenler ve fonksiyon bildirimleri için geçerlidir. Örneğin, bir değişkeni tanımlamadan önce kullanmak veya bir fonksiyonu çağırmadan önce bildirmek mümkündür javascrip Copy cod console.log(x); // undefine var x = 10 foo(); // "Hello, World! function foo()    console.log("Hello, World!") Yukarıdaki örnekte, var x = 10; ifadesi, kodun başında yükseltilir (hoisted) ve console.log(x); ifadesi undefined sonucunu verir. Benzer şekilde, function foo() bildirimi de kodun başında yükseltilir ve foo() fonksiyonu çağrılabilir Ancak, kaldırma sadece değişkenlerin ve fonksiyon bildirimlerinin taşınmasını içerir, değer ataması veya fonksiyon ifadeleri yükseltilmez. Ayrıca, "let" veya "const" ile tanımlanan değişkenler kaldırma davranışına tabi değildir JavaScript kaldırma, kodun daha öngörülebilir hale gelmesine yardımcı olabilir, ancak bazen beklenmeyen sonuçlara yol açabileceği için dikkatli kullanılmalıdır. Bu nedenle, değişkenleri tanımlamadan önce kullanmak veya fonksiyon bildirimlerini çağırmak yerine, en iyi uygulama olarak kodunuzu tanımlama ve kullanım sırasına göre düzenlemeniz önerilir. 




















