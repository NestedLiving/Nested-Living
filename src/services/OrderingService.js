import { createHttp } from "./BaseService";

const http = createHttp(true);

export const createOrdering = (orderData) => {
    return http.post('/ordering', orderData);
}

export const getOrders = () => {
    return http.get('/ordering');
}

export const getOrder = (orderId) => {
    return http.get(`/ordering/${orderId}`);
}

