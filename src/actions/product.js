let productData = [
    {
        "id": "1",
        "name": "Stanley Socket Set",
        "description": "You really won't ever use these!",
        "category": "Stanley",
        "image": "/images/t6.jpg",
        "price": 59.99,
        "brand": "Stanley",
        "rating": 0.0,
        "numReviews": 0,
        "countInStock": 0,
        "reviews": []
    },
    {
        "id": "2",
        "name": "Stanley Hammer",
        "description": "Great hammer for smashing all of the things!",
        "category": "Stanley",
        "image": "/images/t1.jpg",
        "price": 12.99,
        "brand": "Stanley",
        "rating": 3.5,
        "numReviews": 2,
        "countInStock": 10,
        "reviews": [
            {
                "id": 1,
                "product_id": "2",
                "name": "Tanner Townsend",
                "rating": 5,
                "comment": "Amazing Hammer!"
            },
            {
                "id": 2,
                "product_id": "2",
                "name": "Bob Barker",
                "rating": 2,
                "comment": "Couldn't figure out how to use it!!!!!!!!!!"
            }
        ]
    },
    {
        "id": "3",
        "name": "Some Old Rusty Nails",
        "description": "These are the best old rusty nails anyone can find!",
        "category": "Unknown",
        "image": "/images/t2.jpg",
        "price": 3.99,
        "brand": "Unknown",
        "rating": 3.0,
        "numReviews": 1,
        "countInStock": 1,
        "reviews": [
            {
                "id": 3,
                "product_id": "3",
                "name": "Tanner Townsend",
                "rating": 3,
                "comment": "Nails broke when using them! Good thing they were cheap..."
            }
        ]
    },
    {
        "id": "4",
        "name": "Craftsman Wrench",
        "description": "How does one even use this thing?",
        "category": "Craftsman",
        "image": "/images/t3.jpg",
        "price": 1.99,
        "brand": "Craftsman",
        "rating": 1.0,
        "numReviews": 1,
        "countInStock": 6,
        "reviews": [
            {
                "id": 4,
                "product_id": "4",
                "name": "Bob Barker",
                "rating": 1,
                "comment": "Lame wrench! Doesn't even do the job for you."
            }
        ]
    },
    {
        "id": "5",
        "name": "DeWalt 20V Power Drill",
        "description": "The best drill anyone will ever use! Comes with battery included.",
        "category": "DeWalt",
        "image": "/images/t4.jpg",
        "price": 99.99,
        "brand": "DeWalt",
        "rating": 4.0,
        "numReviews": 1,
        "countInStock": 12,
        "reviews": [
            {
                "id": 5,
                "product_id": "5",
                "name": "Bob Barker",
                "rating": 4,
                "comment": "Woo hoo! Power tools are awesome!"
            }
        ]
    },
    {
        "id": "6",
        "name": "Craftsman Drill Bit Set",
        "description": "Not even sure how to use these. Must buy drill first!",
        "category": "Craftsman",
        "image": "/images/t5.jpg",
        "price": 29.99,
        "brand": "Craftsman",
        "rating": 5.0,
        "numReviews": 1,
        "countInStock": 4,
        "reviews": [
            {
                "id": 6,
                "product_id": "6",
                "name": "Bob Barker",
                "rating": 5,
                "comment": "I needed this really badly with my new drill!"
            }
        ]
    }
]

export function getProducts(){
    return productData;
}

export function getById(id) {
    return productData.find(prod => prod.id === id)
}

  export function addProduct(product) {
    productData.push(product)
}

export function deleteProd(product) {
    productData.remove(prod => prod.id === product.id)
}

export function saveReviewProd(productId, review) {
    let index = productData.findIndex(prod => prod.id === productId)
    productData[index].reviews.push(review)
}
