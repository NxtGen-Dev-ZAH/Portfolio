"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Github, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Navbar Component
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black backdrop-blur-md border-b border-purple-700"
          : "bg-transparent "
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 gap-3">
            <Image
              src="/LOGO.png"
              alt="logo"
              width={200}
              height={50}
              className="object-cover rounded-full"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-300 hover:text-purple-400 transition-colors border-2 rounded-lg border-purple-950 px-2 py-1 md:px-5 md:py-2  font-light md:font-bold"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

// Footer Component
export function Footer() {
  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/NxtGen-Dev-ZAH" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/zaheerahmedabbasi/" },
    { name: "Twitter", icon: Twitter, href: "https://x.com/DataSAZ" },
    { name: "Email", icon: Mail, href: "mailto: dev.zaheer.ahmad@gmail.com" },
  ];

  return (
    <footer className="bg-gray-900 border-t border-purple-500">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="space-y-4 mx-auto">
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            Zaheer Ahmed | Portfolio
            </span>
            <p className="text-gray-300 max-w-md">
              Showcasing innovative projects and solutions in AI, web
              development, and full-stack applications.
            </p>
          </div>

         
          {/* Social Links */}
          <div className="space-y-4 mx-auto">
            <h3 className="text-lg font-semibold text-white">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="h-6 w-6" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-5 border-t border-purple-500">
          <p className="text-gray-300 text-center">
            © {new Date().getFullYear()} Your Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
