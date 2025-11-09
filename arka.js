 renkler = ["red", "blue", "green", "yellow", "pink", "purple", "orange"];
 btn = document.getElementById("renkBtn");
 sayacDiv = document.getElementById("sayac");
let sayac = 0;

btn.addEventListener("click", function() {
    // Rastgele renk seç
    rastgeleRenk = renkler[Math.floor(Math.random() * renkler.length)];
    document.body.style.backgroundColor = rastgeleRenk;

   
    sayac++;
    sayacDiv.innerHTML = "Tıklanma sayısı: " + sayac;
});
