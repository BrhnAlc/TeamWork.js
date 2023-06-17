
let url="https://chat.openai.com/";
let adı="chatGPT";

//! 1- URL kaç karekterlidir?
let sonuc;

sonuc=url.length

console.log(sonuc);



//! 2- adı kaç kelimeden olüşmaktadır?

sonuc=adı.split(" ").length;

//! 3- url http ile mi   başlıyor?


sonuc=url.startsWith("https");


//! 4- adı içerisinde adam kelimesi var mı ?

if(adı.indexOf("adam")){
    console.log("evet var");
}


console.log(sonuc);



















































