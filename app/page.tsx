"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Globe, Target, Rocket, Heart, Code, GitCommit as Community, Mail, Phone, Twitter, Instagram, Linkedin, ExternalLink, Zap, Award, Network, Star, ArrowRight } from 'lucide-react';
import Image from 'next/image';
export default function Home() {
  const [activeTrack, setActiveTrack] = useState<'community' | 'developer'>('community');

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Network Background Pattern */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(0, 255, 255, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(0, 255, 255, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)
          `,
        }}>
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="2" fill="rgba(0, 255, 255, 0.4)" />
                <line x1="50" y1="50" x2="100" y2="0" stroke="rgba(0, 255, 255, 0.2)" strokeWidth="1" />
                <line x1="50" y1="50" x2="0" y2="100" stroke="rgba(0, 255, 255, 0.2)" strokeWidth="1" />
                <line x1="50" y1="50" x2="100" y2="100" stroke="rgba(0, 255, 255, 0.2)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#network)" />
          </svg>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-lg border-b border-cyan-500/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Image src="/logo.jpg"
               alt="Confluence Logo" 
               width={40} height={40} 
               className="rounded-full" />
              <span className="font-bold text-xl text-white">CONFLUENCE</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors">About</a>
              <a href="#format" className="text-gray-300 hover:text-cyan-400 transition-colors">Event Format</a>
              <a href="#register" className="text-gray-300 hover:text-cyan-400 transition-colors">Register</a>
              <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center">
            <div className="mb-8">
              <p className="text-cyan-400 text-lg font-light tracking-widest uppercase mb-4">
                GET READY FOR OUR UPCOMING TECH EXTRAVAGANZA
              </p>
            </div>
            
            {/* Large CONFLUENCE Logo */}
            <div className="mb-12">
              <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black text-white mb-4 tracking-tight">
                CON<span className="text-cyan-400">/</span>LUENCE
              </h1>
            </div>

            {/* Theme Section */}
            <div className="mb-12">
              <p className="text-white text-xl mb-4 font-light italic">Theme:</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
                <span className="text-green-400">Ogbomosho's</span> <span className="text-white">Digital Transformation;</span>
              </h2>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-white">
                Blockchain as a Catalyst.
              </h2>
            </div>

            {/* Anticipate */}
            <div className="mb-12">
              <h3 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white italic">
                Anticipate!
              </h3>
            </div>

            {/* Event Details */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-cyan-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span className="text-lg">November 7-8, 2025</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-cyan-400 rounded-full"></div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">Ogbomoso, Nigeria</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-black px-8 py-4 text-lg font-bold rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105">
                Register for Event
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 text-lg font-bold rounded-lg transition-all duration-300 transform hover:scale-105">
                Apply To be a Speaker
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-300">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-cyan-400" />
                <span className="font-medium">500+ Expected Attendees</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-green-400" />
                <span className="font-medium">2 Days of Innovation</span>
              </div>
              <div className="flex items-center gap-2">
                <Network className="w-5 h-5 text-blue-400" />
                <span className="font-medium">Unlimited Networking</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Contact Info */}
        <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
          <div className="bg-green-400/20 px-4 py-2 rounded-lg">
            <p className="text-green-400 text-sm font-medium">For Enquires Contact:</p>
            <p className="text-white">+234...</p>
            <p className="text-cyan-400">@BlockchainLaut1</p>
          </div>
          <div className="text-right">
            <p className="text-gray-400 text-sm mb-2">Powered by:</p>
            <div className="flex items-center gap-2">
              <Image src="/blclogo.jpg"
               alt="Confluence Logo" 
               width={40} height={40} 
               className="rounded-full" />
              <div>
                <p className="text-white font-bold text-sm">BLOCKCHAIN</p>
                <p className="text-gray-400 text-xs">LADOKE AKINTOLA UNIVERSITY OF TECHNOLOGY</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">About Confluence</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Confluence is the flagship tech conference of Blockchain Lautech, designed to unite students, developers, innovators, and industry leaders at the intersection of blockchain, Web3, and emerging technologies.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Since 2020, Blockchain Lautech has championed blockchain adoption on campus, driving education and innovation through hands-on workshops, hackathons, Bitcoin Pizza Day celebrations, developer bootcamps, and partnerships with global Web3 projects.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Confluence represents the next milestone in this journey — a platform to amplify impact, foster collaboration, and showcase the future of technology from Ogbomoso to the world.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">2,500+</div>
                  <div className="text-gray-300">Students Trained</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-xl border border-green-500/20">
                  <div className="text-3xl font-bold text-green-400 mb-2">5+</div>
                  <div className="text-gray-300">Years of Impact</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl p-8 text-white border border-cyan-500/30">
                <div className="h-full flex flex-col justify-center items-center text-center">
                  <Globe className="w-16 h-16 mb-6 text-cyan-400" />
                  <h3 className="text-2xl font-bold mb-4">Global Connections</h3>
                  <p className="text-lg text-gray-300">
                    Connecting LAUTECH to the global blockchain movement with partnerships across Solana, Sui, and Celo ecosystems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Format Section */}
      <section id="format" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Event Format</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Two days of intensive learning, networking, and innovation designed for different audiences.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Day 1: Developer Track */}
            <Card className="overflow-hidden group hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 transform hover:-translate-y-2 border border-cyan-500/20 bg-gray-900/50 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-white p-8 border-b border-cyan-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="w-8 h-8 text-cyan-400" />
                  <div>
                    <CardTitle className="text-2xl font-bold text-white">Day 1: Developer Track</CardTitle>
                    <CardDescription className="text-cyan-300 text-lg">November 7, 2025</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                    <Award className="w-5 h-5 text-cyan-400" />
                    <span className="font-medium text-gray-200">Hackathons & Coding Competitions</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <Code className="w-5 h-5 text-blue-400" />
                    <span className="font-medium text-gray-200">Technical Workshops</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                    <Target className="w-5 h-5 text-green-400" />
                    <span className="font-medium text-gray-200">Bounty Challenges</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                    <Network className="w-5 h-5 text-purple-400" />
                    <span className="font-medium text-gray-200">Developer Networking</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-orange-500/10 rounded-lg border border-orange-500/20">
                    <Award className="w-5 h-5 text-orange-400" />
                    <span className="font-medium text-gray-200">Prize Distribution</span>
                  </div>
                </div>
                <div className="mt-8 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <p className="text-sm text-green-300 font-medium">
                    Open registration for all Developers
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Day 2: Community Track */}
            <Card className="overflow-hidden group hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300 transform hover:-translate-y-2 border border-green-500/20 bg-gray-900/50 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-green-500/20 to-teal-500/20 text-white p-8 border-b border-green-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <Community className="w-8 h-8 text-green-400" />
                  <div>
                    <CardTitle className="text-2xl font-bold text-white">Day 2: Community Track</CardTitle>
                    <CardDescription className="text-green-300 text-lg">November 8, 2025</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                    <Rocket className="w-5 h-5 text-green-400" />
                    <span className="font-medium text-gray-200">Keynote Presentations</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <Users className="w-5 h-5 text-blue-400" />
                    <span className="font-medium text-gray-200">Expert Panel Discussions</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-pink-500/10 rounded-lg border border-pink-500/20">
                    <Heart className="w-5 h-5 text-pink-400" />
                    <span className="font-medium text-gray-200">Women in Web3 Sessions</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                    <Rocket className="w-5 h-5 text-cyan-400" />
                    <span className="font-medium text-gray-200">Startup Exhibitions</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                    <Code className="w-5 h-5 text-purple-400" />
                    <span className="font-medium text-gray-200">Interactive Workshops</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-orange-500/10 rounded-lg border border-orange-500/20">
                    <Network className="w-5 h-5 text-orange-400" />
                    <span className="font-medium text-gray-200">Networking Opportunities</span>
                  </div>
                </div>
                <div className="mt-8 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <p className="text-sm text-green-300 font-medium">
                    Open registration for all attendees
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Confluence Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Why Confluence?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-cyan-500/25">
                <Target className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Proven Impact</h3>
              <p className="text-gray-300 mb-2">2,500+ students trained since 2020</p>
            </div>
            
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-green-500/25">
                <Globe className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Global Connections</h3>
              <p className="text-gray-300 mb-2">Partnerships with Solana, Sui, Celo ecosystems</p>
            </div>
            
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-orange-500/25">
                <Rocket className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Innovation Hub</h3>
              <p className="text-gray-300 mb-2">Showcasing the future from Ogbomoso to the world</p>
            </div>
            
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-purple-500/25">
                <Heart className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Inclusive Community</h3>
              <p className="text-gray-300 mb-2">Uniting beginners to experts in one space</p>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Speakers & Partners</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"></div>
          <div className="bg-gray-900/50 rounded-3xl p-12 shadow-lg border border-cyan-500/20 backdrop-blur-sm">
            <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <Users className="w-12 h-12 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Coming Soon...</h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              We're announcing our incredible lineup of industry leaders, innovative startups, and ecosystem partners.
            </p>
            <Button variant="outline" className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-6 py-3 font-semibold rounded-xl">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Register Now</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Choose your track and join us for an unforgettable experience at Confluence 2025.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Community Track */}
            <Card className="overflow-hidden border border-green-500/20 bg-gray-900/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="bg-gradient-to-r from-green-500/20 to-teal-500/20 text-white p-8 border-b border-green-500/20">
                <CardTitle className="text-2xl font-bold mb-2 text-white">Community Track</CardTitle>
                <CardDescription className="text-green-300 text-lg">
                  Perfect for: Students, professionals, entrepreneurs, and anyone curious about Web3
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="mb-8">
                  <h4 className="font-semibold text-white mb-4">Includes:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300">All sessions and keynotes</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300">Networking lunch</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300">Interactive workshops</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300">Startup exhibitions</span>
                    </li>
                  </ul>
                </div>
                <Button className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-black py-3 text-lg font-semibold rounded-xl">
                  Register for Community Track →
                </Button>
              </CardContent>
            </Card>

            {/* Developer Track */}
            <Card className="overflow-hidden border border-cyan-500/20 bg-gray-900/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-white p-8 border-b border-cyan-500/20">
                <CardTitle className="text-2xl font-bold mb-2 text-white">Developer Track</CardTitle>
                <CardDescription className="text-cyan-300 text-lg">
                  Perfect for: Developers, designers, and technical creators
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="mb-8">
                  <h4 className="font-semibold text-white mb-4">Includes:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">Hackathons and competitions</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">Bounty challenges</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">Technical workshops</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">Prizes and awards</span>
                    </li>
                  </ul>
                </div>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-black py-3 text-lg font-semibold rounded-xl">
                  Apply for Dev Track →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Event Details</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border border-cyan-500/20 backdrop-blur-sm hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Date</h3>
                  <p className="text-gray-300">November 7-8, 2025</p>
                </div>
              </div>
            </Card>
            
            <Card className="bg-gray-900/50 border border-green-500/20 backdrop-blur-sm hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Location</h3>
                  <p className="text-gray-300">Ogbomoso, Oyo State, Nigeria</p>
                </div>
              </div>
            </Card>
            
            <Card className="bg-gray-900/50 border border-purple-500/20 backdrop-blur-sm hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Attendance</h3>
                  <p className="text-gray-300">500+ participants</p>
                </div>
              </div>
            </Card>
            
            <Card className="bg-gray-900/50 border border-orange-500/20 backdrop-blur-sm hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Cost</h3>
                  <p className="text-gray-300">Free for all attendees</p>
                </div>
              </div>
            </Card>
            
            <Card className="bg-gray-900/50 border border-blue-500/20 backdrop-blur-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 p-6 md:col-span-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Focus</h3>
                  <p className="text-gray-300">Blockchain, Web3, and emerging technologies</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Stay Connected</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-300">Follow our journey to Confluence 2025</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Contact & Support</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">General Inquiries</p>
                    <p className="text-gray-300">info@confluence2025.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Sponsorship</p>
                    <p className="text-gray-300">sponsors@confluence2025.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Media & Press</p>
                    <p className="text-gray-300">press@confluence2025.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Technical Support</p>
                    <p className="text-gray-300">tech@confluence2025.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Follow Us</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <a href="#" className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-cyan-400 rounded-xl hover:from-blue-500/30 hover:to-blue-600/30 transition-all duration-300 transform hover:scale-105 border border-blue-500/20">
                  <Twitter className="w-6 h-6" />
                  <span className="font-medium">Twitter</span>
                </a>
                
                <a href="#" className="flex items-center gap-3 p-4 bg-gradient-to-r from-pink-500/20 to-rose-600/20 text-pink-400 rounded-xl hover:from-pink-500/30 hover:to-rose-600/30 transition-all duration-300 transform hover:scale-105 border border-pink-500/20">
                  <Instagram className="w-6 h-6" />
                  <span className="font-medium">Instagram</span>
                </a>
                
                <a href="#" className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-600/20 to-blue-700/20 text-blue-400 rounded-xl hover:from-blue-600/30 hover:to-blue-700/30 transition-all duration-300 transform hover:scale-105 border border-blue-600/20">
                  <Linkedin className="w-6 h-6" />
                  <span className="font-medium">LinkedIn</span>
                </a>
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20">
                <h4 className="font-bold text-white mb-4">About Blockchain Lautech</h4>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Blockchain Lautech has been championing blockchain education since 2020. Through workshops, hackathons, and community building, we've created a vibrant ecosystem that connects LAUTECH students to the global Web3 movement.
                </p>
                <p className="text-sm text-cyan-400 font-semibold mb-4">
                  Our Mission: To democratize blockchain education and foster innovation from Nigeria to the world.
                </p>
                <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black">
                  Learn More About Us <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-cyan-500/20 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Image src="/logo.jpg"
               alt="Confluence Logo" 
               width={40} height={40} 
               className="rounded-full" />
              <span className="font-bold text-xl">CONFLUENCE 2025</span>
            </div>
            <p className="text-gray-400 mb-4">Ogbomoso, Nigeria</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Code of Conduct</a>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 mb-2">© 2025 Blockchain Lautech. All rights reserved.</p>
            <p className="text-sm text-gray-500">Powered by innovation. Driven by community.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}