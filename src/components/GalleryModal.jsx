import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const GalleryModal = ({ isOpen, onClose, images, currentIndex, onPrevious, onNext }) => {
  if (!isOpen) return null;

  const currentImage = images[currentIndex];

  const handleKeyDown = React.useCallback((e) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') onPrevious();
    if (e.key === 'ArrowRight') onNext();
  }, [onClose, onPrevious, onNext]);

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
      <div className="relative max-w-4xl max-h-full p-4">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
        >
          <X size={32} />
        </button>

        {/* Previous button */}
        <button
          onClick={onPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors"
        >
          <ChevronLeft size={48} />
        </button>

        {/* Next button */}
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors"
        >
          <ChevronRight size={48} />
        </button>

        {/* Image */}
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="max-w-full max-h-full object-contain"
        />

        {/* Image info */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="text-xl font-semibold mb-2">{currentImage.alt}</h3>
          <p className="text-sm opacity-75">
            {currentIndex + 1} of {images.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
