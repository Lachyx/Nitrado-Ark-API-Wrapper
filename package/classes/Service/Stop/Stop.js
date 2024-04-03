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
const axios_1 = __importDefault(require("axios"));
function ServiceStop(service_id, message, stop_message, Authorization) {
    return __awaiter(this, void 0, void 0, function* () {
        const Endpoint = `https://api.nitrado.net/services/${service_id}/gameservers/stop`;
        try {
            const response = yield axios_1.default.post(Endpoint, { message, stop_message }, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": Authorization
                }
            });
            return response.data;
        }
        catch (error) {
            throw error;
        }
    });
}
exports.default = ServiceStop;
