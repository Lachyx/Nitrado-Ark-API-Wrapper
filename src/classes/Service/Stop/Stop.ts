import axios from 'axios'

async function ServiceStop(service_id: string, message: string | null | undefined, stop_message: string | null | undefined, Authorization: string) {
        const response = await axios.post(`https://api.nitrado.net/services/${service_id}/gameservers/stop`, { message, stop_message }, { 
            headers: {
            "Content-Type": "application/json",
            "Authorization": Authorization
        }})
        return response.data
}

export default ServiceStop;