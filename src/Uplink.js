async function requestUplink(url, body) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    };

    try {
        const response = await fetch(url, requestOptions);   
        const isJson = response.headers.get('content-type')?.includes('application/json');
        const data = isJson && await response.json();

        if (!response.ok) {
            var error = (data && data.message) || response.status;
            return Promise.reject(error);
        }

        return Promise.resolve(data);
    } catch(error) {
            console.error('There was an error!', error);
            return Promise.reject(error);           
    };
}

export {requestUplink}