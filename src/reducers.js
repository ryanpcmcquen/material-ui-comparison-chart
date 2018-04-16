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
            let productDataArray =
                (state.productData && [...state.productData]) || [];
            if (action.checked) {
                productDataArray.push(action.productData);
            } else {
                productDataArray = state.productData.filter(product => {
                    return product.sku !== action.productData.sku
                        ? product
                        : false;
                });
            }

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
