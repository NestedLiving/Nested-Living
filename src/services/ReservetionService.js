import { createHttp } from "./BaseService";

const http = createHttp(true);

export const createReservation = ( body) => {
    return http.post(`/houses/checkout}`, body);
}