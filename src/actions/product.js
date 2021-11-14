let productData = [
    {
        "id": "1",
        "name": " Simple black tshirt",
        "description": "You really won't ever use these!",
        "category": "Tshirts",
        "image": "/images/Tshirt_Men_black.jpeg",
        "price": 11.99,
        "brand": "Top",
        "rating": 4,
        "numReviews": 1,
        "countInStock": 50,
        "reviews": [
            {
                "id": 1,
                "product_id": "1",
                "name": "Bob Marley ",
                "rating": 4,
                "comment": "Very nice !! "
            }
        ]
    },
    {
        "id": "2",
        "name": "Grey shorts",
        "description": "Very casual shorts for everyday use",
        "category": "Shorts",
        "image": "/images/Shorts_Men.jpeg",
        "price": 29.99,
        "brand": "Bot",
        "rating": 3.5,
        "numReviews": 2,
        "countInStock": 10,
        "reviews": [
            {
                "id": 1,
                "product_id": "2",
                "name": "Tanner",
                "rating": 5,
                "comment": "Amazing Shorts!"
            },
            {
                "id": 2,
                "product_id": "2",
                "name": "Bob ",
                "rating": 2,
                "comment": "Bad !!!"
            }
        ]
    },
    {
        "id": "3",
        "name": "Underwear",
        "description": "Check these underwear , 100% coton",
        "category": "Underwear",
        "image": "/images/Underwear_Men.jpeg",
        "price": 3.99,
        "brand": "Underwear",
        "rating": 3.0,
        "numReviews": 1,
        "countInStock": 1,
        "reviews": [
            {
                "id": 3,
                "product_id": "3",
                "name": "Tanner ",
                "rating": 3,
                "comment": "Nice !! "
            }
        ]
    },
    {
        "id": "4",
        "name": " Sweatpants",
        "description": "Very comfortable?",
        "category": "Pants",
        "image": "/images/Pants_Men.jpeg",
        "price": 49.99,
        "brand": "Bot",
        "rating": 2.0,
        "numReviews": 1,
        "countInStock": 6,
        "reviews": [
            {
                "id": 4,
                "product_id": "4",
                "name": "Bob ",
                "rating": 1,
                "comment": "Lame wrench! Doesn't even do the job for you."
            }
        ]
    },
    {
        "id": "5",
        "name": " Simple white tshirt",
        "description": "You really won't ever use these!",
        "category": "Tshirts",
        "image": "/images/Tshirt_Men_white.jpeg",
        "price": 11.99,
        "brand": "Top",
        "rating": 3,
        "numReviews": 1,
        "countInStock": 50,
        "reviews": [
            {
                "id": 5,
                "product_id": "5",
                "name": "Jeffrey Heneine",
                "rating": 3,
                "comment": "Would really love to buy one !!"
            }
        ]
    },

    {
        "id": "6",
        "name": "Black shorts",
        "description": "Black shorts",
        "category": "Shorts",
        "image": "/images/Shorts_Men_black.jpeg",
        "price": 29.99,
        "brand": "Bot",
        "rating": 0,
        "numReviews": 0,
        "countInStock": 10,
        "reviews": []
    },
    
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
