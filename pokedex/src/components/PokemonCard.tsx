import { Card, CardContent,CardMedia, Typography} from "@mui/material";
import { Box } from "@mui/system";
import { IndexedPokemon,ListPokemon } from "../interfaces/pokemon.interface";
import { Link } from "react-router-dom";


interface PokemonCardProps {
    pokemon: ListPokemon;
  }


const PokemonCard = ({ pokemon }: PokemonCardProps) => {
    return (
        <Card>
            <Link to={`pokemon/${pokemon.name}`} style={{textDecoration:"none", color: "Black"}}>
            <CardMedia
          component="img"
          image={pokemon.image}
          title={pokemon.name}
          
          sx={{ height: 100, objectFit: "contain" }}
        />
            <CardContent>
                <Box sx={{ display: "flex", justifyContent: "center",flexDirection:"column",alignItems:"center", color:"Black",}}>
                    <Typography>{pokemon.name}</Typography>
                    <Typography sx={{ textTransform: "capitalize" }}>
              #{pokemon.pokedexNumber}
            </Typography>
                </Box>
            </CardContent>
        </Link>
        </Card>
    );
};


export default PokemonCard;