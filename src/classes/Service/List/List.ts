import axios from 'axios';

async function ServiceList(Authorization: string) {
        const response = await axios.get("https://api.nitrado.net/services", {
            headers: {
                Authorization: Authorization
            }
        });
        return response.data;
}

export default ServiceList;