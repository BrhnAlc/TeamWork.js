// //!1. What is the function to stop an interval timer?

// //!1. Bir aralık zamanlayıcısını durdurma işlevi nedir?


// //*Bir aralık zamanlayıcısını durdurmak için clearInterval işlevi kullanılır.
// //* JavaScript'te setInterval işlevi, belirli bir zaman aralığında tekrarlanan bir işlevi çalıştırmak için kullanılır. Bu işlevin geri dönüş değeri bir zamanlayıcı kimliğidir (timer ID). Bu zamanlayıcı kimliği, daha sonra kullanılarak zamanlayıcıyı durdurmak veya iptal etmek için clearInterval işlevine geçirilir.
// //? A. stopTimer
// //? B. clearInterval
// //? C. shutdownTimer
// //? D. clearTimer

// //*Aşağıdaki kodda bir aralık zamanlayıcısı oluşturulur ve her 1 saniyede bir "Merhaba!" yazısı konsola basılır:
// var timerID = setInterval(function() {
//     console.log("Merhaba!");
//   }, 1000);
  
//   //*5 saniye sonra zamanlayıcıyı durdurur.Bu şekilde, belirli bir süre sonra zamanlayıcı durdurulmuş olur ve "Merhaba!" yazıları konsola basılmayı durdurur.

// //*Sonuç olarak, clearInterval işlevi, belirtilen bir zamanlayıcıyı durdurmak veya iptal etmek için kullanılır.
//   setTimeout(function() {
//   clearInterval(timerID);
// }, 5000);

// //!2. What are 2 native functions to run code 
// //!2. JavaScript'te eşzamansız olarak kod çalıştırmak için 2 yerel işlev nedir?asynchronously in JavaScript ?
// //*setTimeout:*** Bu işlev, belirli bir gecikme süresinden sonra bir kez kod çalıştırmak için kullanılır. İkinci bir parametre olarak verilen gecikme süresi (milisaniye cinsinden) sonunda, belirtilen işlev tetiklenir.

// //*setInterval:*** Bu işlev, belirli bir aralıkta tekrarlanan kod bloklarını çalıştırmak için kullanılır. İkinci bir parametre olarak verilen aralık süresi (milisaniye cinsinden), belirtilen işlevin belirtilen süre aralıklarıyla tekrar tekrar tetiklenmesini sağlar.

// //? A. timeout - setTimeout
// //? B. startInternal - setInterval
// //? C. setTimeout - setInterval
// //? D. interval - setInterval

// //*aşağıdaki kodda, "Merhaba!" yazısı 3 saniye sonra konsola basılır:

// setTimeout(function() {
//   console.log("Merhaba!");
// }, 3000);

// //*şağıdaki kodda, her 1 saniyede bir "Merhaba!" yazısı konsola basılır:

// setInterval(function() {
//   console.log("Merhaba!");
// }, 1000);


// //!3. What is the output of the code below?
// //!3. Aşağıdaki kodun çıktısı nedir?
// let x = 0;
// async function test() {
//  x += await 2;
//  console.log(x);
// }
// test();
// x += 1;
// console.log(x);

// //? A. 2 3
// //? B. 0 1
// //? C. 1 2
// //? D. 2 2
// //*let x = 0;: x adında bir değişken tanımlanır ve başlangıç değeri olarak 0 atanır.

// //*async function test() { ... }: test adında bir async fonksiyon tanımlanır.

// //* x += await 2;: await ifadesi, Promise döndüren bir ifadeyi beklemek için kullanılır. Ancak bu ifade, 2 gibi bir değer olduğu için işlev hemen devam eder. x değeri 2 ile artırılır.

// //*console.log(x);: x değeri konsola yazdırılır. Burada x değeri 2'dir.

// //*test();: test fonksiyonu çağrılır. Bu, async işlev olduğu için bir Promise döndürür ancak geri dönüş değeri kullanılmadığı için bu sonucu yakalamak veya işlemek gerekmez.

// //*x += 1;: x değeri 1 artırılır. Şu anda x değeri 3'tür.

// //*console.log(x);: Son olarak, x değeri konsola yazdırılır. Burada x değeri 3'tür.

// //* Sonuç olarak, örnekte x değeri önce 2 ile artırılır ve sonra 1 ile artırılır. Bu nedenle, ilk console.log(x) ifadesi 2'yi yazdırırken, ikinci console.log(x) ifadesi 3'ü yazdırır.

// //! 4. Which method converts JSON data to a JavaScript object?
// //! 4. Hangi yöntem JSON verilerini bir JavaScript nesnesine dönüştürür?
// //*JSON verilerini bir JavaScript nesnesine dönüştürmek için JSON.parse() yöntemini kullanırız.

// //*JSON.parse() yöntemi, bir JSON dizesini alır ve onu JavaScript nesnesine dönüştürür. JSON dizesi, verilerin taşınması, depolanması veya paylaşılması için yaygın olarak kullanılan bir veri formatıdır. Örneğin, bir web API'den alınan JSON verilerini JavaScript nesnesine dönüştürmek için bu yöntemi kullanabiliriz.

// //?  A. JSON.fromString();
// //?  B. JSON.toObject()
// //?  C. JSON.stringify()
// //?  D. JSON.parse()

// var jsonString = '{"name": "John", "age": 30, "city": "New York"}';
// var javascriptObject = JSON.parse(jsonString);
// console.log(javascriptObject);

// //*Yukarıdaki kodda, jsonString değişkeni bir JSON dizesini temsil eder. JSON.parse() yöntemi kullanılarak bu dize JavaScript nesnesine dönüştürülür ve javascriptObject değişkenine atanır. Sonuç olarak, javascriptObject değişkeni aşağıdaki gibi bir JavaScript nesnesini temsil eder:

// // {
// //     "name": "John",
// //     "age": 30,
// //     "city": "New York"
// //   }

// //! 5. Why would you choose an asynchronous structure for your code?
// //! 5. Kodunuz için neden eşzamansız bir yapı seçmelisiniz?

// //? A. ES6 sözdizimini kullanmak için
// //? B. Ayrıştırıcıların kodunuzu işlerken tüm JavaScript sözdizimi kurallarını uygulamasını sağlamak için
// //? C. Kodunuzun daha aşağısındaki görevlerin, daha önceki görevler tamamlanana kadar başlatılmadığından emin olmak için
// //? D. Biraz zaman alabilecek görevleri, sonraki görevlerin hemen yürütülmesini engellemeden başlatmak
// //*eşzamansız yapılar performans, verimlilik, kullanıcı deneyimi ve karmaşık iş akışları gibi durumlarda faydalıdır. biraz zaman alabilecek görevleri başlatmak ve bu görevlerin tamamlanmasını beklerken diğer görevlerin hemen yürütülmesini sağlamak için kullanışlıdır. 

// //! 6. What will be logged to the console?
// //! 6. Konsola ne kaydedilecek?
// console.log("I");
// setTimeout(() => {
//  console.log("love");
// }, 0);
// console.log("Javascript!");
// //? A.
// //? I
// //? love
// //? Javascript!
// //? B.
// //? I
// //? Javascript!
// //? love
// //? C.
// //? love
// //? I

// //*console.log("I");: "I" yazısı konsola basılır. Bu, JavaScript kodunun sıralı olarak çalıştığı bir işlemdir.

// //*setTimeout(() => { console.log("love"); }, 0);: setTimeout işlevi, belirli bir gecikme süresinden sonra bir işlevin çalışmasını planlamak için kullanılır. Ancak burada gecikme süresi 0 olarak belirtilmiştir, yani hemen çalıştırılacak demektir. Bu işlevin içindeki console.log("love"); ifadesi, "love" yazısını konsola basar. Bu işlev hemen çalıştırılmaz, ancak JavaScript çalışma zamanı tarafından işleme alınır ve uygun bir zamanı gelince çalıştırılır.

// //*console.log("Javascript!");: "Javascript!" yazısı konsola basılır. Bu, önceki setTimeout işlevinin çalışmasını beklemeden sıralı olarak devam eden bir işlemdir.

// //*Sonuç olarak, konsola sırasıyla "I", "Javascript!" ve "love" yazıları basılır. Bunun nedeni, setTimeout işlevinin bile olsa JavaScript'in olay döngüsüne (event loop) dayalı asenkron bir yapıya sahip olmasıdır. Bu sayede, hemen çalıştırılması gereken kod blokları öncelikli olarak işlenir, ancak gecikmeli işlemler uygun bir zamanda gerçekleştirilir.
// //!  7. Which statement is true about the "async" attribute for the HTML script tag?
// //!  7. HTML betik etiketi için "zaman uyumsuz" özniteliği hakkında hangi ifade doğrudur?

// //? A. Hem dahili hem de harici JavaScript kodu için kullanılabilir.
// //? B.Yalnızca dahili JavaScript kodu için kullanılabilir.
// //? C. Yalnızca bir sözü dışa aktaran dahili veya harici JavaScript kodu için kullanılabilir.
// //? D. Yalnızca harici JavaScript kodu için kullanılabilir.

// //!8. When would 'results shown' be logged to the console?
// //!8. "Gösterilen sonuçlar" ne zaman konsola kaydedilir?

// let modal = document.querySelector("#result");
// setTimeout(function () {
//  modal.classList.remove("hidden");
// }, 10000);
// console.log("Results shown");
// //? A. hemen
// //? B. 10 saniye sonra
// //? C. 10000 saniye sonra
// //? D. HTTP isteğinden sonuçlar alındıktan sonra
// //*let modal = document.querySelector("#result");: modal değişkeni, #result kimliğine sahip HTML elementini seçer.

// //*setTimeout(function () { ... }, 10000);: setTimeout işlevi, belirli bir gecikme süresinden sonra bir işlevin çalışmasını planlamak için kullanılır. Burada, 10.000 milisaniye (10 saniye) gecikme süresiyle bir anonim işlevi çalıştırır.

// //*modal.classList.remove("hidden");: Anonim işlev içerisindeki kod, modal değişkeninin üzerinden hidden sınıfını kaldırır. Bu, örneğin bir modal penceresini görünür hale getirmek için kullanılabilir.

// //*console.log("Results shown");: "Results shown" ifadesi konsola kaydedilir ve görüntülenir.

// //*Dolayısıyla, "Results shown" ifadesi, kodun çalıştırıldığı anda, yani setTimeout fonksiyonunun 10 saniye gecikme süresi başlatıldığı anda konsola kaydedilir. "Gösterilen sonuçlar" mesajı, 10 saniye sonra modalın görünür hale gelmesiyle ilgili işlev gerçekleştirmektedir ve konsola herhangi bir çıktı yazdırmamaktadır.


// //!9. Which Queue Is Executed First?
// //!9. İlk Olarak Hangi Kuyruk Yürütülür?
// //? Callback queue
// setTimeout(() => console.log("timeout"), 0);
// //? Microtask queue
// Promise.resolve().then(() => console.log("promise"));
// //? A. Geri arama kuyruğu
// //? B. Mikro görev kuyruğu
// //? C. Öncelik yok
// //? D. Hangisinin önce arandığına bağlı
// //*İlk olarak, Mikro Görev (Microtask) Kuyruğu yürütülür, ardından Geri Çağrı (Callback) Kuyruğu işlenir.

// //* JavaScript'in çalışma mantığına göre, Mikro Görev (Microtask) Kuyruğu, Geri Çağrı (Callback) Kuyruğu'ndan daha önceliklidir. Bu nedenle, Mikro Görev (Promise) kuyruğundaki görevler, Geri Çağrı kuyruğundaki görevlerden önce yürütülür.
// //*setTimeout(() => console.log("timeout"), 0);: Bu kod, bir zamanlayıcı ayarlar ve console.log("timeout") ifadesini içeren bir geri çağırma işlevini sıfır gecikme süresiyle planlar. Bu zamanlayıcı işlemi Geri Çağrı Kuyruğuna eklenir.

// //*Promise.resolve().then(() => console.log("promise"));: Bu kod ise bir Promise'ın çözülmesini (resolve) planlar ve console.log("promise") ifadesini içeren bir mikro görevi (microtask) Mikro Görev Kuyruğuna ekler.

// //*Dolayısıyla, Mikro Görev Kuyruğu önce işlenir. Mikro Görev Kuyruğu boşaltılırken, Geri Çağrı Kuyruğu işlenir. Bu nedenle, önce Mikro Görev Kuyruğundaki console.log("promise") ifadesi çalıştırılır ve "promise" çıktısı konsola yazılır. Ardından Geri Çağrı Kuyruğundaki console.log("timeout") ifadesi işlenir ve "timeout" çıktısı konsola yazılır.
// //! 10. How does a function create a closure?
// //! 10. Bir fonksiyon nasıl kapanış oluşturur?

//?  A. Değer değiştiğinde belgeyi yeniden yükler.
//?  B. Üst kapsamındaki bir değişkene referans döndürür.
//?  C. Geri dönmeden yürütmeyi tamamlar.
//?  D. Yerel bir değişkeni global kapsama kopyalar
//*Bir fonksiyon kapanışı (closure), üst kapsamdaki bir değişkene referans döndürerek oluşturulur. Kapanışlar, iç içe geçmiş fonksiyonlarda dış fonksiyonun yerel değişkenlerine erişim sağlamak için kullanılır.

//*Örneğin, aşağıdaki kodda outerFunction adında bir dış fonksiyon tanımlanmıştır ve içinde bir iç fonksiyon olan innerFunction yer almaktadır. İç fonksiyon, dış fonksiyonun yerel bir değişkenine (count) erişmektedir. Bu durumda innerFunction, bir kapanış oluşturur.
function outerFunction() {
  let count = 0;

  function innerFunction() {
    count++;
    console.log(count);
  }

  return innerFunction;
}

const closure = outerFunction();
closure(); // 1
closure(); // 2
//*function outerFunction() { ... }: outerFunction adında bir dış fonksiyon tanımlanır. Bu fonksiyon, bir count değişkeni ve bir innerFunction içerir.

//*let count = 0;: count adında bir yerel değişken oluşturulur ve başlangıç değeri olarak 0 atanır. Bu count değişkeni, outerFunction'ın yerel bir değişkenidir.

//*function innerFunction() { ... }: innerFunction adında bir iç fonksiyon tanımlanır. Bu fonksiyon, count değişkenine erişir ve onu 1 artırarak konsola yazdırır.

//*return innerFunction;: innerFunction fonksiyonu, outerFunction fonksiyonu tarafından döndürülür.

//*const closure = outerFunction();: outerFunction çağrısı yapılarak, dış fonksiyonun geri döndürdüğü innerFunction fonksiyonu closure değişkenine atanır. Bu şekilde, closure değişkeni artık innerFunction fonksiyonunu referans eder.

//*closure();: closure değişkeni üzerinden innerFunction fonksiyonu çağrılır. Bu fonksiyon içerisindeki count değişkeni 1 artırılır ve sonuç olarak 1 konsola yazdırılır.

//*closure();: closure değişkeni üzerinden innerFunction fonksiyonu tekrar çağrılır. Bu sefer count değişkeni 1 artırılarak 2 olur ve sonuç olarak 2 konsola yazdırılır.

//*Sonuç olarak, outerFunction içindeki count değişkeni innerFunction tarafından erişilebilir hale getirilir. outerFunction çağrısı ile innerFunction fonksiyonu döndürülür ve closure değişkenine atanır. Bu şekilde, closure üzerinden innerFunction fonksiyonu çağrılarak count değişkeni güncellenebilir ve sonuçlar konsola yazdırılabilir.

//!  11. Consider the following async function and its output. What will be displayed to the console when calling the f() function?
//! 11. Aşağıdaki zaman uyumsuz işlevi ve çıktısını göz önünde bulundurun. Ne zaman konsolda ne görüntülenecek?

 
 async function f() {
  let result = 'first!';
  let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('done!'), 1000);
  });
  result = await promise;
  console.log(result);
 }
 f();
//?   A. first!
//?   B. done!
//?   C. JavaScript error
//?   D. Something else
//*async function f() { ... }: f() adında bir async fonksiyon tanımlanır. async ifadesi, fonksiyonun asenkron bir işlev olduğunu belirtir.

//*let result = 'first!';: result adında bir değişken oluşturulur ve başlangıç değeri olarak "first!" atanır.

//*let promise = new Promise((resolve, reject) => { ... });: Promise nesnesi oluşturulur ve promise değişkenine atanır. Bu Promise nesnesi, 1 saniye (1000 milisaniye) gecikme süresiyle bir zamanlayıcı olan setTimeout fonksiyonunu içerir.

//*setTimeout(() => resolve('done!'), 1000);: 1 saniye sonra resolve fonksiyonu çağrılarak Promise nesnesi tamamlanır ve "done!" değeriyle çözülür.

//*result = await promise;: await ifadesi, asenkron işlemin tamamlanmasını beklemek için kullanılır. Bu satırda, promise nesnesi tamamlanana kadar beklenir ve sonuç değeri olan "done!" result değişkenine atanır.

//*console.log(result);: result değişkeni konsola yazdırılır. Bu noktada, result değişkeni "done!" değerini içermektedir.

//*f();: f() fonksiyonu çağrılır. Fonksiyon asenkron olduğu için, çağrıldığında işlemler sırayla gerçekleştirilir ve console.log(result) satırında "done!" çıktısı konsola yazdırılır.

//*Sonuç olarak, f() fonksiyonu çağrıldığında konsolda "done!" çıktısı görüntülenir. Bu, Promise nesnesinin tamamlanması için beklenen asenkron işlem sonucunda elde edilen değerdir.
//!  12. What will the output be?
//!  12. Çıktı ne olacak?
 Promise.resolve('Success!')
  .then(data => {
  return data.toUpperCase()
  })
  .then(data => {
  console.log(data)
  })
//?  A. print "Success!" and "SUCCESS!"
//?  B. print "Success!"
//?  C. print "SUCCESS!"
//?  D. nothing prints
//*Promise.resolve('Success!'): Bu satırda, Promise.resolve() yöntemi kullanılarak "Success!" değeriyle çözülen bir Promise nesnesi oluşturulur. Bu Promise nesnesi hemen çözülmüş durumdadır.

//*.then(data => { return data.toUpperCase() }): Oluşturulan Promise nesnesi üzerine .then() yöntemi çağrılır. Bu yöntem, bir işlev alır ve önceki Promise nesnesinin çözülme değerini parametre olarak alır. İşlevde, çözülen değeri (data) büyük harflere dönüştürmek için toUpperCase() yöntemi kullanılır. Bu işlev, yeni bir Promise nesnesi döndürür.

//*.then(data => { console.log(data) }): İkinci .then() yöntemi, önceki Promise nesnesinin çözülme değerini parametre olarak alır. Bu yöntemde, çözülen değer (data) konsola yazdırılır.

//!İşleyiş şu şekildedir:

//*İlk olarak, Promise.resolve('Success!') ile oluşturulan Promise nesnesi hemen çözülür ve çözülme değeri olan "Success!" bir sonraki .then() yöntemine geçirilir.

//*İlk .then() yöntemi, çözülen değeri (data) alır ve bu değeri büyük harflere dönüştürür (toUpperCase()). Bu işlem sonucunda yeni bir Promise nesnesi döndürülür.

//*İkinci .then() yöntemi, önceki Promise nesnesinin çözülme değerini (data) alır. Bu değer, önceki .then() yönteminde yapılan dönüşüm sonucunda büyük harflere dönüştürülmüş halidir. Bu değer konsola yazdırılır.

//*Sonuç olarak, yukarıdaki kodun çıktısı olarak konsola "SUCCESS!" yazısı görüntülenir. İlk .then() yöntemi tarafından yapılan dönüşümle "Success!" büyük harflere dönüştürülmüş ve ikinci .then() yöntemi tarafından konsola yazdırılmıştır.
//!Interview Questions 15m
//!Mülakat Soruları 15dk
//!  1. Can you explain what asynchronous programming is?
//!  1. Asenkron programlamanın ne olduğunu açıklayabilir misiniz?
//!  2. How can you convert a callback-based function to a Promise-based function?
//!  2. Geri arama tabanlı bir işlevi Promise tabanlı bir işleve nasıl dönüştürebilirsiniz?

//!  3. How does async/await help with performance and scalability?
//! 3. Async/await, performans ve ölçeklenebilirliğe nasıl yardımcı olur?
//!  4. Can you explain the difference between an async function and a regular function in JavaScript?
//! 4. JavaScript'te zaman uyumsuz işlev ile normal işlev arasındaki farkı açıklayabilir misiniz?