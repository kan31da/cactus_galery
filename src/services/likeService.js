import { requestFactory } from "./requester"

const baseUrl = "http://localhost:3030/data/likes"


export const likeServiceFactory = (token) => {

    const request = requestFactory(token)

    const like = async (cactusId) => {

        const result = await request
            .post(baseUrl, { cactusId })

        return result;
    }

    const getLikes = async (cactusId) => {
        const result = await request
            .get(`${baseUrl}?where=cactusId%3D%22${cactusId}%22&distinct=_ownerId&count`)

        return result;
    }


    const getOwnLikes = async (cactusId, userId) => {
        const result = await request
            .get(`${baseUrl}?where=cactusId%3D%22${cactusId}%22%20and%20_ownerId%3D%22${userId}%22&count`)

        return result
    }

    return {
        like,
        getLikes,
        getOwnLikes
    }
}