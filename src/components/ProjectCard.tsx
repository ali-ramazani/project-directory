import { Button, Card, HStack, Image, Text } from "@chakra-ui/react";
import { Wrap, WrapItem } from "@chakra-ui/react";
import parseCSV from "../services/Project_Parser";
import spotify_rex from "../assets/spotify_rex.svg";

function ProjectCard() {
  let projects = parseCSV();
  projects = projects.slice(0, -1);
  console.log("from project card", projects);
  return (
    <>
      {projects.map((project, index) => (
        <Card key={index} width="100%" borderRadius={10} padding="10px">
          <HStack justifyContent="space-between" mb="5px">
            <Text as="b" fontSize="xl" color="tomato">
              {project.title || "Spotify Rex"}
            </Text>
            <HStack>
              <Button as="a" href={project.githubLink} variant="outline">
                GitHub
              </Button>
              <Button as="a" href={project.demoLink} variant="outline">
                Demo
              </Button>
            </HStack>
          </HStack>

          <Text fontSize="lg">{project.description}</Text>
          <Wrap justify="" mb="10px" mt="10px">
            {project.technologies?.split(", ").map((tech, techIndex) => (
              <WrapItem key={techIndex}>
                <Text as="mark">{tech}</Text>
              </WrapItem>
            ))}
          </Wrap>

          <Image src={project.picture} alt={project.title} />
        </Card>
      ))}
    </>
  );
}

export default ProjectCard;
