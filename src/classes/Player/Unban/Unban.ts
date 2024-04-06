import axios from 'axios';

async function PlayerUnban(identifier: string, service_id: string, Authorization: string) {
      const response = await axios.post(`https://api.nitrado.net/services/${service_id}/gameservers/games/banlist`, { identifier }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': Authorization,
        },
      });
      return response.data;
  }

  export default PlayerUnban;