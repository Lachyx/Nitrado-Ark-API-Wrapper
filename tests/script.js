const { GameService, PlayerService  } = require('nitrado-ark-api-wrapper')

const Player = new PlayerService('Auth')
const Service = new GameService('Auth')

try {
    Player.Ban('player_identifier', 'service_id')
} catch (err) {
    console.log(err)
};