import { useEffect, useState } from "react";
import { httpClient } from "../api/httpClient";
import { IndexedPokemon,PokemonListResponse,ListPokemon } from "../interfaces/pokemon.interface";
import {
    POKEMON_API_POKEMON_URL,
    POKEMON_IMAGES_BASE_URL,
    
  } from "../constants";


const usePokemons = () => {
    const [pokemons, setPokemons] = useState<ListPokemon[]>([])

    const [nextUrl, setNextUrl] = useState<string | null>(
        POKEMON_API_POKEMON_URL
      );

      useEffect(() => {
        
          fetchPokemon();
        },[])
    
        const indexedPokemonToListPokemon = (indexedPokemon: IndexedPokemon) => {
            const pokedexNumber = parseInt(
              indexedPokemon.url
                .replace(`${POKEMON_API_POKEMON_URL}/`, "")
                .replace("/", "")
            );
            const listPokemon: ListPokemon = {
                name: indexedPokemon.name,
                url: indexedPokemon.url,
                image: `${POKEMON_IMAGES_BASE_URL}/${pokedexNumber}.png`,
                pokedexNumber,
              };
              return listPokemon;
  };
    const fetchPokemon=async()=> {

        if (nextUrl) {
            const result = await httpClient.get<PokemonListResponse>(nextUrl);
            if (result?.data?.results) {
              const listPokemons = result.data.results.map((p) =>
                indexedPokemonToListPokemon(p)
              );
              setPokemons([...pokemons, ...listPokemons]);
              setNextUrl(result.data.next);
            }
        }

    };

    return {
        pokemons,
        fetchNextPage: fetchPokemon,
        hasMorePokemon: !!nextUrl,
        
        setPokemons,
      };


}
export default usePokemons;