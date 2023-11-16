window.onload = function() {
}

function stepBack() {
    //parlamentsPlatz.openPopup();
    map.setView([50.12, 8.71], 13);
}

class Pointer {
    constructor(name, koordinaten, text) {
        this.name = name //Name des Ortes
        this.koordinaten = koordinaten //Koordinaten
        this.text = text //Inhalt
    }
    create() {
        this.name =  L.marker([this.koordinaten[0] , this.koordinaten[1]]).addTo(map)
        this.name.bindPopup(this.text)
    }
}

class Circle {
    constructor(name, koordinaten, text, radius, farbe) {
        this.name = name //Name des Ortes
        this.koordinaten = koordinaten //Koordinaten
        this.text = text //Inhalt
        this.radius = radius //Größe des Radius in Meter I guess
        this.farbe = farbe //Farbe in Hexcode
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










//var parlamentsPlatz =  L.marker([50.12, 8.71]).addTo(map)
//parlamentsPlatz.bindPopup(
//"Hallo, ich bin ein Popup mit <a href='https://google.com'>Link</a>"
//).openPopup()








parlament = new Pointer("parlament", [50.12, 8.71], "Hallo, ich bin ein Popup mit <a href='https://google.com'>Link</a>").create()








//.openPopup öffnet das PopUp sofort





/* Zusatz Code

var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map);




*/