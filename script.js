$(document).ready(function () {
    const korokDiv = $('.korok');
    let N; // N változó deklarálása
    let lilaLampakSzama; // Lila lámpák számának tárolása

    function korokLetrehozasa(n) {
        korokDiv.empty();
        lilaLampakSzama = 0;

        for (let i = 0; i < n; i++) {
            for (let k = 0; k < n; k++) {
                const korDiv = $('<div></div>').addClass('kor');
                const randomSzam = Math.floor(Math.random() * 2);
                if (randomSzam === 0) {
                    korDiv.css('background-color', '#A8D5BA');
                } else {
                    korDiv.css('background-color', '#D7A9E3');
                    lilaLampakSzama++;
                }
                korokDiv.append(korDiv);
            }
        }
        korokDiv.on('click', '.kor', szomszedosOldalakValtoztatasa);

        aktualisSzamlalo(); //Frissítjük a számlálót
    }

    function aktualisSzamlalo() {
        $('.szamlalo').text("A lila lámpák száma: " + lilaLampakSzama);
    }

    function szomszedosOldalakValtoztatasa(event) {
        const aktuálisElem = $(event.target);
        const id = Number(aktuálisElem.attr('id'));
        const aktuálisSzín = aktuálisElem.css('background-color');
        let újSzín;

        //Változtatjuk a színt
        if (aktuálisSzín === 'rgb(215, 169, 227)' || aktuálisSzín === 'rgba(215, 169, 227, 1)') {
            újSzín = '#A8D5BA'; //Ha lila, akkor zöldre vált
            lilaLampakSzama--; //Csökkentjük a lila lámpák számát
        } else {
            újSzín = '#D7A9E3'; //Ellenkező esetben lilára vált
            lilaLampakSzama++; //Növeljük a lila lámpák számát
        }

        // Színek beállítása
        aktuálisElem.css('background-color', újSzín); //Az aktuális elem színe
        $('#' + (id - 1)).css('background-color', újSzín); //Baloldali elem színe
        $('#' + (id + 1)).css('background-color', újSzín); //Jobboldali elem színe
        $('#' + (id - N)).css('background-color', újSzín); //Felső elem színe
        $('#' + (id + N)).css('background-color', újSzín); //Alsó elem színe

        aktualisSzamlalo(); //Frissítjük a számlálót
    }

    $('.kezdogomb').click(function () {
        const nString = $('.N').val();

        if (!(nString) || Number(nString) < 3 || Number(nString) > 6) {
            return;
        }
        N = Number(nString); //Az N változó értékadása
        korokLetrehozasa(N);
        korokDiv.css('grid-template-columns', 'repeat(' + N + ', auto)');
    });
});
