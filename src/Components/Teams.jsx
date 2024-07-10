import React, { useState } from 'react';
import simg from '../assets/Ellipse 34.png';
import img8 from '../assets/img8.png';
import simg2 from '../assets/Ellipse 35.png';
import img4 from '../assets/img4.png';
import simg3 from '../assets/Ellipse 36.png';
import img2 from '../assets/img2.png';
import simg4 from '../assets/Ellipse 37.png';
import img6 from '../assets/img6.png';
import simg5 from '../assets/Ellipse 38.png';
import img1 from '../assets/img1.png';
import simg6 from '../assets/Ellipse 39.png';
import img5 from '../assets/img5.png';
import simg7 from '../assets/Ellipse 40.png';
import img3 from '../assets/img3.png';
import simg8 from '../assets/Ellipse 41.png';
import img7 from '../assets/img7.png';

const images = [
  { id: 1, src: simg, name: 'Sam', bigImg: img8 },
  { id: 2, src: simg2, name: 'Can', bigImg: img4 },
  { id: 3, src: simg3, name: 'Jin', bigImg: img2 },
  { id: 4, src: simg4, name: 'Peter', bigImg: img6 },
  { id: 5, src: simg5, name: 'Eren', bigImg: img1 },
  { id: 6, src: simg6, name: 'Naruto', bigImg: img5 },
  { id: 7, src: simg7, name: 'Tanjiro', bigImg: img3 },
  { id: 8, src: simg8, name: 'Dev', bigImg: img7 },
];

const Teams = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-900 mb-8 sm:mb-12 text-center">Our Teams</h1>
      <div className="relative w-[500px] h-[500px]">
        {/* Outer dashed circle */}
        <div className="absolute inset-4 border-4 border-blue-300 border-dashed rounded-full"></div>
        
        {/* Central image */}
        <div className="absolute inset-16 bg-white rounded-full overflow-hidden border-dashed border-4 border-blue-300">
          <img src={selectedImage.bigImg} alt={selectedImage.name} className="w-full h-full object-cover" />
        </div>
        
        {/* Orbiting images */}
        {images.map((image, index) => {
          const angle = (index / images.length) * 2 * Math.PI - Math.PI / 2; // Start from top
          console.log(angle);
          const left = 250 + 220 * Math.cos(angle);
          console.log(left);
          const top = 250 + 220 * Math.sin(angle);
          console.log(top);

          return (
            <div
              key={image.id}
              className="absolute w-16 h-16 bg-white rounded-full overflow-hidden cursor-pointer border-2 border-blue-300 transition-all duration-300"
              style={{
                left: `${left}px`,
                top: `${top}px`,
                transform: 'translate(-50%, -50%)',
                zIndex: selectedImage.id === image.id ? 10 : 1,
              }}
              onClick={() => handleClick(image)}
            >
              <img src={image.src} alt={image.name} className="w-full h-full object-cover" />
            </div>
          );
        })}
      </div>
      <div className="mt-4">
        <div className="text-5xl font-bold ml-7">{selectedImage.name} <span className="font-normal text-black text-xl">(Co Founder)</span></div>
        <div className="text-black mt-2 text-2xl ml-7 mb-20 font-semibold text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
      </div>
    </div>
  );
};

export default Teams;
