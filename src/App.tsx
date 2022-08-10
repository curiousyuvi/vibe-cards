import React from "react";
import { ChakraProvider, Heading } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div>
        <Heading className="bg-gray-300">Hello World</Heading>
      </div>
    </ChakraProvider>
  );
}

export default App;
