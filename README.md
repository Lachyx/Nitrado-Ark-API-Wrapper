# Nitrado Ark API Wrapper

Made this because I was bored

https://github.com/Lachyx/Nitrado-Ark-API-Wrapper


Any errors or issues I really don't care but raise a issue on github

```zsh
npm i nitrado-ark-api-wrapper
```

# Example Code

```javascript
const { GameService, PlayerService  } = require('nitrado-ark-api-wrapper')

const Players = new PlayerService('Auth')
const Services = new GameService('Auth')

try {
    Players.Ban('player_identifier', 'service_id')
    Services.Stop('service_id')
} catch (err) {
    console.log(err)
};
```
