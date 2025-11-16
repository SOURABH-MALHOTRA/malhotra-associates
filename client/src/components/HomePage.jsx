import React, { useState, useEffect } from 'react';
import { ChevronRight, Award, Users, Leaf, Target, Sparkles, ArrowRight } from 'lucide-react';
import terrace from '../assets/terrace.mp4'; 
import img from '../assets/img.png'; 
const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const portfolioServices = [
    { name: 'Residential', icon: '🏠', desc: 'Custom homes designed for your lifestyle' },
    { name: 'Hospitality', icon: '🏨', desc: 'Hotels & restaurants with character' },
    { name: 'Commercial', icon: '🏢', desc: 'Modern business spaces' },
    { name: 'Institutional', icon: '🏛️', desc: 'Educational & public facilities' },
    { name: 'Industrial', icon: '🏭', desc: 'Functional industrial design' },
    { name: 'Offices', icon: '💼', desc: 'Productive work environments' },
    { name: 'Kids Bedroom', icon: '🎨', desc: 'Playful & safe spaces' },
    { name: 'Modular Kitchen', icon: '🍳', desc: 'Smart kitchen solutions' },
    { name: 'Pooja Room', icon: '🕉️', desc: 'Sacred & serene spaces' },
    { name: 'SOHO', icon: '💻', desc: 'Small office home setups' },
    { name: 'Wall Paint Designs', icon: '🎭', desc: 'Creative wall treatments' },
    { name: 'Wall Décor', icon: '🖼️', desc: 'Artistic wall features' },
    { name: 'Flooring Designs', icon: '📐', desc: 'Premium flooring solutions' },
    { name: 'TV Unit Designs', icon: '📺', desc: 'Entertainment centers' },
    { name: 'Ceiling Designs', icon: '✨', desc: 'Statement ceilings' },
    { name: 'Study Room', icon: '📚', desc: 'Focused learning spaces' }
  ];

  const coreValues = [
    {
      icon: Sparkles,
      title: 'Innovative Design',
      desc: 'Pushing boundaries with creative and functional design solutions',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Target,
      title: 'Functional Approach',
      desc: 'Every design serves a purpose while maintaining aesthetic appeal',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Leaf,
      title: 'Sustainable Practices',
      desc: 'Environmentally friendly solutions minimizing ecological footprint',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Client Collaboration',
      desc: 'Understanding unique visions and translating them into reality',
      color: 'from-amber-500 to-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
    
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white py-16 md:py-32 overflow-hidden">
       <video
        autoPlay
        loop
        muted
        playsInline
        poster={img}
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={terrace} type="video/mp4" />
        
      </video>
   
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10">
            
          
           
          </div>
        
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div 
            className="max-w-5xl mx-auto text-center transition-all duration-700"
            style={{ 
              opacity: Math.max(0, 1 - scrollY / 500),
              transform: `translateY(${scrollY * 0.3}px) scale(${Math.max(0.95, 1 - scrollY / 2000)})`
            }}
          >
           
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="block animate-fade-in text-white ">Malhotra</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 inline-block animate-gradient-x ">
                Associates
              </span>
            </h1>
            
            <p className="text-lg md:text-2xl text-white mb-4 max-w-3xl mx-auto leading-relaxed animate-fade-in-up font-semibold" style={{ animationDelay: '200ms' }}> 
              A design-based firm specializing in <span className="text-white font-semibold">Interior Design</span>, <span className="text-white font-semibold">Architecture</span>, and <span className="text-white font-semibold">Furniture Design</span>
            </p>
            
         
            
            <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '600ms' }}>
             <a href="/projects">
              <button className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-semibold text-lg shadow-2xl hover:shadow-amber-500/50 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
             
                <span className="relative z-10 flex items-center">
                  Explore Our Work
                  <ChevronRight className="inline ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
                </a>
                <a href="tel:+918199999884">
              <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-xl font-semibold text-lg border-2 border-white hover:bg-white/20 hover:border-white/50 hover:scale-105 transition-all duration-300">
                Get Consultation
              </button>
              </a>
            </div>
          </div>
        </div>

     

        {/* Wave Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 90" fill="none" className="w-full h-auto">
            <path d="M0 50L60 45C120 40 240 30 360 33.3C480 36.7 600 53.3 720 56.7C840 60 960 50 1080 45C1200 40 1320 40 1380 40L1440 40V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V50Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGM1LjUyMyAwIDEwLTQuNDc3IDEwLTEwcy00LjQ3Ny0xMC0xMC0xMC0xMCA0LjQ3Ny0xMCAxMCA0LjQ3NyAxMCAxMCAxMHoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { num: '9+', label: 'Years of Excellence' },
              { num: '500+', label: 'Projects Completed' },
              { num: '16+', label: 'Service Categories' },
              { num: '100%', label: 'Client Satisfaction' }
            ].map((stat, idx) => (
              <div 
                key={idx} 
                className="group text-center transform hover:scale-110 transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="text-4xl md:text-6xl font-bold mb-2 text-white drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-300">
                  {stat.num}
                </div>
                <div className="text-sm md:text-base text-white/90 font-medium group-hover:text-white transition-colors">
                  {stat.label}
                </div>
                <div className="w-16 h-1 bg-white/30 mx-auto mt-3 rounded-full group-hover:w-24 group-hover:bg-white/60 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="text-amber-600 font-semibold text-sm tracking-widest uppercase">What We Offer</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Comprehensive Design Solutions
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We offer a comprehensive range of services that cater to all aspects of architectural design and project realization
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {coreValues.map((value, idx) => (
                <div 
                  key={idx} 
                  className="group bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border-2 border-gray-100 hover:border-amber-400 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  <div className={`relative w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 text-white shadow-lg`}>
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-600 group-hover:to-orange-600 transition-all duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">Our Approach</h3>
                  <div className="space-y-4">
                    {[
                      { num: '1', title: 'Close Collaboration', desc: 'Understanding your unique visions and requirements' },
                      { num: '2', title: 'Meticulous Planning', desc: 'Translating visions into detailed architectural plans' },
                      { num: '3', title: 'Seamless Execution', desc: 'Expert project management from start to finish' }
                    ].map((step, idx) => (
                      <div key={idx} className="flex items-start gap-4 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                          <span className="text-white font-bold">{step.num}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-1 group-hover:text-amber-400 transition-colors">{step.title}</h4>
                          <p className="text-gray-300 text-sm">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <h4 className="text-xl font-bold mb-4 text-amber-400 flex items-center gap-2">
                      <Sparkles className="w-5 h-5" />
                      Project Management Excellence
                    </h4>
                    <ul className="space-y-3 text-sm">
                      {[
                        'Comprehensive budgeting & cost control',
                        'Precise scheduling & timeline management',
                        'Expert contractor coordination',
                        'Rigorous quality control standards',
                        'Energy efficiency optimization',
                        'Resource conservation practices'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 group hover:translate-x-2 transition-transform duration-300">
                          <div className="w-2 h-2 bg-amber-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                          <span className="group-hover:text-white transition-colors">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Services */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGM1LjUyMyAwIDEwLTQuNDc3IDEwLTEwcy00LjQ3Ny0xMC0xMC0xMC0xMCA0LjQ3Ny0xMCAxMCA0LjQ3NyAxMCAxMCAxMHoiIGZpbGw9IiMwMDAiLz48L2c+PC9zdmc+')]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-amber-600 font-semibold text-sm tracking-widest uppercase">Our Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Portfolio
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Projects of various scales designed to perfection
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
            {portfolioServices.map((service, idx) => (
              <div 
                key={idx} 
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100 hover:border-amber-400"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  <div className="text-5xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 inline-block">{service.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">{service.name}</h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-700">{service.desc}</p>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-5 h-5 text-amber-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Design Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse" style={{ animationDelay: '1000ms' }}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse" style={{ animationDelay: '500ms' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-4 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 hover:scale-110 transition-transform duration-300">
              <Leaf className="w-16 h-16 mx-auto animate-pulse" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Sustainable Design Focus</h2>
            <p className="text-xl md:text-2xl leading-relaxed mb-8 text-green-50">
              We integrate environmentally friendly solutions into every project, aiming to minimize the ecological footprint while maximizing energy efficiency and resource conservation
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[
                { value: '100%', label: 'Eco-Friendly Materials' },
                { value: '50%', label: 'Energy Savings' },
                { value: 'Zero', label: 'Waste Philosophy' }
              ].map((stat, idx) => (
                <div 
                  key={idx}
                  className="group bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 cursor-pointer"
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                  <div className="text-sm text-green-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')]"></div>
        </div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '700ms' }}></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Ready to Create Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Extraordinary?</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
              Let's collaborate to design spaces that exceed your expectations and bring your vision to life
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+918199999884">
              <button className="group px-10 py-5 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-bold text-lg shadow-2xl hover:shadow-amber-500/50 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Start Your Project
                  <ChevronRight className="inline ml-2 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
             </a>
            </div>
          </div>
        </div>
         <div className="absolute left-0 right-0 bottom-0">
          <svg viewBox="0 0 1440 100" fill="none" className="w-full h-auto">
            <path d="M0 50L60 45C120 40 240 30 360 33.3C480 36.7 600 53.3 720 56.7C840 60 960 50 1080 45C1200 40 1320 40 1380 40L1440 40V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V50Z" fill="white"/>
          </svg>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}
       
     
      </style>
       
      
    
    </div>
  );
};

export default Home;