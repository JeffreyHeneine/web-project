const BASE_URL = 'https://react-widget-store-api.herokuapp.com/api/v1';

export const signin = (email, password) => dispatch => {
  fetch(`${BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then(res => res.json())
    .then(user => dispatch({ type: 'LOGIN_USER', payload: user }));
};

export const register = (first_name, last_name, email, password, password_confirmation) => dispatch => {
  fetch(`${BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      first_name,
      last_name,
      email,
      password: password,
      password_confirmation: password_confirmation,
    }),
  })
    .then(res => res.json())
    .then(user => dispatch({ type: 'REGISTER_USER', payload: user }));
};

export const update = (userId, first_name, last_name, email, password, password_confirmation) => dispatch => {
  fetch(`${BASE_URL}/users/${userId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId,
      first_name,
      last_name,
      email,
      password,
      password_confirmation,
    }),
  })
    .then(res => res.json())
    .then(user => dispatch({ type: 'UPDATE_USER', payload: { user } }));
};

export const saveShipping = ( address, city, postalCode, country) => dispatch => {
  fetch(`${BASE_URL}/shipping-details`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      shipping: {
        address,
        city,
        postalCode,
        country,
      },
    }),
  })
    
};

export const savePayment = (userId, paymentMethod) => dispatch => {
  fetch(`${BASE_URL}/users/${userId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      payment: {
        paymentMethod,
      },
    }),
  })
    .then(res => res.json())
    .then(user => dispatch({ type: 'UPDATE_USER', payload: { user } }));
};

export const logout = () => dispatch => {
  dispatch({ type: 'LOGOUT_USER' });
};



// import { logIn, createAccount, updateAccount, createShipping, addPayment } from './user'

// export const signin = (email, password) => dispatch => {
//   let user = logIn(email, password)
//   dispatch({ type: 'LOGIN_USER', payload: user });
// };

// export const register = (first_name, last_name, email, password, password_confirmation) => dispatch => {
//   let user =createAccount(first_name, last_name, email, password, password_confirmation)
//   dispatch({ type: 'REGISTER_USER', payload: user });
// };

// export const update = (userId, first_name, last_name, email, password, password_confirmation) => dispatch => {
//   let user =updateAccount(userId, first_name, last_name, email, password, password_confirmation)
//   dispatch({ type: 'UPDATE_USER', payload: user });
// };

// export const saveShipping = (userId, address, city, postalCode, country) => dispatch => {
//   let user= createShipping(userId, address, city, postalCode, country)
//   dispatch({ type: 'UPDATE_USER', payload:  user  });
// };

// export const savePayment = (userId, paymentMethod) => dispatch => {
//  let user =addPayment(userId, paymentMethod);
// dispatch({ type: 'UPDATE_USER', payload:  user  });
// };

// export const logout = () => dispatch => {
//   dispatch({ type: 'LOGOUT_USER' });
// };
