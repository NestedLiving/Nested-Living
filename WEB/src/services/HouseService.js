import { createHttp } from "./BaseService";

const http = createHttp(true)

export const createHouse = (house) => {
    return http.post('/houses', house)
}