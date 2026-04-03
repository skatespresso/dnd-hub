import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import {ContactCard} from "./ContactCard"
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Detta är ett
            </span>{" "}
            passion project!
          </h1>{" "}
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          För tre år sedan träffade jag och min man de som skulle bli våra närmsta vänner. Vi träffas ofta, och när vi gör det spelar vi som oftast Dungeons and Dragons. Det är en underbar aktivitet som för oss alla lett till mer kreativitet, lekande och timtal av connection. Det är något som betyder mycket för mig, personligen.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">

          <a
            rel="noreferrer noopener"
            href="https://github.com/skatespresso/dnd-hub/tree/main"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Github Repository
            <GitHubLogoIcon className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <ContactCard />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};