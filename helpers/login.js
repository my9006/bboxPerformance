import http from 'k6/http';
import {BASE_URL} from "../resources/environment.js";
import {baseHeader} from "../resources/defaults.js";

export default function () {
    const url = `${BASE_URL}/auth/login`;
    const body = {
        "email": "performance@bbox.com",
        "password": "Qw!123456"
    };
    const headers = baseHeader("");
    return http.post(url, JSON.stringify(body), {headers});
}
