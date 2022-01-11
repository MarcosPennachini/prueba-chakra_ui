import React from 'react';
import { Container, Flex, VStack } from '@chakra-ui/react';
import Cart from './components/Details';
import Details from './components/Cart';

function App() {
  return (
    <Container maxWidth='container.xl' padding={0}>
      <Flex
        h={{ base: 'auto', md: '100vh' }}
        py={[0, 10, 20]}
        direction={{ base: 'column-reverse', md: 'row' }}
      >
        <Cart />
        <Details />
      </Flex>
    </Container>
  );
}

export default App;
