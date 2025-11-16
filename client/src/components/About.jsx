import React, { useState, useEffect } from 'react';
import { Award, Users, Lightbulb, Target, ChevronRight, Sparkles, Building2, Home, Leaf } from 'lucide-react';

export default function AboutUs() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { number: '2015', label: 'Established', icon: Building2 },
    { number: '500+', label: 'Projects Completed', icon: Award },
    { number: '15+', label: 'Project Categories', icon: Target },
    { number: '100%', label: 'Client Satisfaction', icon: Sparkles }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      desc: 'Pushing boundaries with creative and functional design solutions'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      desc: 'Eco-friendly practices integrated into every project'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      desc: 'Collaborative approach to bring your unique vision to life'
    },
    {
      icon: Award,
      title: 'Excellence',
      desc: 'Highest standards of quality and attention to detail'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div 
            className="text-center transform transition-all duration-1000"
            style={{ 
              opacity: Math.max(0, 1 - scrollY / 400),
              transform: `translateY(${scrollY * 0.3}px)`
            }}
          >
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-6 py-4 mb-8">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span className="text-amber-400 text-sm font-medium">Crafting Extraordinary Spaces Since 2015</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            
              About
              <span className="block bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent mt-2 ">
                Malhotra Associates
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              A design-based firm specializing in interior design, architecture, and furniture design that transforms visions into extraordinary realities
            </p>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(248 250 252)"/>
          </svg>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 transform hover:scale-105 transition-all duration-300 border border-slate-100 hover:border-amber-200"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl p-3 mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm lg:text-base text-slate-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Our Story */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 lg:p-12 shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-400/10 rounded-full blur-2xl"></div>
                
                <div className="relative">
                  <Home className="w-12 h-12 text-amber-400 mb-6" />
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Our Story</h2>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    Established in 2015, <span className="text-amber-400 font-semibold">Malhotra Associates</span> has been at the forefront of innovative design solutions. We specialize in creating extraordinary spaces that exceed our clients' expectations through a perfect blend of functionality, aesthetics, and sustainability.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Comprehensive Services</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                We offer a full spectrum of design services including interior design, architecture, and custom furniture design. Our portfolio spans across residential, hospitality, commercial, institutional, and industrial sectors.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Residential', 'Hospitality', 'Commercial', 'Institutional'].map((tag, idx) => (
                  <span key={idx} className="bg-amber-50 text-amber-700 px-4 py-2 rounded-full text-sm font-medium border border-amber-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Sustainable by Design</h3>
              <p className="text-slate-700 leading-relaxed">
                We integrate environmentally friendly solutions into every project, minimizing ecological footprint while maximizing energy efficiency and resource conservation. Sustainability isn't just a practice—it's our commitment to the future.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden shadow-2xl mb-24">
          <div className="grid lg:grid-cols-5 gap-0">
            <div className="lg:col-span-2 bg-gradient-to-br from-amber-500 to-orange-500 p-12 lg:p-16 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/30">
                  <span className="text-6xl lg:text-7xl font-bold text-white">AM</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2">Ankit Malhotra</h3>
                <p className="text-amber-100 text-lg">Founder & Principal Designer</p>
              </div>
            </div>
            
            <div className="lg:col-span-3 p-8 lg:p-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Visionary Leadership</h2>
              <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
                <p>
                  Under the leadership of <span className="text-amber-400 font-semibold">Ankit Malhotra</span>, our firm has successfully completed numerous projects across various sectors, establishing ourselves as a trusted name in the design industry.
                </p>
                <p>
                  With a wealth of experience and expertise, Ankit ensures that every project is executed with the highest standards of quality and meticulous attention to detail. His dedication to excellence and innovative vision drives our commitment to creating spaces that truly inspire.
                </p>
                <div className="flex items-center gap-3 pt-4">
                  <ChevronRight className="w-5 h-5 text-amber-400" />
                  <span className="text-amber-400 font-semibold">Committed to Excellence Since 2015</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Our Core Values</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            The principles that guide every project we undertake
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {values.map((value, idx) => (
            <div 
              key={idx}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-amber-200 hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl p-4 inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
              <p className="text-slate-600 leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 rounded-3xl overflow-hidden shadow-2xl">
          <div className="px-8 py-16 lg:px-16 lg:py-20 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-amber-50 mb-10 max-w-2xl mx-auto">
              Let's collaborate to bring your unique vision to life with our innovative and sustainable design solutions
            </p>
            <a href="tel:+918199999884">
            <button className="group bg-white text-amber-600 px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-3">
              Get Started Today
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Wave */}
      <div className="relative">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 0L60 10C120 20 240 40 360 50C480 60 600 60 720 55C840 50 960 40 1080 35C1200 30 1320 30 1380 30L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(15 23 42)"/>
        </svg>
      </div>
    </div>
  );
}