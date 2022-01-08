import { submittr_host, authenticatr_port } from './Config';

async function requestUplink(url, method, headers, body) { 
    let requestOptions = {}

    if(method === 'GET') {
        requestOptions = {
            method: method,
            headers: headers,
        };

    } else {
        requestOptions = {
            method: method,
            headers: headers,
            body: JSON.stringify(body)
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

function refreshJWT(token){
    requestUplink(submittr_host + authenticatr_port + '/auth/refresh', 'GET', { 'Content-Type': 'application/json', 'Authorization' : token }, "").then(response => {
      token = JSON.parse(JSON.stringify(response)).token
    })
}

async function verify(token){
    requestUplink(submittr_host + authenticatr_port + '/auth/verify', 'GET', { 'Content-Type': 'application/json', 'Authorization' : token }, ""
    ).then(response => {
      response = JSON.parse(JSON.stringify(response))
      if(response.valid === true){
        //console.log(response) // response ok
        return Promise.resolve(response)
      } 
    }).catch(error => {
      return Promise.reject(error)
    })
}

export {requestUplink, refreshJWT, verify}