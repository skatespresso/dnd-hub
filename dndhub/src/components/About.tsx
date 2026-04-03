
import react from "../assets/react.svg";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={react}
            alt=""
            className="w-75 object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  En social kampanj-hub för{" "}
                </span>
                Dungeons & Dragons
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                En delad hub där allt finns samlat — karaktärsblad, sessionsanteckningar, gruppchatt och kampanjinfo. Hela spelgruppen alltid synkad, oavsett om ni sitter runt samma bord eller spelar online.
            Hantera din karaktär, håll koll på kampanjen och kommunicera med din grupp — allt på ett ställe. Med inbyggda privacy controls väljer du vad de andra ser. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};