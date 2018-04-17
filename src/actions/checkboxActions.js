const actionToggleCheckbox = (productData, checked) => {
    return {
        type: 'TOGGLE_CHECKBOX',
        productData: productData,
        checked: checked
    };
};
export { actionToggleCheckbox };
