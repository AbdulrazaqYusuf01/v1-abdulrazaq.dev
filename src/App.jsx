import React, { useState } from "react";
import {
  Github,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
} from "lucide-react";

const projects = [
  {
    title: "MonsuratHeavenly - Internal Hotel Dashboard",
    description:
      "Full-stack internal hotel management platform used by hotel employees. Built with advanced dashboard features including filtering, sorting, and management views. Implemented CRUD operations for reservations, rooms, and users with Supabase authentication and role-based access.",
    tech: ["React", "JavaScript", "Supabase", "Tailwind CSS"],
    github:
      "https://github.com/AbdulrazaqYusuf01/React-Playground-The-Wild-Oasis",
    live: "#",
  },
  {
    title: "v1-abdulrazaq.dev",
    description: "My Portfolio Website",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/AbdulrazaqYusuf01/v1-abdulrazaq.dev",
    live: "https://v1-abdulrazaqdev.netlify.app/",
  },
  {
    title: "MonsuratHeavenly - Customer Booking Platform",
    description:
      "Customer-facing reservation system for hotel bookings with secure authentication using NextAuth (Google and GitHub providers). Built end-to-end booking flows with real-time data handling and REST API consumption. Deployed and maintained a production-ready Next.js application.",
    tech: ["Next.js", "JavaScript", "Supabase", "NextAuth"],
    github: "https://github.com/AbdulrazaqYusuf01/the-wild-oasis-website",
    live: "#",
  },
  {
    title: "Audiophile E-commerce Website",
    description:
      "Modern e-commerce frontend with product listings, cart management, and responsive UI. Focused on pixel-perfect implementation from design specs and cross-browser compatibility.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
  {
    title: "EchoSense - Blind Assistive Tech",
    description:
      "Assistive technology prototype to help visually impaired users navigate using audio and sensor feedback. Implemented core features for obstacle detection, real-time alerts, and intuitive user interaction. Applied engineering analysis and algorithms to build a reliable, user-centered accessibility tool.",
    tech: ["Python", "Sensors", "Audio Processing"],
    github: "#",
    live: "#",
  },
];

const NavBar = ({
  currentPage,
  setCurrentPage,
  mobileMenuOpen,
  setMobileMenuOpen,
}) => (
  <nav className="fixed top-0 left-0 right-0 bg-black border-b border-gray-800 z-50">
    <div className="max-w-6xl mx-auto px-6 py-4">
      <div className="flex justify-between items-center">
        <button
          onClick={() => setCurrentPage("home")}
          className="text-xl font-bold text-white hover:text-gray-300 transition-colors"
        >
          YAM
        </button>

        <div className="hidden md:flex gap-8">
          <button
            onClick={() => setCurrentPage("home")}
            className={`${
              currentPage === "home" ? "text-white" : "text-gray-400"
            } hover:text-white transition-colors`}
          >
            Home
          </button>
          <button
            onClick={() => setCurrentPage("projects")}
            className={`${
              currentPage === "projects" ? "text-white" : "text-gray-400"
            } hover:text-white transition-colors`}
          >
            Projects
          </button>
          <button
            onClick={() => setCurrentPage("resume")}
            className={`${
              currentPage === "resume" ? "text-white" : "text-gray-400"
            } hover:text-white transition-colors`}
          >
            Resume
          </button>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
          <button
            onClick={() => {
              setCurrentPage("home");
              setMobileMenuOpen(false);
            }}
            className={`${
              currentPage === "home" ? "text-white" : "text-gray-400"
            } hover:text-white transition-colors text-left`}
          >
            Home
          </button>
          <button
            onClick={() => {
              setCurrentPage("projects");
              setMobileMenuOpen(false);
            }}
            className={`${
              currentPage === "projects" ? "text-white" : "text-gray-400"
            } hover:text-white transition-colors text-left`}
          >
            Projects
          </button>
          <button
            onClick={() => {
              setCurrentPage("resume");
              setMobileMenuOpen(false);
            }}
            className={`${
              currentPage === "resume" ? "text-white" : "text-gray-400"
            } hover:text-white transition-colors text-left`}
          >
            Resume
          </button>
        </div>
      )}
    </div>
  </nav>
);

const HomePage = () => (
  <div className="min-h-screen bg-black text-white pt-24 px-6">
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Yusuf Abdulrazaq Musa
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-6">
          Junior Frontend Developer (Next.js)
        </p>
        <div className="flex flex-wrap gap-4 text-gray-400 mb-6">
          <span className="flex items-center gap-2">
            <MapPin size={18} />
            Remote
          </span>
          <span className="flex items-center gap-2">
            <Mail size={18} />
            abdulrazaqmusayusuf@gmail.com
          </span>
          <span className="flex items-center gap-2">
            <Phone size={18} />
            +234 814 576 1296
          </span>
        </div>
        <p className="text-lg text-gray-300 leading-relaxed mb-8">
          Junior Frontend Developer with 2+ years of hands-on experience using
          Next.js and React to build and maintain production-ready web
          applications. Strong experience developing SaaS and dashboard-style
          platforms, implementing authentication, consuming REST APIs, and
          collaborating within engineering teams. Passionate about clean code,
          reusable components, and continuous improvement.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Core Skills</h2>
        <div className="space-y-3 text-gray-300">
          <p>
            <strong className="text-white">Frontend:</strong> Next.js (App
            Router), React, TypeScript, JavaScript
          </p>
          <p>
            <strong className="text-white">Styling:</strong> Tailwind CSS, CSS
            Modules, Styled-Components, Shadcn UI
          </p>
          <p>
            <strong className="text-white">Backend & APIs:</strong> REST APIs,
            Supabase, Node.js (basic API development)
          </p>
          <p>
            <strong className="text-white">Auth:</strong> Supabase Auth,
            NextAuth (Google, GitHub providers)
          </p>
          <p>
            <strong className="text-white">Tools:</strong> Git, GitHub, Figma
            (Dev Mode), Axios, Fetch API
          </p>
          <p>
            <strong className="text-white">Concepts:</strong> Component
            architecture, reusable UI patterns, async data fetching, responsive
            design, accessibility fundamentals
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Professional Experience</h2>
        <div className="border-l-2 border-gray-700 pl-4">
          <h3 className="text-xl font-semibold">Software Engineering Intern</h3>
          <p className="text-gray-400">
            Hotels.ng (HNG) • Full-time Internship (2 months)
          </p>
          <ul className="mt-2 text-gray-300 space-y-1">
            <li>
              • Collaborated with cross-functional teams to build and ship
              multiple frontend applications using Next.js and React
            </li>
            <li>
              • Developed an Audiophile e-commerce platform with dynamic product
              pages, cart functionality, and responsive layouts
            </li>
            <li>
              • Built a Ticket Management System implemented across React, Vue,
              and Twig (PHP templating)
            </li>
            <li>
              • Fixed UI bugs, implemented features, and improved frontend logic
              under senior engineer guidance
            </li>
            <li>
              • Participated in code reviews, applied feedback, and maintained
              consistent code quality
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <div>
          <h3 className="text-xl font-semibold">
            BSc. Computer Engineering (400 Level)
          </h3>
          <p className="text-gray-400">
            Obafemi Awolowo University • Jan 2022 - Present
          </p>
          <p className="mt-2 text-gray-300">
            Relevant Coursework: Data Structures & Algorithms, Engineering
            Analysis & Statistics, Microelectronics
          </p>
        </div>
      </div>

      <div className="flex gap-6 pb-12">
        <a
          href="mailto:abdulrazaqmusayusuf@gmail.com"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <Mail size={24} />
        </a>
        <a
          href="https://github.com/AbdulrazaqYusuf01"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <Github size={24} />
        </a>
      </div>
    </div>
  </div>
);

const ProjectsPage = () => (
  <div className="min-h-screen bg-black text-white pt-24 px-6 pb-12">
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-12">Projects</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-all"
          >
            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-black border border-gray-800 rounded text-sm text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.github}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
                <span>Code</span>
              </a>
              <a
                href={project.live}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={20} />
                <span>Live</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ResumePage = () => (
  <div className="min-h-screen bg-black text-white pt-24 px-6 pb-12">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">Resume</h1>

      <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Yusuf Abdulrazaq Musa</h2>
          <p className="text-xl text-gray-400 mb-4">
            Junior Frontend Developer (Next.js)
          </p>
          <div className="flex flex-col gap-1 text-gray-400">
            <p className="flex items-center gap-2">
              <MapPin size={16} /> Remote
            </p>
            <p className="flex items-center gap-2">
              <Mail size={16} /> abdulrazaqmusayusuf@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} /> +234 814 576 1296
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-3 border-b border-gray-700 pb-2">
            Professional Summary
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Junior Frontend Developer with 2+ years of hands-on experience using
            Next.js and React to build and maintain production-ready web
            applications. Strong experience developing SaaS and dashboard-style
            platforms, implementing authentication, consuming REST APIs, and
            collaborating within engineering teams. Highly proficient in
            TypeScript, modern styling systems, and translating Figma designs
            into responsive, accessible user interfaces. Passionate about clean
            code, reusable components, and continuous improvement under senior
            mentorship.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-3 border-b border-gray-700 pb-2">
            Core Skills
          </h3>
          <div className="space-y-2 text-gray-300">
            <p>
              <strong className="text-white">Frontend:</strong> Next.js (App
              Router), React, TypeScript, JavaScript
            </p>
            <p>
              <strong className="text-white">Styling:</strong> Tailwind CSS, CSS
              Modules, Styled-Components, Shadcn UI
            </p>
            <p>
              <strong className="text-white">Backend & APIs:</strong> REST APIs,
              Supabase, Node.js (basic API development)
            </p>
            <p>
              <strong className="text-white">Auth:</strong> Supabase Auth,
              NextAuth (Google, GitHub providers)
            </p>
            <p>
              <strong className="text-white">Tools:</strong> Git, GitHub, Figma
              (Dev Mode), Axios, Fetch API
            </p>
            <p>
              <strong className="text-white">Concepts:</strong> Component
              architecture, reusable UI patterns, async data fetching,
              responsive design, accessibility fundamentals
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-3 border-b border-gray-700 pb-2">
            Professional Experience
          </h3>
          <div>
            <h4 className="text-xl font-semibold">
              Software Engineering Intern
            </h4>
            <p className="text-gray-400">
              Hotels.ng (HNG) • Full-time Internship (2 months)
            </p>
            <ul className="mt-2 text-gray-300 space-y-1 ml-4">
              <li>
                • Collaborated with cross-functional teams to build and ship
                multiple frontend applications using Next.js and React
              </li>
              <li>
                • Developed an Audiophile e-commerce platform with dynamic
                product pages, cart functionality, and responsive layouts
              </li>
              <li>
                • Built a Ticket Management System implemented across React,
                Vue, and Twig (PHP templating), gaining exposure to
                multi-framework architecture
              </li>
              <li>
                • Fixed UI bugs, implemented features, and improved frontend
                logic under senior engineer guidance
              </li>
              <li>
                • Participated in code reviews, applied feedback, and maintained
                consistent code quality
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-3 border-b border-gray-700 pb-2">
            Projects
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold">
                MonsuratHeavenly — Internal Hotel Reservation Dashboard
              </h4>
              <p className="text-gray-400 mb-2">
                React, TypeScript, Supabase, Tailwind CSS
              </p>
              <ul className="text-gray-300 space-y-1 ml-4">
                <li>
                  • Built a full-stack internal hotel management platform used
                  by hotel employees
                </li>
                <li>
                  • Implemented CRUD operations for reservations, rooms, and
                  users
                </li>
                <li>
                  • Developed advanced dashboard features including filtering,
                  sorting, and management views
                </li>
                <li>
                  • Integrated Supabase authentication and role-based access
                </li>
                <li>
                  • Designed reusable, maintainable React components for
                  scalable growth
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold">
                MonsuratHeavenly — Customer Booking Platform
              </h4>
              <p className="text-gray-400 mb-2">
                Next.js (App Router), TypeScript, Supabase, NextAuth
              </p>
              <ul className="text-gray-300 space-y-1 ml-4">
                <li>
                  • Developed the customer-facing reservation system for hotel
                  bookings
                </li>
                <li>
                  • Implemented secure authentication using NextAuth with Google
                  and GitHub providers
                </li>
                <li>
                  • Built end-to-end booking flows with real-time data handling
                </li>
                <li>
                  • Consumed REST APIs and handled async data fetching using
                  Fetch and Axios
                </li>
                <li>
                  • Deployed and maintained a production-ready Next.js
                  application
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold">
                Audiophile E-commerce Website
              </h4>
              <p className="text-gray-400 mb-2">
                Next.js, TypeScript, Tailwind CSS
              </p>
              <ul className="text-gray-300 space-y-1 ml-4">
                <li>
                  • Built a modern e-commerce frontend with product listings,
                  cart management, and responsive UI
                </li>
                <li>
                  • Focused on pixel-perfect implementation from design specs
                  and cross-browser compatibility
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-3 border-b border-gray-700 pb-2">
            Education
          </h3>
          <div>
            <h4 className="text-xl font-semibold">
              BSc. Computer Engineering (400 Level)
            </h4>
            <p className="text-gray-400">
              Obafemi Awolowo University • Jan 2022 - Present
            </p>
            <p className="mt-2 text-gray-300">
              Relevant Coursework: Data Structures & Algorithms, Engineering
              Analysis & Statistics, Microelectronics
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-3 border-b border-gray-700 pb-2">
            Certifications & Activities
          </h3>
          <div className="text-gray-300 space-y-1">
            <p>• Career Essentials in Generative AI — Microsoft & LinkedIn</p>
            <p>• Sustainability as an Innovation Opportunity</p>
            <p>• Software Engineering Job Simulation — Skyscanner (Forage)</p>
            <p>• IEEE OAU — Software Engineering Lead</p>
            <p>
              • Association of Muslim Computing Students (AMCOS) — General
              Secretary
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-3 border-b border-gray-700 pb-2">
            Additional Information
          </h3>
          <div className="text-gray-300 space-y-2">
            <p>
              <strong className="text-white">Languages:</strong> English,
              Arabic, Igala
            </p>
            <p>
              • Strong ability to work independently while collaborating closely
              with senior engineers
            </p>
            <p>
              • Comfortable working on real production systems, fixing bugs, and
              shipping features
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-black min-h-screen">
      <NavBar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      {currentPage === "home" && <HomePage />}
      {currentPage === "projects" && <ProjectsPage />}
      {currentPage === "resume" && <ResumePage />}
    </div>
  );
};

export default App;
