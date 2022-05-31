// import dotenv
import 'dotenv/config';
// import express
import express from 'express';

// declare express
const app = express();
const port = env.process.PORT || 5000;

// add ejs add.set("view engine", "ejs") when creating a api documentation

// add middleware you need
app.use(express.json());
app.use(cors());

// decalre main Route through middleware
app.use("/api/pokemons", pokemonsRouter);
// Api Description
app
  .get("/", (req, res) =>
    res.render("pages/index")
);
  
// create a route for routes which are not existing
app.all("*", (req, res) => {
    res.status(404).send("This is not a valid endpoint")
});

// let app listen to client request
app.listen(port, () => {
    console.log(`This Server is running on ${port}`)
});