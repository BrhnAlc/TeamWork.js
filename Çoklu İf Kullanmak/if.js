//* Çoklu if kullanımı

// !adını ve tckn 
//  !ad : boş geçilmez
// !TCKN: 11 karekterden oluşsun


function kontrolEt(isim , tckn)

if(İsim ==""){
    console.log("isim alanı boş bırakmayınız");
    return;
}

if(tckn.length!=11){
    console.log("11  karakter olarak giriniz"),
    return;
}
console.log("isim ve tckn problemsiz girildi")