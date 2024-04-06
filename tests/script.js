const { GameService, PlayerService  } = require('nitrado-ark-api-wrapper')

const Player = new PlayerService('Auth')
const Service = new GameService('Auth')

try {
    Player.Ban('XXXXX', 313123)
} catch (err) {
    console.log(err)
};
