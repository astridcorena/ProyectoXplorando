import React from 'react';
import Slider from 'react-slick'; // Make sure you've installed react-slick and slick-carousel

interface ImageGalleryProps {
  images: string[]; // Assuming images is an array of string URLs
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {

  const settings = {
    customPaging: function(i:number) {
      return (
        <a className=''>
          <img src={images[i]} className="object-cover w-max h-14"/>
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb flex",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="max-w-screen-lg mx-auto">
      {images && images.length > 0 && (
        <div>
          {/* The main image display */}

          {/* Thumbnails */}
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="outline-nne justify-content-center gap-1">
                <img src={image} alt={`Thumbnail ${index}`} className=" h-auto" />
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;