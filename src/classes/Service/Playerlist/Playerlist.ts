import axios from 'axios';
async function ServicePlayerList(service_id: string, Authorization: string) {
        const response = await axios.get(`https://api.nitrado.net/services/${service_id}/players`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: Authorization
            }
        });
        return response.data;
}

export default ServicePlayerList;