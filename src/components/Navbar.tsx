import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-white/60 dark:bg-black/60 py-3 shadow-sm"
          : "py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 animate-slide-down">
            <Avatar className="w-10 h-10">
              <AvatarImage src="/src/assets/profile.png" alt="Jakub Svoboda" />
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
            <span className="font-medium text-lg tracking-tight">
              Jakub Svoboda
            </span>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="animate-slide-down"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile menu - now empty since we removed contact button */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-2 animate-fade-in">
            {/* Mobile menu content can be added here in the future if needed */}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
