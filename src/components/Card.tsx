import { ExternalLink, BookOpen, Code } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { cn } from "@/lib/utils";

interface CardProps {
  type: "github" | "leaddev" | "linkedin" | "medium";
  className?: string;
}

const Card = ({ type, className }: CardProps) => {
  const cardConfigs = {
    github: {
      title: "GitHub",
      description:
        "Check out my open source contributions and personal projects",
      icon: FaGithub,
      link: "https://github.com/jakubsvobodacz",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    leaddev: {
      title: "LeadDev",
      description: "Articles and resources on engineering leadership",
      icon: Code,
      link: "https://leaddev.com/community/jakub-svoboda",
      bgColor: "bg-gradient-to-r from-[#FF326E] to-[#FF326E]",
      textColor: "text-white",
    },
    linkedin: {
      title: "LinkedIn",
      description: "Connect with me professionally and see my career journey",
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/jakubsvobodacz/",
      bgColor: "bg-gradient-to-r from-blue-600 to-blue-800",
      textColor: "text-white",
    },
    medium: {
      title: "Medium",
      description: "Read my articles on software development and tech trends",
      icon: BookOpen,
      link: "https://medium.com/@jakubsvobodacz",
      bgColor: "bg-gradient-to-r from-[#D9C597] to-[#F1DCAF]",
      textColor: "text-white",
    },
  };

  const config = cardConfigs[type];
  const IconComponent = config.icon;

  return (
    <a
      href={config.link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-2",
        config.bgColor,
        config.textColor,
        className
      )}
    >
      <div className="relative z-10 p-6 h-full flex flex-col justify-between">
        <div>
          <div className="mb-4 flex justify-between items-center">
            <IconComponent className="h-8 w-8" />
            <ExternalLink className="h-5 w-5 opacity-70" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{config.title}</h3>
          <p>{config.description}</p>
        </div>

        <div className="mt-6 flex justify-end">
          <div className="text-sm font-medium flex items-center gap-1 text-white/70 hover:text-white transition-colors">
            Visit <ExternalLink className="h-3 w-3" />
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 h-40 w-40 opacity-30 blur-xl rounded-full bg-white/10" />
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 h-32 w-32 opacity-20 blur-xl rounded-full bg-white/10" />
    </a>
  );
};

export default Card;
