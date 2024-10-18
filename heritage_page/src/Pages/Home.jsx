import React from 'react';
import Slider from 'react-slick';
import { Box, Image, Text } from '@chakra-ui/react';
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
      {/* Image Carousel */}
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

      {/* Text Below the Carousel */}
      <Box mt={10} p={5} textAlign="center" bg="gray.100" borderRadius="md">
        <Text fontSize="4xl" fontWeight="bold" color="gray.800" mb={4}>
          Cultural Heritage Club
        </Text>
        <Text fontSize="xl" color="gray.600">
          Cultural Heritage Club is a spiritually focused community at Karunya Institute Of Technology and Sciences, Coimbator, Tamil Nadu.
          Coordinated with a heart to ignite and empower young believers in their faith. 
          The club hosts various weekly activities, including promise meditation, prayer training, 
          spiritual discussions, and anointing services, helping students strengthen their relationship 
          with God. It also includes a Tech Talk session, which integrates faith with technological 
          advancements, aiming to guide students both in their spiritual journey and professional development.
        </Text>
      </Box>
    </Box>
  );
};

export default Home;
