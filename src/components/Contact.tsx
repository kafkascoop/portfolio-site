"use client";

import { motion } from "framer-motion";
import { Send, Mail, Terminal } from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>);

export function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-background border-t border-border overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay"></div>
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center max-w-2xl mx-auto"
        >
          <div className="inline-block p-4 rounded-full bg-primary/10 text-primary mb-6">
            <Mail className="h-8 w-8" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
            Initiate Connection
          </h2>
          <p className="text-muted-foreground font-mono">
            Execute open_socket() to establish communication. Whether you have a question, a project offer, or just want to say hi, my inbox is always open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-8"
          >
            <div className="border border-border bg-secondary/30 rounded-lg p-6 font-mono text-sm shadow-xl backdrop-blur-sm">
              <div className="flex items-center text-muted-foreground mb-4 border-b border-border/50 pb-2">
                <Terminal className="h-4 w-4 mr-2" />
                ~/.config/contact
              </div>
              <ul className="space-y-6">
                <li>
                  <div className="text-primary mb-1 text-xs uppercase">Email Address</div>
                  <a href="mailto:src.priyabrata@gmail.com" className="hover:text-accent transition-colors flex items-center break-all">
                    src.priyabrata@gmail.com
                  </a>
                </li>
                <li>
                  <div className="text-primary mb-1 text-xs uppercase">Phone</div>
                  <a href="tel:+919641079704" className="hover:text-accent transition-colors">
                    +91 9641079704
                  </a>
                </li>
                <li>
                  <div className="text-primary mb-1 text-xs uppercase">Location</div>
                  <div className="text-muted-foreground">
                    Rampurhat, Birbhum
                  </div>
                </li>
              </ul>
            </div>

            <div className="flex space-x-4">
              <a href="https://github.com/kafkascoop" target="_blank" rel="noopener noreferrer" className="p-3 border border-border bg-secondary/30 rounded-lg hover:border-primary hover:text-primary transition-all shadow-sm">
                <GithubIcon className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="p-3 border border-border bg-secondary/30 rounded-lg hover:border-primary hover:text-primary transition-all shadow-sm">
                <LinkedinIcon className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="p-3 border border-border bg-secondary/30 rounded-lg hover:border-primary hover:text-primary transition-all shadow-sm">
                <InstagramIcon className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="p-3 border border-border bg-secondary/30 rounded-lg hover:border-primary hover:text-primary transition-all shadow-sm">
                <TwitterIcon className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <form className="space-y-4 font-mono text-sm border border-border bg-background p-8 rounded-lg shadow-2xl relative overflow-hidden">
              {/* Decorative top bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-terminal-green" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-muted-foreground">--name</label>
                  <input 
                    id="name" 
                    type="text" 
                    className="w-full bg-secondary/50 border border-border rounded px-4 py-2 focus:outline-none focus:border-primary transition-colors text-foreground"
                    placeholder="Enter name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-muted-foreground">--email</label>
                  <input 
                    id="email" 
                    type="email" 
                    className="w-full bg-secondary/50 border border-border rounded px-4 py-2 focus:outline-none focus:border-primary transition-colors text-foreground"
                    placeholder="Enter email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-muted-foreground">--subject</label>
                <input 
                  id="subject" 
                  type="text" 
                  className="w-full bg-secondary/50 border border-border rounded px-4 py-2 focus:outline-none focus:border-primary transition-colors text-foreground"
                  placeholder="Subject line"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-muted-foreground">--message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full bg-secondary/50 border border-border rounded px-4 py-2 focus:outline-none focus:border-primary transition-colors resize-none text-foreground"
                  placeholder="Type your message here..."
                ></textarea>
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button" // Change to submit in real use
                className="w-full flex items-center justify-center space-x-2 bg-primary text-primary-foreground py-3 rounded font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
              >
                <Send className="h-4 w-4" />
                <span>Execute Transfer</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
