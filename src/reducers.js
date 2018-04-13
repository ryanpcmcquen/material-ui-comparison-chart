import { combineReducers } from 'redux';
const checkboxReducer = (state = {}, action) => {
    switch (action.type) {
        case 'CHECK_CHECKBOX':
            return {
                ...state,
                checked: true
            };
        case 'UNCHECK_CHECKBOX':
            return {
                ...state,
                checked: false
            };
        case 'TOGGLE_CHECKBOX':
            // TODO:
            // Push or remove from array based on checked status.
            const productDataArray = [];
            if (action.checked) {
                productDataArray.push(action.productData);
            } else {
                productDataArray.filter(product => product.sku !== product.sku);
            }
            console.log(productDataArray);

            return {
                ...state,
                productData: productDataArray,
                checked: action.checked
            };
        default:
            return state;
    }
};

// This combines all reducers, so they can be modular:
const reducers = combineReducers({
    checkboxReducer
});

export default reducers;
