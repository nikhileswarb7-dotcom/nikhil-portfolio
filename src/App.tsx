import { useState, useEffect, useRef } from "react";
import IntroVideo from "./components/IntroVideo";
import { Navbar } from "./components/Navbar";
import { FloatingNav } from "./components/FloatingNav";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Team } from "./components/Team";
import Projects from "./components/Projects";
import { Gallery } from "./components/Gallery";
import { GalleryPage } from "./components/GalleryPage"; // <--- NEW PAGE IMPORT
import { Skills } from "./components/Skills";
import  Certificates from "./components/Certificates"; 
import { Resume } from "./components/Resume";
import { Blog } from "./components/Blog";
import { Contact } from "./components/Contact";
import { ThemeToggle } from "./components/ThemeToggle";

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [introDone, setIntroDone] = useState(false);
  const [openGalleryPage, setOpenGalleryPage] = useState(false); // <--- NEW STATE
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.setProperty("--x", `${e.clientX}px`);
        spotlightRef.current.style.setProperty("--y", `${e.clientY}px`);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="bg-white dark:bg-black min-h-screen relative overflow-x-hidden transition-colors duration-300">

      {/* Interactive Cursor Spotlight Glow */}
      <div
        ref={spotlightRef}
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: theme === "dark"
            ? "radial-gradient(600px circle at var(--x, -1000px) var(--y, -1000px), rgba(18, 247, 255, 0.08), transparent 80%)"
            : "radial-gradient(600px circle at var(--x, -1000px) var(--y, -1000px), rgba(0, 110, 255, 0.05), transparent 80%)",
        }}
      />

      {/* Navbar always visible */}
      {!openGalleryPage && (
        <>
          <Navbar />
          <FloatingNav />
        </>
      )}
      <ThemeToggle theme={theme} setTheme={setTheme} />

      <main>
        {/* Show intro video first */}
        {!introDone && <IntroVideo onFinish={() => setIntroDone(true)} />}

        {/* AFTER INTRO */}
        {introDone && (
          <>
            {/* IF GALLERY PAGE IS OPEN — SHOW ONLY THAT */}
            {openGalleryPage ? (
              <GalleryPage theme={theme} onBack={() => setOpenGalleryPage(false)} />
            ) : (
              <>
                {/* OTHERWISE SHOW MAIN WEBSITE */}
                <Home theme={theme} />

                <About />
                {/* <Team theme={theme} /> */}
                <Projects />

                {/* PASS FUNCTION TO GALLERY BUTTON */}
                <Gallery theme={theme} onOpenGalleryPage={() => setOpenGalleryPage(true)} />


                <Skills />
                <Resume />
                <Certificates />
                <Blog />
                <Contact />
              </>
            )}
          </>
        )}
      </main>

      {/* Footer only when NOT in GalleryPage */}
      {!openGalleryPage && (
        <footer className="relative border-t border-gray-200 dark:border-white/10 py-8">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-gray-600 dark:text-white/60">
              © 2026 Nikhileswar Behera.
            </p>
          </div>
        </footer>
      )}
    </div>
  );
}
