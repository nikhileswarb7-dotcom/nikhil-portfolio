import { motion } from "motion/react";
import { Download, GraduationCap, Layers, Briefcase } from "lucide-react";
import "./Resume.css";

export function Resume() {
  const fadeRight = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
  };

  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">

        {/* TITLE */}
        <motion.h2
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="resume-title"
        >
          My{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Resume
          </span>
        </motion.h2>

        {/* DOWNLOAD BUTTON */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="resume-download-top"
        >
          <a href="/resume.pdf" download className="download-btn">
            <Download size={20} />
            Download Resume
          </a>
        </motion.div>

        {/* PROFILE BOX */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="profile-box"
        >
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="profile-name"
          >
            Nikhileswar Behera
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="profile-info"
          >
            📚 Bachelor of Technology — Computer Science and Engineering<br />
            📍 Visakhapatnam, Andhra Pradesh, India<br />
            📩 nikhileswarb7@gmail.com | 📱 +91 7684023522
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="profile-summary"
          >
            Computer Science student with hands-on experience in Artificial Intelligence, Machine Learning, Embedded Systems, IoT, and mobile app development. Skilled in building real-time intelligent systems using Flutter, Firebase, computer vision, and automation technologies, with strong problem solving skills, teamwork, and project leadership abilities.
          </motion.p>
        </motion.div>

        {/* EDUCATION */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="resume-section-block"
        >
          <div className="resume-heading">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="icon-box education-icon"
            >
              <GraduationCap className="icon" />
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Education
            </motion.h3>
          </div>

          <div className="resume-list">
            {[
              {
                degree: "Bachelor of Technology in Computer Science and Engineering",
                school: "Andhra University (Visakhapatnam)",
                period: "10/2023 – Present",
                detail: "CGPA: 8.55",
              },
              {
                degree: "Senior Secondary Education (APSCHE Board)",
                school: "Narayana College (Visakhapatnam)",
                period: "01/2021 – 07/2022",
                detail: "CGPA: 9.32",
              },
              {
                degree: "Secondary Education (ICSE Board)",
                school: "St. Joseph's School (Paralakhemundi, Odisha)",
                period: "04/2012 – 07/2020",
                detail: "CGPA: 8.7",
              },
            ].map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.18, duration: 0.6 }}
                viewport={{ once: true }}
                className="resume-card"
              >
                <h4>{edu.degree}</h4>
                <p className="resume-card-school">{edu.school}</p>
                <p className="resume-card-period">
                  {edu.period} — <span>{edu.detail}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* EXPERIENCE */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="resume-section-block"
        >
          <div className="resume-heading">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="icon-box experience-icon"
            >
              <Briefcase className="icon" />
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Experience
            </motion.h3>
          </div>

          <div className="resume-list">
            {[
              {
                role: "AI/ML Intern",
                company: "NIT Tadepalligudem",
                period: "05/2026 – Present",
                detail: "Developing embedded systems and AI-driven solutions. Built an AI-driven career guidance system analyzing 40+ industry profiles and PostgreSQL database architecture.",
              },
              {
                role: "Member & Lead",
                company: "Google Developer Group On Campus (GDGOC) Vizag",
                period: "12/2025 – Present",
                detail: "Led a team of 10+ students in collaborative project development. Organized resource-sharing initiatives, improving member participation by 30%.",
              },
              {
                role: "Core Member & Team Lead",
                company: "CodeIAM Club Vizag",
                period: "12/2023 – Present",
                detail: "Participated in 5+ collaborative coding events focused on Firebase, DSA, and game development. Contributed to peer learning within a 50+ member developer community.",
              },
            ].map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.18, duration: 0.6 }}
                viewport={{ once: true }}
                className="resume-card"
              >
                <h4>{exp.role}</h4>
                <p className="resume-card-school">{exp.company}</p>
                <p className="resume-card-period">
                  {exp.period} — <span>{exp.detail}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SKILLS */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="resume-skills"
        >
          <div className="resume-heading">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="icon-box skills-icon"
            >
              <Layers className="icon" />
            </motion.div>
            <h3>Skills</h3>
          </div>

          <div className="skill-tags">
            {[
              "Python", "C", "Java", "SQL", "JavaScript", "Flutter", 
              "Firebase", "Git", "GitHub", "TensorFlow", "REST APIs", 
              "AI/ML", "Game Development", "IoT", "Embedded Systems", 
              "Computer Vision", "Data Structures & Algorithms", 
              "OOPs", "DBMS", "Operating Systems"
            ].map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                className="skill-chip"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
