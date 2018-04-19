const productComparisonReducer = (state = {}, action) => {
    let productDataArray = (state.productData && [...state.productData]) || [];

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
            if (action.checked) {
                productDataArray.push(action.productData);
            } else {
                productDataArray = state.productData.filter(
                    product =>
                        product.sku === action.productData.sku ? false : product
                );
            }

            return {
                ...state,
                checked: action.checked,
                productData: productDataArray
            };

        case 'REMOVE_PRODUCT':
            productDataArray = state.productData.filter(
                product =>
                    product.sku === action.productData.sku ? false : product
            );
            return {
                ...state,
                checked: false,
                productData: productDataArray
            };

        default:
            return state;
    }
};

export default productComparisonReducer;
