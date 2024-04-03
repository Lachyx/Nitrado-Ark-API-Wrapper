import axios from 'axios';

async function ServiceList(Authorization: string) {
    try {
        const response = await axios.get("https://api.nitrado.net/services", {
            headers: {
                Authorization: Authorization
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export default ServiceList;