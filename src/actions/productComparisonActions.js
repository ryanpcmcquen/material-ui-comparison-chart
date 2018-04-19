const actionRemoveProduct = productData => ({
    type: 'REMOVE_PRODUCT',
    productData: productData
});

const actionToggleCheckbox = (productData, checked) => ({
    type: 'TOGGLE_CHECKBOX',
    productData: productData,
    checked: checked
});

export { actionRemoveProduct, actionToggleCheckbox };
