import { useState } from 'react';
import { Plus, Image, Video, Save, Loader2 } from 'lucide-react';

export default function PostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [photo, setPhoto] = useState(null);
  const [video, setVideo] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = import.meta.env.VITE_BACKEND_URL + '/posts';

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
    if (file) setPhotoPreview(URL.createObjectURL(file));
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    setVideo(file);
    if (file) setVideoPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async () => {
    if (!title.trim() || !content.trim()) {
      alert('Title aur Content required hai!');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('Title', title);
      formData.append('Content', content);

      if (photo) formData.append('photo', photo);
      if (video) formData.append('video', video);

      const response = await fetch(API_URL, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const err = await response.text();
        throw new Error(err);
      }

      // Reset
      setTitle('');
      setContent('');
      setPhoto(null);
      setVideo(null);
      setPhotoPreview(null);
      setVideoPreview(null);

      alert('Post created successfully! 🎉');
    } catch (err) {
      console.error(err);
      setError(err.message);
      alert("Failed to create post!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Post</span>
          </h1>
          <p className="text-lg text-gray-300">Upload photos and videos with ease</p>
        </div>
      </section>

      {/* FORM SECTION */}
      <div className="container mx-auto px-4 py-12">
        {error && (
          <div className="bg-red-50 border-2 border-red-200 text-red-700 px-6 py-4 rounded-lg mb-6 max-w-4xl mx-auto">
            {error}
          </div>
        )}

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Plus /> Create New Post
            </h2>
          </div>

          <div className="p-8 space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Title *</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                disabled={loading}
                className="w-full px-4 py-3 border-2 rounded-lg"
                placeholder="Enter post title"
              />
            </div>

            {/* Content */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Content *</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={6}
                disabled={loading}
                className="w-full px-4 py-3 border-2 rounded-lg"
                placeholder="Write your content here..."
              />
            </div>

            {/* Uploads */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* PHOTO */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <Image /> Photo (optional)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  disabled={loading}
                  className="w-full px-4 py-3 border-2 rounded-lg"
                />
                {photoPreview && (
                  <img src={photoPreview} className="mt-3 h-32 rounded-lg object-cover border" />
                )}
              </div>

              {/* VIDEO */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <Video /> Video (optional)
                </label>
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleVideoChange}
                  disabled={loading}
                  className="w-full px-4 py-3 border-2 rounded-lg"
                />
                {videoPreview && (
                  <video src={videoPreview} className="mt-3 h-32 rounded-lg border" controls />
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
            >
              {loading ? <Loader2 size={20} className="animate-spin" /> : <Save size={20} />}
              {loading ? "Creating..." : "Create Post"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
