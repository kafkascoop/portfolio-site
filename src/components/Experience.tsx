"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, Link as LinkIcon, Users } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 relative border-t border-border/50 bg-background/30">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 flex flex-col items-center"
        >
          <div className="inline-flex items-center text-primary font-mono text-xs border border-primary/30 rounded-full px-3 py-1 mb-4 bg-primary/10">
            [cron job: logs]
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center">Work Experience</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline Node */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-8 md:pl-0"
          >
            {/* Timeline Line MD */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
            
            <div className="md:flex items-center justify-between w-full mb-8 relative">
              {/* Timeline Center Dot */}
              <div className="absolute left-[-32px] md:left-1/2 top-4 md:top-1/2 w-4 h-4 rounded-full border-4 border-background bg-primary z-10 md:-translate-x-1/2 md:-translate-y-1/2 shadow-[0_0_10px_rgba(23,147,209,0.5)]" />
              
              {/* Left Side (Empty on Desktop, Top on Mobile) */}
              <div className="md:w-5/12 mb-2 md:mb-0 md:text-right pr-4">
                <div className="text-primary font-mono text-sm flex items-center md:justify-end border border-primary/20 bg-primary/5 inline-flex px-3 py-1 rounded">
                  <Calendar className="mr-2 h-4 w-4" />
                  June 2024 – Present
                </div>
              </div>
              
              {/* Right Side */}
              <div className="md:w-5/12 pl-0 md:pl-4">
                <div className="border border-border bg-secondary/30 p-6 rounded-lg backdrop-blur-sm hover:border-primary/50 transition-colors">
                  <h3 className="text-xl font-bold flex items-center">
                    GDG BCET, Durgapur
                    <Users className="ml-2 h-4 w-4 text-muted-foreground" />
                  </h3>
                  <div className="text-accent font-medium mt-1 uppercase text-sm tracking-wider">
                    Content Lead & Social Media Manager
                  </div>
                  
                  <ul className="mt-4 space-y-2 text-muted-foreground text-sm list-disc list-inside">
                    <li>Design digital assets and promotional posters for the community.</li>
                    <li>Manage community engagement and brand consistency for tech events.</li>
                    <li>Ensure high visual hierarchy and readability across digital platforms.</li>
                    <li>Collaborate in a remote-friendly team environment meeting strict deadlines for event coordination.</li>
                  </ul>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
