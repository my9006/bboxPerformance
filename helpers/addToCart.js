import http from 'k6/http';
import {baseHeader} from "../resources/defaults.js";
import {BASE_URL} from "../resources/environment.js";

export default function (token) {
    const url = `${BASE_URL}/cart/addToCart`;
    const headers = baseHeader(token);
    const body = JSON.stringify({
        "sku": "BP9037",
        "qty": 1,
        "type": "admin",
        "cartId": null,
        "extraFields": {},
        "city": "dubai"
    });
    return http.post(url, body, {headers});
}
