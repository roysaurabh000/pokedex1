import { Button, Container,TextField } from "@mui/material"; // Import Button component
import PokemonList from "../components/PokemonList";
import usePokemons from "../hooks/usePokemons";
import { useState,ChangeEvent } from "react"; 

const Home = () => {
    const { pokemons, hasMorePokemon, fetchNextPage } = usePokemons();
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => { // Explicitly type event parameter
        setSearchQuery(event.target.value);
    };

    const filteredPokemons = pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <Container>
            <TextField
                label="Search Pokemon"
                variant="outlined"
                value={searchQuery}
                onChange={handleSearchChange}
                fullWidth
                sx={{ mb: 2 }} // Add some margin at the bottom
            />
            <PokemonList pokemons={filteredPokemons} />
            {hasMorePokemon ? (
                <Button variant="contained" onClick={fetchNextPage}>
                    Load more
                </Button>
            ) : null}
        </Container>
    );
};

export default Home;
