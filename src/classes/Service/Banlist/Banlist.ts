import axios from 'axios'

async function ServiceBanlist(service_id: string, Authorization: string) {
        const response = await axios.get(`https://api.nitrado.net/services/${service_id}/gameservers/games/banlist`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: Authorization
            }
        });
        return response.data;
}

export default ServiceBanlist;