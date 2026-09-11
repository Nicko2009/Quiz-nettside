const sporsmol = [
    {
        spørsmål: "Hva er en viktig oppgave innen IT-drift?",
        svar: ["Lage reklame", "Vedlikeholde og overvåke systemer","Lage nettsider","Planlegge markedsføring"],
        riktigsvar: "Vedlikeholde og overvåke systemer"
    },
    {
        spørsmål: "Hvorfor er sikkerhetskopiering viktig?",
        svar: [ "Gir bedre ytelse", "Beskytter mot virus","Gjør det mulig å gjenopprette data","Fjerner behovet for passord"],
        riktigsvar: "Gjør det mulig å gjenopprette data"
    },
    {
        spørsmål: "Hva brukes en server til?",
        svar: ["Tilby tjenester og lagre data", "Forbedre skjermkvalitet","Koble PC-en til strøm","Øke internettfarten"],
        riktigsvar: "Tilby tjenester og lagre data"
    },
    {
        spørsmål: "Hva kan beskytte et nettverk mot uønsket trafikk?",
        svar: ["DNS-server", "Brannmur","DHCP-server","Switch"],
        riktigsvar: "Brannmur"
    },
      {
        spørsmål: "Hvorfor overvåker man servere og nettverk?",
        svar: ["For å finne feil tidlig", "For å bruke mer lagring","For å redusere sikkerheten","For å stoppe oppdateringer"],
        riktigsvar: "For å finne feil tidlig"
    },
]
let score = 0;
let spørsmålnummer = 0;
 
sporsmol.sort(() => Math.random() - 0.5);
 
const sporsmolElement = document.getElementById("sporsmal");
const svarknapper = document.querySelectorAll(".knapp");
const nesteKnapp = document.getElementById("nesteKnapp");
const scoreElement = document.getElementById("poeng");
const tilbakemelding = document.getElementById("tilbakemelding");
const sluttside = document.getElementById("sluttside");
const sluttpoeng = document.getElementById("sluttpoeng");
const provigjenKnapp = document.getElementById("prøvIgjen");
const besteScoreElement = document.getElementById("besteScore");
 
function visSporsmol() {
    const spørsmål = sporsmol[spørsmålnummer];
 
    sporsmolElement.textContent = spørsmål.spørsmål;
 
    svarknapper.forEach((knapp, index) => {
        knapp.textContent = spørsmål.svar[index];
    });
}
 
function sjekkSvar(choice){
    const riktigSvar = sporsmol[spørsmålnummer].riktigsvar;
 
    if (choice == riktigSvar) {
        score += 1;
        scoreElement.textContent = "Score: " + score;
    tilbakemelding.textContent = "Riktig svar!";
 
    localStorage.setItem("besteScore", score);
 
        if (score > localStorage.getItem("besteScore")) {
            localStorage.setItem("besteScore", score);
        }
 
} else  {
    tilbakemelding.textContent = "Feil svar! Riktig svar er: " + riktigSvar;
    }
    svarknapper.forEach((knapp) => {
        knapp.disabled = true;
    });
 
    nesteKnapp.style.display = "block";
};
function nesteSporsmol() {
    spørsmålnummer += 1;
 
    if (spørsmålnummer < sporsmol.length) {
 
        svarknapper.forEach((knapp) => {
            knapp.disabled = false;
        });
 
        visSporsmol();
        nesteKnapp.style.display = "none";
        tilbakemelding.textContent = "";
    }else {
        document.querySelector(".quiz").style.display = "none";
        sluttside.style.display = "block";
        sluttpoeng.textContent = "Du fikk: " + score + " poeng";
    }
}
 
nesteKnapp.addEventListener("click", nesteSporsmol);
 
svarknapper.forEach((knapp) => {
    knapp.addEventListener("click", () => {
        sjekkSvar(knapp.textContent);
    });
});
 
 
visSporsmol();
 
