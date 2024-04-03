"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameService = void 0;
const Banlist_1 = __importDefault(require("./Banlist/Banlist"));
const Details_1 = __importDefault(require("./Details/Details"));
const List_1 = __importDefault(require("./List/List"));
const Playerlist_1 = __importDefault(require("./Playerlist/Playerlist"));
const Restart_1 = __importDefault(require("./Restart/Restart"));
const Start_1 = __importDefault(require("./Start/Start"));
const Stop_1 = __importDefault(require("./Stop/Stop"));
class GameService {
    constructor(Authorization) {
        this.Authorization = Authorization;
    }
    Restart(service_id, message, restart_message) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, Restart_1.default)(service_id, message, restart_message, this.Authorization);
        });
    }
    // Service Start Is The Same Endpoint As Restart For Some Reason
    Start(service_id, message, restart_message) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, Start_1.default)(service_id, message, restart_message, this.Authorization);
        });
    }
    Stop(service_id, message, stop_message) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, Stop_1.default)(service_id, message, stop_message, this.Authorization);
        });
    }
    List() {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, List_1.default)(this.Authorization);
        });
    }
    Details(service_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, Details_1.default)(service_id, this.Authorization);
        });
    }
    Banlist(service_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, Banlist_1.default)(service_id, this.Authorization);
        });
    }
    Players(service_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, Playerlist_1.default)(service_id, this.Authorization);
        });
    }
}
exports.GameService = GameService;
