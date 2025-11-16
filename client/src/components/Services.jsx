import React, { useState, useEffect } from 'react';
import { Home, Building2, Sofa, Briefcase, CheckCircle2, ArrowRight, Sparkles, Palette, Hammer, LineChart, Leaf, Users, Target, ChevronRight } from 'lucide-react';

const Services = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState('residential');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainServices = [
    {
      icon: Palette,
      title: 'Interior Design',
      desc: 'Creating captivating and harmonious interior spaces that complement the overall architectural vision',
      features: ['Space Planning', 'Color Schemes', 'Lighting Design', 'Furniture Selection'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Building2,
      title: 'Architecture',
      desc: 'Comprehensive architectural design services focusing on innovative, functional, and sustainable solutions',
      features: ['Residential Projects', 'Commercial Design', 'Institutional Buildings', 'Industrial Facilities'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Sofa,
      title: 'Furniture Design',
      desc: 'Custom furniture design that aligns with the overall design concept of your project',
      features: ['Custom Pieces', 'Unique Designs', 'Aesthetic Enhancement', 'Functional Solutions'],
      gradient: 'from-orange-500 to-amber-500'
    },
    {
      icon: Briefcase,
      title: 'Project Management',
      desc: 'Ensuring seamless execution of projects from start to finish with highest quality standards',
      features: ['Budgeting Control', 'Timeline Management', 'Contractor Coordination', 'Quality Assurance'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Leaf,
      title: 'Sustainable Design',
      desc: 'Integrating environmentally friendly solutions to minimize ecological footprint',
      features: ['Energy Efficiency', 'Resource Conservation', 'Eco-Friendly Materials', 'Green Solutions'],
      gradient: 'from-teal-500 to-green-600'
    }
  ];

  const residentialServices = [
    {
      icon: Home,
      title: 'Space Planning',
      desc: 'Optimizing the layout of your home to ensure efficient use of space and enhance the flow between rooms'
    },
    {
      icon: Palette,
      title: 'Color Schemes & Lighting',
      desc: 'Selecting color palettes and lighting solutions that create a harmonious and inviting atmosphere'
    },
    {
      icon: Sofa,
      title: 'Furniture Selection',
      desc: 'Choosing and designing furniture pieces that complement the overall design concept and meet your needs'
    },
    {
      icon: Sparkles,
      title: 'Material Selection',
      desc: 'Selecting high-quality materials and finishes that add aesthetic value and durability to your home'
    },
    {
      icon: Target,
      title: 'Decor & Accessories',
      desc: 'Curating decor items and accessories that add personality and style to your living spaces'
    }
  ];

  const commercialServices = [
    {
      icon: LineChart,
      title: 'Workspace Strategy',
      desc: 'Designing office layouts that promote productivity, collaboration, and employee well-being'
    },
    {
      icon: Building2,
      title: 'Retail Design',
      desc: 'Creating visually appealing and functional retail spaces that enhance customer experience'
    },
    {
      icon: Sparkles,
      title: 'Hospitality Design',
      desc: 'Designing interiors for hotels, restaurants, and venues to create memorable experiences'
    },
    {
      icon: Target,
      title: 'Brand Integration',
      desc: 'Ensuring interior design reflects and reinforces the brand identity and values of the business'
    },
    {
      icon: Leaf,
      title: 'Sustainable Solutions',
      desc: 'Incorporating eco-friendly practices and materials for sustainable commercial spaces'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white py-16 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10">
          
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '700ms' }}></div>
            <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1400ms' }}></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div 
            className="max-w-5xl mx-auto text-center transition-all duration-700"
            style={{ 
              opacity: Math.max(0, 1 - scrollY / 500),
              transform: `translateY(${scrollY * 0.3}px)`
            }}
          >
         <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-6 py-4 mb-8">
              <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
              
               <span className="text-amber-400 text-sm font-medium">Comprehensive Design Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="block mb-2">Our</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500">
                Services
              </span>
            </h1>
            
            <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              A comprehensive range of services that cater to all aspects of architectural design and project realization
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-gradient-to-b from-white/50 to-amber-400/50 rounded-full animate-pulse"></div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" className="w-full h-auto">
            <path d="M0 50L60 45C120 40 240 30 360 33.3C480 36.7 600 53.3 720 56.7C840 60 960 50 1080 45C1200 40 1320 40 1380 40L1440 40V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V50Z" fill="rgb(251 146 60)"/>
          </svg>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="text-amber-600 font-semibold text-sm tracking-widest uppercase">What We Do</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Core Services
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Expert solutions tailored to transform your vision into reality
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {mainServices.map((service, idx) => (
                <div 
                  key={idx}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-transparent transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <div className={`relative w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-600 group-hover:to-orange-600 transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.desc}
                  </p>

                  <div className="space-y-2">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-sm text-gray-700 group-hover:translate-x-1 transition-transform duration-300">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Residential & Commercial Services */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Specialized Services
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Holistic and client-focused approach for residential and commercial projects
              </p>

              {/* Tabs */}
              <div className="flex justify-center gap-4 flex-wrap">
                <button
                  onClick={() => setActiveTab('residential')}
                  className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                    activeTab === 'residential'
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-xl scale-105'
                      : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-amber-400'
                  }`}
                >
                  <Home className="inline w-5 h-5 mr-2" />
                  Residential Design
                </button>
                <button
                  onClick={() => setActiveTab('commercial')}
                  className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                    activeTab === 'commercial'
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-xl scale-105'
                      : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-amber-400'
                  }`}
                >
                  <Building2 className="inline w-5 h-5 mr-2" />
                  Commercial Design
                </button>
              </div>
            </div>

            {/* Services Content */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(activeTab === 'residential' ? residentialServices : commercialServices).map((service, idx) => (
                <div 
                  key={idx}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-amber-400 transition-all duration-300 transform hover:-translate-y-2"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {service.desc}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-amber-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="text-amber-600 font-semibold text-sm tracking-widest uppercase">Our Process</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                How We Work
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                A proven methodology that ensures exceptional results every time
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  num: '01',
                  icon: Users,
                  title: 'Close Collaboration',
                  desc: 'We collaborate closely with clients to understand their unique visions and requirements, ensuring every detail aligns perfectly'
                },
                {
                  num: '02',
                  icon: Target,
                  title: 'Meticulous Planning',
                  desc: 'Translating your vision into meticulously crafted architectural plans with attention to both functional and aesthetic elements'
                },
                {
                  num: '03',
                  icon: Hammer,
                  title: 'Seamless Execution',
                  desc: 'Our experienced project management team ensures seamless execution from start to finish, overseeing every aspect'
                }
              ].map((step, idx) => (
                <div 
                  key={idx}
                  className="group relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="text-6xl font-bold text-amber-500/20 mb-4">{step.num}</div>
                    
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <step.icon className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold mb-4 group-hover:text-amber-400 transition-colors">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse" style={{ animationDelay: '1000ms' }}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Ready to Start Your <span className="text-slate-900">Dream Project?</span>
            </h2>
            <p className="text-xl md:text-2xl text-amber-50 mb-10 leading-relaxed">
              Let our experienced team bring your vision to life with our comprehensive design services
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+918199999884">
              <button className="group px-10 py-5 bg-white text-amber-600 rounded-xl font-bold text-lg shadow-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                Get Free Consultation
                <ChevronRight className="inline ml-2 group-hover:translate-x-2 transition-transform" />
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
    </div>
  );
};

export default Services;