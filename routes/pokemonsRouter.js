// import router
import { Router } from "express";
import {
  getAllPokemons,
  getSinglePokemon,
} from "../controllers/pokemonsController.js";
// import controllers

// declare router
const pokemonsRouter = Router();
// declare routes for all pokemons
pokemonsRouter.route("/").get(getAllPokemons);
// declare routes for single pokemon
pokemonsRouter.route("/:id").get(getSinglePokemon);
// export router
export default pokemonsRouter;
