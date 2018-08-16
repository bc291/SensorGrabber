// Rewrite this to add storage service
//inspired by KilroggD react example
import api_endpoints from '../api_endpoints'


class Api
{
    constructor() {
        this.url_api = 'http://localhost:8000'
    }


    async apiCall(resource_url, method='GET', token=false, params=null)
    {
        var payload = {
            method,
            headers: this.header_builder(token)  // maybe acces it directly via storage?,
        }
        if(params)
        {
            payload.body = JSON.stringify(params);
        }

        const response = await fetch(`${this.url_api}${resource_url}`, payload);
        const status = await response.status;
        const body = await response.json()
        return {status, body}      
    }

    header_builder(token=false)
    {
        let headers = new Headers();
        headers.append('Content-type', 'application/json');
        if (token) {
            headers.append('Authorization', `JWT ${token}`);  // JWT is hardcoded here
        }
        return headers;
    }

    async login(params)
    {
        const response = await this.apiCall(api_endpoints.login, 'POST', false, params);
        const status = await response.status;
        const body = await response.body
        return {status, body};
    }

    async check_log_state(token)
    {
        const response = await this.apiCall(api_endpoints.check_login, 'GET', token)
        return response
    }

    async get_all_reading(token)
    {
        const response = await this.apiCall(api_endpoints.all_readings, 'GET', token)
        return response
    }
}


export default new Api()