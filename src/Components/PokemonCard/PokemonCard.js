import React, { useState } from "react";
import {
  Card,
  PokemonName,
  PokemonType,
  EvolveButton,
  ImagemPokemon
} from "./styles";

const PokemonCard = ({ pokemon }) => {
  const estadoInicial = [{ ...pokemon[0] }];
  const [pokemonA, setPokemonA] = useState(estadoInicial);

  const mudaEstado = () => {
    const novoEstado = pokemonA.map(
      (item) =>
        (item.id = true ? { ...item, ...pokemon[Number(item.id + 1)] } : item)
    );
    setPokemonA(novoEstado);
  };

  return (
    <div>
      {pokemonA.map((item) => {
        return (
          <Card key={1} color={item.color}>
            <ImagemPokemon key={2} src={item.image} alt={`Pokemon`} />
            <PokemonName key={3}>{item.name}</PokemonName>
            <PokemonType key={4}>{item.type}</PokemonType>
            <p>{item.weight}kg</p>
            <EvolveButton onClick={mudaEstado}>Evoluir</EvolveButton>
          </Card>
        );
      })}
    </div>
  );
};

export default PokemonCard;
