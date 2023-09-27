import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer, Heading } from "@chakra-ui/react";
import CartWidget from "./cartWidget";
const NavBar = () => {
  return (
    <div>
      <Flex alignItems="center" justifyContent="space-between" p="4" bg="teal.500">
      <Heading as="h3" size="md" color="white">
        Hardware PC
      </Heading>
      <Box>
        <Menu>
          <MenuButton color="white" fontWeight="bold">
            Categorias
          </MenuButton>
          <MenuList bg="teal.500">
            <MenuItem _hover={{ bg: "teal.600" }}>Placa de video</MenuItem>
            <MenuItem _hover={{ bg: "teal.600" }}>Procesador</MenuItem>
            <MenuItem _hover={{ bg: "teal.600" }}>Monitores</MenuItem>
            <MenuItem _hover={{ bg: "teal.600" }}>Memoria RAM</MenuItem>
            <MenuItem _hover={{ bg: "teal.600" }}>Perifericos</MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <CartWidget />
    </Flex>
    </div>
  );
};

export default NavBar;
