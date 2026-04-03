import { 
    TypographyH1,
    TypographyP,
 } from "@/components/ui/typography"
import { ProjectCard } from "@/components/custom/ProjectCard"

export default function BusinessPlan() {
    return (
        <div className="container py-16" >
            <TypographyH1>Business Plan</TypographyH1>
            <TypographyP >
                Sammanfattning av affärsplanen
            </TypographyP>
        <ProjectCard title="My Idea" description="Some description" />
        <ProjectCard title="Another Idea" description="Another description" />
            
        </div>
    )
};
