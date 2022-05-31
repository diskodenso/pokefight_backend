// import json data
import { readFile } from "fs/promises";
// declare json variable and parse
const pokemons = JSON.parse(
  await readFile(new URL("../pokedex.json", import.meta.url))
);
// every controller needs to be exported seperately as you only can export one
//------- get all countries controller ---------//
export const getAllPokemons = async (req, res) => {
    try {
      const allPokemons = await pokemons
    if (pokemons) {
      res.status(200).json(pokemons);
    } else {
      res.status(500).json(error);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

//------- get single country controller ---------//
export const getSinglePokemon = async (req, res) => {
  console.log(req.params);
  try {
    const findPokemon = await pokemons.find(
      (pokemon) => pokemon.id == req.params.id
    );
    if (findPokemon) {
      res.status(200).json(findPokemon);
    } else {
      res.status(404).send("There is no Pokemon matching this ID");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
//------- delete country controller ---------//
//(Optional) Create a GET route on /pokemon/:id/:info (<name>|<type>|<base>) which gives only one pokemon from
// the JSON thanks to its id and retrieve only one information
//(name or type or base) to send back to the client
