import React from "react";
import { useDisclosure } from '@chakra-ui/react';

const Pavers = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
        <h1>Pavers</h1>
    );
  };
  
  export default Pavers
;