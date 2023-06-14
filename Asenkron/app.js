//!Senkron VE Asenkron 
*==================================================
//*        1- Senkron-Asenkron Programlama
//*==================================================

//! Javascript, single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basriyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Asyn Programlama
//? kullanilmasi cok onemlidir.

//* "Senkron": terimi, programın işlemleri sırayla ve eşzamanlı bir şekilde gerçekleştirdiği bir programlama yaklaşımını ifade eder. Senkron programlama, bir işlem tamamlanmadan diğer işlemlere geçmez ve işlemler birbirini bekleyebilir.
//* ------------------------------------------------

//*"Asenkron" terimi, programın eşzamanlı olmayan veya zaman uyumsuz bir şekilde çalışmasını ifade eder. Asenkron programlama, belirli bir işlem tamamlanmadan diğer işlemlere geçme yeteneği sağlar. Bu, uzun süren işlemlerin veya beklemelerin diğer işlemleri etkilemeden gerçekleştirilmesini sağlar.

//*JavaScript, asenkron programlamayı destekleyen bir dildir. İşte JavaScript'te asenkron programlamanın basit örneklerinden üç tanesi: