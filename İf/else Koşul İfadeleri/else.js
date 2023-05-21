// let username = "burhan alaca"
// let password=  "1234"

// if(username=="burhan alaca"){
//     if(password=="1234"){
//         console.log("uygulamaya giriş yapıldı")
//     }else{
//         console.log("parola yanlış")
//     }
// }else
// {
//     console.log("uygulamaya giriş başarısız")
// // }

// //*yas>=18;
// //* mezuniyet ="lise"  yada mezuniyet=="üniversite"


// let mezuniyet = "üniversite"
// let yas=20;
// if((yas>=18) || (mezuniyet=="lise")){
//     console.log("ehliyet alabilir")
// }else {
//     console.log("ehliyet alamaz")
// }
// //*and operatörü &&
// //* true, true=>true
// //* true,false=>false
   
//*1 -Bir sayının 10-50 arasında olup olmadıpğını kontrol ediniz.
// let sayı=20;
// if(sayı>10 && sayı<50){
//     console.log("sayınız 10-50 arasındadır.")
// }else{
//     console.log("sayınız 10-50 arasında değildir.")
// }

//*2-Bir sayının pozitif tek sayı olup olmadığını kontrol ediniz.

// let sayı=30;
// if(sayı>0 && sayı%2==1){
//     console.log("sayınız pozitif tek sayıdır")
// }else{
//     console.log("sayınız pozitif tek sayı değildir")
// }
//*3-x,y,z sayılarının büyüklük karşılaştırmasını yapınız.(else if araştırınız)

// let x=60;
// let y=60;
// let z=60;
// if(x>y || x>z){
//     console.log(" en büyük sayı x dir.")
// }else{

// } if(y>x && y>z){
//     console.log("en küçük sayı y dir")
// }else if(y<z && z<x){
//     console.log("en küçük sayı y dir")
// }else{
//     console.log("syılar eşit")
// }
//*4- 2 vize (40%) ve 1 final(60%) notuna göre hesaplanan ortalama için;
//* a- Eğer ortalama 50 ve üstündeyse geçti değilse kaldı yaz.

// let vize1 =50;
// let vize2 =80;
// let final =70;
// let ortalama=((vize1*0.4+vize2*0.4)/2+(final*0.6))
// if(ortalama>=50 ){
//     console.log("geçtiniz")
// }else{
//     console.log("kaldınız")
// }

//*b-Geçmek için ortalama 50 bile olsa final notu en az 50 olmalıdır.
//  let vize1=70;
//  let vize2=60;
//  let final=40;
//  let ortalama=((vize1*0.4+vize2*0.4)/2+(final*0.6))
//      if(ortalama>= 50 && final>=50 ){
//         console.log("geçtiniz")
//      }else {
//         console.log("kaldınız")
//      }

    //*Finalde 70 alındığında  ortalama 50'inin altında olsa bile dersten geçilsin


    let vize1=20;
    let    vize2=10;
   let   final=70;
    let ortalama=((vize1*0.4+vize2*0.4)/2+(final*0.6))
    if(ortalama<50 && final>=70){
        console.log("geçtiniz" )
    }else {
        console.log("kaldınız")
    }

