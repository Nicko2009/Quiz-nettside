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
        console.log("Riktig svar! Din score er: " + score);
} else  {
    console.log("Feil svar");
    }
    nesteKnapp.style.display = "block";
};

svarknapper.forEach((knapp) => {
    knapp.addEventListener("click", () => {
        sjekkSvar(knapp.textContent);
    });
});
