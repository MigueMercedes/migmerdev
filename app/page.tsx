import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Phone, MapPin } from "lucide-react"

import {OptimizedImage} from "@/components/optimized-image"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { Timeline } from "@/components/timeline"
import { ContactForm } from "@/components/contact-form"
import { CreativeHero } from "@/components/creative-hero"
import { FloatingNav } from "@/components/floating-nav"
import { MouseFollower } from "@/components/mouse-follower"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import Image from "next/image"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-charcoal via-zinc-900 to-black text-ash overflow-hidden">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-crimson rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-mustard rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-cobalt rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
                <span className="relative z-10">Full Stack Software Engineer</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-crimson/20 to-mustard/20 animate-pulse"></span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block">Hi, I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-crimson to-mustard">
                Miguel Mercedes
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-[600px]">
              Proactive Software Engineer with 3+ years of experience specializing in modern web applications using
              Next.js, React, and Node.js. Passionate about delivering high-quality, efficient solutions.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="relative overflow-hidden group bg-gradient-to-r from-crimson to-mustard border-0 text-ash">
                <span className="relative z-10 flex items-center">
                  View Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-mustard to-crimson opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Button>
              <Button
                variant="outline"
                className="border-zinc-700 text-zinc-300 hover:text-ash hover:border-zinc-500 bg-transparent"
                asChild
              >
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <Link href="https://github.com/MigueMercedes/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-charcoal/50 hover:bg-charcoal text-zinc-400 hover:text-ash"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/miguel-mercedes/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-charcoal/50 hover:bg-charcoal text-zinc-400 hover:text-ash"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:lmyguel0324@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-charcoal/50 hover:bg-charcoal text-zinc-400 hover:text-ash"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <CreativeHero />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-crimson rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-cobalt rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="About Me" subtitle="My background and journey" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-crimson/20 to-mustard/20 blur-xl opacity-70"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800">
                <Image
                  src="/me.jpg"
                  alt="Miguel Mercedes"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  quality={100}
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAAcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium">Available for work</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <GlassmorphicCard>
                <p className="text-lg text-zinc-300">
                  I'm a passionate Full Stack Software Engineer from the Dominican Republic with over 3 years of
                  experience developing high-performance, scalable web applications. I specialize in modern frontend
                  frameworks like Next.js, React.js, and Angular, and backend technologies such as Node.js, Express,
                  Nest.js, and .NET Core.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  Currently, I lead frontend and fullstack initiatives at Grupo Read, a healthcare group with 95+ years
                  of experience. I focus on building scalable solutions, refactoring core systems, and implementing
                  health-related platforms while maintaining rigorous code review standards and working in Agile (Scrum)
                  environments.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  I'm passionate about clean code, performance optimization, and delivering solutions that generate
                  real-world impact. I continuously learn new technologies and stay committed to writing efficient,
                  maintainable software.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Name</div>
                    <div className="font-medium">Miguel Angel Mercedes Lopez</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">lmyguel0324@gmail.com</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Location</div>
                    <div className="font-medium">Santo Domingo, Dominican Republic</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Availability</div>
                    <div className="font-medium text-green-500">Open to opportunities</div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button
                    className="bg-gradient-to-r from-crimson to-mustard hover:from-mustard hover:to-crimson text-ash"
                    asChild
                  >
                    <Link
                      href="https://drive.google.com/file/d/1Zhuc_5UsqwVcHJe5HFJyWbFGvvtsTuRh/view?usp=sharing"
                      target="_blank"
                    >
                      Download Resume
                    </Link>
                  </Button>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-cobalt rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-crimson rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="My Skills" subtitle="Technologies I work with" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
            <SkillBadge name="JavaScript" level={95} />
            <SkillBadge name="TypeScript" level={95} />
            <SkillBadge name="C#" level={85} />
            <SkillBadge name="Next.js" level={95} />
            <SkillBadge name="React.js" level={95} />
            <SkillBadge name="Angular" level={85} />
            <SkillBadge name="Node.js" level={90} />
            <SkillBadge name="Express.js" level={90} />
            <SkillBadge name="Nest.js" level={85} />
            <SkillBadge name=".NET Core" level={80} />
            <SkillBadge name="PostgreSQL" level={90} />
            <SkillBadge name="MongoDB" level={85} />
            <SkillBadge name="MySQL" level={80} />
            <SkillBadge name="Prisma" level={85} />
            <SkillBadge name="Drizzle ORM" level={85} />
            <SkillBadge name="TypeORM" level={80} />
            <SkillBadge name="TailwindCSS" level={95} />
            <SkillBadge name="Redux" level={90} />
            <SkillBadge name="React Query" level={85} />
            <SkillBadge name="Docker" level={75} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-mustard rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-cobalt rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Featured Projects" subtitle="Some of my recent work" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <ProjectCard
              title="Center Admin"
              description="Complete appointment management platform for beauty and wellness centers with admin panel, service management, scheduling, and client booking system."
              tags={["Next.js 15", "Drizzle ORM", "Shadcn UI", "TypeScript", "PostgreSQL"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://example.com"
              repoUrl="https://github.com/MigueMercedes/"
            />
            <ProjectCard
              title="KYC System"
              description="Complete Know Your Customer system built from scratch with document verification, identity validation, and compliance features for financial services."
              tags={["React", "TS-Rest", "Node.js", "PostgreSQL", "Express"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://example.com"
              repoUrl="https://github.com/MigueMercedes/"
            />
            <ProjectCard
              title="Healthcare Platform"
              description="Scalable health-related internal and external platforms for Grupo Read with patient management, appointment scheduling, and medical records."
              tags={["Next.js", "Nest.js", "PostgreSQL", "Molecular.js", "Docker"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://example.com"
              repoUrl="https://github.com/MigueMercedes/"
            />
            <ProjectCard
              title="Provider Management System"
              description="Internal and external healthcare provider system for Vital with comprehensive provider onboarding, management, and integration capabilities."
              tags={["React", "Node.js", "PostgreSQL", "Redux", "TailwindCSS"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://example.com"
              repoUrl="https://github.com/MigueMercedes/"
            />
            <ProjectCard
              title="Legacy System Refactor"
              description="Complete refactoring of core legacy systems at Grupo Read, modernizing architecture and improving performance and maintainability."
              tags={["Next.js", "TypeScript", "PostgreSQL", "System Architecture"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://example.com"
              repoUrl="https://github.com/MigueMercedes/"
            />
            <ProjectCard
              title="Full Stack Platform"
              description="Enterprise-level platform built with modern stack including React Query, Redux, and comprehensive testing suite for Media Revolution."
              tags={["React", "Redux", "React Query", "TailwindCSS", "Vite"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://example.com"
              repoUrl="https://github.com/MigueMercedes/"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-crimson rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-cobalt rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Work Experience" subtitle="My professional journey" />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-mustard rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-crimson rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Get In Touch" subtitle="Let's work together" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-charcoal flex items-center justify-center">
                    <Mail className="h-5 w-5 text-crimson" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">lmyguel0324@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-charcoal flex items-center justify-center">
                    <Phone className="h-5 w-5 text-crimson" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Phone</div>
                    <div className="font-medium">+1 849 220 2444</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-charcoal flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-crimson" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Location</div>
                    <div className="font-medium">Santo Domingo, Dominican Republic</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-charcoal flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-crimson" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">LinkedIn</div>
                    <div className="font-medium">linkedin.com/in/miguel-mercedes</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-charcoal flex items-center justify-center">
                    <Github className="h-5 w-5 text-crimson" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">GitHub</div>
                    <div className="font-medium">github.com/MigueMercedes</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-800">
                <h4 className="text-lg font-medium mb-4">Current Status</h4>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span>Available for freelance work and full-time opportunities</span>
                </div>
              </div>
            </GlassmorphicCard>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-crimson to-mustard">Miguel</span>
              <span className="text-ash">Mercedes</span>
            </Link>
            <p className="text-sm text-zinc-500 mt-2">
              © {new Date().getFullYear()} Miguel Mercedes. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/MigueMercedes/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-charcoal/50 hover:bg-charcoal text-zinc-400 hover:text-ash"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/miguel-mercedes/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-charcoal/50 hover:bg-charcoal text-zinc-400 hover:text-ash"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:lmyguel0324@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-charcoal/50 hover:bg-charcoal text-zinc-400 hover:text-ash"
              >
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
