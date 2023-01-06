import React from 'react';
import {
  Link,
  useColorModeValue,
} from '@chakra-ui/react';

// TODO: Add link ease-in-out color animation
const NavLink = ({ link={}, verticalPadding='0px', horizontalPadding='0px', fontSize='32px'}) => {
  const { label, aria, href } = link;
  return (
    <Link px={horizontalPadding}
          py={verticalPadding}
          rounded='md'
          aria-label={aria}
          color='whiteAlpha.700'
          fontSize={ fontSize ?? '32px'}
          fontWeight='thin'
          _hover={{
            textDecoration: 'none',
            fontWeight: 'semibold',
            color: useColorModeValue('whiteAlpha.900', 'gray.700'),
          }}
          href={href}
          >
      {label}
    </Link>
  );
}

export default NavLink;