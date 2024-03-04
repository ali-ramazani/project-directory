import { HStack, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

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
