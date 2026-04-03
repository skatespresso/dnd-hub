import { 
    TypographyH1,
    TypographyH2,
    TypographyLead,
    TypographyP,
 } from "@/components/ui/typography"
 import { Button } from "@base-ui/react";
import { About } from "@/components/About";
import { Features } from "@/components/Features";

const myFeatures = [
  {
    title: "Problem 1: Spelarupplevelsen i andra D&D-appar är sekundär. ",
    description: "De flesta DnD-verktyg är designade för spelledaren (Dungeon Master). Spelarnas upplevelse är ofta sekundär eller krånglig, vilket skapar höga trösklar för nya spelare. Det saknas en intuitiv, social plattform där spelare kan hantera sina karaktärer, se kampanjöversikt, och kommunicera med gruppen på ett sätt som känns naturligt — liknande en sluten social grupp där all relevant information och kommunikation finns samlad.",
    
  },
  {
    title: "Problem 2: Det kan behövas väldigt många olika appar. ",
    description: "För att skapa en immersiv spelupplevelse kan spelledare behöva jonglera mellan 5-8 olika appar och/eller penna pch papper: soundboards för ljudeffekter, musikspelare, olika DnD-wikis för regler och lore, samt separata verktyg för kartor och initiative order, samt kommunikationsverktyg för att skicka hemliga meddelanden till spelare. Denna fragmentering bryter flow och gör förberedelser tidskrävande.",
    
  },
  {
    title: "Problem 3: Befintliga verktyg är byggda primärt för online-spel. ",
    description: "Roll20, Foundry VTT och liknande plattformar är designade för scenariot där spelare sitter hemma vid sina datorer. De är inte optimerade för in-person play där alla sitter runt samma bord med mobila enheter. Det är klart att de fungerar, men de kan behöva lite modifiering.",
    
  },
];

const myFeatureList = [
  "Dark/Light theme",
  "Secret messaging",
  "Karaktärsblad",
  "Privacy controls",
  "Responsiv design",
];

export default function BusinessPlan() {
    return (
        <div className="container py-16" >
            <TypographyH1>Business Plan</TypographyH1>
            <TypographyP >
                Sammanfattning av affärsplanen
            </TypographyP>
            <About
            highlightedText="Appen fyller en verklig lucka "
                title="på marknaden."
                description="Ingen konkurrent erbjuder idag en allt-i-ett-lösning med spelarfokus, privacy controls och secret messaging i samma app. Det ger projektet en genuint unik position på marknaden.
                            Den största utmaningen är att få spelgrupper att faktiskt byta. Många har sina rutiner och verktyg, även om de är långt ifrån perfekta. Därför kommer MVP:n prioritera att göra kärnfunktionerna solida, snarare än att täcka för många features på en gång. Bara efteråt kan tillägg och nice-to-have features bli aktuella." 
            />
        <Features
                title="Varför behövs"
                highlightedText="Dnd Hub / Tavernia / Campaigner?"
                features={myFeatures}
                featureList={myFeatureList}
            />
        <TypographyH2>Lösningen: En responsiv web-app som fungerar på mobila enheter (iOS/Android) och desktop (Mac/Windows) och fungerar som en social kampanj-hub för spelgruppen </TypographyH2>

            <a href="https://canva.link/8y0wocvm5k9fe8t"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                Läs hela affärsplanen här
            </a>
        </div>
    )
};
