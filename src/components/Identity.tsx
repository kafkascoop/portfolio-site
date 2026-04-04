"use client";

import { motion } from "framer-motion";
import { MapPin, Code, Command } from "lucide-react";
import Image from "next/image";

export function Identity() {
  return (
    <section id="about" className="py-24 relative border-t border-border/50 bg-background/50">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 border-b border-border pb-4"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground flex items-center">
            <Command className="mr-3 h-8 w-8 text-primary" />
            IDENTITY_MODULE
          </h2>
          <p className="text-muted-foreground font-mono text-sm mt-2">
            Loading user profile...
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Identity Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative overflow-hidden rounded-xl border border-border bg-secondary/30 p-8 md:p-12 shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-12 text-center md:text-left">
              {/* Profile Image Node - Double Size */}
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-primary shadow-[0_0_30px_rgba(6,182,212,0.3)] shrink-0">
                <Image 
                  src="/assets/images/profile picture/avatar.png" 
                  alt="Priyabrata Dey" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Bio Details directly beside */}
              <div className="flex-1 space-y-6">
                <div className="border-b border-border/50 pb-6">
                  <h3 className="text-3xl font-bold">System Profile</h3>
                  <div className="text-sm text-muted-foreground font-mono mt-2">ID: PD-2026-IT</div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-foreground leading-relaxed text-lg">
                    Results-driven B.Tech Information Technology student with strong foundations in programming, data structures, networking, SDLC concepts, and exposure to AI-driven tools.
                  </p>
                  <p className="text-muted-foreground text-base">
                    Hands-on experience in Linux environments, web development, coding, testing, debugging, and open-source workflows. Quick learner with strong analytical, problem-solving, and communication skills, eager to contribute effectively to software development teams.
                  </p>
                </div>

                <div className="pt-6 flex flex-col sm:flex-row gap-6 font-mono text-sm border-t border-border/50">
                  <div className="flex items-center text-muted-foreground justify-center md:justify-start">
                    <MapPin className="h-5 w-5 mr-3 text-primary" />
                    <span>Location: <span className="text-foreground">Rampurhat, Birbhum</span></span>
                  </div>
                  <div className="flex items-center text-muted-foreground justify-center md:justify-start">
                    <Code className="h-5 w-5 mr-3 text-primary" />
                    <span>Interests: <span className="text-foreground">Photography, Books, Tech</span></span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
