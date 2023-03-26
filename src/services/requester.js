export const request = async (method, token, url, data) => {

    const options = {};

    if (method !== 'GET') {
        options.method = method

        if (data) {
            options.headers = {
                'Content-Type': 'application/json'
            };
            options.body = JSON.stringify(data);
        }
    }

    if (token) {
        options.headers = {
            ...options.headers,
            'X-Authorization': token
        }
    }

    try {
        const response = await fetch(url, options)

        if (response.status === 204) {
            return response;
        }

        const result = await response.json();

        if (response.ok === false) {
            throw new Error(result.message);
        }

        return result;
    } catch (error) {
        // alert(error.message);
        throw error;
    }
}



export const requestFactory = (token) => {

    return {
        get: request.bind(null, "GET", token),
        post: request.bind(null, "POST", token),
        put: request.bind(null, "PUT", token),
        patch: request.bind(null, "PATCH", token),
        del: request.bind(null, "DELETE", token),
    }

}