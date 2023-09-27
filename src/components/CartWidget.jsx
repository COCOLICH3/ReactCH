import { MoonIcon } from "@chakra-ui/icons";
import { Box, Divider, Flex } from "@chakra-ui/react";
import React from "react";

const CartWidget = () => {
  return (
    <div>
      <Flex>
        <Box>
          <span class="material-symbols-outlined">shopping_bag</span>
        </Box>
        <Divider />
        <Box>
          <p>4</p>
        </Box>
      </Flex>
    </div>
  );
};

export default CartWidget;
