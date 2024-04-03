import PlayerBan from "./Ban/Ban";
import PlayerUnban from "./Unban/Unban";

export class PlayerService {
  Authorization: string;

  constructor(Authorization: string) {
    this.Authorization = Authorization;
  }

    async Ban(identifier: string, service_id: string) {
        return PlayerBan(identifier, service_id, this.Authorization)
    }

    async Unban(identifier: string, service_id: string) {
        return PlayerUnban(identifier, service_id, this.Authorization)
    }


}