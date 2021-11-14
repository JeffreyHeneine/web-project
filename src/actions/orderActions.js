
import { addOrder, getById, getOrders, payOrd, deliveryOrd,deleteOrd } from './order'

export const createOrder = order => dispatch => {
    addOrder(order)
    dispatch({ type: 'CREATE_ORDER', payload: order, success: true });
};

export const fetchOrder = orderId => dispatch => {
    let order = getById(orderId)
    dispatch({ type: 'FETCH_ORDER', payload: order, success: true });
};

export const listMyOrders = () => dispatch => {
  let orders = getOrders();
  dispatch({ type: 'FETCH_MY_ORDERS', payload: orders, success: true });
};

export const fetchOrders = () => dispatch => {
  let orders = getOrders();
  dispatch({ type: 'FETCH_ORDERS', payload: orders, success: true });
};

export const payOrder = order => dispatch => {
    payOrd(order.id)
    dispatch({ type: 'PAY_ORDER', payload: order, success: true });
};

export const deliverOrder = order => dispatch => {
    deliveryOrd(order.id)
    dispatch({ type: 'DELIVER_ORDER', payload: order, success: true });
};

export const deleteOrder = order => dispatch => {
deleteOrd(order)
 dispatch({ type: 'DELETE_ORDER', payload: order, success: true });
};
