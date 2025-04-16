import { Heart, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24 py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm">
                P
              </div>
              <span className="font-medium tracking-tight">
                my personal site
              </span>
            </div>
            <p className="text-muted-foreground text-sm max-w-md mt-2">
              Bringing together my professional expertise, creative thoughts,
              and engineering insights in one curated space.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16">
            <div>
              <h3 className="font-medium mb-3 text-sm tracking-wider uppercase text-muted-foreground">
                Contact
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>hello@example.com</span>
                </li>
                <li className="flex items-center space-x-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>San Francisco, CA</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-3 text-sm tracking-wider uppercase text-muted-foreground">
                Legal
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} My Personal Site. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2 sm:mt-0 flex items-center">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> using
            React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
