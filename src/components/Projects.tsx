"use client";

import { motion } from "framer-motion";
import { FolderGit2, ExternalLink, Terminal } from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>);

import Image from "next/image";

export function Projects() {
  const projects = [
    {
      id: "homelab",
      title: "Homelab Setup",
      subtitle: "Main Highlight",
      description: "A comprehensive self-hosted environment designed to learn systems administration and networking. Acts as a sandbox for deploying various self-hosted services and automating server management.",
      stack: ["Linux", "Docker", "Bash", "SSH", "Networking"],
      features: ["Containerized deployments", "Robust firewall configurations", "Local DNS & Reverse Proxies"],
      github: "https://github.com/kafkascoop",
      live: "#",
      image: "/assets/projects/homelab.png"
    },
    {
      id: "deepfake",
      title: "Deepfake Detection Tool",
      subtitle: "AI/ML Prototype",
      description: "Developed a lightweight deepfake detection system using pretrained Vision Transformer models to analyze manipulated facial images and videos. Implemented face extraction with MTCNN and ensemble AI approach.",
      stack: ["Python", "PyTorch", "Vision Transformers", "Gradio", "CUDA"],
      features: ["GPU-Accelerated inference", "MTCNN face extraction", "Cross-platform execution via Colab"],
      github: "https://github.com/kafkascoop",
      live: "#",
      image: "/assets/projects/deepfake.png"
    },
    {
      id: "brewcafe",
      title: "Brew Café Website",
      subtitle: "Modern Web Application",
      description: "A fully responsive, modern web application for a local café designed with high performance and accessibility in mind, serving as a clean client-facing landing page and storefront.",
      stack: ["Next.js", "React", "Tailwind CSS"],
      features: ["Responsive UI", "Animated interactions", "SEO Optimized structure"],
      github: "https://github.com/kafkascoop",
      live: "#",
      image: "/assets/projects/brewcafe.png"
    },
    {
      id: "ticket",
      title: "Complaint Ticket Management",
      subtitle: "Full Stack System",
      description: "A holistic web application facilitating issue submission and status tracking. Equipped with a centralized dashboard and automated updates, backed by a robust API.",
      stack: ["Node.js", "MongoDB", "Express", "HTML/CSS/JS"],
      features: ["User authentication", "Real-time updates", "Centralized admin dashboard"],
      github: "https://github.com/kafkascoop",
      live: "#",
      image: "/assets/projects/ticket.png"
    }
  ];

  return (
    <section id="projects" className="py-24 relative bg-background border-t border-border overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 border-b border-border pb-6"
        >
          <div className="flex items-center space-x-3 mb-2 text-primary font-mono">
            <FolderGit2 className="h-5 w-5" />
            <span className="text-sm">~/projects/deployed</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Active Deployments</h2>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col gap-8 md:gap-16 ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}
            >
              {/* Image side */}
              <div className="w-full md:w-1/2 group relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative aspect-video overflow-hidden rounded-xl border border-border bg-secondary block">
                  <div className="absolute top-0 w-full h-8 bg-background border-b border-border flex items-center px-4 z-10 space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="relative w-full h-full pt-8">
                    {/* Placeholder image representation until the nextjs project adds next/image domain or we use local images */}
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                </div>
              </div>

              {/* Content side */}
              <div className="w-full md:w-1/2 space-y-6">
                <div>
                  <div className="text-accent font-mono text-sm mb-2 opacity-80">{project.subtitle}</div>
                  <h3 className="text-3xl font-bold">{project.title}</h3>
                </div>

                <div className="p-6 rounded-lg bg-secondary/30 border border-border backdrop-blur-sm relative">
                  <Terminal className="absolute top-3 right-3 h-4 w-4 text-muted-foreground opacity-50" />
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold mb-3 border-b border-border/50 pb-2">KEY FEATURES</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, fIdx) => (
                      <li key={fIdx} className="text-sm text-muted-foreground flex items-center">
                        <span className="text-primary mr-2">›</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.stack.map((tech, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 font-mono text-xs rounded-full border border-border bg-background">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-4 pt-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-medium hover:text-primary transition-colors">
                    <GithubIcon className="mr-2 h-5 w-5" />
                    Source
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-medium hover:text-accent transition-colors">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Live Demo
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
