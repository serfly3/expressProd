const gamesRouter = require("express").Router(); // Создали роутер
const {
  deleteGame,
  sendAllGames,
  addGameController
} = require("../controllers/games");
const { getAllGames } = require("../middlewares/games");

gamesRouter.post("/games", getAllGames, addGameController);
gamesRouter.get("/games", getAllGames, sendAllGames);
gamesRouter.delete("/games/:id", getAllGames, deleteGame);

module.exports = gamesRouter;
