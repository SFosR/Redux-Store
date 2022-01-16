import { createStore } from 'redux';
import reducers from './reducers';

export default createStore(reducers, {
    cart: [],
    products: [],
    categories: [],
    cartOpen: false,
    currentCategory: '',

});