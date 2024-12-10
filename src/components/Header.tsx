import React from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export default function Header() {
  // const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ['About', 'Experience', 'Projects', 'Contact'];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-black">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold bg-[#FFE600] px-4 py-2 border-2 border-black transform hover:-rotate-2 transition-transform">
            SU
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-black hover:bg-[#FF90E8] px-4 py-2 border-2 border-black transform hover:-rotate-2 transition-all font-bold"
              >
                {item}
              </button>
            ))}
            {/* <button
              onClick={toggleTheme}
              className="p-2 border-2 border-black hover:bg-[#7DF9FF] transform hover:rotate-2 transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            {/* <button
              onClick={toggleTheme}
              className="p-2 border-2 border-black hover:bg-[#7DF9FF]"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button> */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 border-2 border-black hover:bg-[#FF90E8]"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t-4 border-black">
            <div className="flex flex-col space-y-4 px-6 py-4">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-left text-black hover:bg-[#FFE600] px-4 py-2 border-2 border-black transform hover:-rotate-2 transition-all font-bold"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}