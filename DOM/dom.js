
let sonuc;
sonuc=document.getElementById("title");
sonuc=document.getElementById("title").id;
sonuc=document.getElementById("title").classList;
sonuc=document.getElementById("title").style.fontSize="30px";
sonuc=document.getElementById("title").style.color="red";


sonuc=document.getElementById("title").innerText="Burhan alaca";
sonuc=document.getElementById("title").innerHTML="<p>alaca</p>";

sonuc=document.querySelector(`li`).style.color="blue";
sonuc=document.querySelector(`li:first-child`);
sonuc=document.querySelector(`li:nth-child(2)`);

sonuc=document.getElementsByClassName("task")[0];

console.log(sonuc);
