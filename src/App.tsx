import "./App.css";
import { Center, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ProjectGrid from "./components/ProjectGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "main main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "1fr 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="main" paddingX={5}>
        <ProjectGrid />
      </GridItem>

      <GridItem area="main"></GridItem>
    </Grid>
  );
}

export default App;
