import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function ProjectCard({ title, description }: { title: string, description: string }) {
  return (
    <Card className="bg-blue-500 shadow-lg hover:shadow-xl transition-shadow">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  )
}