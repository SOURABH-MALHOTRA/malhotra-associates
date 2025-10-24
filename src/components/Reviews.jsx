import React, { useState, useEffect } from 'react';
import { Star, Quote, ThumbsUp, Award, TrendingUp, Users, CheckCircle, Sparkles, ChevronLeft, ChevronRight, Mail, Building2, MessageSquare } from 'lucide-react';

const Reviews = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [filter, setFilter] = useState('all');
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    review: '',
    consent: false
  });
  const [submitStatus, setSubmitStatus] = useState('');
  const [userReviews, setUserReviews] = useState([]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { icon: Star, value: '4.9/5', label: 'Average Rating', gradient: 'from-yellow-500 to-orange-500' },
    { icon: Users, value: '500+', label: 'Happy Clients', gradient: 'from-blue-500 to-cyan-500' },
    { icon: Award, value: '98%', label: 'Satisfaction Rate', gradient: 'from-purple-500 to-pink-500' },
    { icon: TrendingUp, value: '100%', label: 'Project Success', gradient: 'from-green-500 to-emerald-500' }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Homeowner',
      project: 'Residential Interior',
      rating: 5,
      image: '👨‍💼',
      text: 'Malhotra Associates transformed our house into a dream home. Their attention to detail and understanding of our needs was exceptional. The team was professional, timely, and the final result exceeded our expectations!',
      category: 'residential'
    },
    {
      name: 'Priya Sharma',
      role: 'Business Owner',
      project: 'Commercial Office Design',
      rating: 5,
      image: '👩‍💼',
      text: 'Our office space has become a productivity powerhouse thanks to their innovative workspace design. The team understood our brand identity and created an environment that truly reflects our values.',
      category: 'commercial'
    },
    {
      name: 'Amit Patel',
      role: 'Restaurant Owner',
      project: 'Hospitality Design',
      rating: 5,
      image: '👨‍🍳',
      text: 'The restaurant design they created is stunning! Our customers constantly compliment the ambiance. The blend of aesthetics and functionality is perfect. Highly recommend for any hospitality project.',
      category: 'hospitality'
    },
    {
      name: 'Sneha Reddy',
      role: 'Apartment Owner',
      project: 'Modular Kitchen',
      rating: 5,
      image: '👩‍🦰',
      text: 'My modular kitchen is a masterpiece! Smart storage solutions, beautiful finishes, and perfect use of space. Cooking has become so much more enjoyable in this well-designed kitchen.',
      category: 'residential'
    },
    {
      name: 'Vikram Singh',
      role: 'Villa Owner',
      project: 'Complete Home Design',
      rating: 5,
      image: '👨‍💻',
      text: 'From concept to completion, the journey was smooth. Their sustainable design approach and quality materials have given us a home that is both beautiful and eco-friendly.',
      category: 'residential'
    },
    {
      name: 'Kavita Desai',
      role: 'Boutique Owner',
      project: 'Retail Space Design',
      rating: 5,
      image: '👩‍💼',
      text: 'They designed a retail space that perfectly showcases our products. The customer flow and visual merchandising areas are brilliantly executed. Sales have increased significantly!',
      category: 'commercial'
    }
  ];

  const features = [
    {
      icon: CheckCircle,
      title: 'On-Time Delivery',
      desc: 'All projects completed within the agreed timeline'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      desc: 'Highest standards maintained throughout the project'
    },
    {
      icon: Users,
      title: 'Expert Team',
      desc: 'Experienced professionals dedicated to your vision'
    },
    {
      icon: ThumbsUp,
      title: 'Client Satisfaction',
      desc: 'Consistent 5-star ratings from satisfied clients'
    }
  ];

  const filteredTestimonials = filter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === filter);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.projectType || !formData.review) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(''), 3000);
      return;
    }

    if (rating === 0) {
      setSubmitStatus('error-rating');
      setTimeout(() => setSubmitStatus(''), 3000);
      return;
    }

    if (!formData.consent) {
      setSubmitStatus('error-consent');
      setTimeout(() => setSubmitStatus(''), 3000);
      return;
    }

    // Create new review object
    const newReview = {
      name: formData.name,
      role: 'Client',
      project: formData.projectType.charAt(0).toUpperCase() + formData.projectType.slice(1) + ' Project',
      rating: rating,
      image: '👤',
      text: formData.review,
      category: formData.projectType,
      timestamp: new Date().toISOString()
    };

    // Add to user reviews
    setUserReviews(prev => [newReview, ...prev]);
    
    // Show success message
    setSubmitStatus('success');
    
    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        projectType: '',
        review: '',
        consent: false
      });
      setRating(0);
      setSubmitStatus('');
      
      // Scroll to reviews section
      const reviewsSection = document.getElementById('all-reviews-section');
      if (reviewsSection) {
        reviewsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white py-16 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '700ms' }}></div>
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
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-amber-500/20 backdrop-blur-md rounded-full border border-amber-400/30 shadow-lg animate-fadeIn">
              <Star className="w-5 h-5 text-amber-400 fill-amber-400 animate-pulse" />
              <span className="text-amber-300 font-semibold">Trusted by 500+ Satisfied Clients</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="block mb-2 animate-slideInLeft">Client</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 animate-slideInRight delay-200">
                Reviews
              </span>
            </h1>
            
            <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed animate-fadeInUp delay-400">
              Hear what our clients have to say about their experience with Malhotra Associates
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" className="w-full h-auto">
            <path d="M0 50L60 45C120 40 240 30 360 33.3C480 36.7 600 53.3 720 56.7C840 60 960 50 1080 45C1200 40 1320 40 1380 40L1440 40V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V50Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <div 
                  key={idx}
                  className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-transparent transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden animate-scaleIn delay-${(idx + 1) * 100}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <div className={`relative w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 mx-auto`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-4 animate-fadeIn">
                <span className="text-amber-600 font-semibold text-sm tracking-widest uppercase">What Clients Say</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 animate-fadeInUp delay-100">
                Featured Testimonials
              </h2>
              
              {/* Filter Buttons */}
              <div className="flex justify-center gap-3 flex-wrap mt-8">
                {['all', 'residential', 'commercial', 'hospitality'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => { setFilter(cat); setCurrentTestimonial(0); }}
                    className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                      filter === cat
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg scale-105'
                        : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-amber-400'
                    }`}
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Carousel */}
            <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-gray-100 animate-scaleIn">
              <Quote className="absolute top-8 left-8 w-16 h-16 text-amber-500/20" />
              
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{filteredTestimonials[currentTestimonial].image}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {filteredTestimonials[currentTestimonial].name}
                  </h3>
                  <p className="text-amber-600 font-semibold mb-1">
                    {filteredTestimonials[currentTestimonial].role}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {filteredTestimonials[currentTestimonial].project}
                  </p>
                </div>

                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(filteredTestimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>

                <p className="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto">
                  "{filteredTestimonials[currentTestimonial].text}"
                </p>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-center gap-4 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="group p-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="group p-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {filteredTestimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTestimonial(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentTestimonial
                        ? 'w-8 bg-gradient-to-r from-amber-500 to-orange-500'
                        : 'w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Write Review Form */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-4 animate-fadeIn">
                <span className="text-amber-600 font-semibold text-sm tracking-widest uppercase">Share Your Experience</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 animate-fadeInUp delay-100">
                Write a Review
              </h2>
              <p className="text-lg md:text-xl text-gray-600 animate-fadeInUp delay-200">
                Help others by sharing your experience with our services
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl border-2 border-gray-100 animate-scaleIn">
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border-2 border-green-500 rounded-xl flex items-center gap-3 animate-fadeIn">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-green-700 font-semibold">Thank you! Your review has been submitted successfully.</span>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border-2 border-red-500 rounded-xl text-red-700 font-semibold animate-fadeIn">
                  Please fill in all required fields.
                </div>
              )}

              {submitStatus === 'error-rating' && (
                <div className="mb-6 p-4 bg-red-50 border-2 border-red-500 rounded-xl text-red-700 font-semibold animate-fadeIn">
                  Please select a rating.
                </div>
              )}

              {submitStatus === 'error-consent' && (
                <div className="mb-6 p-4 bg-red-50 border-2 border-red-500 rounded-xl text-red-700 font-semibold animate-fadeIn">
                  Please agree to publish your review.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                      <Users className="w-4 h-4 text-amber-500" />
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none transition-all duration-300 group-hover:border-gray-300"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-amber-500" />
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none transition-all duration-300 group-hover:border-gray-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-amber-500" />
                      Project Type *
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none transition-all duration-300 group-hover:border-gray-300"
                    >
                      <option value="">Select project type</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="hospitality">Hospitality</option>
                      <option value="institutional">Institutional</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="group">
                    <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                      <Star className="w-4 h-4 text-amber-500" />
                      Your Rating *
                    </label>
                    <div className="flex gap-2 pt-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoveredRating(star)}
                          onMouseLeave={() => setHoveredRating(0)}
                          className="group/star p-2 hover:scale-125 transition-transform duration-200"
                        >
                          <Star 
                            className={`w-8 h-8 transition-colors ${
                              star <= (hoveredRating || rating)
                                ? 'text-yellow-500 fill-yellow-500'
                                : 'text-gray-300'
                            }`} 
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="group">
                  <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-amber-500" />
                    Your Review *
                  </label>
                  <textarea
                    name="review"
                    value={formData.review}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none transition-all duration-300 group-hover:border-gray-300 resize-none"
                    placeholder="Share your experience working with Malhotra Associates..."
                  ></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    className="mt-1 w-4 h-4 text-amber-500 border-gray-300 rounded focus:ring-amber-500"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    I consent to having this review published on the Malhotra Associates website
                  </label>
                </div>

                <button
                  type="submit"
                  className="group w-full px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-amber-500/50 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Submit Review
                    <CheckCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* All Reviews Grid */}
      <section id="all-reviews-section" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                All Client Reviews
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                Real feedback from real projects
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* User submitted reviews first */}
              {userReviews.map((review, idx) => (
                <div 
                  key={`user-${idx}`}
                  className="group bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl border-2 border-amber-300 hover:border-amber-500 transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{review.image}</div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-lg group-hover:text-amber-600 transition-colors">
                          {review.name}
                        </h3>
                        <p className="text-gray-600 text-sm">{review.role}</p>
                      </div>
                    </div>
                    <span className="inline-block px-3 py-1 bg-amber-500 text-white rounded-full text-xs font-bold shadow-md">
                      NEW
                    </span>
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {review.text}
                  </p>

                  <div className="pt-4 border-t border-amber-200">
                    <span className="inline-block px-3 py-1 bg-white text-amber-700 rounded-full text-xs font-semibold border border-amber-300">
                      {review.project}
                    </span>
                  </div>
                </div>
              ))}

              {/* Original testimonials */}
              {testimonials.map((testimonial, idx) => (
                <div 
                  key={`original-${idx}`}
                  className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-amber-400 transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp delay-${(idx % 3) * 100}`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-4xl">{testimonial.image}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-lg group-hover:text-amber-600 transition-colors">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {testimonial.text}
                  </p>

                  <div className="pt-4 border-t border-gray-100">
                    <span className="inline-block px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-xs font-semibold border border-amber-200">
                      {testimonial.project}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Why Clients Love Us
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                The reasons behind our consistent 5-star ratings
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, idx) => (
                <div 
                  key={idx}
                  className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-amber-400 transition-all duration-300 transform hover:-translate-y-2 animate-scaleIn delay-${(idx + 5) * 100}`}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-amber-600 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
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
            <Sparkles className="w-16 h-16 mx-auto mb-6 text-amber-400" />
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Ready to Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Happy Clients?</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
              Let's create your success story together
            </p>
            <button className="group px-10 py-5 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-bold text-lg shadow-2xl hover:shadow-amber-500/50 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-2 justify-center">
                Start Your Project
                <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
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

        .delay-700 {
          animation-delay: 700ms;
        }

        .delay-800 {
          animation-delay: 800ms;
        }
      `}</style>
    </div>
  );
};

export default Reviews;
