import { useState } from "react";
import { Lightbox } from "@/components/ui/lightbox";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category?: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
  columns?: number;
}

const GalleryGrid = ({ images, columns = 3 }: GalleryGridProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };
  
  const closeLightbox = () => {
    setLightboxOpen(false);
  };
  
  // Prepare the images for lightbox format
  const lightboxImages = images.map(img => ({
    src: img.src,
    alt: img.alt
  }));
  
  return (
    <>
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-6`}>
        {images.map((image, index) => (
          <div 
            key={image.id} 
            className="gallery-item rounded-lg overflow-hidden h-72 shadow-md cursor-pointer hover:shadow-lg transition-all duration-300"
            onClick={() => openLightbox(index)}
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      
      <Lightbox 
        images={lightboxImages} 
        isOpen={lightboxOpen} 
        onClose={closeLightbox}
        initialIndex={currentImageIndex}
      />
    </>
  );
};

export default GalleryGrid;
