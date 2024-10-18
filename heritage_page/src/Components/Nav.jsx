import React from 'react';
import { Box, Flex, Link, Stack, IconButton, useDisclosure} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Navigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="gray.800" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box color="white" fontSize="xl" fontWeight="bold">
          Cultural Heritage Website
        </Box>

        {/* Hamburger Menu for smaller screens */}
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />

        {/* Links for larger screens */}
        <Flex display={{ base: 'none', md: 'flex' }} alignItems="center">
          <Stack direction="row" spacing={6}>
            <Link href="/" color="white" _hover={{ color: 'orange.300' }}>
              Home
            </Link>
            <Link href="/praise-and-worship" color="white" _hover={{ color: 'orange.300' }}>
              Praise and Worship
            </Link>
            <Link href="/evangelism" color="white" _hover={{ color: 'orange.300' }}>
              Evangelism
            </Link>
            <Link href="/prayer-warriors" color="white" _hover={{ color: 'orange.300' }}>
              Prayer Warriors
            </Link>
            <Link href="/pavers" color="white" _hover={{ color: 'orange.300' }}>
              Pavers
            </Link>
          </Stack>
        </Flex>
      </Flex>

      {/* Mobile Menu */}
      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as="nav" spacing={4}>
            <Link href="/" color="white" _hover={{ color: 'orange.300' }}>
              Home
            </Link>
            <Link href="/praise-and-worship" color="white" _hover={{ color: 'orange.300' }}>
              Praise and Worship
            </Link>
            <Link href="/evangelism" color="white" _hover={{ color: 'orange.300' }}>
              Evangelism
            </Link>
            <Link href="/prayer-warriors" color="white" _hover={{ color: 'orange.300' }}>
              Prayer Warriors
            </Link>
            <Link href="/pavers" color="white" _hover={{ color: 'orange.300' }}>
              Pavers
            </Link>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navigation;
