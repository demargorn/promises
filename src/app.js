import { GameSavingLoader } from './GameSavingLoader';

GameSavingLoader.load()
   .then((saving) => console.log(saving))
   .catch((err) => console.log(err));
