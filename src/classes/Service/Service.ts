import ServiceBanlist from "./Banlist/Banlist";
import ServiceDetails from "./Details/Details";
import ServiceList from "./List/List";
import ServicePlayerList from "./Playerlist/Playerlist";
import ServiceRestart from "./Restart/Restart";
import ServiceStart from "./Start/Start";
import ServiceStop from "./Stop/Stop";

export class GameService {
    Authorization: string;
    constructor(Authorization: string) {
        this.Authorization = Authorization;
    }

    async Restart(service_id: string, message: string | null | undefined, restart_message: string | null | undefined) {
        return ServiceRestart(service_id, message, restart_message, this.Authorization)
    }

    // Service Start Is The Same Endpoint As Restart For Some Reason
    async Start(service_id: string, message: string | null | undefined, restart_message: string | null | undefined) {
        return ServiceStart(service_id, message, restart_message, this.Authorization)
    }

    async Stop(service_id: string, message: string | null | undefined, stop_message: string | null | undefined) {
        return ServiceStop(service_id, message, stop_message, this.Authorization)
    }

    async List() {
       return ServiceList(this.Authorization)
    }

    async Details(service_id: string) {
        return ServiceDetails(service_id, this.Authorization)
    }

    async Banlist(service_id: string) {
        return ServiceBanlist(service_id, this.Authorization)
    }

    async Players(service_id: string) {
        return ServicePlayerList(service_id, this.Authorization)
    }
 
}