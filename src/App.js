import React from "react";
import { GlobalStyles } from "./GlobalStyle";
import PokemonCard from "./Components/PokemonCard/PokemonCard";
import { FlexContainer } from "./Components/PokemonCard/styles";
import { pikachu, bulbasaur, charmander, squirtle, abra } from "./Data/Data";

function App() {
  console.log(pikachu);
  return (
    <>
      <GlobalStyles />
      <FlexContainer>
        <PokemonCard pokemon={pikachu} />
        <PokemonCard pokemon={bulbasaur} />
        <PokemonCard pokemon={charmander} />
        <PokemonCard pokemon={squirtle} />
        <PokemonCard pokemon={abra} />
      </FlexContainer>
    </>
  );
}

export default App;
