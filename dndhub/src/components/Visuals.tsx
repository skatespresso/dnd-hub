import pdf from "@/assets/visuals.pdf"
import { TypographyH2 } from "./ui/typography";

export const Visuals = () => {
  return (
    <div>
        <TypographyH2>Visuals</TypographyH2>
            <iframe
            src={pdf}
            width="100%"
            height="800px"
            className="rounded-lg shadow-md"
            />
    </div>
  );
};