import React, { useState, useEffect } from 'react';
import { Play, X, Image, Video, Eye, Loader2, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = import.meta.env.VITE_BACKEND_URL + '/posts';

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      setError(null);
      console.log('🔄 Fetching projects from:', API_URL);
      
      const response = await fetch(API_URL);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('✅ RAW DATA FROM BACKEND:', data);
      
      if (!Array.isArray(data)) {
        console.error('❌ Data is not an array:', data);
        throw new Error('Invalid data format from server');
      }
      
      setProjects(data);
      
    } catch (error) {
      console.error('❌ Error fetching projects:', error);
      setError(`Failed to load projects: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    { id: 'residential', icon: '🏠' },
    { id: 'commercial', icon: '🏢' },
    { id: 'hospitality', icon: '🏨' },
    { id: 'institutional', icon: '🏛️' },
    { id: 'industrial', icon: '🏭' }
  ];

  const mapProjectData = (project, index) => {
    console.log(`📁 Processing project ${index + 1}:`, project);

    const getCategory = () => {
      const title = project.Title?.toLowerCase() || '';
      const content = project.Content?.toLowerCase() || '';
      
      if (title.includes('villa') || title.includes('apartment') || title.includes('house') || content.includes('residential')) 
        return 'residential';
      if (title.includes('office') || title.includes('commercial') || title.includes('corporate') || content.includes('office')) 
        return 'commercial';
      if (title.includes('hotel') || title.includes('restaurant') || title.includes('cafe') || content.includes('hospitality')) 
        return 'hospitality';
      if (title.includes('school') || title.includes('institute') || title.includes('educational') || content.includes('education')) 
        return 'institutional';
      if (title.includes('factory') || title.includes('industrial') || title.includes('manufacturing') || content.includes('industrial')) 
        return 'industrial';
      
      return 'residential';
    };

    const getMediaType = () => {
      if (project.Video && project.Video !== 'null' && project.Video !== 'undefined' && project.Video !== '/uploads/null') {
        console.log('🎥 Video detected:', project.Video);
        return 'video';
      }
      
      if (project.Photo && project.Photo !== 'null' && project.Photo !== 'undefined' && project.Photo !== '/uploads/null') {
        console.log('🖼️ Photo detected:', project.Photo);
        return 'photo';
      }
      
      console.log('📸 No media found, defaulting to photo');
      return 'photo';
    };

    const getMediaUrl = () => {
      console.log('🔍 Analyzing PHOTO data:', {
        rawPhoto: project.Photo,
        type: typeof project.Photo,
        value: project.Photo
      });

      if (typeof project.Photo === 'string' && project.Photo.startsWith('http')) {
        console.log('✅ Using direct HTTP URL:', project.Photo);
        return project.Photo;
      }
      
      if (typeof project.Photo === 'string' && project.Photo.startsWith('/')) {
        const fullUrl = `http://localhost:7000${project.Photo}`;
        console.log('🔗 Constructed full URL:', fullUrl);
        return fullUrl;
      }
      
      if (typeof project.Photo === 'string' && project.Photo.trim() !== '' && !project.Photo.includes('null')) {
        const fullUrl = `http://localhost:7000/uploads/${project.Photo.trim()}`;
        console.log('📁 Using filename with uploads path:', fullUrl);
        return fullUrl;
      }
      
      const category = getCategory();
      const defaultImages = {
        residential: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
        commercial: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
        hospitality: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
        institutional: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800',
        industrial: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800'
      };
      
      const fallback = defaultImages[category] || defaultImages.residential;
      console.log('🖼️ Using fallback image:', fallback);
      return fallback;
    };

    const getVideoUrl = () => {
      console.log('🔍 Analyzing VIDEO data:', project.Video);
      
      if (project.Video && project.Video !== 'null' && project.Video !== 'undefined' && project.Video !== '/uploads/null') {
        if (typeof project.Video === 'string' && project.Video.startsWith('/')) {
          return `http://localhost:7000${project.Video}`;
        }
        
        if (typeof project.Video === 'string') {
          return `http://localhost:7000/uploads/${project.Video.trim()}`;
        }
      }
      
      return 'https://www.youtube.com/embed/dQw4w9WgXcQ';
    };

    const mappedProject = {
      id: project._id || project.id || `project-${index}`,
      title: project.Title || 'Untitled Project',
      category: getCategory(),
      year: new Date(project.createdAt || project.date || Date.now()).getFullYear().toString(),
      type: getMediaType(),
      image: getMediaUrl(),
      videoUrl: getVideoUrl(),
      description: project.Content || 'No description available'
    };

    console.log(`✅ Mapped project ${index + 1}:`, mappedProject);
    return mappedProject;
  };

  const mappedProjects = projects.map(mapProjectData);

  const ProjectCard = ({ project }) => {
    const [imageError, setImageError] = useState(false);
    const [currentImage, setCurrentImage] = useState(project.image);

    const handleImageError = () => {
      console.log('❌ Image failed to load:', currentImage);
      setImageError(true);
      
      const alternativeUrls = [
        project.image.replace('http://localhost:7000/uploads/', 'http://localhost:7000/'),
        project.image.replace('http://localhost:7000/', 'http://localhost:7000/uploads/'),
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800'
      ];
      
      for (let i = 0; i < alternativeUrls.length; i++) {
        if (alternativeUrls[i] !== currentImage) {
          setCurrentImage(alternativeUrls[i]);
          break;
        }
      }
    };

    const getFallbackImage = () => {
      const defaultImages = {
        residential: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
        commercial: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
        hospitality: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
        institutional: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800',
        industrial: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800'
      };
      return defaultImages[project.category] || defaultImages.residential;
    };

    return (
      <div 
        className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 cursor-pointer"
        onClick={() => setSelectedProject(project)}
      >
        <div className="relative h-64 md:h-72 overflow-hidden">
          <img 
            src={imageError ? getFallbackImage() : currentImage}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            onError={handleImageError}
          />
          
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

          {project.type === 'video' && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <Play className="w-8 h-8 text-amber-600 ml-1" fill="currentColor" />
              </div>
            </div>
          )}
        </div>

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

          <div className="flex items-center justify-end pt-4 border-t border-gray-100">
            <Eye className="w-5 h-5 text-amber-500 group-hover:scale-110 transition-transform" />
          </div>
        </div>
      </div>
    );
  };

  const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    const [imageError, setImageError] = useState(false);
    const [currentImage, setCurrentImage] = useState(project.image);

    const handleImageError = () => {
      console.log('❌ Modal image failed to load:', currentImage);
      setImageError(true);
      
      const alternativeUrls = [
        project.image.replace('http://localhost:7000/uploads/', 'http://localhost:7000/'),
        project.image.replace('http://localhost:7000/', 'http://localhost:7000/uploads/'),
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800'
      ];
      
      for (let i = 0; i < alternativeUrls.length; i++) {
        if (alternativeUrls[i] !== currentImage) {
          setCurrentImage(alternativeUrls[i]);
          break;
        }
      }
    };

    const getFallbackImage = () => {
      const defaultImages = {
        residential: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
        commercial: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
        hospitality: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
        institutional: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800',
        industrial: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800'
      };
      return defaultImages[project.category] || defaultImages.residential;
    };

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-300">
        <div className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in duration-300">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
          >
            <X className="w-6 h-6 text-gray-800" />
          </button>

          <div className="overflow-y-auto max-h-[90vh]">
            <div className="relative h-[50vh] md:h-[60vh] bg-gray-900">
              {project.type === 'video' ? (
                <video
                  src={project.videoUrl}
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                />
              ) : (
                <img 
                  src={imageError ? getFallbackImage() : currentImage}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
              )}
            </div>

            <div className="p-6 md:p-10">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{project.title}</h2>
                </div>
                <span className="text-5xl">{categories.find(c => c.id === project.category)?.icon}</span>
              </div>

              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed">{project.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-amber-500 animate-spin mx-auto mb-4" />
          <p className="text-gray-600 text-lg">Loading projects...</p>
        </div>
      </div>
    );
  }

  if (error && projects.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="text-6xl mb-6">❌</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Error Loading Projects</h3>
          <p className="text-gray-600 mb-6">{error}</p>
          <button 
            onClick={fetchProjects}
            className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Projects</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of extraordinary spaces across residential, commercial, hospitality & more
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          {error && (
            <div className="max-w-6xl mx-auto mb-6 bg-red-50 border-2 border-red-200 text-red-700 px-6 py-4 rounded-lg">
              {error}
            </div>
          )}

          {mappedProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {mappedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-6">📭</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No Projects Found</h3>
              <p className="text-gray-600 mb-6">No projects available at the moment</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Want to See Your Project Here?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's create something extraordinary together
          </p>
          <a href="tel:+918199999884">
          <button className="px-10 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            Start Your Project 
            <ChevronRight className="inline ml-2 group-hover:translate-x-2 transition-transform" />
          </button>
          </a>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
};

export default Projects;