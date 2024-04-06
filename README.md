# Nitrado Ark API Wrapper

Made this because I was bored

https://github.com/Lachyx/Nitrado-Ark-API-Wrapper


# Example Code

```javascript
const { GameService, PlayerService  } = require('nitrado-ark-api-wrapper')

const Player = new PlayerService('Auth')
const Service = new GameService('Auth')

try {
    Player.Ban('XXXXX', 313123)
} catch (err) {
    console.log(err)
};

```