import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button.jsx';
import GalleryModal from './GalleryModal.jsx';

// New: import local assets so the bundler includes them
import bikeInBoat from '../assets/bike_in_boat.jpg'
import bike2 from '../assets/bike2.jpg'
import volThumb from '../assets/vol.jpg'
import bike3 from '../assets/bike3.jpg'
import manImg from '../assets/man.jpg'
import streetImg from '../assets/street.jpg'
import streetsImg from '../assets/streets.jpg'
import teaImg from '../assets/tea.jpg'
import villageImg from '../assets/village.jpg'
import village1Img from '../assets/village1.jpg'
import volcanoImg from '../assets/volcano.jpg'
import zebraImg from '../assets/zebra.jpg'
import fourByFour1 from '../assets/4x4_1.svg'
import fourByFour2 from '../assets/4x4_2.svg'
import fourByFour3 from '../assets/4x4_3.svg'
import safari1 from '../assets/safari1.jpeg'
import safari2 from '../assets/safari2.jpeg'
import safari3 from '../assets/safari3.jpeg'
import safari4 from '../assets/safari4.jpeg'
import safari5 from '../assets/safari5.jpeg'
import safari6 from '../assets/safari6.jpeg'
import safari7 from '../assets/safari7.jpeg'
import kivuVideo from '../assets/kivu.mp4'


const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const [mediaItems, setMediaItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState(['All']);

  const API_BASE = 'http://localhost:5001/api';

  // Load media items from backend API
  useEffect(() => {
    const loadMediaItems = async () => {
      try {
        setLoading(true);
        
        // Fetch media from backend
        const response = await fetch(`${API_BASE}/media?file_type=image&is_active=true`);
        const data = await response.json();
        
        if (data.success && data.data.length > 0) {
          // Transform backend data to match frontend format
          const transformedMedia = data.data.map(item => ({
            id: item.id,
            type: 'image',
            src: `http://localhost:5001/uploads/${item.filename}`, // <-- FIXED
            alt: item.alt_text || item.title || item.original_filename,
            category: item.category || 'Uncategorized',
            title: item.title,
            description: item.description,
            is_featured: item.is_featured
          }));
          
          setMediaItems(transformedMedia);
          
          // Extract unique categories
          const uniqueCategories = ['All', ...new Set(transformedMedia.map(item => item.category).filter(Boolean))];
          setCategories(uniqueCategories);
        } else {
          // Fallback to default images if no backend data
          const defaultMedia = [
            { id: 1, type: 'image', src: bikeInBoat, alt: 'Bike in Boat', category: 'Adventures' },
            { id: 2, type: 'image', src: bike2, alt: 'Bike on Road', category: 'Cycling' },
            { id: 3, type: 'image', src: volThumb, alt: 'Volcanoes', category: 'Landscapes' },
            { id: 4, type: 'image', src: bike3, alt: 'Bike with Goats', category: 'Cultural' },
            { id: 5, type: 'image', src: manImg, alt: 'Man on Bike Silhouette', category: 'Adventures' },
            { id: 6, type: 'image', src: streetImg, alt: 'Bike on Street Silhouette', category: 'Cultural' },
            { id: 7, type: 'image', src: streetsImg, alt: 'Bikers on Street', category: 'Cycling' },
            { id: 8, type: 'image', src: teaImg, alt: 'Tea Plantation', category: 'Landscapes' },
            { id: 9, type: 'image', src: villageImg, alt: 'Bikers in Village', category: 'Cultural' },
            { id: 10, type: 'image', src: village1Img, alt: 'Bikers in Village 1', category: 'Cultural' },
            { id: 11, type: 'image', src: volcanoImg, alt: 'People with Gorillas', category: 'Wildlife' },
            { id: 12, type: 'image', src: zebraImg, alt: 'Zebras', category: 'Wildlife' },  
            { id: 14, type: 'image', src: fourByFour1, alt: '4x4 Safari 1', category: '4x4 Safari' },
            { id: 15, type: 'image', src: fourByFour2, alt: '4x4 Safari 2', category: '4x4 Safari' },
            { id: 16, type: 'image', src: fourByFour3, alt: '4x4 Safari 3', category: '4x4 Safari' },
            { id: 17, type: 'image', src: safari1, alt: '4x4 Safari photo 1', category: '4x4 Safari' },
            { id: 18, type: 'image', src: safari2, alt: '4x4 Safari photo 2', category: '4x4 Safari' },
            { id: 19, type: 'image', src: safari3, alt: '4x4 Safari photo 3', category: '4x4 Safari' },
            { id: 20, type: 'image', src: safari4, alt: '4x4 Safari photo 4', category: '4x4 Safari' },
            { id: 21, type: 'image', src: safari5, alt: '4x4 Safari photo 5', category: '4x4 Safari' },
            { id: 22, type: 'image', src: safari6, alt: '4x4 Safari photo 6', category: '4x4 Safari' },
            { id: 22, type: 'image', src: safari7, alt: '4x4 Safari photo 7', category: '4x4 Safari' },
          ];
          setMediaItems(defaultMedia);
          setCategories(['All', 'Adventures', 'Cycling', 'Cultural', 'Landscapes', 'Wildlife', '4x4 Safari']);
        }
      } catch (error) {
        console.error('Error loading media:', error);
        // Fallback to default images on error
        const defaultMedia = [
          { id: 1, type: 'image', src: bikeInBoat, alt: 'Bike in Boat', category: 'Adventures' },
          { id: 2, type: 'image', src: bike2, alt: 'Bike on Road', category: 'Cycling' },
          { id: 3, type: 'image', src: volThumb, alt: 'Volcanoes', category: 'Landscapes' },
          { id: 4, type: 'image', src: bike3, alt: 'Bike with Goats', category: 'Cultural' },
          { id: 5, type: 'image', src: manImg, alt: 'Man on Bike Silhouette', category: 'Adventures' },
          { id: 6, type: 'image', src: streetImg, alt: 'Bike on Street Silhouette', category: 'Cultural' },
          { id: 7, type: 'image', src: streetsImg, alt: 'Bikers on Street', category: 'Cycling' },
          { id: 8, type: 'image', src: teaImg, alt: 'Tea Plantation', category: 'Landscapes' },
          { id: 9, type: 'image', src: villageImg, alt: 'Bikers in Village', category: 'Cultural' },
          { id: 10, type: 'image', src: village1Img, alt: 'Bikers in Village 1', category: 'Cultural' },
          { id: 11, type: 'image', src: volcanoImg, alt: 'People with Gorillas', category: 'Wildlife' },
          { id: 12, type: 'image', src: zebraImg, alt: 'Zebras', category: 'Wildlife' },  
          { id: 14, type: 'image', src: safari1, alt: '4x4 Safari 1', category: '4x4 Safari' },
          { id: 15, type: 'image', src: safari2, alt: '4x4 Safari 2', category: '4x4 Safari' },
          { id: 16, type: 'image', src: safari3, alt: '4x4 Safari 3', category: '4x4 Safari' },
          { id: 17, type: 'image', src: safari4, alt: '4x4 Safari photo 4', category: '4x4 Safari' },
          { id: 18, type: 'image', src: safari5, alt: '4x4 Safari photo 5', category: '4x4 Safari' },
          { id: 19, type: 'image', src: safari6, alt: '4x4 Safari photo 6', category: '4x4 Safari' },
           { id: 19, type: 'image', src: safari7, alt: '4x4 Safari photo 7', category: '4x4 Safari' },
          { id: 13, type: 'video', src: kivuVideo, alt: 'kivu', category: 'Wildlife' },
        ];
        setMediaItems(defaultMedia);
        setCategories(['All', 'Adventures', 'Cycling', 'Cultural', 'Landscapes', 'Wildlife', '4x4 Safari']);
      } finally {
        setLoading(false);
      }
    };

    loadMediaItems();
  }, []);

  const handleMediaUpdate = () => {
    // Reload media when admin panel updates
    const loadMediaItems = async () => {
      try {
        const response = await fetch(`${API_BASE}/media?file_type=image&is_active=true`);
        const data = await response.json();
        
        if (data.success) {
          const transformedMedia = data.data.map(item => ({
            id: item.id,
            type: 'image',
            src: `http://localhost:5001/uploads/${item.filename}`, // <-- FIXED
            alt: item.alt_text || item.title || item.original_filename,
            category: item.category || 'Uncategorized',
            title: item.title,
            description: item.description,
            is_featured: item.is_featured
          }));
          
          setMediaItems(transformedMedia);
          
          // Extract unique categories
          const uniqueCategories = ['All', ...new Set(transformedMedia.map(item => item.category).filter(Boolean))];
          setCategories(uniqueCategories);
        }
      } catch (error) {
        console.error('Error reloading media:', error);
      }
    };

    loadMediaItems();
  };

  const filteredImages = selectedCategory === 'All' 
    ? mediaItems.filter(item => item.type === 'image')
    : mediaItems.filter(item => item.type === 'image' && item.category === selectedCategory);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const nextImage = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  useEffect(() => {
    // Automatically close modal if the selected image is no longer in the filtered list.
    // This can happen if the user changes the category while the modal is open.
    if (selectedImage && filteredImages.findIndex(img => img.id === selectedImage.id) === -1) {
      closeModal();
    }
  }, [selectedImage, filteredImages, closeModal]);

  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-primary">Our Photo Gallery</h2>
         </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className="text-sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-500">Loading gallery...</p>
          </div>
        )}

        {/* Image Grid */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="rounded-lg shadow-md bg-white flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <div
                  className="group relative aspect-square overflow-hidden cursor-pointer"
                 
                >
                  <img
                    src={image.src}
                    alt={image.alt || image.title || 'gallery image'}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />                            
                </div>
              
              </div>
            ))}
          </div>
        )}

        {!loading && filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-500">No images found in this category</p>
            <p className="text-sm text-gray-400 mt-2">Try selecting a different category </p>
          </div>
        )}
      </div>

      {/* Modal */}
      <GalleryModal
        isOpen={selectedImage !== null}
        images={filteredImages}
        currentIndex={filteredImages.findIndex(img => img.id === selectedImage?.id)}
        onClose={closeModal}
        onNext={nextImage}
        onPrevious={prevImage}
      />

       </section>
  );
};

export default Gallery;
