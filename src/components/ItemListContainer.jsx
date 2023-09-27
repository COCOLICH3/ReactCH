import React from "react";
import {Box, Heading } from "@chakra-ui/react";

const ItemListContainer = ({ greeting }) => {
  return (
    <Box textAlign="center" mt="8">
      <Heading as="h1" size="xl">
        {greeting}
      </Heading>
    </Box>
  );
};

export default ItemListContainer;
