import { createHttp } from "./BaseService";

const http = createHttp(true);

export const createReservation = (Id, bodyData) => {
    return http.post(`/houses/checkout/${Id}`, bodyData);
}