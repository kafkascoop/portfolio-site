"use client";

import { useState, useEffect } from "react";
import { Terminal, Cpu, Wifi, Battery, Clock } from "lucide-react";

export function SystemStatus() {
  const [time, setTime] = useState("");
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: false }));
    };
    
    updateTime();
    const interval = setInterval(() => {
      updateTime();
      setUptime((prev) => prev + 1);
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const formatUptime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}h ${m}m ${s}s`;
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-1 text-[10px] sm:text-xs font-mono border-b border-border bg-background/80 backdrop-blur-md text-muted-foreground uppercase tracking-widest hidden md:flex">
      <div className="flex items-center space-x-4">
        <span className="flex items-center text-primary">
          <Terminal size={12} className="mr-1" /> root@priyabrata:~
        </span>
        <span className="flex items-center">
          <Cpu size={12} className="mr-1 text-accent" /> AVG LOAD: 0.14
        </span>
      </div>

      <div className="flex items-center justify-center font-semibold tracking-[0.2em] text-foreground/80 absolute left-1/2 -translate-x-1/2">
        <span className="text-primary mr-2">SYS_</span> PORTFOLIO_V_2.0
      </div>

      <div className="flex items-center space-x-4">
        <span className="flex items-center">
          <Wifi size={12} className="mr-1 text-terminal-green" /> ONLINE
        </span>
        <span className="flex items-center">
          <Battery size={12} className="mr-1 text-terminal-green" /> 100%
        </span>
        <span className="flex items-center whitespace-nowrap">
          <Clock size={12} className="mr-1" /> UPTIME: {formatUptime(uptime)} | {time}
        </span>
      </div>
    </div>
  );
}
