import { createHttp } from "./BaseService";

const http = createHttp(true)

export const getCurrentUser = () => {
    return http.get('users/me')
}

export const toggleLike = (houseId) => {
    return http.post(`/likes/${houseId}`)
}

export const getAllUsers = () => {
    return http.get('/users')
}

export const deleteUser = (userId) => {
    return http.delete(`/users/${userId}`)
}



