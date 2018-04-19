const productComparisonReducer = (state = {}, action) => {
    let productData = (state.productData && { ...state.productData }) || {};

    switch (action.type) {
        case 'TOGGLE_CHECKBOX':
            if (action.checked) {
                productData[action.productData.sku] = action.productData;
                productData[action.productData.sku].checked = action.checked;
            } else {
                delete productData[action.productData.sku];
            }

            return {
                ...state,
                productData: productData
            };

        case 'REMOVE_PRODUCT':
            delete productData[action.productData.sku];
            return {
                ...state,
                productData: productData
            };

        default:
            return state;
    }
};

export default productComparisonReducer;
