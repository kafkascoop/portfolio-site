"use client";

import { motion } from "framer-motion";
import { Server, Globe, Box, Terminal } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Linux Server Setup",
      icon: <Server className="h-8 w-8 text-primary" />,
      description: "Provisioning, securing, and optimizing Linux servers (Ubuntu, Fedora, Arch) for various workloads, ensuring stable uptime and performance.",
      tags: ["Security", "Hardening", "Optimization"]
    },
    {
      title: "Self-Hosted Solutions",
      icon: <Box className="h-8 w-8 text-accent" />,
      description: "Deployment of open-source applications and tools on private servers, offering data ownership and reduced operational costs.",
      tags: ["Docker", "Homelab", "Privacy"]
    },
    {
      title: "Website Deployment",
      icon: <Globe className="h-8 w-8 text-terminal-green" />,
      description: "Configuring web servers (Nginx/Apache), managing domains, setting up SSL certificates, and automating deployment pipelines.",
      tags: ["Nginx", "SSL/TLS", "DNS"]
    },
    {
      title: "Simple Websites for Pros",
      icon: <Terminal className="h-8 w-8 text-primary" />,
      description: "Building fast, SEO-optimized, and aesthetically pleasing static websites or landing pages for professionals and local businesses.",
      tags: ["Next.js", "Tailwind", "Responsive"]
    }
  ];

  return (
    <section id="services" className="py-24 relative bg-background border-t border-border">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 border-b border-border pb-4"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground flex items-center">
            <span className="text-primary mr-2">systemctl</span> list-units --type=service
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="group border border-border bg-secondary/20 p-6 rounded-lg hover:border-accent/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-background border border-border rounded-lg group-hover:bg-accent/10 transition-colors">
                  {service.icon}
                </div>
                <div className="text-xs font-mono text-terminal-green/80 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-terminal-green mr-2 animate-pulse" />
                  running
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {service.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono px-2 py-1 bg-background border border-border rounded text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
