import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="w-full max-w-4xl mx-auto flex h-16 items-center justify-between">
          <div className="font-bold text-xl">
            <Link href="/">Wesley Wong</Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#education" className="text-sm font-medium hover:text-primary transition-colors">
              Education
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:text-primary transition-colors">
              Experience
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#deployment" className="text-sm font-medium hover:text-primary transition-colors">
              Deployment
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
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
          </div>
        </div>
      </header>

      <main className="container py-8">
        {/* Hero Section */}
        <section className="py-12 md:py-24 lg:py-32 flex flex-col items-center text-center">
          <div className="space-y-4 max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Wesley Wong</h1>
            <h2 className="text-2xl text-primary font-semibold">Software Engineer & Site Reliability Engineer</h2>
            <p className="text-lg text-muted-foreground max-w-[600px] mx-auto">
              SJSU Software Engineering student with experience in backend development, DevOps, monitoring systems, and cloud infrastructure.
              Currently working on SRE practices and building scalable applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild>
                <Link href="#contact">Contact Me</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#experience">View Experience</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 scroll-mt-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">About</h2>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                <p className="text-lg">
                  I&apos;m a Software Engineering student at San Jose State University focused on DevOps, Site Reliability
                  Engineering, and Backend Development.
                </p>
                <p>
                  My experience includes building monitoring systems with Prometheus and Grafana, implementing CI/CD
                  pipelines, working with cloud infrastructure, and developing scalable backend services using Python, Go, and Node.js.
                </p>
                <p>
                  I enjoy working on infrastructure problems, building systems that help teams deploy software more
                  reliably, and creating robust backend services with clean architecture and high performance. Currently learning more about Kubernetes, observability, cloud-native technologies, and distributed systems.
                </p>
              </div>
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Current Focus</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Site Reliability Engineering practices</li>
                  <li>• Cloud infrastructure and automation</li>
                  <li>• Monitoring and observability</li>
                  <li>• Container orchestration with Kubernetes</li>
                  <li>• Infrastructure as Code</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-12 scroll-mt-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">Education</h2>
            <Card>
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
                    <Badge>Expected May 2026</Badge>
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
            </Card>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12 scroll-mt-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">Experience</h2>
            <div className="space-y-6">
              {/* SJSU SCE Society */}
              <Card>
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
                        <h3 className="text-xl font-bold">Software Engineering / Site Reliability Engineering Intern</h3>
                        <p className="text-primary font-semibold">SJSU Software and Computer Engineering Society</p>
                        <p className="text-sm text-muted-foreground">San Jose, CA</p>
                      </div>
                    </div>
                    <Badge variant="outline">Dec 2023 – Present</Badge>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>
                      • Taught undergraduates about site reliability engineering (SRE) practices using Docker,
                      Prometheus, and Grafana
                    </li>
                    <li>
                      • Responded to Prometheus AlertManager alerts for an on-prem Ubuntu server, reducing mean time to
                      recovery (MTTR) by 30%
                    </li>
                    <li>
                      • Converted Grafana JSON dashboards to grafanalib dashboards-as-code, saving 10 hours a month on
                      configuration
                    </li>
                    <li>
                      • Built a custom GitOps solution for docker-compose using FastAPI, improving reliability and
                      reducing deploy times by 80%
                    </li>
                    <li>
                      • Built a YouTube streaming service using FFmpeg and FastAPI, allowing users to stream videos directly to the club room&apos;s Raspberry Pi
                    </li>
                    <li>
                      • Built a inventory management system using FastAPI and SQLite, allowing users to manage the club room&apos;s inventory
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="secondary">Docker</Badge>
                    <Badge variant="secondary">Prometheus</Badge>
                    <Badge variant="secondary">Grafana</Badge>
                    <Badge variant="secondary">FastAPI</Badge>
                    <Badge variant="secondary">GitOps</Badge>
                    <Badge variant="secondary">SRE</Badge>
                  </div>
                </CardContent>
              </Card>
              {/* Ego */}
              <Card>
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
                    <Badge variant="outline">Dec 2024 – Feb 2025</Badge>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>
                      • Implemented Cartesia AI Python pipeline in video games to improve speech patterns and increase
                      player retention by 50%
                    </li>
                    <li>
                      • Created a QA agent using Claude 3.5 Sonnet computer control to automate testing, enhancing error
                      detection for clients
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">AI/ML</Badge>
                    <Badge variant="secondary">Claude 3.5</Badge>
                    <Badge variant="secondary">QA Automation</Badge>
                  </div>
                </CardContent>
              </Card>

              

              {/* SJSU College of Engineering */}
              <Card>
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
                    <Badge variant="outline">May 2024 – Aug 2024</Badge>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>
                      • Created a printer monitoring tool using SNMP and FastAPI used by 300+ people, reducing mean time
                      to detect (MTTD) by 50%
                    </li>
                    <li>
                      • Utilized multithreading to send SNMP requests to the printers and handle a web server using
                      FastAPI
                    </li>
                    <li>
                      • Reduced API latency by optimizing Prometheus metrics collection, improving performance for
                      4,000+ monthly requests
                    </li>
                    <li>
                      • Built a Grafana dashboard to visualize request latency and device statuses, enabling monitoring
                      and readability
                    </li>
                    <li>
                      • Defined Prometheus AlertManager rules and sent alerts to a Discord server for when printers
                      aren&apos;t responding to SNMPwalk
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="secondary">SNMP</Badge>
                    <Badge variant="secondary">FastAPI</Badge>
                    <Badge variant="secondary">Prometheus</Badge>
                    <Badge variant="secondary">Grafana</Badge>
                    <Badge variant="secondary">Multithreading</Badge>
                    <Badge variant="secondary">Python</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 scroll-mt-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">Programming Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">Go</Badge>
                    <Badge variant="secondary">JavaScript</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">Java</Badge>
                    <Badge variant="secondary">Bash</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">Frameworks</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">FastAPI</Badge>
                    <Badge variant="secondary">Flask</Badge>
                    <Badge variant="secondary">Express.js</Badge>
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">Next.js</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">DevOps & Cloud</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">AWS</Badge>
                    <Badge variant="secondary">Kubernetes</Badge>
                    <Badge variant="secondary">Docker</Badge>
                    <Badge variant="secondary">Terraform</Badge>
                    <Badge variant="secondary">Pulumi</Badge>
                    <Badge variant="secondary">GitHub Actions</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">Monitoring & Observability</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Prometheus</Badge>
                    <Badge variant="secondary">Grafana</Badge>
                    <Badge variant="secondary">OpenTelemetry</Badge>
                    <Badge variant="secondary">AlertManager</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">Databases</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">MongoDB</Badge>
                    <Badge variant="secondary">PostgreSQL</Badge>
                    <Badge variant="secondary">Redis</Badge>
                    <Badge variant="secondary">SQLite</Badge>
                    <Badge variant="secondary">AWS DocumentDB</Badge>
                    <Badge variant="secondary">AWS RDS</Badge>
                    <Badge variant="secondary">AWS DynamoDB</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">Tools & Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Nginx</Badge>
                    <Badge variant="secondary">OAuth 2.0</Badge>
                    <Badge variant="secondary">SNMP</Badge>
                    <Badge variant="secondary">Discord APIs</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">Backend Development</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">REST APIs</Badge>
                    <Badge variant="secondary">gRPC</Badge>
                    <Badge variant="secondary">Microservices</Badge>
                    <Badge variant="secondary">Message Queues</Badge>
                    <Badge variant="secondary">WebSockets</Badge>
                    <Badge variant="secondary">Rate Limiting</Badge>
                    <Badge variant="secondary">Caching</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 scroll-mt-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">LangLearning</h3>
                  <p className="text-muted-foreground mb-4">
                    Language learning web app with FastAPI backend and NextJS frontend, deployed on AWS with 99.999%
                    uptime
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge>Python</Badge>
                    <Badge>AWS</Badge>
                    <Badge>React</Badge>
                    <Badge>TypeScript</Badge>
                    <Badge>DocumentDB</Badge>
                    <Badge>OAuth 2.0</Badge>
                  </div>
                  <div className="flex justify-between">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="#">
                        <Github className="mr-2 h-4 w-4" />
                        Source Code
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">ResumeReview</h3>
                  <p className="text-muted-foreground mb-4">
                    Scalable microservices social media platform with Terraform deployment on AWS EKS, reducing costs by
                    50%
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge>Python</Badge>
                    <Badge>PostgreSQL</Badge>
                    <Badge>Kubernetes</Badge>
                    <Badge>AWS</Badge>
                    <Badge>Terraform</Badge>
                    <Badge>Prometheus</Badge>
                  </div>
                  <div className="flex justify-between">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="#">
                        <Github className="mr-2 h-4 w-4" />
                        Source Code
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">URL Shortener</h3>
                  <p className="text-muted-foreground mb-4">
                    High-performance URL shortening service built with Go and Redis, featuring CI/CD pipeline and AWS
                    EKS deployment
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge>Go</Badge>
                    <Badge>Kubernetes</Badge>
                    <Badge>Terraform</Badge>
                    <Badge>GitHub Actions</Badge>
                    <Badge>AWS</Badge>
                    <Badge>Redis</Badge>
                  </div>
                  <div className="flex justify-between">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="#">
                        <Github className="mr-2 h-4 w-4" />
                        Source Code
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">DreamScape</h3>
                  <p className="text-muted-foreground mb-4">
                    AI-powered 3D model generation pipeline with 85% faster generation time. Winner of Best Use of AWS &
                    AI in XR
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge>Python</Badge>
                    <Badge>FastAPI</Badge>
                    <Badge>Unity</Badge>
                    <Badge>C#</Badge>
                    <Badge>Pulumi</Badge>
                    <Badge>AWS S3</Badge>
                  </div>
                  <div className="flex justify-between">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="#">
                        <Github className="mr-2 h-4 w-4" />
                        Source Code
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">INFERmary</h3>
                  <p className="text-muted-foreground mb-4">
                    Map-based healthcare visualization platform using React and MapboxJS. Recognized for FetchAI&apos;s
                    Honorable Mention
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge>Python</Badge>
                    <Badge>React</Badge>
                    <Badge>JavaScript</Badge>
                    <Badge>Fetch.AI Agents</Badge>
                    <Badge>Groq</Badge>
                    <Badge>MapboxJS</Badge>
                  </div>
                  <div className="flex justify-between">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="#">
                        <Github className="mr-2 h-4 w-4" />
                        Source Code
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Deployment Section */}
        <section id="deployment" className="py-12 scroll-mt-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">How This Site Was Deployed</h2>

            <div className="bg-muted/50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-2">Static Next.js → AWS S3 + CloudFront</h3>
              <p className="text-muted-foreground">
                This portfolio uses a static export approach with AWS infrastructure for hosting.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">1. Static Export Configuration</h3>
                  <div className="bg-gray-900 rounded-md p-4 mb-4">
                    <code className="text-green-400 text-sm">
                      {`// next.config.js
module.exports = {
  output: 'export',
  trailingSlash: true
};`}
                    </code>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Configured Next.js for static export to generate plain HTML/CSS/JS files.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">2. Infrastructure as Code</h3>
                  <div className="space-y-2 mb-4">
                    <Badge variant="outline">Terraform</Badge>
                    <Badge variant="outline">S3 Static Hosting</Badge>
                    <Badge variant="outline">CloudFront CDN</Badge>
                    <Badge variant="outline">Route 53 DNS</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Infrastructure defined as code for reproducible deployments.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">3. CI/CD Pipeline</h3>
                  <div className="bg-gray-900 rounded-md p-4 mb-4">
                    <code className="text-blue-400 text-sm">
                      {`# GitHub Actions
npm run build && npm run export
aws s3 sync out/ s3://bucket --delete
aws cloudfront create-invalidation`}
                    </code>
                  </div>
                  <p className="text-sm text-muted-foreground">Automatic deployment on every push to main branch.</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">4. Performance & Security</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">HTTPS via CloudFront</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Global CDN caching</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Gzip compression</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">Optimized for speed and security.</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">Why This Architecture?</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>
                  • <strong>Cost-effective:</strong> S3 hosting costs under $1/month
                </li>
                <li>
                  • <strong>Scalable:</strong> CloudFront handles traffic spikes automatically
                </li>
                <li>
                  • <strong>Reliable:</strong> 99.9% uptime with AWS infrastructure
                </li>
                <li>
                  • <strong>Fast:</strong> Global edge locations for low latency
                </li>
                <li>
                  • <strong>Secure:</strong> HTTPS by default, no server to maintain
                </li>
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              <Button variant="outline" asChild>
                <Link
                  href="https://github.com/weslayer/portfolio-infrastructure"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Infrastructure Code
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://github.com/weslayer/portfolio" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Source Code
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 scroll-mt-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">Contact</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
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
                  </div>
                </CardContent>
              </Card>

              <div className="bg-muted rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4">Looking for Opportunities</h3>
                <p className="mb-6">
                  I&apos;m interested in internships and entry-level positions in DevOps, SRE, and backend engineering. I
                  have experience with monitoring systems, cloud infrastructure, and building reliable applications.
                </p>
                <Button asChild>
                  <a href="mailto:wesleywong1245@yahoo.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Email
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
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
