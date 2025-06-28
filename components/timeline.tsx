"use client"

import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

const experiences = [
  {
    title: "Software Engineer (Lead)",
    company: "Grupo Read",
    period: "September 2024 - Present",
    description:
      "Leading Next.js development for scalable web applications in a healthcare group with 95+ years of experience. Conducting code reviews, collaborating in Scrum teams, and implementing health-related platforms. Achieved 20% reduction in load times through optimized Next.js components.",
  },
  {
    title: "Full Stack Developer",
    company: "Media Revolution, SRL",
    period: "September 2023 - August 2024",
    description:
      "Specialized in frontend development using React and backend development with Node.js, Express, ts-rest, PostgreSQL. Developed a complete KYC (Know Your Customer) system from scratch using modern tools like Redux, React Query, Vite, and Tailwind CSS.",
  },
  {
    title: "Independent Developer",
    company: "Freelance Projects",
    period: "2023 - Present",
    description:
      "Developed Center Admin, a comprehensive appointment management platform for beauty and wellness centers using Next.js 15, Drizzle ORM, and Shadcn UI. Built complete authentication, admin panel, and booking system.",
  },
]

export function Timeline() {
  const isMobile = useMobile()

  return (
    <div
      className={`space-y-12 relative ${
        !isMobile
          ? "before:absolute before:inset-0 before:left-1/2 before:ml-0 before:-translate-x-px before:border-l-2 before:border-zinc-700 before:h-full before:z-0"
          : ""
      }`}
    >
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`relative z-10 flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
        >
          <motion.div
            className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-10" : "md:pr-10"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-xl bg-charcoal/80 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-crimson/50">
              <div className="absolute -inset-1 bg-gradient-to-r from-crimson/10 to-mustard/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

              <div className="relative">
                <h3 className="text-xl font-bold text-ash">{experience.title}</h3>
                <div className="text-zinc-400 mb-4">
                  {experience.company} | {experience.period}
                </div>
                <p className="text-zinc-300">{experience.description}</p>
              </div>
            </div>
          </motion.div>

          {!isMobile && (
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
              <motion.div
                className="w-6 h-6 rounded-full bg-gradient-to-r from-crimson to-mustard z-10 flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </motion.div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
