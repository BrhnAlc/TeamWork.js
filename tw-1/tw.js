//!1. How do you insert a comment in a CSS file?
//!1. Bir CSS dosyasına nasıl yorum eklersiniz?
//* (CSS'de yorum eklemek için /* Yorumunuz buraya */ şeklinde kullanabilirsiniz. Yani, CSS dosyanızda bir yorum eklemek isterseniz, ilgili satırın başına /* ve satırın sonuna */ ekleyerek yorumu oluşturabilirsiniz. Bu yorumlar tarayıcı tarafından görmezden gelinir ve sadece kodun anlaşılmasına yardımcı olur. )
A. // this is a comment //
B. /* this is a comment */ 
C. ' this is a comment 
D. // this is a comment


//!2. How to create a hyperlink in HTML?
//*2. HTML'de köprü nasıl oluşturulur?
//*(HTML'de bir köprü (link) oluşturmak için <a> (anchor) etiketini kullanırız. Bu etiketin href özelliği ile hedef sayfanın URL'sini belirtiriz.)

//!3. How do you add a background color for all h1 elements?
//!3. Tüm h1 öğeleri için arka plan rengini nasıl eklersiniz?
//?(Tüm <h1> öğeleri için arka plan rengi eklemek için CSS kullanabiliriz. Bunun için özel bir sınıf veya id kullanmak yerine doğrudan <h1> öğelerini hedef alabiliriz.)
A. all.h1 {background-color:#FFFFFF}
B. h1.all {background-color:#FFFFFF} 
C. h1 {background-color:#FFFFFF}
D. h1** {background-color:#FFFFFF}

//!4. What is the use of a span tag? Give one example.
//!4-Yayılma etiketinin kullanımı nedir? Bir örnek verin.
//*(Yayılma (spread) etiketi, HTML ve CSS kullanılarak oluşturulan içeriği bir düzlem üzerinde yatay veya dikey olarak genişletmeye yarayan bir özelliktir. Bu özellik, öğelerin kenarlarının bulanıklaşmasını ve görsel bir etki yaratmasını sağlar.Yayılma etiketi, CSS'in box-shadow özelliğiyle kullanılır. box-shadow özelliği, gölgelendirme efektleri uygulamak için kullanılırken, yayılma etiketiyle birleştirildiğinde genişletme efekti elde edilebilir. Özelliğin yayılma etiketi bölümü, "spread" değeriyle belirtilir.)

//!5. How do you display a border like this:
//!5. Böyle bir kenarlığı nasıl görüntülersiniz:
The top border = 10 pixels
The bottom border = 5 pixels
The left border = 20 pixels
The right border = 1pixel?
A. border-width:10px 20px 5px 1px
B. border-width:10px 1px 5px 20px
C. border-width:5px 20px 10px 1px
D. border-width:10px 5px 20px 1px

//!6.What is the use of an iframe tag?
//!6. iframe etiketinin kullanımı nedir?
//*(<iframe> etiketi, başka bir HTML belgesini veya dışarıdan bir kaynağı (web sayfası, video, harita vb.) mevcut HTML belgesi içine yerleştirmek için kullanılır. <iframe> etiketi, içerdiği kaynağı bir çerçeve (frame) olarak gösterir.)

//!7. What are the new input types for form validation in HTML5?
//!7. HTML5'te form doğrulama için yeni giriş türleri nelerdir?
//*(HTML5, form doğrulama işlemlerini kolaylaştırmak için bazı yeni giriş türleri (input types) tanıtmıştır. Bu yeni giriş türleri, tarayıcıların otomatik olarak bazı doğrulama kontrollerini gerçekleştirmesini sağlar ve kullanıcılara daha iyi bir deneyim sunar. İşte HTML5'te kullanılan bazı form giriş türleri:email,url,number,date,range.color)

8. If I do not put !DOCTYPE html will HTML 5 work?
8. !DOCTYPE html koymazsam HTML 5 çalışır mı?
//*(evet, HTML5 çalışır, ancak <!DOCTYPE html> bildirimi kullanımı önemlidir ve standart bir HTML5 belgesi oluşturmak için gereklidir. <!DOCTYPE html> bildirimi, HTML dokümanının tarayıcıya hangi HTML sürümünü kullanacağını bildirmek için kullanılır.<!DOCTYPE html> bildirimi, tarayıcıya HTML5'in kullanılacağını belirtir. Bu bildirim olmadan tarayıcı, belgeyi "uyumluluk modunda" işleyebilir ve bazı modern HTML5 özelliklerini tam olarak desteklemeyebilir. Ayrıca, HTML5 doğrulama araçları ve tarayıcılar)

//!Interview Questions
//!Mülakat Soruları

1. What is CSS?
1. CSS nedir?
//*( CSS, web sayfalarının görünümünü ve düzenini kontrol etmek için kullanılan bir stil dilidir. HTML veya XHTML gibi yapılandırılmış belge dilleriyle birlikte kullanılarak web sayfalarının tasarımını ve sunumunu yönlendirir.CSS, HTML belgelerine stil ve düzen uygulamak için bir dizi kurallar ve özellikler içerir. Bir CSS dosyasında, belirli HTML öğeleri (etiketler) veya sınıflar için stil kuralları tanımlanır. Bu stil kuralları, metin biçimlendirme, renk, boyut, kenarlık, arka plan, konumlandırma gibi birçok görsel özellikleri belirlemek için kullanılabilir.)


2. What is Selector?
2.Seçici nedir?
//*(CSS'de "seçici" (selector), belirli HTML öğelerini veya belirli özelliklere sahip öğeleri hedeflemek için kullanılan bir yapıdır. Seçiciler, CSS kurallarını belirli bir öğe veya öğe grubuna uygulamak için kullanılır.Bir seçici, CSS kurallarını uygulanacak hedef öğeleri belirlemek için kullanılan bir desendir. Seçiciler, HTML öğelerine, sınıflara, kimliklere veya diğer özelliklere dayalı olarak belirlenebilir.)

//!3. What is the CSS Box model and what are its elements?
//!3. CSS Box modeli nedir ve öğeleri nelerdir?
//*(CSS Box Model, HTML öğelerinin içeriğini, kenar boşluklarını, kenar çizgilerini ve dolgu (padding) alanlarını kapsayan bir kavramdır. Bir HTML öğesi, içerik bölgesi, dolgu (padding), kenarlık (border) ve dış kenar boşluğu (margin) olmak üzere dört ana bileşenden oluşur.)

//!4. Describe floats and how they work
//!4. Şamandıraları ve nasıl çalıştıklarını açıklayın?
//*(Şamandıralar (floats), CSS'te bir öğenin normal akıştan çıkarılmasını ve sayfanın diğer içeriği etkilemeden sol veya sağa doğru hareket etmesini sağlayan bir özelliktir. Şamandıralar genellikle öğelerin yan yana sıralanması, metin ve görüntülerin sarılması veya bir sayfa düzeninin oluşturulması gibi senaryolarda kullanılır.Bir öğe şamandıralı hale getirildiğinde, bu öğe diğer öğelerin yanına yerleşir ve içerdiği içeriğe göre otomatik olarak genişler veya daralır. Şamandıralar, içeriklerine göre yükseklikleri değişebilen öğelerin yan yana hizalanmasına izin verir.Özetlemek gerekirse, şamandıralar, öğelerin sayfa düzenini ve içeriğin yerleşimini kontrol etmek için kullanılan bir CSS özelliğidir. Şamandıralar, içeriğe göre otomatik olarak geniş)

//!5. What is Inline style?
//!5. Satır İçi stil nedir?
//*(Satır içi stil (inline style), HTML etiketleri içinde doğrudan stil özelliklerini belirtmek için kullanılan bir CSS yöntemidir. Bir HTML öğesi üzerinde belirli bir stilin uygulanması gerektiğinde, stil kuralları doğrudan öğe etiketi içinde style özelliği olarak tanımlanırSatır içi stil, hızlı ve basit bir şekilde belirli bir öğe için özel stil kuralları belirlemek için kullanılabilir. Ancak, birden çok öğe için aynı stil kurallarını uygulamak veya geniş çaplı stil değişiklikleri yapmak gerektiğinde satır içi stil kullanımı zor ve karmaşık hale gelebilir. Bu nedenle, genellikle daha karmaşık stillemeler için harici CSS dosyaları ve dahili stil etiketleri kullanmak daha tercih edilen yöntemlerdir.)