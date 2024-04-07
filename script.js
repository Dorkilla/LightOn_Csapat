$(document).ready(function () {
    $('.kezdogomb').click(function () {  //lekérjük az N elem értékét
        var nString = $('.N').val();

        //ellenőrizzük, hogy a megadott érték érvényes szám-e (3 és 6 között)
        if (!(nString) || Number(nString) < 3 || Number(nString) > 6) {
            return;
        }

        // A stringből számra konvertáljuk
        var n = Number(nString);

        //változók létrehozása, beszúrása
        var korokDiv = $('.korok');
        var szinekDiv = $('.szinek');
        var szamlaloDiv = $('.szamlalo');

        var lekapcsoltLampakSzama = 0;

        //előző körök törlése
        korokDiv.empty();
        szinekDiv.empty();

        //körök létrehozása
        for (var i = 0; i < n; i++) {
            for (var k = 0; k < n; k++) {
                var korDiv = $('<div></div>').addClass('kor'); //létrehozzuk a köröket
                var randomSzam = Math.floor(Math.random() * 2); //véletlenszerű szám 0-1 között
                if (randomSzam === 0) {
                    korDiv.css('background-color', '#A8D5BAFF'); //ha 0, zöld szín
                } else {
                    korDiv.css('background-color', '#D7A9E3FF'); //ha 1, lila szín
                    lekapcsoltLampakSzama++; //lila kör esetén növeljük a lekapcsolt lámpák számát
                }
                korokDiv.append(korDiv); //hozzáadjuk a köröket
            }
        }

        //színek hozzáadása
        for (var sz = 0; sz < n * n; sz++) {
            var szinDiv = $('<div></div>').addClass('szin'); //létrehhozuk a színeket
            szinekDiv.append(szinDiv); //hozzáadjuk a színeket
        }

        //méret változtatása, felhasználótól függően
        korokDiv.css('grid-template-columns', 'repeat(' + n + ', auto)');

        //lekapcsolt lámpák megjelenítése
        szamlaloDiv.text("A lekapcsolt lámpák száma: " + lekapcsoltLampakSzama); 
    });
});
