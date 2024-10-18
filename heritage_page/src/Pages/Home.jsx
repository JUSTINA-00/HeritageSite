import React from 'react';
import Slider from 'react-slick';
import { Box, Image } from '@chakra-ui/react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  // List of images
  const images = [
    require('../Components/Pictures/1.png'),
    require('../Components/Pictures/2.png'),
    require('../Components/Pictures/3.png'),
  ];

  return (
    <Box maxW="full" mx="auto" mt={5} p={5}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index}>
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              objectFit="cover"
              width="100%"
              height="500px" // Adjust height as needed
              borderRadius="md"
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Home;
