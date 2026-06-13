import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Award, Sparkles } from "lucide-react";

interface Achievement {
  title: string;
  img: string;
  icon: React.ComponentType<any>;
  iconColor: string;
}

export function AchievementsFeed() {
  const achievements: Achievement[] = [
    {
      title: "Won 3rd Prize in HackAP Hackathon 2025",
      img: "/certs/hackap2025.png",
      icon: Trophy,
      iconColor: "#eab308", // Gold/Yellow
    },
    {
      title: "Top 10 in Codeiam Spark Nation Hackathon 2025",
      img: "/certs/sparknation2025.png",
      icon: Award,
      iconColor: "#3b82f6", // Blue
    },
    {
      title: "Honoured for volunteering at National Level 24hrs Hackathon",
      img: "/certs/hackathonvolunteer.png",
      icon: Sparkles,
      iconColor: "#10b981", // Green
    },
  ];

  return (
    <section className="g-projects-feed">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="g-title"
      >
        My <span className="grad">Achievements</span>
      </motion.h2>

      {achievements.map((ach, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.25, duration: 0.7, ease: "easeOut" }}
        >
          <AchievementCard ach={ach} />
        </motion.div>
      ))}
    </section>
  );
}

/* ─────────────────────────────── CARD ─────────────────────────────── */

function AchievementCard({ ach }: { ach: Achievement }) {
  const [open, setOpen] = useState(false);

  const fade = {
    initial: { opacity: 0, scale: 0.92 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.92 },
    transition: { duration: 0.35, ease: "easeOut" },
  };

  const IconComponent = ach.icon;

  return (
    <>
      <div className="g-project-card" onClick={() => setOpen(true)}>
        <div className="g-carousel">
          <motion.img
            src={ach.img}
            alt={ach.title}
            className="g-cimg"
            loading="lazy"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <h3 className="g-project-title" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <IconComponent size={22} style={{ color: ach.iconColor, flexShrink: 0 }} />
          <span>{ach.title}</span>
        </h3>
      </div>

      {/* ───── FULLSCREEN MODAL ───── */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="g-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="g-modal-content"
              variants={fade}
              initial="initial"
              animate="animate"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={ach.img} className="g-modal-img" alt={ach.title} loading="lazy" />

              <button className="g-close-modal" onClick={() => setOpen(false)}>
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

