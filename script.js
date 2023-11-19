window.onload = function() {
}

function stepBack() {
    //parlamentsPlatz.openPopup();
    map.setView([50.12, 8.71], 13);

}
function blockClick(x) {



    if (x=="parlamentsplatz") {
        map.setView([parlament.wobinich(0), parlament.wobinich(1)], 13);
    }

}


class Pointer {
    constructor(name, koordinaten, text) {
        this.name = name //Name des Ortes
        this.koordinaten = koordinaten //Koordinaten
        this.text = text //Inhalt

        this.create()
    }
    create() {
        this.name =  L.marker([this.koordinaten[0] , this.koordinaten[1]]).addTo(map)
        this.name.bindPopup(this.text)
    }
    wobinich(x) {
        return this.koordinaten[x]
    }
}

class Circle {
    constructor(name, koordinaten, text, radius, farbe) {
        this.name = name //Name des Ortes
        this.koordinaten = koordinaten //Koordinaten
        this.text = text //Inhalt
        this.radius = radius //Größe des Radius in Meter I guess
        this.farbe = farbe //Farbe in Hexcode

        this.create()
    }
    create() {
        this.name = L.circle([this.koordinaten[0], this.koordinaten[1]], {
            color: this.farbe,
            fillColor: this.farbe,
            fillOpacity: 0.5,
            radius: this.radius
        }).addTo(map);
        this.name.bindPopup(this.text)
    }
}

var map = L.map('map').setView([50.12, 8.71], 13); //Koordinaten

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    minZoom: 12,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



//------------------------------------------------------------------------------------------------\\











// name = new Circle("name", [50.24, -3.5], "text", radius, "farbe in Hexcode").create()

// name = new Pointer("name", [50.12, 8.71], "text").create()




kreis = new Circle("kreis", [50.12, 8.71], "Ich bin ein kreis", 600, "blue")


//parlament = new Pointer("parlament", [50.12, 8.71], "Hallo, ich bin ein Popup mit <a href='https://google.com'>Link</a>").create()
Fortnite = new Pointer("Fortnite",[50.122084372545245, 8.702001261031475], "Best gamer (nach Min Zin) Für Fortnite" )

parlament = new Pointer("parlament", [50.12, 8.71], "Hallo, ich bin ein Popup mit <a href='https://google.com'>Link</a>")







/* Zusatz Code

var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map);




*/