"use client";

import { motion } from "framer-motion";
import { TerminalSquare, ChevronDown, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary opacity-20 blur-[100px]"></div>
      </div>

      {/* Animated Graphic Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex justify-center items-center">
        <motion.div 
          animate={{ rotate: 360, scale: [1, 1.1, 1] }} 
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="w-[140vw] h-[140vw] max-w-[1200px] max-h-[1200px] absolute opacity-40 blur-[80px]"
          style={{ background: 'conic-gradient(from 90deg, transparent 0%, transparent 40%, rgba(6, 182, 212, 0.15) 50%, transparent 60%, transparent 100%)' }}
        />
        <motion.div 
          animate={{ rotate: -360, scale: [1, 1.2, 1] }} 
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="w-[160vw] h-[160vw] max-w-[1400px] max-h-[1400px] absolute opacity-30 blur-[100px]"
          style={{ background: 'conic-gradient(from 180deg, transparent 0%, transparent 40%, rgba(23, 147, 209, 0.15) 50%, transparent 60%, transparent 100%)' }}
        />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 space-y-6"
          >
            <div className="inline-flex items-center rounded-md border border-border bg-background/50 backdrop-blur-sm px-3 py-1 text-sm text-primary font-mono select-none">
              <TerminalSquare className="mr-2 h-4 w-4" />
              <span>[sys_start]: Initialization_Complete</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground">
              Hello, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Priyabrata Dey
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground font-mono flex flex-col space-y-2">
              <span>B.Tech Final Year (2026)</span>
              <span className="text-sm border-l-2 border-primary pl-4 py-2 bg-gradient-to-r from-primary/10 to-transparent">
                "Linux • Networking • Systems • Automation"
              </span>
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-colors bg-primary text-primary-foreground rounded-md shadow-lg shadow-primary/20 hover:bg-primary/90"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-colors border border-border bg-background hover:bg-secondary text-foreground rounded-md"
              >
                Contact
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden md:flex relative flex-1 justify-end items-center"
          >
            {/* Minimal conceptual profile representation */}
            <div className="relative w-72 h-72 rounded-full border border-primary/30 flex items-center justify-center animate-[spin_30s_linear_infinite]">
              <div className="absolute w-64 h-64 rounded-full border border-dashed border-accent/40 animate-[spin_20s_linear_infinite_reverse]"></div>
              
              <div className="w-56 h-56 rounded-full bg-secondary overflow-hidden border-2 border-primary relative flex items-center justify-center z-10 animate-none" style={{ animationDirection: 'normal', animationPlayState: 'running' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                {/* Fallback pattern until image is added */}
                <div className="text-muted-foreground font-mono text-center rotate-0">
                  <span className="text-4xl text-primary">PD</span>
                  <div className="text-xs mt-2 opacity-50">IMAGE_MODULE_PENDING</div>
                </div>
              </div>
            </div>
            
            {/* Floating badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-10 right-10 bg-background/80 backdrop-blur-md border border-border px-3 py-2 rounded-md shadow-xl"
            >
              <div className="text-xs font-mono text-primary">uptime: 99.9%</div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 left-10 bg-background/80 backdrop-blur-md border border-border px-3 py-2 rounded-md shadow-xl"
            >
              <div className="text-xs font-mono text-accent">status: deploying...</div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </section>
  );
}
