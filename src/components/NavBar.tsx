import { HStack, Image, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import logo from "../assets/logo.svg";

function NavBar() {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Text as="b" fontSize="4xl">
        Project Directory
      </Text>
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
