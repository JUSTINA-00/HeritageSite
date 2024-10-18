import React from "react";
import { useDisclosure } from '@chakra-ui/react';


const Home = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
        <h1>Home</h1>
    );
  };
  
  export default Home;
  