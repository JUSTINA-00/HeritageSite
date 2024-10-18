import React from "react";
import { useDisclosure } from '@chakra-ui/react';


const Prayer_warriors = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
        <h1>Prayer Warriors</h1>
    );
  };
  
  export default Prayer_warriors;