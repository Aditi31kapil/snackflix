import { useState } from 'react';
import { Film, Users, Star, MessageSquare, Camera, Palette, Download, Loader2 } from 'lucide-react';
import { generatePosterImage } from '../services/geminiService';

interface MovieCardProps {
  type: 'title' | 'plot' | 'cast' | 'reviews' | 'scene' | 'poster';
  data: any;
  isActive: boolean;
}

export default function MovieCard({ type, data, isActive }: MovieCardProps) {
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [imageError, setImageError] = useState(false);

  const baseClasses = `
  absolute inset-0 bg-gradient-to-br rounded-2xl p-4 shadow-2xl backdrop-blur-sm border border-white/10
  transition-all duration-500 transform-gpu overflow-y-auto max-h-[600px]
  ${isActive ? 'scale-100 opacity-100 z-10' : 'scale-95 opacity-30 z-0'}
`;

  const handleGenerateImage = async () => {
    if (isGeneratingImage || generatedImage) return;
    
    setIsGeneratingImage(true);
    setImageError(false);
    
    try {
      const imageUrl = await generatePosterImage(data.posterPrompt);
      if (imageUrl) {
        setGeneratedImage(imageUrl);
      } else {
        setImageError(true);
      }
    } catch (error) {
      console.error('Failed to generate image:', error);
      setImageError(true);
    } finally {
      setIsGeneratingImage(false);
    }
  };

  const handleDownloadImage = () => {
    if (!generatedImage) return;
    
    const link = document.createElement('a');
    link.href = generatedImage;
    link.download = `${data.title.replace(/\s+/g, '_')}_poster.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const renderContent = () => {
    switch (type) {
      case 'title':
        return (
          <div className={`${baseClasses} from-purple-900/90 to-pink-900/90`}>
            <div className="flex items-center gap-3 mb-6">
              <Film className="h-8 w-8 text-yellow-400" />
              <span className="text-yellow-400 font-semibold text-lg">Movie Concept</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
              {data.title}
            </h2>
            <div className="bg-black/30 rounded-lg p-4 border border-white/20">
              <p className="text-lg text-gray-200 leading-relaxed">
                <span className="text-cyan-400 font-semibold">Genre & Tone:</span> {data.genre}
              </p>
            </div>
          </div>
        );

      case 'plot':
        return (
          <div className={`${baseClasses} from-cyan-900/90 to-blue-900/90`}>
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="h-8 w-8 text-cyan-400" />
              <span className="text-cyan-400 font-semibold text-lg">Plot Summary</span>
            </div>
            <div className="bg-black/30 rounded-lg p-6 border border-white/20">
              <p className="text-lg text-gray-100 leading-relaxed">
                {data.plotSummary}
              </p>
            </div>
          </div>
        );

      case 'cast':
        return (
          <div className={`${baseClasses} from-emerald-900/90 to-teal-900/90`}>
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-8 w-8 text-emerald-400" />
              <span className="text-emerald-400 font-semibold text-lg">Cast</span>
            </div>
            <div className="space-y-4">
              <div className="bg-black/30 rounded-lg p-4 border border-white/20">
                <p className="text-xl font-semibold text-white">{data.cast}</p>
                <p className="text-gray-300 text-sm mt-1">Lead Role</p>
              </div>
            </div>
          </div>
        );

      case 'reviews':
        return (
          <div className={`${baseClasses} from-orange-900/90 to-red-900/90`}>
            <div className="flex items-center gap-3 mb-6">
              <Star className="h-8 w-8 text-orange-400" />
              <span className="text-orange-400 font-semibold text-lg">Reviews</span>
            </div>
            <div className="space-y-6">
              <div className="bg-black/30 rounded-lg p-6 border border-white/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl font-bold text-white">{data.rottenTomatoes}%</div>
                  <div className="text-orange-400 font-semibold">Rotten Tomatoes</div>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-6 w-6 ${i < Math.floor(data.rottenTomatoes / 20) ? 'text-yellow-400 fill-current' : 'text-gray-500'}`}
                    />
                  ))}
                </div>
              </div>
              <div className="bg-black/30 rounded-lg p-6 border border-white/20">
                <blockquote className="text-lg text-gray-100 italic leading-relaxed">
                  {data.criticsQuote}
                </blockquote>
                <p className="text-gray-400 text-sm mt-3">— The Critics</p>
              </div>
            </div>
          </div>
        );

      case 'scene':
        return (
          <div className={`${baseClasses} from-indigo-900/90 to-purple-900/90`}>
            <div className="flex items-center gap-3 mb-6">
              <Camera className="h-8 w-8 text-indigo-400" />
              <span className="text-indigo-400 font-semibold text-lg">Screenplay Scene</span>
            </div>
            <div className="bg-black/30 rounded-lg p-6 border border-white/20">
              <div className="mb-4">
                <p className="text-yellow-400 font-mono text-lg">
                  INT. {data.scene.location} – {data.scene.time}
                </p>
              </div>
              <div className="text-gray-100 leading-relaxed whitespace-pre-line font-mono text-sm">
                {data.scene.content}
              </div>
            </div>
          </div>
        );

      case 'poster':
        return (
          <div className={`${baseClasses} from-pink-900/90 to-rose-900/90`}>
            <div className="flex items-center gap-3 mb-6">
              <Palette className="h-8 w-8 text-pink-400" />
              <span className="text-pink-400 font-semibold text-lg">Movie Poster</span>
            </div>
            
            {generatedImage ? (
              <div className="space-y-4">
                <div className="bg-black/30 rounded-lg p-4 border border-white/20">
                  <img 
                   src={generatedImage} 
                   alt={`${data.title} Movie Poster`}
                   className="w-full object-contain rounded-xl max-h-[80vh]"
                 />
                </div>
                <button
                  onClick={handleDownloadImage}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-lg transition-colors duration-200"
                >
                  <Download className="h-5 w-5" />
                  Download Poster
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="bg-black/30 rounded-lg p-6 border border-white/20">
                  <p className="text-lg text-gray-100 leading-relaxed mb-4">
                    {data.posterPrompt}
                  </p>
                  
                  <button
                    onClick={handleGenerateImage}
                    disabled={isGeneratingImage}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-all duration-200"
                  >
                    {isGeneratingImage ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Generating Poster...
                      </>
                    ) : (
                      <>
                        <Palette className="h-5 w-5" />
                        Generate AI Poster
                      </>
                    )}
                  </button>
                  
                  {imageError && (
                    <p className="text-red-400 text-sm mt-2 text-center">
                      Failed to generate image. Please try again.
                    </p>
                  )}
                </div>
                
                <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg p-4 border border-pink-400/30">
                  <p className="text-pink-300 text-sm">
                    💡 Click "Generate AI Poster" to create a custom movie poster using Gemini AI
                  </p>
                </div>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return renderContent();
}