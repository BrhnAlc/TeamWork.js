1. Which model includes margin, border, padding, and content?
1. Hangi model kenar boşluğu, kenarlık, dolgu ve içerik içerir?
A. CSS Grid Template Layout Module
B. CSS3 Flexbox Box model
C. CSS Box model
D. CSS3 Grid Layout model
//!2. You are creating a grid layout. What does 1fr mean in the following code?
//*2. Bir ızgara düzeni oluşturuyorsunuz. Aşağıdaki kodda 1fr ne anlama geliyor?
//!(150px: İlk sütunun genişliği 150 piksel olacaktır.150px: İkinci sütunun genişliği 150 piksel olacaktır.1fr: Üçüncü sütunun genişliği, kalan alanın 1 fraksiyon birimi kadar olacaktır. Bu, kullanılabilir alanın geri kalanının eşit olarak üçüncü ve dördüncü sütunlar arasında bölüneceği anlamına gelir.1fr: Dördüncü sütunun genişliği, kalan alanın 1 fraksiyon birimi kadar olacaktır. Bu, kullanılabilir alanın geri kalanının eşit olarak üçüncü ve dördüncü sütunlar arasında bölüneceği anlamına gelir.Sonuç olarak, grid-template-columns: 150px 150px 1fr 1fr; kodu, bir ızgara düzenini tanımlar ve sütunları belirtilen genişliklere göre ayarlar. İlk iki sütun sabit genişliğe sahiptir, üçüncü ve dördüncü sütunlar ise kalan alanı eşit olarak paylaşır.)
grid-template-columns: 150px 150px 1fr 1fr;
A. The third and fourth columns is 1 fraction unit of the remaining space in the grid.
B. The first two columns will be two fraction units of the stated width.
C. The second column will be double the stated width.
D. The second column will be half of the remaining space in the grid.
tw-04.md 5/24/2023
3 / 7
//*3. What is the output?
//!(Bu soruyu çözmek için JavaScript'in karşılaştırma operatörlerini kullanabilirsiniz.JavaScript'te karşılaştırma operatörü == (eşitlik) iki değerin eşit olup olmadığını kontrol eder. Bu operatörde, değerlerin tipleri dikkate alınarak dönüşümler yapılır.Boolean false değeri, diğer tipleri sayıya veya stringe dönüştürdüğünde 0 olarak değerlendirilir.String '0' değeri, sayıya dönüştürüldüğünde 0 olarak değerlendirilir.Bu bilgilere dayanarak, false == '0' ifadesinin çıktısı true olacaktır.)
console.log(false == '0');
A. True
B. true
C. False
D. false
//*4. After the following code, what is the value of a.length?
//?4. Aşağıdaki koddan sonra a.length değeri nedir?
//!(Bu durumda, a.length ifadesi 101 olarak değerlendirilecektir çünkü diziye 100. indeks olarak 'at' değeri atanmıştır ve dizinin toplam eleman sayısı 101 olacaktır.)
var a = ['dog','lion','hen'];
a[100] = 'horse';
A. 101
B. 3
C. 4
D. 100
//*5. What is the output?
//!(JavaScript'te typeof operatörü bir değerin veri türünü döndürür. Ancak, operatörün kendisi de bir operatördür ve öncelik sırası vardır.Öncelik sırasına göre, iç içe geçmiş typeof operatörlerinin değerlendirilmesi soluğdan sağa doğrudur. Yani typeof typeof 1 ifadesinde, içteki typeof 1 önce değerlendirilir ve ardından dıştaki typeof operatörü uygulanır.Bu ifadeyi çözmek için aşağıdaki adımları izleyebilirsiniz:İçteki typeof 1 ifadesini çözün:typeof 1 ifadesi, 1'in veri türünü döndürür.1 sayısı bir tamsayı olduğu için, typeof 1 ifadesinin değeri "number" olacaktırDıştaki typeof operatörünü uygulayın:"number" ifadesi, bir string (metin) olduğu için, typeof "number" ifadesi "string" değerini döndürecektir.Sonuç olarak, console.log(typeof typeof 1); ifadesinin çıktısı "string" olacaktır.)
console.log(typeof typeof 1);
A. number
B. 1 
C. undefined
D. string
//*6. What is the output?
//!(Bu soruyu çözmek için JavaScript'in dize birleştirme ve toplama işlemi davranışını anlamak gerekmektedir.JavaScript'te, + operatörü sayılar arasında toplama işlemi gerçekleştirirken, bir sayı ile bir dize arasında dize birleştirme işlemi yapar.Bu ifadeyi çözmek için aşağıdaki adımları izleyebilirsiniz:İlk olarak, 1 + "2" ifadesini çözün:1 sayısı ile "2" dizesi arasında + operatörü kullanıldığında, sayıyı dizeye dönüştürüp dize birleştirme işlemi yapar.Bu durumda, 1 sayısı "1" dizesine dönüştürülür ve "1" + "2" ifadesi "12" dizesini döndürür.Sonra, "12" + "2" ifadesini çözün:"12" dizesi ile "2" dizesi arasında + operatörü kullanıldığında, dize birleştirme işlemi yapılır.Bu durumda, "12" + "2" ifadesi "122" dizesini döndürür.Sonuç olarak, console.log(1 + "2" + "2"); ifadesinin çıktısı "122" olacaktır.)
console.log(1 + "2" + "2");
A. 14
B. 122 
C. 32
D. NaN
tw-04.md 5/24/2023

//*7. What will be the output of this code?
let array = [1, 2, 3];
array[6] = 9;
console.log(array[5]);
//!(Bu soruyu çözmek için JavaScript'teki dizi indekslemesi ve boş değerlerin nasıl işlendiği konularını anlamak gerekmektedir.Verilen kod örneğinde, array isimli bir dizi oluşturuluyor ve ardından array dizisinin 6. indeksine 9 değeri atanıyor. Ancak, bu durumda dizinin 0, 1, 2 ve 6. indeksleri değerle doldurulmuş olacak. Arada kalan indeksler ise boş değerlerle dolu olacak.console.log(array[5]); ifadesi, array dizisinin 5. indeksindeki değeri döndürmeyi amaçlar. Ancak, bu durumda 5. indeks boş bir değeri temsil eder.JavaScript'te boş bir dizinin değeri undefined olarak kabul edilir. Dolayısıyla, array[5] ifadesi undefined değerini döndürecektir.Sonuç olarak, console.log(array[5]); ifadesinin çıktısı undefined olacaktır.)
A. 1
B. 2
C. undefined
D. 5
//*8. How is a forEach statement different from a for statement?
//!(forEach ifadesi ve for ifadesi, JavaScript'te döngü işlemlerini gerçekleştirmek için kullanılan farklı yapıdaki ifadelerdir. İkisi de bir dizi veya iterable bir nesne üzerindeki elemanları dolaşmak için kullanılabilir, ancak farklı sözdizimleri ve bazı farklı davranışları vardır.İşte forEach ifadesinin for ifadesinden farkları:Sözdizimi: forEach ifadesi, bir fonksiyonu dizi veya iterable üzerindeki her bir eleman için çağırmak üzere tasarlanmıştır. Aksine, for ifadesi daha genel bir döngü ifadesidir ve döngü değişkeninin kontrolünü size bırakır.İndeks veya Değer: forEach ifadesi, her bir döngü adımında elemanın değerini ve opsiyonel olarak indeksini alır ve bu değerleri döngü içinde kullanmanıza olanak tanır. for ifadesiyle ise döngü değişkenini kendiniz kontrol edersiniz ve bu değişkeni kullanarak dizi veya iterable üzerindeki elemanlara erişebilirsiniz.Döngü Dışında Etki: forEach ifadesi, döngü dışında tanımlanan değişkenleri güncelleyemez. Yani, forEach içinde yapılan değişiklikler dışarıdaki değişkenlere yansımaz. for ifadesi ise döngü içinde herhangi bir değişkeni güncelleyebilir ve bu değişiklikler dışarıya etki edebilir.Döngüyü Durdurma: forEach ifadesi, döngüyü durdurmak veya atlamak için kolay bir yol sağlamaz. Her eleman için belirtilen fonksiyon tüm elemanlar üzerinde çalışır. for ifadesinde ise döngüyü durdurmak veya atlamak için break veya continue ifadelerini kullanabilirsiniz.Genel olarak, forEach ifadesi daha basit bir döngü yapısıdır ve diziler veya iterable nesneler üzerinde daha okunabilir bir şekilde dolaşmak için kullanılırken, for ifadesi daha esnek bir döngü yapısıdır ve daha fazla kontrol sağlar. Seçiminiz, kullanım senaryonuza ve ihtiyaçlarınıza bağlı olacaktır.

A. A forEach statement is generic, but a for statement can be used only with an array.
B. Only a forEach statement lets you specify your own iterator.
C. A for statement is generic, but a forEach statement can be used only with an array. 
D. Only a for statement uses a callback function. 
9. How do we print the employee's languages to the console?
//?9. Çalışanın dillerini konsola nasıl yazdırırız?
//!(Verilen kod örneğinde, employee adında bir sabit (değişmez) nesne tanımlanmıştır. Bu nesne, çalışanın adı, soyadı, yaşı, bildiği diller, maaşı gibi bilgileri içermektedir.Bu kodu çözmek için aşağıdaki adımları izleyebilirsiniz:employee nesnesini tanımlayın:employee adında bir nesne tanımlanır.Nesnenin özellikleri (properties) name, surname, age, languages ve salary olarak belirtilmiştir.name özelliği "John" değerini, surname özelliği "Doe" değerini, age özelliği 33 değerini, languages özelliği ["C++", "Go", "Java", "Javascript"] değerini ve salary özelliği 10000 değerini içermektedir.employee nesnesinin özelliklerine erişin:employee.name ifadesi, employee nesnesinin name özelliğine erişir ve "John" değerini döndürür.employee.surname ifadesi, employee nesnesinin surname özelliğine erişir ve "Doe" değerini döndürür.employee.age ifadesi, employee nesnesinin age özelliğine erişir ve 33 değerini döndürür.employee.languages ifadesi, employee nesnesinin languages özelliğine erişir ve ["C++", "Go", "Java", "Javascript"] dizisini döndürür.employee.salary ifadesi, employee nesnesinin salary özelliğine erişir ve 10000 değerini döndürür.Bu adımları izleyerek, employee nesnesinin özelliklerine erişebilir ve istediğiniz değerleri alabilirsiniz. Örneğin, console.log(employee.name); ifadesiyle "John" değerini, console.log(employee.languages); ifadesiyle ["C++", "Go", "Java", "Javascript"] dizisini elde edebilirsiniz.
const employee = {
 name: "John",
 surname: "Doe",
 age: 33,
 languages: ["C++", "Go", "Java", "Javascript"],
 salary: 10000,
}
A. [ ]
console.log(employee.languages)
B. [ ]
employee["languages"].forEach((lang) => console.log(lang))<br>
C. [ ]
for (let i = 0; i < employee.languages.length; i++) {
 console.log(employee.languages[i])
}
D. All of the above
tw-04.md 5/24/2023
5 / 7
//*10. What is the value of dessert.type after executing this code?
//!10. Bu kodu çalıştırdıktan sonra sweet.type değeri nedir?
//?(Verilen kod örneğinde, dessert adında bir sabit (değişmez) nesne tanımlanmıştır.Bu kodu çalıştırdıktan sonra sweet.type değeri pudding olacaktır.İlk olarak, dessert nesnesi oluşturulur ve type özelliği "pie" olarak ayarlanır.Sonra, dessert.type ifadesiyle dessert nesnesinin type özelliği "pudding" olarak güncellenir.Dolayısıyla, sweet.type ifadesi dessert.type ile aynı değeri temsil eder ve bu da "pudding" olarak değerlendirilir.Sonuç olarak, sweet.type değeri "pudding" olacaktır. Yani, doğru cevap B seçeneğidir. )
const dessert = { type: 'pie' };
dessert.type = 'pudding';
A. undefined
B. pudding
C. is not defined
D. pie

//*11. Which definition below best describe an array?
//!11. Aşağıdaki tanımlardan hangisi bir diziyi en iyi tanımlar?
A. An array is a function identifier that can hold more than one parameter.
B. An array is a beam of light.
C. An array is a special variable, which can hold more than one value at a time. 
D. An array is a special function, which can hold more than one value at a time.

//?12. What is the correct syntax to transform a string to upper case?
//!12. Bir dizeyi büyük harfe dönüştürmek için doğru sözdizimi nedir?
//*(Verilen txt değişkenindeki metni büyük harfe dönüştürmek için JavaScript'te toUpperCase() yöntemini kullanabilirsiniz. Bu yöntem, bir dizeyi tamamen büyük harflere dönüştürür.)
let txt = "Hello!" ;
A. toUpperCase( txt );
B. toUpperCase.txt();
C. txt(toUpperCase);
D. txt.toUpperCase();


13. Which of the following transform property value defines a 2D translation?
//!13. Aşağıdaki dönüştürme özelliği değerlerinden hangisi bir 2B çeviriyi tanımlar?
//*(Aşağıdaki dönüştürme özelliği değerlerinden 2B çeviri (2D translation) işlemi için kullanılan doğru değer "A. translate(x,y)"'dir."translate(x, y)" dönüştürme özelliği, elemanı yatay (x ekseni) ve dikey (y ekseni) yönde belirtilen bir mesafeyle hareket ettirmek için kullanılır."translate2d(x, y)" veya "translate3d(x, y)" değerleri, dönüştürme özelliği için doğru değillerdir. "translate2d" veya "translate3d" ifadeleri geçerli bir CSS özelliği veya işlevi temsil etmez.Bu nedenle, doğru cevap A seçeneğidir: translate(x,y).)
A. translate(x,y)
B. translate2d(x,y)
C. translate3d(x,y) 
D. all of the mentioned


14. What does this code do?
//!14. Bu kod ne işe yarar?
@media only screen and (max-width: 500px) {
 body {
 background-color: lightblue;
 }
 //*(Bu kod, CSS'de bir medya sorgusu kullanarak ekranın maksimum genişliğini kontrol eder. Sadece ekran genişliği 500 pikselden küçük olduğunda geçerli olacak bir stil tanımlar.Yani, bu kod, yalnızca ekran genişliği 500 pikselden küçük olduğunda <body> elementinin arka plan rengini "lightblue" olarak ayarlar.@media kuralı, belirli bir medya tipi ve medya özellikleri için stil tanımlamak için kullanılır. only screen ifadesi, sadece ekran medya tipi için geçerli olacak anlamına gelir. max-width: 500px ifadesi, ekranın maksimum genişliğini 500 piksel olarak sınırlar.Bu kodun amacı, ekranın belirli bir boyuta düştüğünde (500 pikselden küçük olduğunda) <body> elementinin arka plan rengini değiştirmektir. Böylece, küçük ekranlarda farklı bir arka plan rengi kullanabilirsiniz.)

A. The background color will change to lightblue
B. If the browser window is larger than 500px, the background color will change to lightblue.
C. If the browser window is smaller than 500px, the background color will change to lightblue.
D. Nothing happens


//*15. Which of the following property defines the length of time that a transition takes?
//?(15. Aşağıdaki özelliklerden hangisi bir geçişin ne kadar süreceğini tanımlar?)
//!(Aşağıdaki özelliklerden "B. transition-duration" bir geçişin ne kadar süreceğini tanımlar."transition" özelliği, bir veya daha fazla geçiş özelliğini belirtmek için kullanılır. Bu özellik, geçişin hangi özellikler üzerinde uygulanacağını, süresini, gecikme zamanını ve geçişin nasıl hızlanacağını belirlemek için kullanılabilir."transition-property" özelliği, geçişin uygulanacağı CSS özelliklerinin listesini belirtir."transform-duration" özelliği, 2D veya 3D dönüşümlerin (transformations) ne kadar süreceğini belirtir.Ancak, geçişin süresini belirlemek için doğru özellik "B. transition-duration" özelliğidir. Bu özellik, geçişin ne kadar süreceğini belirlemek için kullanılır. Örneğin, transition-duration: 0.5s; ifadesi, geçişin yarım saniye süreceğini belirtir.)
A. transition
B. transition-duration
C. transform-duration
D. transition-property
Interview Questions 15m
//*Mülakat Soruları 15dk
//!1. Please describe the most important advantages of using JavaScript.
//!1.  JavaScript kullanmanın en önemli avantajlarını açıklayın.
//*JavaScript'in kullanımının birçok önemli avantajı vardır. İşte bazıları:Tarayıcı Desteği: JavaScript, web tarayıcılarında neredeyse evrensel olarak desteklenir. Bu, JavaScript'i web tabanlı uygulamalar, etkileşimli web siteleri ve çeşitli tarayıcı tabanlı projeler için ideal hale getirir.Hızlı ve Hafif: JavaScript, tarayıcıda çalışan bir betik dilidir ve bu nedenle web sayfalarının hızlı ve hafif olmasını sağlar. Sayfaların anında yanıt vermesine ve etkileşimli öğelerin sorunsuz bir şekilde çalışmasına olanak tanır.Zengin İçerik Kontrolü: JavaScript, HTML ve CSS ile birlikte kullanılarak web sayfalarında ve uygulamalarda zengin içerik kontrolü sağlar. Kullanıcı etkileşimi, animasyonlar, formların doğrulaması, veri manipülasyonu ve diğer etkileşimli özellikler gibi birçok işlevi gerçekleştirmek için kullanılabilir.Tarayıcı Olaylarına Tepki: JavaScript, tarayıcıdaki kullanıcı etkileşimlerine (tıklama, fare hareketi, klavye tuşları vb.) yanıt verebilir ve bu etkileşimlere bağlı olarak belirli işlemleri gerçekleştirebilir. Bu, kullanıcı deneyimini geliştirmek ve etkileşimli web uygulamaları oluşturmak için önemlidir.Geniş Kütüphane ve Framework Desteği: JavaScript, zengin bir ekosisteme sahiptir ve birçok kullanışlı kütüphane ve framework sunar. Örneğin, React, Angular ve Vue.js gibi popüler JavaScript framework'leri, web uygulamalarının geliştirilmesini kolaylaştırır ve hızlandırır. Ayrıca, jQuery, Lodash, moment.js gibi kütüphaneler de yaygın olarak kullanılan JavaScript kütüphaneleridir.Platform Bağımsızlık: JavaScript, platform bağımsız bir programlama dilidir. Yani, farklı işletim sistemlerinde ve cihazlarda (bilgisayarlar, akıllı telefonlar, tabletler, giyilebilir cihazlar vb.) çalışabilir. Bu, aynı kodun farklı platformlarda kullanılabilmesini ve geliştirme sürecini kolaylaştırır.Dinamik ve Esnek: JavaScript, dinamik bir dil olarak bilinir ve çalışma zamanında değişikliklere izin verir. Bu, verileri, stilleri ve davranışları dinamik olarak değiştirme yeteneği sağlar. Ayrıca, prototip tabanlı nesne yönelimli bir dildir ve esnek bir programlama yaklaşımı sunar.Bu avantajlar, JavaScript'in web geliştirme alanında yaygın olarak

2. What is the difference between attributes and property?
//!2. Nitelikler ve özellik arasındaki fark nedir?

//*Nitelikler (attributes) ve özellikler (properties) JavaScript'te kullanılan terimler olup benzer anlamlara sahiptir, ancak bazı farklılıklar vardır. İşte nitelikler ve özellikler arasındaki farkları açıklamak için genel bir anlatım:Nitelikler (AttributesHTML elementlerine eklenen özelliklerdir.HTML'de bulunan etiketlere belirli özellikler eklemek için kullanılırlar.Nitelikler, HTML dosyasında belirtilen değerlerdir ve genellikle sabit veriler içerir.Nitelikler, JavaScript tarafından doğrudan değiştirilemez. Yani, nitelikler üzerinde JavaScript tarafından gerçekleştirilen değişiklikler, genellikle özellikleri etkiler.Niteliklere genellikle HTML'de attribute="value" şeklinde tanımlanan özelliklerdir. Örneğin, <input type="text" name="username"> gibi.Özellikler (Properties):JavaScript nesnelerinin ve elementlerinin özellikleridir.JavaScript koduyla etkileşimde bulunurken kullanılan değerlerdir.Özellikler, nesnelerin ve elementlerin özelliklerini temsil eder ve genellikle dinamik veriler içerir.JavaScript tarafından özellikler üzerinde işlemler gerçekleştirilebilir, değerleri değiştirilebilir ve yeni özellikler eklenip kaldırılabilir.Özelliklere genellikle JavaScript kodunda dot notasyonu veya köşeli parantez kullanarak erişilir ve değiştirilir. Örneğin, element.value veya element['value'] gibi.Özetle, nitelikler HTML etiketlerine eklenen özelliklerdir ve HTML belgesinde belirtilen sabit verileri temsil ederken, özellikler JavaScript nesnelerinin veya elementlerinin dinamik verilerini temsil eder ve JavaScript kodu tarafından erişilebilir ve değiştirilebilir.
3. What is the for-in loop in JavaScript?
//!3. JavaScript'teki for-in döngüsü nedir?
4. How to check if an object is an array or not?
//!4. Bir nesnenin dizi olup olmadığı nasıl kontrol edilir?
Bir nesnenin dizi olup olmadığını kontrol etmek için JavaScript'te Array.isArray() yöntemini kullanabilirsiniz. İşte kullanımı:javascriptCopy code
var myObject = [1, 2, 3]; //* Örnek bir diziif (Array.isArray(myObject)) {
  console.log("myObject bir dizi.");
} else {
  console.log("myObject bir dizi değil.");
}
Yukarıdaki kod, Array.isArray() yöntemini kullanarak myObject nesnesinin bir dizi olup olmadığını kontrol eder. Eğer myObject bir dizi ise, "myObject bir dizi." mesajını konsola yazdırır. Eğer myObject bir dizi değilse, "myObject bir dizi değil." mesajını konsola yazdırır.

Bu yöntem, bir nesnenin gerçekten bir dizi olup olmadığını belirlemek için güvenilir bir yol sağlar.






