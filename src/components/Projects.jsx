import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink, Compass, Shield, MapPin, Trash2, Rocket } from "lucide-react";
import "./projects.css";

const PROJECTS = [
  {
    title: "CareerCompass AI: Career Roadmap & Guidance System",
    desc: "AI-powered Career Guidance Platform with a normalized PostgreSQL database of 10+ tables. Developed a recommendation engine that identifies skill gaps and generates personalized career roadmaps from industry profile data.",
    ss: "/careercompass.png",
    tech: ["AI/ML", "PostgreSQL", "Python", "Recommendation Engine", "Data Ingestion"],
    live: "#",
    code: "https://github.com/nikhileswarb7-dotcom/career-compass-ai",
    icon: Compass,
    iconColor: "#3b82f6",
  },
  {
    title: "AquaSentinel: AI Edge Drowning Prevention System",
    desc: "AI-based drowning detection system achieving 94% detection accuracy using computer vision and motion analysis. Integrated real-time emergency alerts (reducing response delay by 40%) and optimized surveillance monitoring.",
    ss: "/aquasentinel.png",
    tech: ["Computer Vision", "AI/ML", "Motion Analysis", "Surveillance", "Real-time Alerts"],
    live: "#",
    code: "https://github.com/nikhileswarb7-dotcom/aqua-sentinel",
    icon: Shield,
    iconColor: "#ef4444",
  },
  {
    title: "Nexotrack: AI Noise Detection Using Heatmaps",
    desc: "Flutter and Firebase-based AI application with 92% sound classification accuracy for real-time noise monitoring. Implemented GPS-enabled heatmap visualization to analyze environmental noise pollution.",
    ss: "/nexotrack.png",
    tech: ["Flutter", "Firebase", "GPS Heatmaps", "Sound Classification", "Smart City Analytics"],
    live: "#",
    code: "https://github.com/nikhileswarb7-dotcom/nexotrack-app",
    icon: MapPin,
    iconColor: "#eab308",
  },
  {
    title: "Swachh Netra: IoT Waste Monitoring System",
    desc: "IoT-enabled waste monitoring system improving garbage collection efficiency by 50% using sensor-based automation. Implemented automated dispatch and alert mechanisms, reducing manual monitoring workload by 60%.",
    ss: "/swachhnetra.png",
    tech: ["IoT", "Embedded Systems", "Sensors", "Automation", "Real-time Tracking"],
    live: "#",
    code: "https://github.com/nikhileswarb7-dotcom/swachh-netra",
    icon: Trash2,
    iconColor: "#10b981",
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-20% 0px" });

  return (
    <motion.section
      ref={sectionRef}
      className="projects-container"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      id="projects"
    >
      <motion.div
        className="projects-card"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.18 } },
        }}
      >
        {/* Title Animation */}
        <motion.h2
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="projects-title"
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          <Rocket className="text-purple-500 animate-bounce" size={28} />
          <span>My <span className="proj">Projects</span></span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="projects-subtitle"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          A collection of my major works — blending research, AI innovation.
        </motion.p>

        {/* Grid */}
        <div className="projects-grid">
          {PROJECTS.map((p, idx) => {
            const ProjectIcon = p.icon;
            return (
              <motion.div
                key={idx}
                className="project-card"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  e.currentTarget.style.setProperty("--card-mouse-x", `${x}px`);
                  e.currentTarget.style.setProperty("--card-mouse-y", `${y}px`);
                }}
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.45,
                      ease: "easeOut",
                      delay: idx * 0.1,
                    },
                  },
                }}
                whileHover={{ scale: 1.04 }}
              >
                <motion.div
                  className="project-image-wrapper"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={p.ss} alt={p.title} className="project-image" loading="lazy" />
                </motion.div>

                <div className="project-content">
                  <h3 className="project-heading" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <ProjectIcon size={20} style={{ color: p.iconColor, flexShrink: 0 }} />
                    <span>{p.title}</span>
                  </h3>
                  <p className="project-desc">{p.desc}</p>

                  <div className="project-tech">
                    {p.tech.map((t) => (
                      <span key={t} className="tech-badge">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    <motion.a
                      href={p.code}
                      target="_blank"
                      whileHover={{ scale: 1.08 }}
                      className="code-btn"
                    >
                      <Github size={14} /> Code
                    </motion.a>

                    <motion.a
                      href={p.live}
                      target="_blank"
                      whileHover={{ scale: 1.08 }}
                      className="live-btn"
                    >
                      <ExternalLink size={14} /> Live
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </motion.section>
  );
}
