import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon} from "../components/Icons";
import {
  TypographyH1,
  TypographyH2,
  TypographyP,
} from "@/components/ui/typography"

interface FeatureProps {
icon: React.ReactNode;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Kampanjorganisation",
    description:
      " Skapa, organisera och kommunicera dina TTRPG-kampanjer på ett och samma ställe, och gör dina spelare delaktiga. Här kan alla dela session notes, göra inlägg och skicka privata meddelanden.",
  },
  {
    icon: <MapIcon />,
    title: "Secret messaging",
    description:
      "Droppa lore bombs eller gör innovativa death saves genom att skicka hemliga meddelanden direkt till enskilda spelare i realtid under sessioner",
  },
  {
    icon: <PlaneIcon />,
    title: "Karaktärshantering med privacy controls",
    description:
      "Fullständiga, karaktärsblad med integration mot D&D 5e API. Spelare kan välja vilken karaktärsinformation som är synlig för andra spelare.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <TypographyH2>
        Kärnfunktioner i{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          MVP{" "}
        </span>         
      </TypographyH2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {features.map(({ icon, title, description }: FeatureProps) => (
            <Card
            key={title}
            className="bg-muted/50"
            >
            <CardHeader>
                <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
                </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
            </Card>
        ))}
      </div>
    </section>
  );
};