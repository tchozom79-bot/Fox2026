import { Instagram, Youtube, AtSign, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  const links = [
    { name: "Home", href: "/" },
    { name: "Feature", href: "/feature" },
    { name: "About Them", href: "/about" },
    { name: "Privacy", href: "/privacy" },
  ];

  return (
    <footer className="bg-surface-container-low dark:bg-inverse-surface w-full rounded-t-[2rem]">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 md:px-12 py-16 gap-8 max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <Link to="/" className="flex items-center gap-2 active:scale-95 transition-transform group mx-auto md:mx-0">
            <div className="bg-linear-to-tr from-primary to-primary-container p-1.5 rounded-lg text-on-primary">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="text-lg font-bold text-primary font-plus-jakarta tracking-tighter">
              stories
            </span>
          </Link>
          <p className="text-on-background/60 text-sm uppercase tracking-widest font-manrope">
            © 2026 Stories. A Cinematic Tale.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-8">
          {links.map((link) => (
            <Link 
              key={link.name}
              to={link.href}
              className="text-on-background/60 text-sm uppercase tracking-widest font-manrope hover:text-primary underline-offset-4 hover:underline transition-all"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex gap-6">
          <Instagram className="w-6 h-6 text-primary opacity-80 hover:opacity-100 cursor-pointer transition-all" />
          <Youtube className="w-6 h-6 text-primary opacity-80 hover:opacity-100 cursor-pointer transition-all" />
          <AtSign className="w-6 h-6 text-primary opacity-80 hover:opacity-100 cursor-pointer transition-all" />
        </div>
      </div>
    </footer>
  );
}
