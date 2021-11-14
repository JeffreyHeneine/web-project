let max_id=3
let useData =[
    {
        "id": 2,
        "first_name": "Bob",
        "last_name": "Barker",
        "email": "bob@widgets.com",
        "shipping": null,
        "payment": null,
        "password_digest": "$2a$12$VWqiPbRQdyUKw7FmB3IOKOcrNnes5YVqv1RBW2L72bmw3fD2zSHO.",
        "isAdmin": false
    },
    {
        "id": 3,
        "first_name": "Jeffrey",
        "last_name": "Heneine",
        "email": "jeffrey-heneine@hotmail.com",
        "shipping": null,
        "payment": null,
        "password_digest": "$2a$12$cafW2y7Ja1pebYpIUlgCE.CO6NPLM2RuRW01LidrxXJ/50FuDQy2i",
        "isAdmin": false
    },
    {
        "id": 1,
        "first_name": "Tanner",
        "last_name": "Townsend",
        "email": "admin@widgets.com",
        "shipping": {
            "city": "Sweetville",
            "address": "999 Sweet Lane",
            "country": "United States",
            "postalCode": "99999"
        },
        "payment": {
            "paymentMethod": "PayPal"
        },
        "password_digest": "$2a$12$9w7Ln4jicUbGR/sBjpSzS.GKQPowKjA3wXRj7Ifie/qJ1opn5wJLS",
        "isAdmin": true
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
