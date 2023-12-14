window.onload = function() {
}
/*
function stepBack() {
    parlament.poppen();
    map.setView([50.12006, 8.71357], 16);

}
*/

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
            tim("hauptteil")
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

class ParlamentClass extends Pointer {
    constructor (name, koordinaten, text) {
        super(name, koordinaten, text)
        this.name._icon.classList.add("huechange");
    }
}

function tim(x) {
    window.location.href = "#"+x;
}

/*
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
*/

var map = L.map('map').setView([50.12006, 8.71357], 16); //Koordinaten

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    minZoom: 14,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



//------------------------------------------------------------------------------------------------\\

let parlament = new ParlamentClass("parlament", [50.12006, 8.71357], "Hier, ist der Parlamentsplatz!")

let juchuText = "<h1>Juchostraße</h1> Friedrich Siegmund Jucho (1805-1884) studierte ab 1823 Rechtswissenschaften in Frankfurt und wurde als führender Vertreter der liberalen Bewegung bekannt. Nach einer Geldstrafe für die Teilnahme an illegalen Vereinssitzungen wurde er 1834 wegen der Verbreitung verbotener Schriften und Hilfe für den Frankfurter Wachensturm für vier Jahre inhaftiert. Bei den Wahlen 1848 wurde er mit 6.650 Stimmen als Abgeordneter der Freien Stadt Frankfurt in die Deutsche Nationalversammlung gewählt."
juchu = new Pointer("juchu", [50.11966074609381, 8.714750485117285], juchuText)

let beselerText = "<h1>Beselerstraße</h1> Carl Georg Christoph Beseler (1809-1888), Sohn des königlich dänischen Kammerrates Cay Hartwig Beseler und seiner Ehefrau Sophie Magdalena, studierte Rechtswissenschaften in Kiel und München, arbeitete in Göttingen, lehrte in Heidelberg und pflegte enge Freundschaften mit Historikern wie Georg Gottfried Gervinus und Karl Hegel. Als Abgeordneter der Frankfurter Nationalversammlung von Mai 1848 bis zum 20. Mai 1849 und später als Mitglied des Reichstags von 1874 bis 1881 trug Beseler maßgeblich zur Schaffung des Preußischen Strafgesetzbuches von 1851 sowie zur Liberalisierung des Zivil- und Strafprozesses bei."
beseler = new Pointer("beseler", [50.121544, 8.715660], beselerText)

let gagernText = "<h1>Gagernstraße</h1> Heinrich von Gagern (1799-1880), Sohn des Diplomaten Hans Christoph Ernst Freiherr von Gagern, durchlief eine vielseitige Karriere, die von militärischer Teilnahme in der Schlacht bei Waterloo bis zu einem europaweiten Rechtswissenschaftsstudium reichte. Als Mitbegründer der Allgemeinen Deutschen Burschenschaft und Präsident der Frankfurter Nationalversammlung setzte er sich während der Revolution von 1848-49 für ein geeintes Deutschland unter preußischer Führung ein, unter der Bedingung einer Einbeziehung Österreichs. Nach der Revolution engagierte er sich im deutschen Reformverein und war als Abgeordneter in der zweiten Kammer des hessischen Landtags aktiv, bevor er 1880 in Darmstadt verstarb."
gagern = new Pointer("gagern", [50.12278218676148, 8.713879547427013], gagernText)

let jacobyText = "<h1>Jacobystraße</h1> Johann Jacoby (1805-1877) war ein Arzt, Schriftsteller und politischer Aktivist im 19. Jahrhundert. Seine Biografie umfasst eine Anklage wegen Hochverrats (1841), Festungshaft (1842-1845), politische Ämter wie Mitgliedschaft im Preußischen Landtag (1849, 1863-1870), sowie Gefängnisstrafen für oppositionelle Standpunkte gegenüber Bismarcks Politik (1864-1865) und öffentlicher Ablehnung der Annexion von Elsaß-Lothringen (1870). Als Mitglied der Sozialdemokratischen Partei war er zudem 1872 Freund der Arbeiterbewegung, jedoch lehnte er 1874 die Wahl zum Reichstag ab."
jacoby = new Pointer("jacoby", [50.11908245072539, 8.715217961944436], jacobyText)

let simsonText = "<h1>Simsonstraße</h1> Eduard von Simson (1810-1899) war ein bedeutender Jurist und Politiker des 19. Jahrhunderts. Nach seinem Studium in Königsberg stieg er 1836 zum Professor der Rechte auf, war Mitglied des Gothaer Nachparlaments (1849), Präsident des Volkshauses der Erfurter Versammlung (1850) und von 1858 bis 1866 Präsident des Preußischen Abgeordnetenhauses. Später bekleidete er wichtige Positionen wie Appellationsgerichtspräsident in Frankfurt/Oder und Präsident des Reichsgerichts Leipzig, wurde Mitglied der Nationalliberalen Partei und erhielt 1888 den Schwarzen Adlerorden sowie den erblichen Adel."
simson = new Pointer("simson", [50.12072099689345, 8.71566803836914], simsonText)

let reinganumText = "<h1>Reinganumstraße</h1> Maximilian Reinganum (1798–1878), geboren in Frankfurt, war ein Jurist und Aktivist. Nach seinem Jurastudium schloss er sich der Alten Heidelberger Burschenschaft an, konvertierte 1821 zum Protestantismus, um als Advokat zu praktizieren, und setzte sich lebenslang für die Gleichberechtigung der jüdischen Bürger ein. Als erfolgreicher Jurist und politischer Akteur engagierte er sich insbesondere während der Revolution von 1848 und setzte sich für demokratische Werte ein."
reinganum = new Pointer("reinganum", [50.12129726015901, 8.712604876791902], reinganumText)

let auerswaldText = "<h1>Auerswaldstraße</h1> Rudolf von Auerswald (1795–1866) entstammte einem angesehenen Meißener Adelsgeschlecht und spielte eine bedeutende Rolle während der Märzrevolution von 1848. Als Oberpräsident von Ostpreußen und später Außenminister präsentierte er einen liberalen Verfassungsentwurf für Preußen, der jedoch von der Nationalversammlung abgelehnt wurde. Seine politische Karriere umfasste auch die Teilnahme am Erfurter Parlament, die Leitung der Rheinprovinz und den Rücktritt im Zuge der liberalen Spaltung von 1862."
auerswald = new Pointer("auerswald", [50.11929655004541, 8.71379962309906], auerswaldText)

let droysenText = '<h1>Droysenstraße</h1> Johann Gustav Bernhard Droysen (1808–1884) war ein bedeutender Historiker und Politiker des 19. Jahrhunderts. Als Abgeordneter der Nationalversammlung 1848 setzte er sich für die Unabhängigkeit von Schleswig und Holstein ein. Neben seinem politischen Engagement prägte er die Geschichtswissenschaft durch wegweisende Werke wie die "Geschichte des Hellenismus," in der er die Bedeutung dieser Epoche für die Entstehung des Christentums hervorhob.'
droysen = new Pointer("droysen", [50.11761403538837, 8.712627507044228], droysenText)

let dahlmannText = "<h1>Dahlmannstraße</h1> Friedrich Christoph Dahlmann (1785–1860) war eine Schlüsselfigur in der liberalen Bewegung des 19. Jahrhunderts. Als Vertrauensmann vertrat er Preußen in der Nationalversammlung von 1848 in Frankfurt und spielte eine entscheidende Rolle bei Verhandlungen zur preußischen Verfassung sowie bei der Trennung von Schleswig und Holstein von Dänemark. Trotz politischer Rückschläge setzte er sich weiterhin für liberale Ideale ein, trat der preußischen Ersten Kammer bei, und verstarb 1860 in Bonn."
dahlmann = new Pointer("dahlmann", [50.11848568560045, 8.709844840403823], dahlmannText)

let grimmText = "<h1>Brüder-Grimm-Straße</h1> Die Brüder Grimm, Jacob und Wilhelm, waren nicht nur herausragende Sprachwissenschaftler und Volkskundler, sondern auch politisch aktiv. Jacob Grimm war Abgeordneter der Frankfurter Nationalversammlung von 1848, wo er sich für die Formulierung der Menschenrechte in Deutschland einsetzte. Die Brüder wurden als Göttinger Sieben entlassen, nachdem sie gegen den Verfassungsbruch des Königs von Hannover protestierten, erhielten jedoch vorübergehend Unterstützung durch ein Bürgerkomitee aus Leipzig."
grimm = new Pointer("grimm", [50.11977282932826, 8.710138077128436], grimmText)



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