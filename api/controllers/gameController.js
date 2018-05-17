const mongoose = require('mongoose');
const Game = mongoose.model('Game');

export const getGames = async (req, res) => {
  const games = await Game.find();
  res.json(games.sort(sortNameAsc));
};
export const getGamesByPlatform = async (req, res) => {
  const { platform } = req.params;
  const games = await Game.find({
    platform: { $regex: new RegExp('^' + platform, 'i') }
  });
  if (games) {
    res.json(games.sort(sortNameAsc));
  } else {
    res.redirect('/api/games');
  }
};
export const getGame = async (req, res) => {
  const { slug, platform } = req.params;
  const game = await Game.findOne({
    slug: slug,
    platform: { $regex: new RegExp('^' + platform, 'i') }
  });
  if (game) {
    res.json(game);
  } else {
    res.redirect('/api/games');
  }
};

const sortNameAsc = (a, b) => {
  const a2 = a.name.toLowerCase();
  const b2 = b.name.toLowerCase();
  return a2 === b2 ? 0 : a2 > b2 ? 1 : -1;
};
