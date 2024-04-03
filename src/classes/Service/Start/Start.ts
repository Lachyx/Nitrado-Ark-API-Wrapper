import axios from 'axios'

async function ServiceStart(service_id: string, message: string | null | undefined, restart_message: string | null | undefined, Authorization: string) {
    try {
        const response = await axios.post(`https://api.nitrado.net/services/${service_id}/gameservers/restart`, { message, restart_message }, { 
            headers: {
            "Content-Type": "application/json",
            "Authorization": Authorization
        }})
        return response.data
    } catch (error) {
        throw error
    }
}

export default ServiceStart;