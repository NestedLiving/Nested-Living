import { createHttp } from "./BaseService";
const http = createHttp(true);
export const getMyLikes = (data) => {
    return http.get('/likes', data);
}