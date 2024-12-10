import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';

function App() {
  return (
    <div className="min-h-screen bg-[#FFE600] dark:bg-[#FFE600] text-black relative">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-10"></div>
      <div className="absolute top-20 left-10 w-16 h-16 bg-[#FF6B6B] rotate-45"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-[#7DF9FF] rotate-12"></div>
      <div className="relative z-10">
        <div className="border-b-8 border-black">
          <Header />
        </div>
        <main className="container mx-auto px-4">
          <div className="space-y-32 py-16">
            <div className="bg-white border-4 border-black p-8 transform hover:-rotate-1 transition-transform shadow-brutal">
              <Hero />
            </div>
            <div className="bg-[#FF90E8] border-4 border-black p-8 transform hover:rotate-1 transition-transform shadow-brutal">
              <About />
            </div>
            <div className="bg-[#7DF9FF] border-4 border-black p-8 transform hover:-rotate-1 transition-transform shadow-brutal">
              <Projects />
            </div>
            <div className="bg-[#6FFF7D] border-4 border-black p-8 transform hover:rotate-1 transition-transform shadow-brutal">
              <Experience />
            </div>
            <div className="bg-[#FF6B6B] border-4 border-black p-8 transform hover:-rotate-1 transition-transform shadow-brutal">
              <Education />
            </div>
            <div className="bg-white border-4 border-black p-8 transform hover:rotate-1 transition-transform shadow-brutal">
              <Contact />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;