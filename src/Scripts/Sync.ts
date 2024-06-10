import OCAClient from "../client";
import { ServiceError, Client } from "@grpc/grpc-js";

interface OCAClientType extends Client {
    GetPendingFills: (params: { ocaId: string }, callback: (err: ServiceError, response: object) => void) => void;
}

const client: OCAClientType = OCAClient as OCAClientType;

client.GetPendingFills({ ocaId: '0f5f160c-771b-45fa-8ffd-bfb2818c0474' }, function (err: ServiceError, response: object) {
    if (err) {
        console.error(err.details);
    } else {
        console.log(response);
    }
});