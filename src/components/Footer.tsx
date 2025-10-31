import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24 py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center space-x-3 mb-2">
              <span className="font-medium tracking-tight">Jakub Svoboda</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-md mt-2">
              Bringing together my professional expertise, creative thoughts,
              and engineering insights in one curated space..
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 gap-8 text-left">
            <div>
              <h3 className="font-medium mb-3 text-sm tracking-wider uppercase text-muted-foreground">
                Contact
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>hello@jakubsvoboda.net</span>
                </li>
                <li className="flex items-center space-x-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>Prague, CZ</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-800 flex justify-end">
          <p className="text-sm text-muted-foreground flex items-center">
            © {currentYear} by Jakub Svoboda
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
