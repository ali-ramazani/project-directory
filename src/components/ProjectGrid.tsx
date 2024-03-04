import { SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import { Container } from "@chakra-ui/react";
import parseCSV from "../services/Project_Parser";

function ProjectGrid() {
  let projects = parseCSV();

  console.log("grid", projects);

  return (
    <Container maxW="1400px">
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 2, xl: 2 }}
        spacing={10}
        padding="10px"
      >
        <ProjectCard />
      </SimpleGrid>
    </Container>
  );
}

export default ProjectGrid;
