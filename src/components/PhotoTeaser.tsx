"use client";

import { motion } from "framer-motion";
import { Camera, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function PhotoTeaser() {
  return (
    <section className="py-24 relative bg-background border-t border-border overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden shadow-2xl border border-border"
        >
          {/* Abstract Photography Background representation */}
          <div className="absolute inset-0 bg-gradient-to-tr from-secondary to-background z-0" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay z-0" />
          <div className="absolute -right-64 -top-64 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="relative z-10 p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 h-full">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <div className="inline-flex items-center p-3 rounded-xl bg-background shadow-lg border border-border text-foreground">
                <Camera className="h-6 w-6 text-accent" />
              </div>
              <h2 className="text-4xl font-bold tracking-tight">Lens & Light</h2>
              <p className="text-muted-foreground text-lg max-w-xl font-mono">
                Beyond the terminal, I capture the world through a different lens. Explore my photography collection bridging the gap between logic and art.
              </p>
              
              <Link href="/photography" passHref>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 px-6 py-3 bg-foreground text-background font-medium rounded hover:bg-foreground/90 transition-colors flex items-center mx-auto md:mx-0 shadow-xl"
                >
                  View Photography
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.button>
              </Link>
            </div>
            
            {/* Animated Photo Grid */}
            <div className="flex-1 w-full max-w-sm grid grid-cols-2 gap-6 origin-center -rotate-6 scale-110 pointer-events-none">
                <motion.div 
                  initial={{ y: 50, opacity: 0, rotateY: 15 }}
                  whileInView={{ y: 0, opacity: 1, rotateY: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="aspect-[4/5] bg-secondary border border-border rounded-xl shadow-2xl shadow-primary/20 overflow-hidden relative group"
                >
                  <Image 
                    src="/assets/images/photography images/6.jpeg" 
                    alt="Photography Collection 1" 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent mix-blend-overlay" />
                </motion.div>
                <motion.div 
                  initial={{ y: -50, opacity: 0, rotateY: -15 }}
                  whileInView={{ y: 0, opacity: 1, rotateY: 0 }}
                  transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                  className="aspect-[4/5] bg-secondary border border-border rounded-xl shadow-2xl shadow-accent/20 overflow-hidden relative mt-12 group"
                >
                  <Image 
                    src="/assets/images/photography images/2.jpeg" 
                    alt="Photography Collection 2" 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent mix-blend-overlay" />
                </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
