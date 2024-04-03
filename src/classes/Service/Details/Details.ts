import axios from 'axios'

async function ServiceDetails(service_id: string, Authorization: string) {
    try {
        const response = await axios.get(`https://api.nitrado.net/services/${service_id}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: Authorization
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export default ServiceDetails;