import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Mail } from "lucide-react";

export const ContactCard = () => {
  return (
    <div className="flex justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader className="flex justify-center items-center pb-2">
          <CardTitle>Elin Iller</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          
            <a href="https://se.linkedin.com/in/elin-iller-5954b713a"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <LinkedInLogoIcon />
              LinkedIn
            </a>

          <a href="mailto:eliniller@proton.me"
          className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Mail size={20} />
            eliniller@proton.me
          </a>
          <a
          href="https://github.com/skatespresso"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <GitHubLogoIcon />
            GitHub
          </a>
        </CardContent>
      </Card>
    </div>
  );
};