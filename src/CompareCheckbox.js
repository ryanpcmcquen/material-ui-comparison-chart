import React from 'react';
import queryParent from 'queryparent';

import { Checkbox, FormControlLabel } from 'material-ui';

import { connect } from 'react-redux';

const toggleCheckbox = (productData, checked) => {
    return {
        type: 'TOGGLE_CHECKBOX',
        productData: productData,
        checked: checked
    };
};

const productCheckbox = {
    sku: '2403251',
    image: 'https://yogifil.la/50/50'
};

let CompareCheckbox = props => (
    <div>
        <img alt={productCheckbox.sku} src={productCheckbox.image} />
        <br />
        <FormControlLabel
            control={
                <Checkbox
                    data-sku={productCheckbox.sku}
                    data-image={productCheckbox.image}
                    onChange={(checkboxEvent, checked) => {
                        checkboxEvent.persist();
                        const productData = Object.assign(
                            {},
                            queryParent(checkboxEvent.target, '[data-sku]')
                                .dataset
                        );
                        props.dispatch(toggleCheckbox(productData, checked));
                    }}
                />
            }
            label="Compare"
        />
    </div>
);

CompareCheckbox = connect((state, ownProps) => {
    return {
        checked: ownProps.value,
        ...ownProps
    };
})(CompareCheckbox);

export default CompareCheckbox;
