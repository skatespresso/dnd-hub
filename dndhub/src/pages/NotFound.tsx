import { 
    TypographyH1,
    TypographyP,
 } from "@/components/ui/typography"
import { Link } from 'react-router-dom'
import {Button} from '@/components/ui/button'

export default function NotFound() {
  return (
    <div>
      <TypographyH1>There is no loot here.</TypographyH1>
      <TypographyP>You've reached a dead end, traveller.</TypographyP>
      <Link to={"/"}>
        <Button variant="outline">Go Back Home</Button>
      </Link>
      
    </div>
  )
};
