//*JavaScript'te diziler, birden çok değeri tek bir değişken altında saklamak için kullanılan veri yapılarıdır. Diziler, virgülle ayrılmış değerlerin köşeli parantezler içinde tanımlandığı bir liste şeklinde temsil edilir. İşte bir örnek:

let renkler = ["Kırmızı", "Mavi", "Yeşil"];

//*Dizilerin elemanları, 0'dan başlayarak sıfırdan başlayan bir indeks numarasıyla erişilebilir. İndeks numaraları köşeli parantez içinde belirtilir. İşte örnek bir kullanım:

console.log(renkler[0]);  // Çıktı: Kırmızı
console.log(renkler[1]);  // Çıktı: Mavi
console.log(renkler[2]);  // Çıktı: Yeşil

//*Dizi elemanlarını değiştirmek veya yeni elemanlar eklemek için indeks numarasını kullanarak erişebilirsiniz. İşte bir örnek:

renkler[1] = "Sarı";  // Mavi elemanını Sarı ile değiştirir
renkler[3] = "Turuncu";  // Yeni bir eleman ekler

console.log(renkler);  // Çıktı: ["Kırmızı", "Sarı", "Yeşil", "Turuncu"

//*Dizi elemanlarını eklemek veya silmek için çeşitli dizi yöntemleri ve özellikleri vardır. Örneğin, push() yöntemiyle yeni bir eleman dizinin sonuna eklenir veya pop() yöntemiyle son eleman diziden çıkarılabilir. Bunlar sadece bazı temel dizi işlemleridir.



const name = [];
const x = name.length;
console.log (x);

//*Verdiğiniz kodun çıktısı 0 olacaktır. Çünkü name adlı dizi boş olduğu için eleman sayısı da 0 olarak hesaplanır. name.length ifadesi, bir dizinin içindeki eleman sayısını döndürür. Boş bir dizi olduğu için eleman sayısı 0 olur ve bu değer x değişkenine atanır.