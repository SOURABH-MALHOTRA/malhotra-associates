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
    projectType: '',
    comment: ''
  });
  const [submitStatus, setSubmitStatus] = useState('');
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    averageRating: 4.9,
    totalReviews: 0,
    satisfactionRate: 98,
    successRate: 100
  });

  const API_BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:7000/api';

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fetch reviews from backend
  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/reviews`);
      const data = await response.json();
      
      if (data.success) {
        setReviews(data.reviews);
        
        // Calculate stats
        const totalReviews = data.reviews.length;
        const avgRating = totalReviews > 0 
          ? (data.reviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews).toFixed(1)
          : 4.9;
        
        setStats({
          averageRating: avgRating,
          totalReviews: totalReviews,
          satisfactionRate: 98,
          successRate: 100
        });
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
      setSubmitStatus('error-fetch');
      setTimeout(() => setSubmitStatus(''), 3000);
    } finally {
      setLoading(false);
    }
  };

  const statsDisplay = [
    { icon: Star, value: `${stats.averageRating}/5`, label: 'Average Rating', gradient: 'from-yellow-500 to-orange-500' },
    { icon: Users, value: `${stats.totalReviews}+`, label: 'Happy Clients', gradient: 'from-blue-500 to-cyan-500' },
    { icon: Award, value: `${stats.satisfactionRate}%`, label: 'Satisfaction Rate', gradient: 'from-purple-500 to-pink-500' },
    { icon: TrendingUp, value: `${stats.successRate}%`, label: 'Project Success', gradient: 'from-green-500 to-emerald-500' }
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

  const projectTypeMapping = {
    'Residential': 'residential',
    'Commercial': 'commercial',
    'Industrial': 'industrial',
    'Other': 'other'
  };

  const filteredReviews = filter === 'all' 
    ? reviews 
    : reviews.filter(r => projectTypeMapping[r.projectType] === filter);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % filteredReviews.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + filteredReviews.length) % filteredReviews.length);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.projectType || !formData.comment) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(''), 3000);
      return;
    }

    if (rating === 0) {
      setSubmitStatus('error-rating');
      setTimeout(() => setSubmitStatus(''), 3000);
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          rating: rating,
          comment: formData.comment,
          projectType: formData.projectType
        })
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        
        // Refresh reviews list
        await fetchReviews();
        
        // Reset form after success
        setTimeout(() => {
          setFormData({
            name: '',
            projectType: '',
            comment: ''
          });
          setRating(0);
          setSubmitStatus('');
          
          // Scroll to reviews section
          const reviewsSection = document.getElementById('all-reviews-section');
          if (reviewsSection) {
            reviewsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 2000);
      } else {
        setSubmitStatus('error-submit');
        setTimeout(() => setSubmitStatus(''), 3000);
      }
    } catch (error) {
      console.error('Error submitting review:', error);
      setSubmitStatus('error-submit');
      setTimeout(() => setSubmitStatus(''), 3000);
    }
  };

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
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
              <span className="text-amber-300 font-semibold">Trusted by {stats.totalReviews}+ Satisfied Clients</span>
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
              {statsDisplay.map((stat, idx) => (
                <div 
                  key={idx}
                  className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-transparent transition-all duration-300 transform hover:-translate-y-2 animate-scaleIn delay-${(idx + 1) * 100}`}
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
      {filteredReviews.length > 0 && (
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
                  {['all', 'residential', 'commercial', 'industrial', 'other'].map((cat) => (
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
                    <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                      {getInitials(filteredReviews[currentTestimonial].name)}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      {filteredReviews[currentTestimonial].name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {filteredReviews[currentTestimonial].projectType} Project
                    </p>
                  </div>

                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(filteredReviews[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>

                  <p className="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto">
                    "{filteredReviews[currentTestimonial].comment}"
                  </p>
                </div>

                {/* Navigation Buttons */}
                {filteredReviews.length > 1 && (
                  <>
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
                      {filteredReviews.map((_, idx) => (
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
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

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

              {submitStatus === 'error-submit' && (
                <div className="mb-6 p-4 bg-red-50 border-2 border-red-500 rounded-xl text-red-700 font-semibold animate-fadeIn">
                  Error submitting review. Please try again.
                </div>
              )}

              {submitStatus === 'error-fetch' && (
                <div className="mb-6 p-4 bg-red-50 border-2 border-red-500 rounded-xl text-red-700 font-semibold animate-fadeIn">
                  Error loading reviews. Please refresh the page.
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
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Industrial">Industrial</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
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

                <div className="group">
                  <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-amber-500" />
                    Your Review *
                  </label>
                  <textarea
                    name="comment"
                    value={formData.comment}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none transition-all duration-300 group-hover:border-gray-300 resize-none"
                    placeholder="Share your experience working with Malhotra Associates..."
                  ></textarea>
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

            {loading ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
                <p className="mt-4 text-gray-600">Loading reviews...</p>
              </div>
            ) : reviews.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No reviews yet. Be the first to share your experience!</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reviews.map((review, idx) => (
                  <div 
                    key={review._id}
                    className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-amber-400 transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp delay-${(idx % 3) * 100}`}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                        {getInitials(review.name)}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-lg group-hover:text-amber-600 transition-colors">
                          {review.name}
                        </h3>
                        <p className="text-gray-600 text-sm">{review.projectType}</p>
                      </div>
                    </div>

                    <div className="flex gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>

                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                      {review.comment}
                    </p>

                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                      <span className="inline-block px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-xs font-semibold border border-amber-200">
                        {review.projectType} Project
                      </span>
                      <span className="text-xs text-gray-500">
                        {new Date(review.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
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
            <a href="tel:+918199999884">
            <button className="group px-10 py-5 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-bold text-lg shadow-2xl hover:shadow-amber-500/50 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-2 justify-center">
                Start Your Project
                <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            </a>
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