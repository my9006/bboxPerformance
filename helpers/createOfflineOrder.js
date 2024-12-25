import http from 'k6/http';
import {baseHeader} from "../resources/defaults.js";
import {BASE_URL} from "../resources/environment.js";

export default function (token, cartId) {
    let url = `${BASE_URL}/oms/order/add`;

    const body = JSON.stringify({
        "type": "b2c",
        "paidAt": "",
        "status": "",
        "buyer": {
            "name": "MkhitarPerformance",
            "firstName": "",
            "lastName": "",
            "email": "mkhitarmkrtchyan@gmail.com",
            "countryCode": "AE",
            "mobile": "37477489494"
        },
        "recipient": {
            "name": "Shebaperformance",
            "firstName": "",
            "lastName": "",
            "mobile": "37477489494",
            "countryCode": "AE"
        },
        "address": {
            "line1": "Marina",
            "line2": "2",
            "line3": "23",
            "cityCode": "dubai",
            "postalCode": "",
            "location": {
                "lat": "",
                "lng": ""
            },
            "countryCode": "AE",
            "state": "",
            "area": "Abu Hail"
        },
        "item": [],
        "slot": {
            "cutoffDate": null,
            "cutoffTime": null,
            "isAvailable": true,
            "shippingFee": 0,
            "slotType": "Standard",
            "from": "08:00",
            "to": "17:00",
            "id": 1706152144196,
            "text": "08:00 AM - 05:00 PM",
            "addressCutOff": "12:00"
        },
        "delivery": {
            "date": "2024-12-31"
        },
        "subTotal": [],
        "total": 0,
        "discount": 0,
        "tax": "",
        "orderSource": "inhouse",
        "currency": "aed",
        "note": "",
        "specialInstruction": "",
        "isPrepared": false,
        "isSurprise": "",
        "isSendAsAnonymous": false,
        "isCallReceiver": false,
        "isPaid": false,
        "card": {},
        "cardMsg": "",
        "receiptId": "",
        "paymentMethod": "",
        "cashMethod": "",
        "cartId": cartId,
        "isPayee": "",
        "deliveryFee": 0,
        "paymentSlip": "",
        "collectedBy": "",
        "deliveryType": "delivery",
        "invoiceId": "",
        "dispatched": false,
        "source": "backend"
    })

    const headers = baseHeader(token)

    return http.post(url, body, {headers});
}
