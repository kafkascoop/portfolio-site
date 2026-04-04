"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24 relative border-t border-border/50 bg-background/50">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 flex flex-col items-center"
        >
          <div className="inline-flex items-center text-accent font-mono text-xs border border-accent/30 rounded-full px-3 py-1 mb-4 bg-accent/10">
            [academic: history]
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center">Education</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-lg border border-border bg-secondary/30 p-8 flex flex-col pt-6 font-mono relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full pointer-events-none" />
            
            <div className="flex items-center space-x-4 mb-8">
              <GraduationCap className="h-6 w-6 text-accent" />
              <h3 className="text-xl font-bold font-sans">Academic Timeline</h3>
            </div>
            
            <div className="relative pl-6 space-y-12 before:absolute before:inset-0 before:ml-2.5 before:w-0.5 before:bg-border before:z-0">
              {/* Item 1 */}
              <div className="relative z-10">
                <div className="absolute -left-[31px] bg-background border-2 border-primary h-4 w-4 rounded-full mt-1.5 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                <h4 className="font-bold text-foreground text-lg">B.Tech in Information Technology</h4>
                <div className="text-primary text-sm mb-1 mt-1">Bengal College of Engineering and Technology</div>
                <div className="text-muted-foreground text-sm">2022 – Present (Batch 2026)</div>
              </div>
              
              {/* Item 2 */}
              <div className="relative z-10">
                <div className="absolute -left-[31px] bg-background border-2 border-border h-4 w-4 rounded-full mt-1.5" />
                <h4 className="font-bold text-foreground text-lg">Higher Secondary (10+2, PCMB)</h4>
                <div className="text-muted-foreground text-sm mb-1 mt-1">WBCHSE</div>
                <div className="text-muted-foreground text-sm">79% (2022)</div>
              </div>

              {/* Item 3 */}
              <div className="relative z-10">
                <div className="absolute -left-[31px] bg-background border-2 border-border h-4 w-4 rounded-full mt-1.5" />
                <h4 className="font-bold text-foreground text-lg">Secondary (10th)</h4>
                <div className="text-muted-foreground text-sm mb-1 mt-1">WBBSE</div>
                <div className="text-muted-foreground text-sm">81% (2020)</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
