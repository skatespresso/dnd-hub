import { 
    TypographyH1,
    TypographyP,
 } from "@/components/ui/typography"
import { ProjectCard } from "@/components/custom/ProjectCard"

export default function ProjectIdea() {
    return (
        <div className="container py-16" >
            <TypographyH1>Din D&D-companion — byggd för hela gruppen, inte bara Dungeon Master.</TypographyH1>
            <TypographyP >
            En delad hub där allt finns samlat — karaktärsblad, sessionsanteckningar, gruppchatt och kampanjinfo. Hela spelgruppen alltid synkad, oavsett om ni sitter runt samma bord eller spelar online.
            Hantera din karaktär, håll koll på kampanjen och kommunicera med din grupp — allt på ett ställe. Med inbyggda privacy controls väljer du vad de andra ser. 
            </TypographyP>
        <ProjectCard title="My Idea" description="Some description" />
        <ProjectCard title="Another Idea" description="Another description" />
            
        </div>
    )
};
