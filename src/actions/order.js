var orderData= [
    {
        "id": "1",
        "user_id": "1",
        "cartItems": [
            {
                "qty": 2,
                "name": "Black shorts",
                "image": "/images/Shorts_Men_black.jpeg",
                "price": 29.99,
                "countInStock": 10
            }
        ],
        "shipping": {
            "city": "beirut",
            "address": "Furn el cheback",
            "country": "Lebanon",
            "postalCode": "99999"
        },
        "payment": {
            "paymentMethod": "cash at delivery"
        },
        "itemsPrice": 59.98,
        "taxPrice": 5.0,
        "shippingPrice": 10.0,
        "totalPrice": 74.98,
        "isPaid": true,
        "paidAt": "2021-11-14",
        "isDelivered": true,
        "deliveredAt": "2021-11-14",
        "user": {
            "id": 3,
            "first_name": "Jeffrey",
            "last_name": "Heneine",
            "email": "jeffrey-heneine@hotmail.com",
            "isAdmin": true,
            "shipping": {
                "city": "Mansourieh",
                "address": "hay el blata",
                "country": "Lebanon",
                "postalCode": "456"
            },
            "payment": {
                "paymentMethod": "cash at delivery"
            }
        }
    },
    
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