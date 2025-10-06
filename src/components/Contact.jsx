import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Sparkles, MessageSquare, User, Building2 } from 'lucide-react';

const Contact = () => {
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      detail: '+91 98765 43210',
      subDetail: 'Mon-Sat, 9AM-6PM',
      gradient: 'from-blue-500 to-cyan-500',
      link: 'tel:+919876543210'
    },
    {
      icon: Mail,
      title: 'Email',
      detail: 'info@malhotraassociates.com',
      subDetail: 'We reply within 24 hours',
      gradient: 'from-purple-500 to-pink-500',
      link: 'mailto:info@malhotraassociates.com'
    },
    {
      icon: MapPin,
      title: 'Office',
      detail: 'Naduvannur, Kerala, India',
      subDetail: 'Visit us by appointment',
      gradient: 'from-orange-500 to-amber-500',
      link: '#map'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      detail: 'Mon - Sat: 9AM - 6PM',
      subDetail: 'Sunday: Closed',
      gradient: 'from-green-500 to-emerald-500',
      link: null
    }
  ];

  const services = [
    'Interior Design',
    'Architecture',
    'Furniture Design',
    'Project Management',
    'Sustainable Design',
    'Residential Design',
    'Commercial Design',
    'Other'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white py-16 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '700ms' }}></div>
            <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1400ms' }}></div>
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
              <span className="text-amber-400 text-sm font-medium">Let's Create Something Amazing Together</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="block mb-2 animate-slideInLeft">Get In</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 animate-slideInRight delay-200">
                Touch
              </span>
            </h1>
            
            <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed animate-fadeInUp delay-400">
              Ready to transform your space? We're here to bring your vision to life
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" className="w-full h-auto">
            <path d="M0 50L60 45C120 40 240 30 360 33.3C480 36.7 600 53.3 720 56.7C840 60 960 50 1080 45C1200 40 1320 40 1380 40L1440 40V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V50Z" fill="white"/>
          </svg>
        </div>
        <div className="absolute left-0 right-0 bottom-0">
          <svg viewBox="0 0 1440 100" fill="none" className="w-full h-auto">
            <path d="M0 50L60 45C120 40 240 30 360 33.3C480 36.7 600 53.3 720 56.7C840 60 960 50 1080 45C1200 40 1320 40 1380 40L1440 40V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V50Z" fill="rgb(251 146 60)"/>
          </svg>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 animate-fadeIn">
                <span className="text-amber-600 font-semibold text-sm tracking-widest uppercase">Contact Information</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 animate-fadeInUp delay-100">
                How to Reach Us
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp delay-200">
                Multiple ways to connect with our team
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, idx) => (
                <a
                  key={idx}
                  href={info.link || '#'}
                  onClick={(e) => !info.link && e.preventDefault()}
                  className={`group block bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-transparent transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden animate-scaleIn delay-${(idx + 3) * 100}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <div className={`relative w-14 h-14 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <info.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-600 group-hover:to-orange-600 transition-all duration-300">
                    {info.title}
                  </h3>
                  
                  <p className="text-gray-800 font-semibold mb-1">
                    {info.detail}
                  </p>
                  
                  <p className="text-gray-600 text-sm">
                    {info.subDetail}
                  </p>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Contact Form */}
              <div className="animate-slideInLeft">
                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border-2 border-gray-100">
                  <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                      Send Us a Message
                    </h2>
                    <p className="text-gray-600 text-lg">
                      Fill out the form below and we'll get back to you within 24 hours
                    </p>
                  </div>

                  {isSubmitted ? (
                    <div className="bg-green-50 border-2 border-green-500 rounded-xl p-8 text-center animate-scaleIn">
                      <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-green-900 mb-2">Message Sent!</h3>
                      <p className="text-green-700">We'll get back to you soon.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="group">
                        <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                          <User className="w-4 h-4 text-amber-500" />
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none transition-all duration-300 group-hover:border-gray-300"
                          placeholder="John Doe"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="group">
                          <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                            <Mail className="w-4 h-4 text-amber-500" />
                            Email *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none transition-all duration-300 group-hover:border-gray-300"
                            placeholder="john@example.com"
                          />
                        </div>

                        <div className="group">
                          <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                            <Phone className="w-4 h-4 text-amber-500" />
                            Phone
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none transition-all duration-300 group-hover:border-gray-300"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                      </div>

                      <div className="group">
                        <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-amber-500" />
                          Service Interested In
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none transition-all duration-300 group-hover:border-gray-300"
                        >
                          <option value="">Select a service</option>
                          {services.map((service, idx) => (
                            <option key={idx} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>

                      <div className="group">
                        <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                          <MessageSquare className="w-4 h-4 text-amber-500" />
                          Your Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows="5"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none transition-all duration-300 group-hover:border-gray-300 resize-none"
                          placeholder="Tell us about your project..."
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="group w-full px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-amber-500/50 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          Send Message
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Map */}
              <div className="animate-slideInRight delay-200">
                <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-gray-100 overflow-hidden">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <MapPin className="w-6 h-6 text-amber-500" />
                      Our Location
                    </h3>
                    <p className="text-gray-600">
                      Visit our office in Naduvannur, Kerala
                    </p>
                  </div>

                  {/* Google Map Embed */}
                  <div className="rounded-xl overflow-hidden shadow-lg border-2 border-gray-100 group hover:border-amber-400 transition-all duration-300">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62566.89821847!2d75.72826!3d11.49916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65bd0ae134341%3A0x61a369fe7126e1a!2sNaduvannur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="400"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="grayscale hover:grayscale-0 transition-all duration-500"
                    ></iframe>
                  </div>

                  <div className="mt-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-amber-600" />
                      Office Hours
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-700 font-medium">Monday - Friday:</span>
                        <span className="text-gray-900 font-semibold">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700 font-medium">Saturday:</span>
                        <span className="text-gray-900 font-semibold">9:00 AM - 2:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700 font-medium">Sunday:</span>
                        <span className="text-red-600 font-semibold">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1000ms' }}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Have a Project in <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Mind?</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
              Schedule a free consultation with our design experts today
            </p>
            <button className="group px-10 py-5 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-bold text-lg shadow-2xl hover:shadow-amber-500/50 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Book Consultation
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
        <div className="absolute left-0 right-0 bottom-0">
          <svg viewBox="0 0 1440 100" fill="none" className="w-full h-auto">
            <path d="M0 50L60 45C120 40 240 30 360 33.3C480 36.7 600 53.3 720 56.7C840 60 960 50 1080 45C1200 40 1320 40 1380 40L1440 40V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V50Z" fill="white"/>
          </svg>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out forwards;
        }

        .delay-100 {
          animation-delay: 100ms;
        }

        .delay-200 {
          animation-delay: 200ms;
        }

        .delay-300 {
          animation-delay: 300ms;
        }

        .delay-400 {
          animation-delay: 400ms;
        }

        .delay-500 {
          animation-delay: 500ms;
        }

        .delay-600 {
          animation-delay: 600ms;
        }
      `}</style>
    </div>
  );
};

export default Contact;