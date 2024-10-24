"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Brain, Code, Server, Database, LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Navbar, Footer } from "@/components/nav-footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Project {
  title: string;
  text: string;
  src: string;
  tags: string[];
  categories: string[];
}

// Enhanced Projects array with explicit categories and tags
const Projects: Project[] = [
  {
    title: "MODERN ECOMMERCE STORE",
    text: "Build a modern ecommerce store with Next.js, showcasing a seamless and responsive shopping experience. Leveraging cutting-edge technologies to deliver a fast and efficient online store.",
    src: "/terrasalina.png",
    tags: ["Next.js", "React", "TypeScript"],
    categories: ["fullstack"],
  },
  {
    title: "Emotion Detection Flask app",
    text: "Built a Flask web application for emotion detection using machine learning. The application analyzes the text and tells you about the emotions",
    src: "/Matrix.png",
    tags: ["Python", "Flask", "ML"],
    categories: ["ai", "backend"],
  },
  {
    title: "Modern FLASK Website FOR WEATHER",
    text: "Create a modern flask app that took data as a csv file from the user and apply machine learning algorithms on it to predict the weather of the area.",
    src: "/bg-4.png",
    tags: ["Python", "Flask", "ML"],
    categories: ["ai", "backend"],
  },
  {
    title: "FULLSTACK NEXT JS TASK MANAGER APP",
    text: "A robust task manager application built with Next.js for seamless task management, featuring task creation, editing, and categorization.",
    src: "/task.png",
    tags: ["Next.js", "React", "FastAPI"],
    categories: ["fullstack"],
  },
  {
    title: "FULLSTACK PERSONAL AI ASSISTANT",
    text: "An innovative personal AI assistant developed using Next.js, FastAPI, and OpenAI APIs to manage tasks, set reminders, and provide quick answers,this app offers personalized assistance and enhances productivity through intelligent interaction.",
    src: "/ASSISTANT.png",
    tags: ["AI/ML", "OpenAI", "FastAPI"],
    categories: ["ai", "fullstack"],
  },
  {
    title: "FULLSTACK PROBLEM SOLVER AI/CHAT COMPLETION APP",
    text: "A cutting-edge problem solver app using Next.js, FastAPI, and OpenAI APIs, featuring an intuitive chat interface for solving complex problems efficiently.",
    src: "/PROBLEM_SOLVER.png",
    tags: ["AI/ML", "OpenAI", "FastAPI"],
    categories: ["ai", "fullstack"],
  },
];

interface ProjectCardProps {
  project: Project;
  index: number;
}

interface Category {
  id: string;
  label: string;
  icon: LucideIcon;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true });

  return (
    <motion.div
      ref={cardRef}
      initial={{ y: 50, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden group bg-black/40 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
        <CardHeader className="relative h-48 p-0">
          <Image
            src={project.src}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            <CardTitle className="text-xl font-bold text-white">
              {project.title}
            </CardTitle>
            <CardDescription className="text-gray-300">
              {project.text}
            </CardDescription>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <Badge
                  key={i}
                  variant="outline"
                  className="bg-purple-500/10 text-purple-300 border-purple-500/30"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const categories: Category[] = [
  { id: "all", label: "All Projects", icon: Code },
  { id: "ai", label: "AI/ML", icon: Brain },
  { id: "fullstack", label: "Full-Stack", icon: Server },
  { id: "backend", label: "Backend", icon: Database },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef);

  // Filter projects based on active category
  const filteredProjects = Projects.filter(
    (project) =>
      activeCategory === "all" || project.categories.includes(activeCategory)
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-black  to-purple-950 py-20 px-4 md:px-20">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header Section */}
          <motion.div
            ref={headerRef}
            initial={{ y: 20, opacity: 0 }}
            animate={
              isHeaderInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }
            }
            transition={{ duration: 0.5 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                Projects
              </span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Showcasing a diverse portfolio of AI/ML solutions, full-stack
              applications, and innovative tech projects. Each project
              demonstrates expertise in modern technologies and problem-solving
              capabilities.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveCategory(id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200
                  ${
                    activeCategory === id
                      ? "bg-purple-500 text-white"
                      : "bg-purple-500/10 text-purple-300 hover:bg-purple-500/20"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </motion.div>

          {/* Skills Overview */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={
              isHeaderInView ? { y: 0, opacity: 0 } : { y: -15, opacity: 1 }
            }
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-20 p-8 rounded-xl bg-black/40 border border-purple-500/20"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Core Technologies & Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="space-y-4">
                <h3 className="text-purple-400 font-semibold flex items-center gap-2">
                  <Brain className="w-5 h-5" /> AI & ML
                </h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• LangChain & LangGraph</li>
                  <li>• OpenAI & HuggingFace</li>
                  <li>• PyTorch & TensorFlow</li>
                  <li>• CLIP & Multimodal Models</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-purple-400 font-semibold flex items-center gap-2">
                  <Code className="w-5 h-5" /> Frontend
                </h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Next.js & React</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• Framer Motion</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-purple-400 font-semibold flex items-center gap-2">
                  <Server className="w-5 h-5" /> Backend
                </h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• FastAPI & Flask</li>
                  <li>• PostgreSQL & MySQL</li>
                  <li>• REST APIs</li>
                  <li>• Python & Node.js</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-purple-400 font-semibold flex items-center gap-2">
                  <Database className="w-5 h-5" /> DevOps
                </h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Azure Cloud</li>
                  <li>• Docker</li>
                  <li>• Kong API Gateway</li>
                  <li>• CI/CD Pipelines</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}
