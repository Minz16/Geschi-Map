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
        this.klappe = false //False, wenn noch geschlossen

        this.create(this.jumpName, this.name)
    }
    create(jumpName, name) {
        this.name = new L.marker([this.koordinaten[0] , this.koordinaten[1]]).addTo(map).on('click', function(e) {
            if (!(this.klappe)) {
                document.getElementById(name).getElementsByClassName("inhalt")[0].classList.toggle("klopfklopf");
                this.klappe = true
            }
            tim(jumpName)
            document.getElementById(name).getElementsByClassName("inhalt")[0].classList.toggle("klopfklopf");
            //document.getElementById(name).getElementsByClassName("inhalt")[0].style.maxHeight = "none"
        })
        this.name.bindPopup(this.text)
        document.getElementById(name).getElementsByClassName("inhalt")[0].onclick = function() {
            document.getElementById(name).getElementsByClassName("inhalt")[0].classList.toggle("klopfklopf");
            this.klappe = !this.klappe
            //this.poppen() //Funktioniert nicht
            //document.getElementById(name).getElementsByClassName("inhalt")[0].style.maxHeight = "none"
        }


    }
    poppen() {
        this.name.openPopup()
        map.setView([this.koordinaten[0], this.koordinaten[1]], 15)
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

var map = L.map('map').setView([50.12, 8.71], 15); //Koordinaten

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    minZoom: 14,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



//------------------------------------------------------------------------------------------------\\


//L.marker([50.11966074609381, 8.714750485117285]).addTo(map).on('click', function(e) {});







// name = new Circle("name", [50.24, -3.5], "text", radius, "farbe in Hexcode").create()

// name = new Pointer("name", [50.12, 8.71], "text").create()




//kreis = new Circle("kreis", [50.12, 8.71], "Ich bin ein kreis", 600, "blue")
//Fortnite = new Pointer("Fortnite", [50.122084372545245, 8.702001261031475], "Best gamer (nach Min Zin) Für Fortnite" )
//parlament = new Pointer("parlament", [50.12, 8.71], "Hallo, ich bin ein Popup mit <a href='https://google.com'>Link</a>").create()

let parlament = new Pointer("parlament", [50.12006, 8.71357], "Hallo, ich bin ein Popup mit <a href='https://google.com'>Link</a>")

let juchuText = "<h1>Juchostraße</h1>Friedrich Siegmund Jucho (1805-1884) war der Sohn des Frankfurter Notars Martin Jucho, dessen Mutter aus Wetzlar stammte. Nach dem Besuch des Städtischen Gymnasiums in Frankfurt studierte er ab 1823 Rechtswissenschaften. Als führender Vertreter der liberalen Bewegung in Frankfurt nahm er an illegalen Vereinssitzungen teil, was ihm eine Geldstrafe einbrachte. Unter dem Vorwurf, verbotene Schriften verteilt und Teilnehmern des Frankfurter Wachensturms geholfen zu haben, wurde er 1834 nach einer Hausdurchsuchung für vier Jahre inhaftiert. Bei den Wahlen 1848 wurde Jucho mit 6.650 Stimmen als Abgeordneter der Freien Stadt Frankfurt in die Deutsche Nationalversammlung gewählt. Dort schloss er sich der Fraktion Westendhall an, später dem Centralmärzverein. Nach dem Ende des Paulskirchenparlaments geriet er in Konflikt mit dem Deutschen Bund wegen des Archivs der Nationalversammlung, das er mit der Verfassungsurkunde verwahrt hatte. Die städtischen Behörden entzogen ihm das Archiv 1852, jedoch gelang es ihm, die Verfassungsurkunde sicher nach England zu bringen. Trotz eines Gerichtsverfahrens wurde er freigesprochen, und 1870 übergab er das Original der Verfassung an den Präsidenten des Reichstags des Norddeutschen Bundes."
juchu = new Pointer("juchu", [50.11966074609381, 8.714750485117285], juchuText)

let beselerText = "<h1>Beselerstraße</h1> Carl Georg Christoph Beseler (1809-1888), Sohn des königlich dänischen Kammerrates Cay Hartwig Beseler und seiner Ehefrau Sophie Magdalena, studierte Rechtswissenschaften in Kiel und München, arbeitete in Göttingen, lehrte in Heidelberg und pflegte enge Freundschaften mit Historikern wie Georg Gottfried Gervinus und Karl Hegel. Als Abgeordneter der Frankfurter Nationalversammlung von Mai 1848 bis zum 20. Mai 1849 und später als Mitglied des Reichstags von 1874 bis 1881 trug Beseler maßgeblich zur Schaffung des Preußischen Strafgesetzbuches von 1851 sowie zur Liberalisierung des Zivil- und Strafprozesses bei."
beseler = new Pointer("beseler", [50.121544, 8.715660], beselerText)

let gagernText = "<h1>Gagernstraße</h1> Heinrich von Gagern (1799-1880), geboren als Sohn des Diplomaten und Politikers Hans Christoph Ernst Freiherr von Gagern und Charlotte von Gaugreben, war eine herausragende Persönlichkeit des 19. Jahrhunderts. Seine vielseitige Karriere führte ihn von der Ausbildung auf der Kadettenanstalt in München über seine Teilnahme als Unterleutnant am 1. Nassauisch-Weilburgischen Infanterieregiment in der Schlacht bei Waterloo bis hin zu einem Studium der Rechtswissenschaften in verschiedenen Städten Europas. Als Mitbegründer der Allgemeinen Deutschen Burschenschaft und engagierter Politiker spielte er eine bedeutende Rolle während der Revolution von 1848-49. Als Präsident der Frankfurter Nationalversammlung setzte er sich für ein geeintes Deutschland unter preußischer Führung ein, wobei er eine Einbeziehung Österreichs befürwortete. Sein Wirken erstreckte sich auch über die Zeit nach der Revolution, wo er am deutschen Reformverein teilnahm und als Abgeordneter in der zweiten Kammer des hessischen Landtags aktiv war, bevor er 1880 in Darmstadt verstarb."
gagern = new Pointer("gagern", [50.12278218676148, 8.713879547427013], gagernText)

let jacobyText = "<h1>Jacobystraße</h1> Johann Jacoby (1805-1877) war ein Arzt, Schriftsteller und politischer Aktivist im 19. Jahrhundert. Seine Biografie umfasst eine Anklage wegen Hochverrats (1841), Festungshaft (1842-1845), politische Ämter wie Mitgliedschaft im Preußischen Landtag (1849, 1863-1870), sowie Gefängnisstrafen für oppositionelle Standpunkte gegenüber Bismarcks Politik (1864-1865) und öffentlicher Ablehnung der Annexion von Elsaß-Lothringen (1870). Als Mitglied der Sozialdemokratischen Partei war er zudem 1872 Freund der Arbeiterbewegung, jedoch lehnte er 1874 die Wahl zum Reichstag ab."
jacoby = new Pointer("jacoby", [50.11908245072539, 8.715217961944436], jacobyText)

let simsonText = "<h1>Simsonstraße</h1> Eduard von Simson (1810-1899) war ein bedeutender Jurist und Politiker des 19. Jahrhunderts. Nach seinem Studium in Königsberg stieg er 1836 zum Professor der Rechte auf, war Mitglied des Gothaer Nachparlaments (1849), Präsident des Volkshauses der Erfurter Versammlung (1850) und von 1858 bis 1866 Präsident des Preußischen Abgeordnetenhauses. Später bekleidete er wichtige Positionen wie Appellationsgerichtspräsident in Frankfurt/Oder und Präsident des Reichsgerichts Leipzig, wurde Mitglied der Nationalliberalen Partei und erhielt 1888 den Schwarzen Adlerorden sowie den erblichen Adel."
simson = new Pointer("simson", [50.12072099689345, 8.71566803836914], simsonText)



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