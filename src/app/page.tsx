"use client"

import { AnimatedBadge } from "@/components/animated-badge"
import { Button } from "@/components/ui/button"
import { CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin, Phone, FileText } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ResumeViewer from "@/components/resume-viewer"
import { AnimatedGradient } from "@/components/animated-gradient"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileNav } from "@/components/mobile-nav"
import { SectionHeading } from "@/components/section-heading"
import { AnimatedCard } from "@/components/animated-card"
import { motion } from "framer-motion"
import { ScrollProgress, FadeInOnScroll } from "@/components/scroll-animations"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center overflow-x-hidden">
      <ScrollProgress />
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="w-full max-w-4xl mx-auto flex h-16 items-center justify-between px-4 md:px-0">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-xl">
            <Link href="/" className="hover:text-primary transition-colors">Wesley Wong</Link>
          </motion.div>
          <nav className="hidden md:flex gap-6">
            {[
              { href: "#about", label: "About" },
              { href: "#resume", label: "Resume" },
              { href: "#experience", label: "Experience" },
              { href: "#education", label: "Education" },
              { href: "#skills", label: "Skills" },
              { href: "#projects", label: "Projects" },
              { href: "#contact", label: "Contact" },
            ].map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <Link href={item.href} className="text-sm font-medium hover:text-primary transition-colors">
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="hidden md:block"
            >
              <Link href="https://github.com/weslayer" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="hidden md:block"
            >
              <Link href="https://linkedin.com/in/weslayer" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
            </motion.div>
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>
      </header>

      <main className="container py-8 px-4 md:px-8">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 flex flex-col items-center text-center overflow-hidden">
          <AnimatedGradient />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative space-y-6 max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 dark:from-primary dark:to-blue-400">
                Wesley Wong
              </h1>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-2xl md:text-3xl font-semibold"
            >
              Software Engineer & Site Reliability Engineer
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg text-muted-foreground max-w-[600px] mx-auto"
            >
              SJSU Software Engineering student with experience in backend development, DevOps, monitoring systems, and cloud infrastructure.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap justify-center gap-4 pt-4"
            >
              <Button 
                asChild 
                size="lg" 
                className="rounded-full text-base px-6 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow"
              >
                <Link href="#contact">Contact Me</Link>
              </Button>
              <Button 
                variant="outline" 
                asChild 
                size="lg" 
                className="rounded-full text-base px-6 border-primary/30 hover:bg-primary/10"
              >
                <Link href="#resume">View Resume</Link>
              </Button>
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 scroll-mt-16">
          <div className="container">
            <SectionHeading>About</SectionHeading>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <FadeInOnScroll>
                <div className="space-y-4">
                  <p className="text-lg">
                    I&apos;m a Software Engineering student at San Jose State University focused on DevOps, Site Reliability
                    Engineering, and Backend Development.
                  </p>
                  <p>
                    My experience includes building monitoring systems with Prometheus and Grafana, implementing CI/CD
                    pipelines, working with cloud infrastructure, and developing backend tools using Python.
                  </p>
                  <p>
                    I&apos;m currently an Officer at SJSU&apos;s <a href="https://sce.sjsu.edu/" className="text-blue-500 hover:text-blue-700 font-medium transition-colors">Software and Computer Engineering Society</a>, where I teach undergraduates about development and SRE practices using Docker, Prometheus, and Grafana. 
                  </p>
                  <p>
                    I enjoy learning about infrastructure problems, building systems that help teams deploy software more
                    reliably, and creating robust backend services with clean architecture and high performance. 
                  </p>
                </div>
              </FadeInOnScroll>
              <FadeInOnScroll delay={0.2}>
                <div className="bg-muted/60 backdrop-blur-sm rounded-lg p-6 border border-border/30 shadow-lg dark:bg-slate-900/90">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <span className="bg-blue-500/20 rounded-full p-1 text-blue-500 dark:text-blue-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb">
                        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
                        <path d="M9 18h6"/>
                        <path d="M10 22h4"/>
                      </svg>
                    </span>
                    Current Focus
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                    <div className="flex items-start gap-3 group">
                      <div className="bg-blue-500/10 rounded-full p-1.5 text-blue-500 dark:text-blue-400 group-hover:bg-blue-500/20 transition-colors flex-shrink-0 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check">
                          <path d="M20 13c0 5-3.5 7.5-8 8.5-4.5-1-8-3.5-8-8.5V6a2 2 0 0 1 2-2c2.2-.1 4.3-1.2 6-3 1.7 1.8 3.8 2.9 6 3a2 2 0 0 1 2 2Z"/>
                          <path d="m9 12 2 2 4-4"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium leading-tight">Site Reliability Engineering (SRE)</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 group">
                      <div className="bg-blue-500/10 rounded-full p-1.5 text-blue-500 dark:text-blue-400 group-hover:bg-blue-500/20 transition-colors flex-shrink-0 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cloud">
                          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium leading-tight">Cloud infrastructure and automation (AWS)</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 group">
                      <div className="bg-blue-500/10 rounded-full p-1.5 text-blue-500 dark:text-blue-400 group-hover:bg-blue-500/20 transition-colors flex-shrink-0 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-activity">
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium leading-tight">Monitoring and observability</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 group">
                      <div className="bg-blue-500/10 rounded-full p-1.5 text-blue-500 dark:text-blue-400 group-hover:bg-blue-500/20 transition-colors flex-shrink-0 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-boxes">
                          <path d="M7 21.5H4.5A1.5 1.5 0 0 1 3 20V7.5"/>
                          <path d="M14 3v1.5"/>
                          <path d="M14 17V10"/>
                          <path d="M16.5 20v1.5"/>
                          <path d="M18 12V4.5A1.5 1.5 0 0 0 16.5 3H4.5A1.5 1.5 0 0 0 3 4.5V6"/>
                          <path d="M7 10v10.5a1.5 1.5 0 0 0 1.5 1.5h12a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 20.5 7H14"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium leading-tight">Kubernetes</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 group">
                      <div className="bg-blue-500/10 rounded-full p-1.5 text-blue-500 dark:text-blue-400 group-hover:bg-blue-500/20 transition-colors flex-shrink-0 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code">
                          <polyline points="16 18 22 12 16 6"/>
                          <polyline points="8 6 2 12 8 18"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium leading-tight">Infrastructure as Code</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 group">
                      <div className="bg-blue-500/10 rounded-full p-1.5 text-blue-500 dark:text-blue-400 group-hover:bg-blue-500/20 transition-colors flex-shrink-0 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers">
                          <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/>
                          <path d="m22 12.7-9.04 4.1c-.27.1-.55.1-.82 0L3.1 12.7a1 1 0 0 0-1.1 1.4L2 14l9 4a2 2 0 0 0 2 0l9-4v-.3c0-.6-.4-1-1-1Z"/>
                          <path d="m22 17.5-9.04 4.1c-.27.1-.55.1-.82 0L3.1 17.5a1 1 0 0 0-1.1 1.4L2 19l9 4a2 2 0 0 0 2 0l9-4v-.5c0-.6-.4-1-1-1Z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium leading-tight">Scalable backend architectures</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 group">
                      <div className="bg-blue-500/10 rounded-full p-1.5 text-blue-500 dark:text-blue-400 group-hover:bg-blue-500/20 transition-colors flex-shrink-0 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-git-branch">
                          <line x1="6" x2="6" y1="3" y2="15"/>
                          <circle cx="18" cy="6" r="3"/>
                          <circle cx="6" cy="18" r="3"/>
                          <path d="M18 9a9 9 0 0 1-9 9"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium leading-tight">GitOps workflows</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInOnScroll>
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="py-16 scroll-mt-16">
          <div className="container">
            <SectionHeading>Resume</SectionHeading>
            <ResumeViewer />
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 scroll-mt-16">
          <div className="container">
            <SectionHeading>Experience</SectionHeading>
            <div className="space-y-6">
              {/* Bloxshield Remote */}
              <AnimatedCard>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-muted flex items-center justify-center p-1">
                        <svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                          <path d="M163.188 122.5V28H211.765C217.447 28 222.43 29.0111 226.711 31.0333C230.993 33.0556 234.34 35.8944 236.754 39.55C239.167 43.1278 240.373 47.2889 240.373 52.0333C240.373 56.7778 239.128 60.8222 236.637 64.1667C234.146 67.4333 230.759 69.8833 226.478 71.5167V71.9833C230.137 72.9167 233.328 74.4722 236.053 76.65C238.855 78.8278 241.035 81.5111 242.592 84.7C244.227 87.8889 245.044 91.5056 245.044 95.55C245.044 100.917 243.721 105.622 241.074 109.667C238.427 113.711 234.768 116.861 230.098 119.117C225.505 121.372 220.094 122.5 213.866 122.5H163.188ZM182.922 105.233H210.363C215.112 105.233 218.771 104.222 221.34 102.2C223.909 100.1 225.193 97.1056 225.193 93.2167C225.193 89.3278 223.909 86.3722 221.34 84.35C218.849 82.3278 215.229 81.3167 210.48 81.3167H182.922V105.233ZM182.922 65.6833H208.962C212.699 65.6833 215.54 64.8278 217.486 63.1167C219.51 61.3278 220.522 58.7611 220.522 55.4167C220.522 52.0722 219.51 49.5444 217.486 47.8333C215.54 46.1222 212.699 45.2667 208.962 45.2667H182.922V65.6833Z" fill="currentColor" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Software Engineering / DevOps Intern</h3>
                        <p className="text-primary font-semibold">Bloxshield</p>
                        <p className="text-sm text-muted-foreground">Remote</p>
                      </div>
                    </div>
                    <AnimatedBadge variant="outline" className="ml-2">June 2025 – Present</AnimatedBadge>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>• Deployed an AWS ECS Fargate cluster (5+ services) using Terraform, with fully automated Github Actions CI/CD</li>
                    <li>• Processed 2M+ Roblox joins/day via FastAPI + SQS AI inference avatar filter, auto-blocking 3.5K violators daily</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["AWS ECS", "Terraform", "GitHub Actions", "FastAPI", "SQS"].map((tech, index) => (
                      <AnimatedBadge key={tech} variant="secondary" delay={0.05 * index}>{tech}</AnimatedBadge>
                    ))}
                  </div>
                </CardContent>
              </AnimatedCard>

              {/* SJSU SCE Society */}
              <AnimatedCard>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-muted">
                        <Image
                          src="/images/sce.png"
                          alt="SJSU SCE Society Logo"
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Software Engineering / SRE Intern</h3>
                        <p className="text-primary font-semibold">SJSU Software and Computer Engineering Society</p>
                        <p className="text-sm text-muted-foreground">San Jose, CA</p>
                      </div>
                    </div>
                    <AnimatedBadge variant="outline" className="ml-2">Dec 2023 – Present</AnimatedBadge>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>• Taught undergraduates about site reliability engineering (SRE) practices using Docker, Prometheus, and Grafana</li>
                    <li>• Built a custom GitOps solution for docker-compose using FastAPI, improving reliability and reducing deploy times by 80%</li>
                    <li>• Converted Grafana JSON dashboards to grafanalib dashboards-as-code, saving 10 hours a month on configuration</li>
                    <li>• Responded to Prometheus AlertManager alerts for an on-prem Ubuntu server, reducing mean time to recovery (MTTR) by 30%</li>
                    <li>• Built a YouTube streaming service using FFmpeg and FastAPI, allowing users to stream videos directly to the club room&apos;s Raspberry Pi</li>
                    <li>• Built an inventory management system using FastAPI and SQLite, allowing users to manage the club room&apos;s inventory</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["Docker", "Prometheus", "Grafana", "FastAPI", "GitOps", "SRE"].map((tech, index) => (
                      <AnimatedBadge key={tech} variant="secondary" delay={0.05 * index}>{tech}</AnimatedBadge>
                    ))}
                  </div>
                </CardContent>
              </AnimatedCard>

              {/* Ego */}
              <AnimatedCard>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-muted">
                        <Image
                          src="/images/ego.png"
                          alt="Ego Logo"
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Software Engineering Intern</h3>
                        <p className="text-primary font-semibold">Ego (YC W24)</p>
                        <p className="text-sm text-muted-foreground">San Francisco, CA</p>
                      </div>
                    </div>
                    <AnimatedBadge variant="outline" className="ml-2">Dec 2024 – Feb 2025</AnimatedBadge>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>• Implemented Cartesia AI Python pipeline in video games to improve speech patterns and increase player retention by 50%</li>
                    <li>• Created a QA agent using Claude 3.5 Sonnet computer control to automate testing, enhancing error detection for clients</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["Python", "AI/ML", "Claude 3.5", "QA Automation"].map((tech, index) => (
                      <AnimatedBadge key={tech} variant="secondary" delay={0.05 * index}>{tech}</AnimatedBadge>
                    ))}
                  </div>
                </CardContent>
              </AnimatedCard>

              {/* SJSU College of Engineering */}
              <AnimatedCard>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-muted">
                        <Image
                          src="/images/spartan.png"
                          alt="SJSU College of Engineering Logo"
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Software Engineering Intern</h3>
                        <p className="text-primary font-semibold">SJSU College of Engineering</p>
                        <p className="text-sm text-muted-foreground">San Jose, CA</p>
                      </div>
                    </div>
                    <AnimatedBadge variant="outline" className="ml-2">May 2024 – Aug 2024</AnimatedBadge>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>• Created a printer monitoring tool using SNMP and FastAPI used by 300+ people, reducing mean time to detect (MTTD) by 50%</li>
                    <li>• Utilized multithreading to send SNMP requests to the printers and handle a web server using FastAPI</li>
                    <li>• Reduced API latency by optimizing Prometheus metrics collection, improving performance for 4,000+ monthly requests</li>
                    <li>• Built a Grafana dashboard to visualize request latency and device statuses, enabling monitoring and readability</li>
                    <li>• Defined Prometheus AlertManager rules and sent alerts to a Discord server for when printers aren&apos;t responding to SNMPwalk</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["SNMP", "FastAPI", "Prometheus", "Grafana", "Multithreading", "Python"].map((tech, index) => (
                      <AnimatedBadge key={tech} variant="secondary" delay={0.05 * index}>{tech}</AnimatedBadge>
                    ))}
                  </div>
                </CardContent>
              </AnimatedCard>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16 scroll-mt-16">
          <div className="container">
            <SectionHeading>Education</SectionHeading>
            <AnimatedCard>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-muted">
                      <Image
                        src="/images/spartan.png"
                        alt="San Jose State University Logo"
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">San Jose State University</h3>
                      <p className="text-muted-foreground">Bachelor of Science - Software Engineering</p>
                      <p className="text-sm text-muted-foreground mt-1">San Jose, CA</p>
                    </div>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <AnimatedBadge variant="default">Expected May 2026</AnimatedBadge>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold">Relevant Coursework:</h4>
                  <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    <span>• Data Structures and Algorithms</span>
                    <span>• Object-Oriented Programming</span>
                    <span>• Software Engineering</span>
                    <span>• Discrete Mathematics</span>
                    <span>• Engineering Statistics</span>
                    <span>• Calculus 3 & Differential Equations</span>
                  </div>
                </div>
              </CardContent>
            </AnimatedCard>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 scroll-mt-16">
          <div className="container">
            <SectionHeading>Skills</SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <AnimatedCard>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">Programming Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "Go", "JavaScript", "TypeScript", "Java", "Bash", "SQL"].map((skill, index) => (
                      <AnimatedBadge key={skill} variant="secondary" delay={0.1 * index}>{skill}</AnimatedBadge>
                    ))}
                  </div>
                </CardContent>
              </AnimatedCard>

              <AnimatedCard>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">DevOps & Cloud</h3>
                  <div className="flex flex-wrap gap-2">
                    {["AWS", "AWS ECS", "Fargate", "Kubernetes", "Docker", "Terraform", "Pulumi", "GitHub Actions", "Prometheus", "Grafana", "AlertManager"].map((skill, index) => (
                      <AnimatedBadge key={skill} variant="secondary" delay={0.05 * index}>{skill}</AnimatedBadge>
                    ))}
                  </div>
                </CardContent>
              </AnimatedCard>

              <AnimatedCard>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">Frameworks & Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {["FastAPI", "Flask", "Express.js", "React", "Node.js", "Next.js", "PostgreSQL", "TimescaleDB", "MongoDB", "Redis", "SQS"].map((skill, index) => (
                      <AnimatedBadge key={skill} variant="secondary" delay={0.05 * index}>{skill}</AnimatedBadge>
                    ))}
                  </div>
                </CardContent>
              </AnimatedCard>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 scroll-mt-16">
          <div className="container">
            <SectionHeading>Projects</SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatedCard>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div>
                        <h3 className="text-xl font-bold">TimescaleDB Monitoring</h3>
                      </div>
                    </div>
                    <AnimatedBadge variant="outline" className="ml-2">August 2025</AnimatedBadge>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>• Implemented parallel batch SQL copying using multithreading and psycopg2, improving ingestion times by 80%</li>
                    <li>• Engineered Grafana dashboards using PromQL with Node Exporter, Postgres Exporter, and cAdvisor, to capture bottlenecks</li>
                    <li>• Integrated alert rules in Prometheus Alertmanager to proactively detect excessive disk I/O usage and query latency</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["Python", "Grafana", "Prometheus", "TimescaleDB", "PostgreSQL", "SQL", "psycopg2", "PromQL"].map((tech, index) => (
                      <AnimatedBadge key={tech} variant="default" delay={0.05 * index}>{tech}</AnimatedBadge>
                    ))}
                  </div>
                </CardContent>
              </AnimatedCard>
              <AnimatedCard>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">LangLearning</h3>
                  <p className="text-muted-foreground mb-4">
                    Language learning web app with FastAPI backend and NextJS frontend, deployed on AWS with 99.999%
                    uptime
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Python", "AWS", "React", "TypeScript", "DocumentDB", "OAuth 2.0"].map((tech, index) => (
                      <AnimatedBadge key={tech} variant="default" delay={0.05 * index}>{tech}</AnimatedBadge>
                    ))}
                  </div>
                </CardContent>
              </AnimatedCard>

              <AnimatedCard>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">ResumeReview</h3>
                  <p className="text-muted-foreground mb-4">
                    Scalable microservices social media platform with Terraform deployment on AWS EKS, reducing costs by
                    50%
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Python", "PostgreSQL", "Kubernetes", "AWS", "Terraform", "Prometheus"].map((tech, index) => (
                      <AnimatedBadge key={tech} variant="default" delay={0.05 * index}>{tech}</AnimatedBadge>
                    ))}
                  </div>
                </CardContent>
              </AnimatedCard>

              <AnimatedCard>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">URL Shortener</h3>
                  <p className="text-muted-foreground mb-4">
                    High-performance URL shortening service built with Go and Redis, featuring CI/CD pipeline and AWS
                    EKS deployment
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Go", "Kubernetes", "Terraform", "GitHub Actions", "AWS", "Redis"].map((tech, index) => (
                      <AnimatedBadge key={tech} variant="default" delay={0.05 * index}>{tech}</AnimatedBadge>
                    ))}
                  </div>
                </CardContent>
              </AnimatedCard>

              <AnimatedCard>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">DreamScape</h3>
                  <p className="text-muted-foreground mb-4">
                    AI-powered 3D model generation pipeline with 85% faster generation time. Winner of Best Use of AWS &
                    AI in XR
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Python", "FastAPI", "Unity", "C#", "Pulumi", "AWS S3"].map((tech, index) => (
                      <AnimatedBadge key={tech} variant="default" delay={0.05 * index}>{tech}</AnimatedBadge>
                    ))}
                  </div>
                </CardContent>
              </AnimatedCard>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 scroll-mt-16">
          <div className="container">
            <SectionHeading>Contact</SectionHeading>
            <div className="grid md:grid-cols-2 gap-8">
              <AnimatedCard>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <a href="mailto:wesleywong1245@yahoo.com" className="hover:text-primary transition-colors">
                        wesleywong1245@yahoo.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <a href="tel:+14156014010" className="hover:text-primary transition-colors">
                        (415) 601-4010
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>San Leandro, CA</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Linkedin className="h-5 w-5 text-primary" />
                      <a
                        href="https://linkedin.com/in/weslayer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        linkedin.com/in/weslayer
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Github className="h-5 w-5 text-primary" />
                      <a
                        href="https://github.com/weslayer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        github.com/weslayer
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-primary" />
                      <a
                        href="/WesleyResume2027.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                        download
                      >
                        Download Resume
                      </a>
                    </div>
                  </div>
                </CardContent>
              </AnimatedCard>

              <FadeInOnScroll delay={0.2}>
                <div className="bg-muted/60 backdrop-blur-sm rounded-lg p-8 border border-border/30 shadow-lg">
                  <h3 className="text-xl font-bold mb-4">Looking for Opportunities</h3>
                  <p className="mb-6">
                    I&apos;m interested in internships and entry-level positions in DevOps, SRE, and backend engineering. I
                    have experience with monitoring systems, cloud infrastructure, and building reliable applications.
                  </p>
                  <Button 
                    asChild 
                    className="rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow"
                  >
                    <a href="mailto:wesleywong1245@yahoo.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Send Email
                    </a>
                  </Button>
                </div>
              </FadeInOnScroll>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/30 py-8 mt-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-muted/10 -z-10"></div>
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-8">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Wesley Wong. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/weslayer" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/weslayer" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:wesleywong1245@yahoo.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}