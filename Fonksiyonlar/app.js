//! function 

//*İşlev Bildirimi:Bir fonksiyonun nasıl bildirileceğini ve bir fonksiyonun nasıl çağrılacağını görelim.

function functionName(){
    //*cod buraya yazılır
}
//*Parametresiz işlev ve geri dönüş
//*Fonksiyon bir parametre olmadan bildirilebilir.

function square(){
    let num=2;
    let sg=num*num
    console.log(sg);
}
square();

//? parametresiz fonksiyon

function addTwoNumbers(){
    let numOne=10;
    let numTwo=20;
    let sum=numOne+numTwo;
    console.log(sum);

}
addTwoNumbers();
//*bir işlevin çalıştırılabilmesi için adıyla çağrılması gerekir


function printFullName(){
    let firstName="burhan";
    let lastName="alaca"
    let space=" ";
    let fullName=firstName+space+lastName;
    console.log(fullName);
}
printFullName();


//?Fonksiyon dönen değer
//*İşlev ayrıca değerler de döndürebilir, eğer bir işlev değer döndürmezse, işlevin değeri tanımsızdır. Yukarıdaki fonksiyonları return ile yazalım. Bundan sonra, bir işleve yazdırmak yerine değer döndürüyoruz.

function printFullName(){
    let firstName="burhan"
    let lastName="alaca"
    let space=" "
    let fullName=firstName+space+lastName
}
console.log(printFullName);

function toplama(a,b){
    return (a+b);
}
console.log(toplama);

//? kendisine gönderilen kelimeyi belirtilen kez ekranda yazan fonksiyonu yapınız?

function kelimeyiYazdır(kelime,kez){
    for(let i=0;i<kez;i++){
        console.log(kez);
    }
}
kelimeyiYazdır("burhan", 3);