let max_id=3
let useData =[
    {
        "id": 2,
        "first_name": "Rawad",
        "last_name": "Loutfi",
        "email": "rawad-loutfi@widgets.com",
        "shipping": {
            "city": "Furn el cheback",
            "address": "wara el bigSale",
            "country": "Lebanon",
            "postalCode": "123"
        },
        "payment": {
            "paymentMethod": "cash ar delivery"
        },
        "password_digest": "$2a$12$VWqiPbRQdyUKw7FmB3IOKOcrNnes5YVqv1RBW2L72bmw3fD2zSHO.",
        "isAdmin": true
    },
    {
        "id": 3,
        "first_name": "Jeffrey",
        "last_name": "Heneine",
        "email": "jeffrey-heneine@hotmail.com",
        "shipping": {
            "city": "Mansourieh",
            "address": "hay el blata",
            "country": "Lebanon",
            "postalCode": "456"
        },
        "payment": {
            "paymentMethod": "cash ar delivery"
        },
        "password_digest": "$2a$12$cafW2y7Ja1pebYpIUlgCE.CO6NPLM2RuRW01LidrxXJ/50FuDQy2i",
        "isAdmin": true
    },
    {
        "id": 1,
        "first_name": "Maroun",
        "last_name": "Helou",
        "email": "maroun-helou@widgets.com",
        "shipping": null,
        "payement":null,
        "password_digest": "$2a$12$9w7Ln4jicUbGR/sBjpSzS.GKQPowKjA3wXRj7Ifie/qJ1opn5wJLS",
        "isAdmin": false
    }
]


export function logIn(email, password){
    return useData.find(us =>  us.email === email && us.password_digest === password)

}
export function createAccount(first_name, last_name, email, password, password_confirmation) {
    if(password===password_confirmation){
    let newUser= {
        "id": max_id+1,
        "first_name": first_name,
        "last_name": last_name,
        "email": email,
        "shipping": null,
        "payment":null,
        "password_digest": password,
        "isAdmin": false
    }
    console.log(newUser)
    useData.push(newUser);
    console.log(useData)
    ++max_id
    return newUser;
    }
    else{
        console.error("Error in password Confirmation")
    }


}

export function updateAccount(userId,first_name, last_name, email, password, password_confirmation) {
    if(password===password_confirmation){
    let index = useData.findIndex(use => use.id === userId)
    useData[index].first_name = first_name;
    useData[index].last_name = last_name;
    useData[index].email = email;
    useData[index].password_digest = password;
    return useData[index];
    }
    else{
        console.log("Error in password Confirmation")
    }
}

export function createShipping(userId, address, city, postalCode, country){
    let shipment = {
        "city": city,
        "address": address,
        "country": country,
        "postalCode": postalCode
    }
    let index = useData.findIndex(use => use.id === userId)
    useData[index].shipping = shipment;
    return useData[index];
}

export function addPayment(userId, paymentMethod) {
    let payment = {
        "paymentMethod":paymentMethod
    }
    let index = useData.findIndex(use => use.id === userId)
    useData[index].payment = payment;
    return useData[index];
}
