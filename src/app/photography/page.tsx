"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Camera, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function PhotographyRoute() {
  // Real images from local repository
  const images = [
    '2.jpeg', '3.jpeg', '6.jpeg', '7.jpeg'
  ];

  return (
    <div className="container px-4 md:px-6 mx-auto py-12 md:py-24 min-h-screen">
      <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-12 font-mono text-sm">
        <ArrowLeft className="mr-2 h-4 w-4" /> cd ..
      </Link>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <div className="inline-flex items-center p-3 rounded-xl bg-background shadow-lg border border-border text-foreground mb-4">
          <Camera className="h-6 w-6 text-accent" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Photography</h1>
        <p className="text-muted-foreground font-mono max-w-2xl text-lg">
          Captured moments through the lens. This gallery dynamically queries the local image repository.
        </p>
      </motion.div>

      {/* Grid gallery */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {images.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: idx * 0.15, duration: 0.6, ease: "easeOut" }}
            className="aspect-[4/5] relative rounded-xl border border-border bg-secondary overflow-hidden group shadow-xl"
          >
            <Image 
              src={`/assets/images/photography images/${item}`}
              alt={`Photography capture ${item}`}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
              <span className="font-mono text-sm text-primary">/assets/photography/{item}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
