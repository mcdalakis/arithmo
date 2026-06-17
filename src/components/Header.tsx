import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Αρχική", path: "//" },
    { label: "Το Αριθμώ", path: "/about" },
    { label: "Προγράμματα", path: "/programs" },
    { label: "Καθηγητές", path: "/teachers" },
    { label: "Βιβλία", path: "/books" },
    { label: "Διαγωνίσματα", path: "/exams" },
    //    { label: "Εκπαιδευτικές Συνδέσεις", path: "/educational-links" },
    //    { label: "Χρήσιμες Συνδέσεις", path: "/useful-links" },
    //    { label: "Υπολογισμός Μορίων", path: "/moira-calculator" },
    //    { label: "Θέματα Εθνικών 2025", path: "/national-exams-2025" },
    { label: "Επικοινωνία", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "//") return location.pathname === "/" || location.pathname === "";
    return location.pathname === path;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
    exit: { y: 20, opacity: 0 },
  };

  return (
    <motion.header
      initial={false}
      animate={{
        height: isMenuOpen ? "auto" : "64px",
        borderRadius: isMenuOpen ? "24px" : "32px",
      }}
      transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-8xl border border-white/20 bg-white/100 backdrop-blur-xl shadow-lg overflow-hidden"
    >
      <div className="px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="//" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Αριθμώ Logo"
              className="h-14 w-auto object-contain group-hover:scale-105 transition-transform"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                state={item.path === "/programs" ? { reset: true } : undefined}
              >
                <Button
                  variant="ghost"
                  className={`${isActive(item.path)
                    ? "text-accent font-bold bg-accent/10"
                    : "text-foreground/80 font-bold hover:text-accent hover:bg-accent/5"
                    } transition-all rounded-full px-4 text-base`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 hover:bg-secondary/50 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="md:hidden pb-6 pt-2 space-y-1"
            >
              {navItems.map((item) => (
                <motion.div key={item.path} variants={itemVariants}>
                  <Link
                    to={item.path}
                    state={item.path === "/programs" ? { reset: true } : undefined}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Button
                      variant="ghost"
                      className={`w-full justify-start rounded-xl ${isActive(item.path)
                        ? "text-accent font-bold bg-accent/10"
                        : "text-foreground/80 hover:text-accent hover:bg-accent/5"
                        }`}
                    >
                      {item.label}
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
