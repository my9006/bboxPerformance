import {check, fail} from 'k6';
import login from "../helpers/login.js";
import addToCart from "../helpers/addToCart.js";
import createOfflineOrder from "../helpers/createOfflineOrder.js";

export const options = {
    stages: [
        {duration: '10s', target: 25},
        {duration: '10m', target: 25},
        {duration: '10s', target: 0}
    ]
}

export const setup = () => {
    const loginRes = login();
    if (loginRes.status !== 200) {
        fail('Failed to login');
    }
    const loginBody = JSON.parse(loginRes.body);
    return loginBody.data.token;
}

export default function (token) {
    const addToCartResponse = addToCart(token);
    check(addToCartResponse, {
        'Add to cart status is 201': (r) => r.status === 201,
        'Add to cart duration is < 1s': (r) => r.timings.duration < 1000
    });
    const cartId = JSON.parse(addToCartResponse.body).cart._id;
    const createOrder = createOfflineOrder(token, cartId);
    check(createOrder, {
        'Create order status is 201': (r) => r.status === 201,
        'Create order duration is < 1s': (r) => r.timings.duration < 1000
    });
}
