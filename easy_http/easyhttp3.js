class EasyHTTP {
    // Make HTTP GET Request
    async get(url) {
        const response = await fetch(url);

        return await response.json();
    }

    // Make HTTP POST Request
    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        return await response.json();
    }

    // Make HTTP PUT Request
    async put(url, data) {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        return await response.json();
    }

    // Make HTTP DELETE Request
    async delete(url) {
        await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        return await 'Resource deleted';
    }
}