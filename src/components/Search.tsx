import { Button, HStack, Input } from "@chakra-ui/react";

function Search() {
  return (
    <HStack>
      <Input placeholder="Search for project" size="md" />
      <Button>Go</Button>
    </HStack>
  );
}

export default Search;
