


// document.querySelector("header h1").onmouseover=function(){
//   document.querySelector("header h1").style.color="red" 
// }

//* 1-click :belli bir öğe tıklandığında tetiklenir

//!Bir HTML düğmesine tıklandığında bir fonksiyonu nasıl tetikleyebilirsiniz?

// document.getElementById("demo").addEventListener("click", function() {
//   console.log("Buttona tıklandı!");
// });


//!Bir metin alanına girilen değeri nasıl yakalayabilirsiniz?

document.getElementById("myInput").addEventListener("input", function() {
  let value = this.value;
  console.log("Girilen değer: " + value);
});


// //!Bir resme fare imleci geldiğinde nasıl tepki verebilirsiniz?

// document.getElementById("myImage").addEventListener("mouseover", function() {
//   console.log("Resmin üzerine gelindi!");
// });


// //! 4-Bir form gönderildiğinde nasıl bir işlem yapabilirsiniz?

// document.getElementById("myForm").addEventListener("submit", function(event) {
//   event.preventDefault(); // Sayfanın yeniden yüklenmesini engellemek için
//   console.log("Form gönderildi!");
// });

// //! 5-Bir belge yüklendiğinde veya tamamlandığında nasıl bir eylem gerçekleştirebilirsiniz?
// e
// window.addEventListener("load", function() {
//   console.log("Belge yüklendi!");
// });
// Bu örnekler, belirli olaylara nasıl tepki verileceğini göstermektedir. JavaScript olaylarını kullanarak web sayfalarını etkileşimli hale getirebilir ve kullanıcıların etkileşimlerini takip edebilirsiniz.











// //*mouseover: Fare imleci belirli bir öğenin üzerine geldiğinde tetiklenir.
// document.querySelector("header").onmouseover= function (){
// document.querySelector("header h1").style.color="red"  
// }




// //! Örnek 1: Bir düğmeye tıklandığında bir mesaj gösterme

// var button = document.getElementById("myButton");
// button.addEventListener("click", function() {
//   alert("Butona tıklandı!");
// });

// //* Bu örnekte, "myButton" kimliğine sahip bir düğme seçilir ve "click" olayını dinlemek için "addEventListener" kullanılır. Düğmeye tıklandığında, bir mesaj kutusu (alert) görüntülenir.

// //! Örnek 2: Bir metin kutusunda klavye tuşlarına basıldığında bir işlev çalıştırma

// var input = document.getElementById("myInput");
// input.addEventListener("keyup", function() {
//   console.log("Klavye tuşuna basıldı!");
// });

// //*Bu örnekte, "myInput" kimliğine sahip bir metin kutusu seçilir ve keyup olayını dinlemek için addEventListener kullanılır. Herhangi bir klavye tuşuna basıldığında, konsola bir mesaj yazılır.

// //! Örnek 3: Fareyle bir öğenin üzerine gelindiğinde arka plan rengini değiştirme

// var box = document.getElementById("myBox");
// box.addEventListener("mouseover", function() {
//   box.style.backgroundColor = "red";
// });

// //*Bu örnekte, "myBox" kimliğine sahip bir öğe seçilir ve mouseover olayını dinlemek için addEventListener kullanılır. Fare öğenin üzerine geldiğinde, öğenin arka plan rengi kırmızı olarak değiştirilir.

// //!Örnek 4: Bir form gönderildiğinde bir işlev çalıştırma ve sayfayı yenilememe

// var form = document.getElementById("myForm");
// form.addEventListener("submit", function(event) {
//   event.preventDefault();
//   console.log("Form gönderildi!");
// });

// //!Bu örnekte, "myForm" kimliğine sahip bir form seçilir ve submit olayını dinlemek için addEventListener kullanılır. Form gönderildiğinde, formun varsayılan davranışını engellemek için event.preventDefault() kullanılır ve konsola bir mesaj yazılır.

// //!Örnek 5: Bir resme tıklandığında resmi değiştirme


// var image = document.getElementById("myImage");
// image.addEventListener("click", function() {
//   image.src = "newImage.jpg";
// });

// //*Bu örnekte, "myImage" kimliğine sahip bir resim seçilir ve click olayını dinlemek için addEventListener kullanılır. Resme tıklandığında, resmin kaynak (src) yolunu "newImage.jpg" olarak değiştirir.

// //!Örnek 6: Bir liste öğesine fareyle gelindiğinde öğenin stilini değiştirme


// var listItem = document.getElementById("myListItem");
// listItem.addEventListener("mouseenter", function() {
//   listItem.style.fontWeight = "bold";
// });
// //*Bu örnekte,"myListItem" kimliğine sahip bir liste öğesi seçilir ve mouseenter olayını dinlemek için addEventListener kullanılır. Fare öğenin üzerine geldiğinde, öğenin yazı kalınlığı (font weight) kalın olarak değiştirilir.

// //!Örnek 7: Sayfa tamamen yüklendiğinde bir işlev çalıştırma


// window.addEventListener("load", function() {
//   console.log("Sayfa tamamen yüklendi!");
// });

// //*Bu örnekte, window nesnesi üzerinde load olayını dinlemek için addEventListener kullanılır. Sayfa tamamen yüklendiğinde, konsola bir mesaj yazılır.

// //!Örnek 8: Bir elementin boyutu değiştiğinde bir işlev çalıştırma

// var element = document.getElementById("myElement");
// element.addEventListener("resize", function() {
//   console.log("Elementin boyutu değişti!");
// });

// //*Bu örnekte, "myElement" kimliğine sahip bir element seçilir ve resize olayını dinlemek için addEventListener kullanılır. Elementin boyutu değiştiğinde, konsola bir mesaj yazılır.

// //!Örnek 9: Bir bağlantıya tıklandığında sayfayı yönlendirme engelleme

// var link = document.getElementById("myLink");
// link.addEventListener("click", function(event) {
//   event.preventDefault();
//   console.log("Bağlantıya tıklandı, ancak sayfaya yönlendirme engellendi!");
// });

// //*Bu örnekte, "myLink" kimliğine sahip bir bağlantı seçilir ve click olayını dinlemek için addEventListener kullanılır. Bağlantıya tıklandığında, bağlantının varsayılan yönlendirme davranışını engellemek için event.preventDefault() kullanılır ve konsola bir mesaj yazılır.

// //!Örnek 10: Bir checkbox seçildiğinde bir işlev çalıştırma

// var checkbox = document.getElementById("myCheckbox");
// checkbox.addEventListener("change", function() {
//   if (checkbox.checked) {
//     console.log("Checkbox seçildi!");
//   } else {
//     console.log("Checkbox seçilmedi!");
//   }
// });
// //*Bu örnekte, "myCheckbox" kimliğine sahip bir checkbox seçilir ve change olayını dinlemek için addEventListener kullanılır. Checkbox seçildiğinde veya seçim kaldırıldığında, duruma bağlı olarak konsola bir mesaj yazılır.





























// //!JavaScript'te "events" (olaylar), web sayfalarında gerçekleşen kullanıcı etkileşimlerini veya tarayıcıdaki diğer olayları yakalamak ve işlemek için kullanılan özelliklerdir. İşte bazı yaygın kullanılan olaylar ve onlara ilişkin örnekler:

// //  ****1-onClick (Tıklama Olayı):Bu olay, bir elemente tıklandığında tetiklenir.Örnek:

// document.getElementById("myButton").addEventListener("click", function() {
//     console.log("Butona tıklandı!");
//   })
//   //***** 2-onKeyUp (Tuş Bırakma Olayı):Bu olay, bir tuşun klavyeden bırakıldığında tetiklenir.Örnek:


// document.getElementById("myInput").addEventListener("keyup", function(event) {
//   console.log("Tuş bırakıldı. Basılan tuş: " + event.key);
// });
// //***3-onMouseOver (Üzerine Gelme Olayı):Bu olay, bir elementin üzerine gelindiğinde tetiklenir.Örnek:

// document.getElementById("myElement").addEventListener("mouseover", function() {
//   console.log("Elementin üzerine gelindi!");
// });

// //*4-onSubmit (Form Gönderme Olayı):Bu olay, bir formun gönderildiğinde tetiklenir.Örnek:


// document.getElementById("myForm").addEventListener("submit", function(event) {
//   event.preventDefault(); // Formun otomatik olarak gönderilmesini engeller
//   console.log("Form gönderildi!");
// });

//*Bu örneklerde addEventListener yöntemi kullanılarak belirli bir olaya dinleyici (event listener) ekleniyor. Dinleyici, belirli bir olay gerçekleştiğinde tetiklenen bir işlevdir. İşlev, olayın nasıl işleneceğini tanımlar. Bu örneklerde, olay gerçekleştiğinde konsol mesajı yazdırmak gibi basit işlemler gerçekleştiriliyor.