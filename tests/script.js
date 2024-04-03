const { GameService, PlayerService  } = require('nitrado-ark-api-wrapper')

const Player = new PlayerService('Auth')
const Service = new GameService('Auth')

Player.Ban('XXXXX', 313123)