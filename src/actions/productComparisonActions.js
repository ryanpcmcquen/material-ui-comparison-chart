const actionRemoveProduct = productData => ({
    type: 'REMOVE_PRODUCT',
    productData: productData
});

const actionToggleCheckbox = (productData, checked) => ({
    type: 'TOGGLE_CHECKBOX',
    productData: productData,
    checked: checked
});

const actionUncheckCheckbox = sku => ({
    type: 'UNCHECK_CHECKBOX',
    sku: sku
});

export { actionRemoveProduct, actionToggleCheckbox, actionUncheckCheckbox };
