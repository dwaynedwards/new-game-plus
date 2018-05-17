import fs from 'fs';
import Game from '../models/Game';

(async function init() {
  const games = JSON.parse(
    fs.readFileSync(__dirname + '/game-data.json', 'utf-8')
  );
  await Game.remove();
  try {
    await Game.insertMany(games);
  } catch (e) {
    console.error(`Error init database: ${e}`);
  }
})();
