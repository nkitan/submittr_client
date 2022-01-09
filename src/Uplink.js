import { submittr_host, authenticatr_port } from './Config';

async function call(url, method, headers, body) { 
    let requestOptions = {}

    if(method === 'GET') {
        requestOptions = {
            method: method,
            headers: headers,
            credentials: 'include'
        };

    } else {
        requestOptions = {
            method: method,
            headers: headers,
            body: JSON.stringify(body),
            credentials: 'include'
        };
    }

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

function refreshToken(){
    call(submittr_host + authenticatr_port + '/auth/refresh', 'GET', { 'Content-Type': 'application/json' }, "").then(response => {
      console.log(response)
    })
}

export {call, refreshToken}