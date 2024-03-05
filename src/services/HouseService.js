import { createHttp } from "./BaseService";

const http = createHttp(true)

export const createHouse = (house) => {
    return http.post('/houses', house)
}

export const getHouse = () => {
    return http.get('houses');
}

export const getMyHouses = () => {
    return http.get('houses/me');
}

export const getHouseDetail = (id) => {
    return http.get(`houses/${id}`);
}

