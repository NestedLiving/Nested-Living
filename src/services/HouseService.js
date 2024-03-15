import { createHttp } from "./BaseService";

const http = createHttp(true)

export const createHouse = (house) => {
    return http.post('/houses', house)
}

export const getHouses = (location, people, price,  startDate, endDate) => {
    const params = {}

    if (location) {
        params.location = location
    }
    if (people) {
        params.people = people
    }
    if (startDate) {
        params.startDate = startDate
    }
    if (endDate) {
        params.endDate = endDate
    }

    if (price) {
        params.price = price
    }
    // return http.get(`houses?location=${location || ''}&people=${parseInt(people) || ''}`);
    return http.get(`houses`, { params });
}

export const getMyHouses = () => {
    return http.get('houses/me');
}

export const getHouseDetail = (id) => {
    return http.get(`houses/${id}`);
}

export const editHouse = (id, data) => {
    console.log('id', id, 'data', data); // Verifica que 'data' tenga los datos correctos
    return http.put(`/houses/${id}`, data);
};

export const deleteHouse = (id) => {
    return http.delete(`/houses/${id}`);
};

