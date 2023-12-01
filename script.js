window.onload = function() {
}
//document.getElementsByTagName('h2')[3].scrollIntoView();
function stepBack() {
    //parlamentsPlatz.openPopup();
    map.setView([50.12, 8.71], 13);

}
function blockClick(x) {



    /*if (x=="parlament") {
        //map.setView([parlament.wobinich(0), parlament.wobinich(1)], 13);
        //parlament.poppen()
        parlament.poppen()
    } else if (x=="juchu") {
        juchu.poppen()
    }*/

}


class Pointer {
    constructor(name, koordinaten, text) {
        this.name = name //Name des Ortes
        this.jumpName = name
        this.koordinaten = koordinaten //Koordinaten
        this.text = text //Inhalt

        this.create(this.jumpName, this.name)
    }
    create(jumpName, name) {
        this.name = new L.marker([this.koordinaten[0] , this.koordinaten[1]]).addTo(map).on('click', function(e) {
            tim(jumpName)
            document.getElementById(name).getElementsByClassName("inhalt")[0].classList.toggle("auf");
            //document.getElementById(name).getElementsByClassName("inhalt")[0].style.maxHeight = "none"
        })
        this.name.bindPopup(this.text)
        document.getElementById(name).getElementsByClassName("inhalt")[0].onclick = function() {
            document.getElementById(name).getElementsByClassName("inhalt")[0].classList.toggle("klopfklopf");
            this.poppen()
            //document.getElementById(name).getElementsByClassName("inhalt")[0].style.maxHeight = "none"
        }


    }
    poppen() {
        this.name.openPopup()
        map.setView([this.koordinaten[0], this.koordinaten[1]], 13)
    }
    loesen() {
        map.removeLayer(this.name) //Frag nicht wofür
    }
}

class Circle {
    constructor(name, koordinaten, text, radius, farbe) {
        this.name = name //Name des Ortes
        this.jumpName = name
        this.koordinaten = koordinaten //Koordinaten
        this.text = text //Inhalt
        this.radius = radius //Größe des Radius in Meter I guess
        this.farbe = farbe //Farbe in Hexcode

        this.create(this.jumpname)
    }
    create(jumpname) {
        this.name = L.circle([this.koordinaten[0], this.koordinaten[1]], {
            color: this.farbe,
            fillColor: this.farbe,
            fillOpacity: 0.5,
            radius: this.radius
        }).addTo(map).on('click', function(e) {
            tim(jumpName)

        })
        this.name.bindPopup(this.text)
    }
    poppen() {
        this.name.openPopup()
        map.setView([this.koordinaten[0], this.koordinaten[1]], 13)
    }
    loesen() {
        map.removeLayer(this.name) //Frag nicht wofür
    }
}

function tim(x) {
    window.location.href = "#"+x;
}

var map = L.map('map').setView([50.12, 8.71], 13); //Koordinaten

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    minZoom: 13,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



//------------------------------------------------------------------------------------------------\\


//L.marker([50.11966074609381, 8.714750485117285]).addTo(map).on('click', function(e) {});







// name = new Circle("name", [50.24, -3.5], "text", radius, "farbe in Hexcode").create()

// name = new Pointer("name", [50.12, 8.71], "text").create()




//kreis = new Circle("kreis", [50.12, 8.71], "Ich bin ein kreis", 600, "blue")
//Fortnite = new Pointer("Fortnite", [50.122084372545245, 8.702001261031475], "Best gamer (nach Min Zin) Für Fortnite" )
//parlament = new Pointer("parlament", [50.12, 8.71], "Hallo, ich bin ein Popup mit <a href='https://google.com'>Link</a>").create()

parlament = new Pointer("parlament", [50.12, 8.71], "Hallo, ich bin ein Popup mit <a href='https://google.com'>Link</a>")

let juchuText = "<h1>Juchostraße</h1> Friedrich Siegmund Jucho (1805-1884) war der Sohn des Frankfurter Notars Martin Jucho, dessen Mutter aus Wetzlar stammte. Nach dem Besuch des Städtischen Gymnasiums in Frankfurt studierte er ab 1823 Rechtswissenschaften. Als führender Vertreter der liberalen Bewegung in Frankfurt nahm er an illegalen Vereinssitzungen teil, was ihm eine Geldstrafe einbrachte. Unter dem Vorwurf, verbotene Schriften verteilt und Teilnehmern des Frankfurter Wachensturms geholfen zu haben, wurde er 1834 nach einer Hausdurchsuchung für vier Jahre inhaftiert. Bei den Wahlen 1848 wurde Jucho mit 6.650 Stimmen als Abgeordneter der Freien Stadt Frankfurt in die Deutsche Nationalversammlung gewählt. Dort schloss er sich der Fraktion Westendhall an, später dem Centralmärzverein. Nach dem Ende des Paulskirchenparlaments geriet er in Konflikt mit dem Deutschen Bund wegen des Archivs der Nationalversammlung, das er mit der Verfassungsurkunde verwahrt hatte. Die städtischen Behörden entzogen ihm das Archiv 1852, jedoch gelang es ihm, die Verfassungsurkunde sicher nach England zu bringen. Trotz eines Gerichtsverfahrens wurde er freigesprochen, und 1870 übergab er das Original der Verfassung an den Präsidenten des Reichstags des Norddeutschen Bundes."
juchu = new Pointer("juchu", [50.11966074609381, 8.714750485117285], juchuText)





/* Zusatz Code

var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map);

*/


const music = document.getElementById("music");
const platte = document.getElementById("platte");

var e = true;
function play() {
    if (e) {
        music.play();
        platte.style.animation = "dreh 1s infinite linear";
        e = false;
    } else {
        music.pause();
        e = true;
        platte.style.animation = "none"
    }
}