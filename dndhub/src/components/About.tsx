

import react from "../assets/react.svg";

interface AboutProps {
  title: string;
  highlightedText: string;
  description: string;
  imageSrc?: string;
}

export const About = ({ title, highlightedText, description, imageSrc = react }: AboutProps) => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={imageSrc}
            alt=""
            className="w-75 object-contain rounded-lg"
          />
          <div className="flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  {highlightedText}{" "}
                </span>
                {title}
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};