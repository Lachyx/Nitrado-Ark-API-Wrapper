import axios from 'axios';

async function PlayerUnban(identifier: string, service_id: string, Authorization: string) {
  const response = await axios.delete(`https://api.nitrado.net/services/${service_id}/gameservers/games/banlist`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': Authorization,
    },
    data: {
      identifier: identifier
    }
  });
  return response.data;
}

export default PlayerUnban;
