//!Senkron VE Asenkron 

//*        1- Senkron-Asenkron Programlama
//*==================================================

//! Javascript, single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama teknigidir. Bu alt gorev tamamlandiginda (basriyla veya basarisizlikla) asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir. Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri, Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Asyn Programlama kullanilmasi cok onemlidir.

//* "Senkron":*********** terimi, programın işlemleri sırayla ve eşzamanlı bir şekilde gerçekleştirdiği bir programlama yaklaşımını ifade eder. Senkron programlama, bir işlem tamamlanmadan diğer işlemlere geçmez ve işlemler birbirini bekleyebilir.
//* ------------------------------------------------

//*"Asenkron"*********** terimi, programın eşzamanlı olmayan veya zaman uyumsuz bir şekilde çalışmasını ifade eder. Asenkron programlama, belirli bir işlem tamamlanmadan diğer işlemlere geçme yeteneği sağlar. Bu, uzun süren işlemlerin veya beklemelerin diğer işlemleri etkilemeden gerçekleştirilmesini sağlar.

//*JavaScript, asenkron programlamayı destekleyen bir dildir. İşte JavaScript'te asenkron programlamanın basit örneklerinden üç tanesi:

//* Javascript senkron çalışan bir dildir
 
//! javascptin asenkron çalıştığı yerler...accordion
//* 1-timing(kelimesi, bir olayın veya eylemin gerçekleşme zamanını ifade eder.)
//* 2-event(olay)
//* 3-http isteklerinde


//*sync(setTimeout)

console.log("1");
console.log("2");
console.log("burhan");



 
console.log(1);

setTimeout(function(){
    console.log(2);
},3000);

console.log(3);

const button=document.querySelector(`.btn`).addEventListener(`click`,function(){
    console.log("burhan alaca");
});


setTimeout(()=>{
    console.log("| am fine");
},1000)



//*async(setInterval,clearInterval)


 let count =0;
const sec1= setInterval(()=>{
     console.log(++count);
     if(count>9){
        clearInterval(sec1)
     }
 },1000)


function getValue(url){
    fetch(url)
    .then((res)=>{
        return res.json();

    })
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))
}


getValue("")






function getData(url){
    fetch(url)
    .then((res)=>{
        return res.json();

    })
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))
}
getData("")


function getData(url){
    fetch(url)
    .then((response)=>{
        return response.json()
    })
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))
}

getData("json.json")