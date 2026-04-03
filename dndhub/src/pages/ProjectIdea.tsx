import { 
    TypographyH1,
    TypographyP,
 } from "@/components/ui/typography"
import { About } from "@/components/About"
import { HowItWorks } from "@/components/HowItWorks"

export default function ProjectIdea() {
    return (
        <div className="container py-16" >
            <TypographyH1>Din D&D-companion — byggd för hela gruppen, inte bara Dungeon Master.</TypographyH1>
            <TypographyP >
            d
            </TypographyP>
            <About />
            <HowItWorks/>
            
        </div>
    )
};
