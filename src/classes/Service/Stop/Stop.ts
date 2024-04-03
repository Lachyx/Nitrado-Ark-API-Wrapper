import axios from 'axios'

async function ServiceStop(service_id: string, message: string | null | undefined, stop_message: string | null | undefined, Authorization: string) {
    const Endpoint = `https://api.nitrado.net/services/${service_id}/gameservers/stop`

    try {
        const response = await axios.post(Endpoint, { message, stop_message }, { 
            headers: {
            "Content-Type": "application/json",
            "Authorization": Authorization
        }})
        return response.data
    } catch (error) {
        throw error
    }
}

export default ServiceStop;