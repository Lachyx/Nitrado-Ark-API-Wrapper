const { GameService, PlayerService  } = require('nitrado-ark-api-wrapper')

const Player = new PlayerService('Auth')
const Service = new GameService('Auth')

Player.Ban('XXXXX', 313123)
Player.Unban('XXXXX', 313123)

Service.Banlist('XXXXX')
Service.List('XXXXX')
Service.Start('XXXXX', 'Log Message', 'Restart Message')
Service.Stop('XXXXX', 'Log Message', 'Stop Message')
Service.Restart('XXXXX', 'Log Message', 'Restart Message')
Service.Players('XXXXX')