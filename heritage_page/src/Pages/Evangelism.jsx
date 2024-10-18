import React from "react";
import { useDisclosure } from '@chakra-ui/react';


const Evangelism = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
        <h1>Evangelism</h1>
    );
  };
  
  export default Evangelism;