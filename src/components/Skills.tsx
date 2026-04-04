"use client";

import { motion } from "framer-motion";
import { Server, Network, Shield, PanelLeft, Code, Database } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Systems & Linux",
      icon: <Server className="h-6 w-6" />,
      color: "text-primary",
      skills: ["Linux (Ubuntu, Fedora, Arch)", "Bash Scripting", "File Systems", "Terminal Operations", "System Troubleshooting", "Permissions"],
    },
    {
      title: "Networking",
      icon: <Network className="h-6 w-6" />,
      color: "text-accent",
      skills: ["Networking Concepts", "OSI Model", "Subnetting (Conceptual)", "TCP/IP"],
    },
    {
      title: "Tools & DevOps",
      icon: <Shield className="h-6 w-6" />,
      color: "text-terminal-green",
      skills: ["Git & GitHub", "SSH", "Nginx", "Docker", "VS Code"],
    },
    {
      title: "Web Development",
      icon: <PanelLeft className="h-6 w-6" />,
      color: "text-primary",
      skills: ["React.js", "Next.js", "Tailwind CSS", "HTML & CSS", "JavaScript"],
    },
    {
      title: "Programming Core",
      icon: <Code className="h-6 w-6" />,
      color: "text-accent",
      skills: ["Python", "C", "Data Structures", "Algorithms"],
    },
    {
      title: "Database & Backend",
      icon: <Database className="h-6 w-6" />,
      color: "text-terminal-green",
      skills: ["Node.js", "MongoDB", "Backend APIs"],
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-background border-t border-border overflow-hidden">
      {/* Background Decorative */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 flex flex-col items-center md:items-start"
        >
          <div className="inline-flex items-center text-accent font-mono text-xs border border-accent/30 rounded-full px-3 py-1 mb-4 bg-accent/10">
            <span className="w-2 h-2 rounded-full bg-accent mr-2 animate-pulse" />
            Active Capabilities
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Technical Arsenal</h2>
          <p className="mt-4 text-muted-foreground font-mono max-w-2xl text-center md:text-left">
            Current system proficiencies loaded into memory. Core competencies focus on Systems, Networking, and Full Stack Development.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="relative group border border-border bg-secondary/20 p-6 rounded-lg overflow-hidden backdrop-blur-sm"
            >
              {/* Top border highlight */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-border to-transparent group-hover:via-primary transition-all duration-500" />
              
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-md bg-background border border-border mr-4 ${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold tracking-tight">{category.title}</h3>
              </div>
              
              <ul className="space-y-3 font-mono text-sm border-l border-border/50 pl-4 py-2 opacity-80 group-hover:opacity-100 transition-opacity">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                    <span className={`w-1.5 h-1.5 rounded-none mr-3 ${category.color.replace('text-', 'bg-')} opacity-50`} />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
