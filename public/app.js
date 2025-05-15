import { createClient } from 'https://esm.sh/@supabase/supabase-js';

// Opprett Supabase-klient
const supabase = createClient(
    'https://uwkquwgqyotumepbwule.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3a3F1d2dxeW90dW1lcGJ3dWxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkzNzQ5MTgsImV4cCI6MjA1NDk1MDkxOH0.yGAsmLmdOvSDZERufGPtRmYl4ExYJcWhVIskOaxsFTk'
);

// Opprett kart
const map = L.map("map").setView([58.14671, 7.99570], 8); // Sentrum i Agder
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

// Farger for markører
const farger = {
    bruker: 'red',
    tilfluktsrom: 'blue',
    nodhavn: 'green',
    politistasjon: 'orange'
};

// Variabler for brukerposisjon og lagring
let brukerPosisjon = null;
const tilfluktsromMarkorer = [];
const nodhavnMarkorer = [];
const politistasjonMarkorer = [];

// Funksjon for å lage ikon
function lagIkon(farge) {
    return L.icon({
        iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-${farge}.png`,
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });
}

// Funksjon for å vise brukerposisjon
function visBrukerposisjon() {
    map.locate({ setView: true, maxZoom: 13 });
    map.on('locationfound', (e) => {
        brukerPosisjon = e.latlng;
        L.marker(e.latlng, { icon: lagIkon(farger.bruker) })
            .addTo(map)
            .bindPopup('Du er her')
            .openPopup();
    });
    map.on('locationerror', () => {
        alert("Kunne ikke finne brukerposisjon.");
        map.setView([60.472, 8.4689], 5);
    });
}

// Funksjon for å opprette lag-toggling
function opprettLagToggler({ knappId, tabellnavn, popupFelt, farge, lagring }) {
    let vises = false;

    document.getElementById(knappId).addEventListener("click", async () => {
        const knapp = document.getElementById(knappId);

        if (!vises) {
            // Hent data fra Supabase
            const { data, error } = await supabase.from(tabellnavn).select("*");
            if (error) {
                console.error(`Feil ved henting av ${tabellnavn}:`, error);
                return;
            }

            // Legg til markører for laget
            data.filter(p => p.latitude && p.longitude).forEach(p => {
                const marker = L.marker([p.latitude, p.longitude], { icon: lagIkon(farge) })
                    .addTo(map);

                marker.on('click', function() {
                    let win = window.open('', '_blank'); // Open immediately to avoid popup block
                    if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition((pos) => {
                            const userLat = pos.coords.latitude;
                            const userLng = pos.coords.longitude;
                            const destLat = p.latitude;
                            const destLng = p.longitude;
                            const googleMapsUrl = `https://www.google.com/maps/dir/${userLat},${userLng}/${destLat},${destLng}`;
                            win.location = googleMapsUrl;
                        }, () => {
                            win.close();
                            alert("Kunne ikke hente din posisjon.");
                        });
                    } else {
                        win.close();
                        alert("Geolokasjon støttes ikke av nettleseren din.");
                    }
                });

                lagring.push(marker);
            });

            // Etter at alle markører er lagt til, legg til event listener for popup-knappene:
            map.on("popupopen", function(e) {
                const btn = e.popup._contentNode.querySelector(".veibeskrivelse-btn");
                if (btn) {
                    btn.addEventListener("click", function() {
                        if (navigator.geolocation) {
                            navigator.geolocation.getCurrentPosition((pos) => {
                                const userLat = pos.coords.latitude;
                                const userLng = pos.coords.longitude;
                                const destLat = btn.getAttribute("data-lat");
                                const destLng = btn.getAttribute("data-lng");
                                const googleMapsUrl = `https://www.google.com/maps/dir/${userLat},${userLng}/${destLat},${destLng}`;
                                window.open(googleMapsUrl, "_blank");
                            }, () => {
                                alert("Kunne ikke hente din posisjon.");
                            });
                        } else {
                            alert("Geolokasjon støttes ikke av nettleseren din.");
                        }
                    });
                }
            });

            // Oppdater knappeteksten
            knapp.childNodes[0].textContent = knapp.childNodes[0].textContent.replace("Vis", "Skjul");
            vises = true;
        } else {
            // Fjern markørene fra kartet
            lagring.forEach(marker => map.removeLayer(marker));
            lagring.length = 0;

            // Oppdater knappeteksten
            knapp.childNodes[0].textContent = knapp.childNodes[0].textContent.replace("Skjul", "Vis");
            vises = false;
        }
    });
}

// Funksjon for å åpne Google Maps
function åpneGoogleMaps(destLat, destLng) {
    if (brukerPosisjon) {
        const { lat, lng } = brukerPosisjon;
        const googleMapsUrl = `https://www.google.com/maps/dir/${lat},${lng}/${destLat},${destLng}`;
        window.open(googleMapsUrl, "_blank");
    } else {
        alert("Brukerposisjon er ikke tilgjengelig.");
    }
}

// Funksjon for å finne nærmeste markør
function finnNaermesteMarker(brukerPosisjon, markorer) {
    if (!brukerPosisjon) {
        alert("Brukerposisjon er ikke tilgjengelig.");
        return null;
    }

    let naermesteMarker = null;
    let kortesteAvstand = Infinity;

    markorer.forEach(marker => {
        const markerPosisjon = marker.getLatLng();
        const avstand = brukerPosisjon.distanceTo(markerPosisjon);
        if (avstand < kortesteAvstand) {
            kortesteAvstand = avstand;
            naermesteMarker = markerPosisjon;
        }
    });

    return naermesteMarker;
}

// Event listener for "Nærmeste tilfluktsrom"
function leggTilNaermesteKnapp(knappId, markorer) {
    document.getElementById(knappId).addEventListener("click", () => {
        const naermeste = finnNaermesteMarker(brukerPosisjon, markorer);
        if (naermeste) {
            åpneGoogleMaps(naermeste.lat, naermeste.lng);
        }
    });
}

// Flytt knappene til riktig seksjon
function flyttKnapperTilOmKartet() {
    const omKartetSection = document.getElementById("omKartet");
    const buttons = [
        document.getElementById("tilfluktsromKnapp"),
        document.getElementById("nodhavnKnapp"),
        document.getElementById("politistasjonKnapp"),
        document.getElementById("naermesteTilfluktsromKnapp"),
        document.getElementById("naermesteNodhavnKnapp"),
        document.getElementById("naermestepolitistasjonKnapp")
    ];

    buttons.forEach(button => {
        if (button) {
            omKartetSection.appendChild(button);
        }
    });
}

// Popup-håndtering
function leggTilPopupHåndtering() {
    const usageGuide = document.getElementById("usage-guide");
    const popupBox = document.getElementById("popup-box");
    const closePopup = document.getElementById("close-popup");

    if (!usageGuide || !popupBox || !closePopup) {
        console.error("Elementer for popup mangler. Sjekk HTML-strukturen.");
        return;
    }

    usageGuide.addEventListener("click", () => {
        popupBox.style.display = "flex"; // Vis popup-boksen
    });

    closePopup.addEventListener("click", () => {
        popupBox.style.display = "none"; // Skjul popup-boksen
    });
}

// Initialisering
document.addEventListener("DOMContentLoaded", () => {
    visBrukerposisjon();
    opprettLagToggler({
        knappId: "tilfluktsromKnapp",
        tabellnavn: "tilfluktsrom",
        popupFelt: "navn",
        farge: "blue",
        lagring: tilfluktsromMarkorer
    });
    opprettLagToggler({
        knappId: "nodhavnKnapp",
        tabellnavn: "nodhavn",
        popupFelt: "navn",
        farge: "green",
        lagring: nodhavnMarkorer
    });
    opprettLagToggler({
        knappId: "politistasjonKnapp",
        tabellnavn: "politistasjoner",
        popupFelt: "navn",
        farge: "orange",
        lagring: politistasjonMarkorer
    });
    leggTilNaermesteKnapp("naermesteTilfluktsromKnapp", tilfluktsromMarkorer);
    leggTilNaermesteKnapp("naermesteNodhavnKnapp", nodhavnMarkorer);
    leggTilNaermesteKnapp("naermestepolitistasjonKnapp", politistasjonMarkorer);
    flyttKnapperTilOmKartet();
    leggTilPopupHåndtering();
});