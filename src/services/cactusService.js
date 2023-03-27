import { requestFactory } from "./requester"

const baseUrl = "http://localhost:3030/data/cactus/"


export const cactusServiceFactory = (token) => {

    const request = requestFactory(token)

    const getAll = async () => {

        const result = await request.get(baseUrl)

        const data = Object.values(result);
        return data;
    }

    const getById = async (cactusId) => {

        const result = await request.get(`${baseUrl}${cactusId}`)
        return result;
    }


    const createCactus = async (cactusData) => {
        const result = await request.post(baseUrl, cactusData)

        return result
    }


    const deleteById = async (cactusId) => {
        const result = await request.del(`${baseUrl}${cactusId}`)

        return result
    }

    const editCactus = async (cactusId, data) => {
        const result = await request.put(`${baseUrl}${cactusId}`, data)

        return result
    }

    const getAllProfileCactuses = async (userId) => {
        const result = await request.get(`/data/cactus?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)

        return result
    }


    return {
        getAll,
        getById,
        deleteById,
        editCactus,
        createCactus,
        getAllProfileCactuses
    }
}