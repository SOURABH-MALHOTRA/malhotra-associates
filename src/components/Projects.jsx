import React, { useState } from 'react';
import { Play, X, Image, Video, ChevronRight, Filter, Search, MapPin, Calendar, Award } from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Projects', icon: '🎨' },
    { id: 'residential', name: 'Residential', icon: '🏠' },
    { id: 'commercial', name: 'Commercial', icon: '🏢' },
    { id: 'hospitality', name: 'Hospitality', icon: '🏨' },
    { id: 'institutional', name: 'Institutional', icon: '🏛️' },
    { id: 'industrial', name: 'Industrial', icon: '🏭' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Luxury Villa - Riverside Estate',
      category: 'residential',
      location: 'Jabalpur, MP',
      year: '2024',
      type: 'photo',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
      description: 'A stunning 5BHK villa featuring contemporary design with traditional elements',
      tags: ['Modern', 'Luxury', 'Sustainable'],
      area: '4500 sq.ft'
    },
    {
      id: 2,
      title: 'Modern Office Complex',
      category: 'commercial',
      location: 'Indore, MP',
      year: '2024',
      type: 'video',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'State-of-the-art office space designed for productivity and collaboration',
      tags: ['Corporate', 'Tech-Ready', 'Ergonomic'],
      area: '12000 sq.ft'
    },
    {
      id: 3,
      title: 'Boutique Hotel Interior',
      category: 'hospitality',
      location: 'Bhopal, MP',
      year: '2023',
      type: 'photo',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
      description: 'Elegant hotel design combining comfort with aesthetic excellence',
      tags: ['Hospitality', 'Luxury', 'Experience'],
      area: '8000 sq.ft'
    },
    {
      id: 4,
      title: 'Contemporary Apartment',
      category: 'residential',
      location: 'Jabalpur, MP',
      year: '2024',
      type: 'photo',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
      description: 'Smart living spaces with modular kitchen and premium finishes',
      tags: ['Smart Home', 'Modular', 'Compact'],
      area: '2200 sq.ft'
    },
    {
      id: 5,
      title: 'Retail Showroom Design',
      category: 'commercial',
      location: 'Indore, MP',
      year: '2023',
      type: 'video',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Eye-catching retail space designed to enhance customer experience',
      tags: ['Retail', 'Brand Focus', 'Interactive'],
      area: '3500 sq.ft'
    },
    {
      id: 6,
      title: 'Educational Institute',
      category: 'institutional',
      location: 'Jabalpur, MP',
      year: '2023',
      type: 'photo',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800',
      description: 'Modern learning spaces fostering creativity and collaboration',
      tags: ['Educational', 'Functional', 'Inspiring'],
      area: '15000 sq.ft'
    },
    {
      id: 7,
      title: 'Manufacturing Facility',
      category: 'industrial',
      location: 'Mandideep, MP',
      year: '2023',
      type: 'photo',
      image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800',
      description: 'Efficient industrial design prioritizing safety and workflow',
      tags: ['Industrial', 'Safety', 'Efficient'],
      area: '25000 sq.ft'
    },
    {
      id: 8,
      title: 'Penthouse Makeover',
      category: 'residential',
      location: 'Bhopal, MP',
      year: '2024',
      type: 'video',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Luxury penthouse with panoramic views and premium amenities',
      tags: ['Luxury', 'Penthouse', 'Premium'],
      area: '5500 sq.ft'
    },
    {
      id: 9,
      title: 'Restaurant & Café',
      category: 'hospitality',
      location: 'Jabalpur, MP',
      year: '2024',
      type: 'photo',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
      description: 'Vibrant dining space creating memorable culinary experiences',
      tags: ['F&B', 'Ambience', 'Design'],
      area: '3000 sq.ft'
    },
    {
      id: 10,
      title: 'Corporate Headquarters',
      category: 'commercial',
      location: 'Indore, MP',
      year: '2023',
      type: 'photo',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
      description: 'Iconic headquarters design reflecting brand identity',
      tags: ['Corporate', 'Iconic', 'Modern'],
      area: '20000 sq.ft'
    },
    {
      id: 11,
      title: 'Kids Play School',
      category: 'institutional',
      location: 'Jabalpur, MP',
      year: '2024',
      type: 'video',
      image: 'https://images.unsplash.com/photo-1587616211892-c0b71c0b7c91?w=800',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Colorful and safe learning environment for young minds',
      tags: ['Kids', 'Playful', 'Safe'],
      area: '6000 sq.ft'
    },
    {
      id: 12,
      title: 'Farmhouse Retreat',
      category: 'residential',
      location: 'Outskirts Jabalpur',
      year: '2023',
      type: 'photo',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
      description: 'Serene farmhouse design blending with nature',
      tags: ['Farmhouse', 'Nature', 'Retreat'],
      area: '6500 sq.ft'
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const ProjectCard = ({ project }) => {
    return (
      <div 
        className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 cursor-pointer"
        onClick={() => setSelectedProject(project)}
      >
        {/* Image Container */}
        <div className="relative h-64 md:h-72 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Overlay */}
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center gap-2 text-white text-sm mb-2">
                <MapPin className="w-4 h-4" />
                <span>{project.location}</span>
                <span className="mx-2">•</span>
                <Calendar className="w-4 h-4" />
                <span>{project.year}</span>
              </div>
            </div>
          </div> */}

          {/* Media Type Badge */}
          <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5">
            {project.type === 'video' ? (
              <>
                <Video className="w-3.5 h-3.5" />
                Video
              </>
            ) : (
              <>
                <Image className="w-3.5 h-3.5" />
                Photo
              </>
            )}
          </div>

          {/* Play Button for Videos */}
          {project.type === 'video' && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <Play className="w-8 h-8 text-amber-600 ml-1" fill="currentColor" />
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors line-clamp-1">
              {project.title}
            </h3>
            <span className="text-2xl">{categories.find(c => c.id === project.category)?.icon}</span>
          </div>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="px-2.5 py-1 bg-amber-50 text-amber-700 text-xs font-medium rounded-full">
                {tag}
              </span>
            ))}
          </div>

          {/* Area */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <span className="text-sm text-gray-500">Area: <span className="font-semibold text-gray-700">{project.area}</span></span>
            <ChevronRight className="w-5 h-5 text-amber-500 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    );
  };
  

  const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-300">
      
        <div className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in duration-300">
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
          >
            <X className="w-6 h-6 text-gray-800" />
          </button>

          <div className="overflow-y-auto max-h-[90vh]">
            {/* Media Section */}
            <div className="relative h-[50vh] md:h-[60vh] bg-gray-900">
              {project.type === 'video' ? (
                <iframe
                  src={project.videoUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Content Section */}
            <div className="p-6 md:p-10">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{project.title}</h2>
                  <div className="flex flex-wrap items-center gap-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{project.year}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      <span>{project.area}</span>
                    </div>
                  </div>
                </div>
                <span className="text-5xl">{categories.find(c => c.id === project.category)?.icon}</span>
              </div>

              <div className="prose max-w-none mb-6">
                <p className="text-lg text-gray-700 leading-relaxed">{project.description}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-8">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-semibold rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Project Details Grid */}
              <div className="grid md:grid-cols-3 gap-6 bg-gradient-to-br from-gray-50 to-amber-50 rounded-2xl p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">{project.area}</div>
                  <div className="text-sm text-gray-600">Total Area</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">{project.year}</div>
                  <div className="text-sm text-gray-600">Completed Year</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2 capitalize">{project.category}</div>
                  <div className="text-sm text-gray-600">Project Type</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
             <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-6 py-4 mb-8">
              <Award className="w-5 h-5 text-amber-400" />
              <span className="text-amber-400 text-sm font-medium">Projects Completed</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Projects</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of extraordinary spaces across residential, commercial, hospitality & more
            </p>
          </div>
        </div>
      </section>

    

      {/* Projects Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
       

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No Projects Found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
              <button 
                onClick={() => { setSelectedCategory('all'); setSearchTerm(''); }}
                className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Want to See Your Project Here?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's create something extraordinary together
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            Start Your Project <ChevronRight className="inline ml-2" />
          </button>
          
        </div>
      
      </section>
       

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
      
    </div>
    
  );
};

export default Projects;