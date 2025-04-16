import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="mt-24 sm:mt-32 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div
            className={`transition-opacity duration-1000 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex flex-col md:flex-row items-start gap-8 mb-10">
              <div className="w-full md:w-1/3 flex justify-center md:justify-start mb-6 md:mb-0">
                <Avatar className="w-60 h-60 rounded-full">
                  <AvatarImage
                    src="/profile.png"
                    alt="Jakub Svoboda"
                    className="object-cover"
                  />
                  <AvatarFallback className="text-4xl">JS</AvatarFallback>
                </Avatar>
              </div>

              <div className="w-full md:w-2/3">
                <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  serverless and ai-powered, this is the way.
                </span>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
                  Crafting digital experiences with passion and precision
                </h1>

                <p className="text-xl text-muted-foreground max-w-3xl mb-10">
                  My name is Jakub Svoboda and I am a software engineering
                  manager @ The LEGO Group. I'm dedicated to advocating the best
                  quality of engineering practices and people leadership.
                </p>
                <Button>Button</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Grid Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center">
            Connect with me online
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-delayed-fade-in">
            <Card
              type="github"
              className="animate-slide-up opacity-0 [animation-fill-mode:forwards] [animation-delay:0.1s]"
            />
            <Card
              type="leaddev"
              className="animate-slide-up opacity-0 [animation-fill-mode:forwards] [animation-delay:0.2s]"
            />
            <Card
              type="linkedin"
              className="animate-slide-up opacity-0 [animation-fill-mode:forwards] [animation-delay:0.3s]"
            />
            <Card
              type="medium"
              className="animate-slide-up opacity-0 [animation-fill-mode:forwards] [animation-delay:0.4s]"
            />
          </div>
        </div>
      </section>

      <div className="flex-grow"></div>

      <Footer />
    </div>
  );
};

export default Index;
