
//!  1. Sass is a _____.
 //! 1. Sass bir _____.

//? A. Scripting language 
//? B. Markup language
//? C. CSS pre-processor
//? D. Programming Language

//**(CSS ön işlemcisi, CSS yazma sürecini daha verimli ve etkili hale getirmek için kullanılan bir araçtır. CSS ön işlemcileri, CSS yazımında tekrar eden kodu azaltır, daha düzenli bir yapı oluşturmayı sağlar ve daha hızlı ve kolay bir şekilde stil sayfaları oluşturmanıza yardımcı olur.) */


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
//?  Yakut
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

6. SASS was created by...
A. Linus Torvalds 
B. Brendan Eich 
C. Hampton Catlin
D. Guido van Rossum
7. In Sass, which of the following is the correct way to define a variable?
A. #primary-color: #888;
B. @primary-color: #888;
C. %primary-color: #888;
D. $primary-color: #888;
8. Which is the correct syntax to declare a variable "myfonts" assigning the two font names?
A. $myfonts: Helvetica, and sans-serif;
B. $myfonts: Helvetica, sans-serif;
C. $myfonts: "Helvetica, sans-serif";
D. $myfonts: "Helvetica+sans-serif";
9. Which directive is used to create CSS code that is to be reused throughout the website?
A. @import
B. @define
C. @mixin
D. All of the above
tw-006.md 6/7/2023
4 / 7
10. Which directive is used to share a set of CSS properties from one selector to another?
A. @share 
B. @import 
C. @transfer
D. @extend
11. What is the output of this code block?
let daltones = ['joe', 'Jack', 'Willam', 'Averell']
daltones.shift()
daltones.pop()
console.log(daltones)
A. ['joe', Jack']
B. []
C. ['Jack', 'Willam']
D. ['joe','Averell']


12. What is the output of this code block?
let daltones = ['joe', 'Jack', 'Willam', 'Averell']
for(let i =0; i< daltones.length; i++){
 if(i == 1){
 continue;
 }
 console.log(daltones[i]);
}
A. Jack
B. joe, Jack
C. joe, Jack, Willam
D. joe, Willam, Averell
13. What is the new avengers array after this code block?
let avengers = ['Iron Man', 'Captain America', 'Black Widow', 'Hulk']
avengers.splice(2,1,'Thor', 'Hawkeye');
tw-006.md 6/7/2023
5 / 7
A. ['Black Widow'] 
B. index error
C. ['Iron Man', 'Captain America', 'Thor', 'Hawkeye', 'Hulk']
D. ['Iron Man', 'Captain America', 'Thor', 'Hawkeye','Black Widow', 'Hulk']
14. Write a for loop for iterate languages?
let fullStack = {
 languages: ["JavaScript", "React", "HTML"],
 jira: true,
 gitHub: true,
 difficulty: 8,
}
for(){
//write your code here
}
//output : JavaScript, React, HTML
15. Write a code for get fullStack object's keys
let fullStack = {
 languages: ["JavaScript", "React", "HTML"],
 jira: true,
 gitHub: true,
 difficulty: 8,
}
//write your code here
//output : languages, jira, gitHub, difficulty
tw-006.md 6/7/2023
6 / 7
16. Write a method to get myCar's age
const myCar = {
 make : 'ford',
 model : 'Mustang',
 year : 1965,
 color : 'Black'
 }
 /* Write your code here 
 myCar.age = 
 */
myCar.age(2023) //Output: 58
Interview Questions 15m
1. What Are The Number Methods in javaScript?
2. What Is Javascript Date Object?
3. What Are Date Methods?
4. Explain how to define a variable in Sass?
5. Explain what is the difference between Sass and SCSS?

