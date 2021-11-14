var orderData= [
    {
        "id": "1",
        "user_id": "1",
        "cartItems": [
            {
                "qty": 2,
                "name": "Stanley Hammer",
                "image": "/images/t1.jpg",
                "price": 12.99,
                "countInStock": 10
            }
        ],
        "shipping": {
            "city": "Sweetville",
            "address": "999 Sweet Lane",
            "country": "United States",
            "postalCode": "99999"
        },
        "payment": {
            "paymentMethod": "PayPal"
        },
        "itemsPrice": 25.98,
        "taxPrice": 3.897,
        "shippingPrice": 10.0,
        "totalPrice": 39.877,
        "isPaid": true,
        "paidAt": "2020-08-27",
        "isDelivered": true,
        "deliveredAt": "2020-08-29",
        "user": {
            "id": 1,
            "first_name": "Tanner",
            "last_name": "Townsend",
            "email": "admin@widgets.com",
            "isAdmin": true,
            "shipping": {
                "city": "Sweetville",
                "address": "999 Sweet Lane",
                "country": "United States",
                "postalCode": "99999"
            },
            "payment": {
                "paymentMethod": "PayPal"
            }
        }
    },
    {
        "id": "2",
        "user_id": "1",
        "cartItems": [
            {
                "qty": 1,
                "name": "Craftsman Wrench",
                "image": "/images/t3.jpg",
                "price": 1.99,
                "countInStock": 6
            },
            {
                "qty": 1,
                "name": "Some Old Rusty Nails",
                "image": "/images/t2.jpg",
                "price": 3.99,
                "countInStock": 1
            },
            {
                "qty": 4,
                "name": "DeWalt 20V Power Drill",
                "image": "/images/t4.jpg",
                "price": 99.99,
                "countInStock": 12
            }
        ],
        "shipping": {
            "city": "Sweetville",
            "address": "999 Sweet Lane",
            "country": "United States",
            "postalCode": "99999"
        },
        "payment": {
            "paymentMethod": "PayPal"
        },
        "itemsPrice": 405.94,
        "taxPrice": 60.891,
        "shippingPrice": 0.0,
        "totalPrice": 466.831,
        "isPaid": false,
        "paidAt": null,
        "isDelivered": false,
        "deliveredAt": null,
        "user": {
            "id": 1,
            "first_name": "Tanner",
            "last_name": "Townsend",
            "email": "admin@widgets.com",
            "isAdmin": true,
            "shipping": {
                "city": "Sweetville",
                "address": "999 Sweet Lane",
                "country": "United States",
                "postalCode": "99999"
            },
            "payment": {
                "paymentMethod": "PayPal"
            }
        }
    },
    {
        "id": "3",
        "user_id": "1",
        "cartItems": [
            {
                "qty": 3,
                "name": "Stanley Hammer",
                "image": "/images/t1.jpg",
                "price": 12.99,
                "countInStock": 10
            },
            {
                "qty": 1,
                "name": "Some Old Rusty Nails",
                "image": "/images/t2.jpg",
                "price": 3.99,
                "countInStock": 1
            },
            {
                "qty": 1,
                "name": "Craftsman Wrench",
                "image": "/images/t3.jpg",
                "price": 1.99,
                "countInStock": 6
            }
        ],
        "shipping": {
            "city": "Sweetville",
            "address": "999 Sweet Lane",
            "country": "United States",
            "postalCode": "99999"
        },
        "payment": {
            "paymentMethod": "PayPal"
        },
        "itemsPrice": 44.95,
        "taxPrice": 6.742500000000001,
        "shippingPrice": 10.0,
        "totalPrice": 61.6925,
        "isPaid": true,
        "paidAt": "2020-08-29",
        "isDelivered": true,
        "deliveredAt": "2020-09-04",
        "user": {
            "id": 1,
            "first_name": "Tanner",
            "last_name": "Townsend",
            "email": "admin@widgets.com",
            "isAdmin": true,
            "shipping": {
                "city": "Sweetville",
                "address": "999 Sweet Lane",
                "country": "United States",
                "postalCode": "99999"
            },
            "payment": {
                "paymentMethod": "PayPal"
            }
        }
    }
]


export function getOrders() {
    return orderData;
}

export function getById(id) {
    return orderData.find(ord => ord.id === id)
}

export function addOrder(order) {
    orderData.push(order)
}

export function deleteOrd(order) {
    orderData.remove(ord => ord.id === order.id)
}

export function payOrd(orderId) {
    let index = orderData.findIndex(ord => ord.id === orderId)
    orderData[index].isPaid = true
}

export function deliveryOrd(orderId) {
    let index = orderData.findIndex(ord => ord.id === orderId)
    orderData[index].isDelivered =  true
}