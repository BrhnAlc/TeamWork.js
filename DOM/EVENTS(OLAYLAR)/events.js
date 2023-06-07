
//!JavaScript'te "events" (olaylar), web sayfalarında gerçekleşen kullanıcı etkileşimlerini veya tarayıcıdaki diğer olayları yakalamak ve işlemek için kullanılan özelliklerdir. İşte bazı yaygın kullanılan olaylar ve onlara ilişkin örnekler:

//  ****1-onClick (Tıklama Olayı):Bu olay, bir elemente tıklandığında tetiklenir.Örnek:

document.getElementById("myButton").addEventListener("click", function() {
    console.log("Butona tıklandı!");
  })
  //***** 2-onKeyUp (Tuş Bırakma Olayı):Bu olay, bir tuşun klavyeden bırakıldığında tetiklenir.Örnek:


document.getElementById("myInput").addEventListener("keyup", function(event) {
  console.log("Tuş bırakıldı. Basılan tuş: " + event.key);
});
//***3-onMouseOver (Üzerine Gelme Olayı):Bu olay, bir elementin üzerine gelindiğinde tetiklenir.Örnek:

document.getElementById("myElement").addEventListener("mouseover", function() {
  console.log("Elementin üzerine gelindi!");
});

//*4-onSubmit (Form Gönderme Olayı):Bu olay, bir formun gönderildiğinde tetiklenir.Örnek:


document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Formun otomatik olarak gönderilmesini engeller
  console.log("Form gönderildi!");
});

//*Bu örneklerde addEventListener yöntemi kullanılarak belirli bir olaya dinleyici (event listener) ekleniyor. Dinleyici, belirli bir olay gerçekleştiğinde tetiklenen bir işlevdir. İşlev, olayın nasıl işleneceğini tanımlar. Bu örneklerde, olay gerçekleştiğinde konsol mesajı yazdırmak gibi basit işlemler gerçekleştiriliyor.

