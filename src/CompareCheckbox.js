import React from 'react';

import { Checkbox, FormControlLabel } from 'material-ui';

import { connect } from 'react-redux';

const toggleCheckbox = (productData, checked) => {
    return {
        type: 'TOGGLE_CHECKBOX',
        productData: productData,
        checked: checked
    };
};

let CompareCheckbox = props => (
    <div>
        <img alt={props.sku} src={props.image} style={{ width: '36px' }} />
        <br />
        <FormControlLabel
            control={
                <Checkbox
                    sku={props.sku}
                    image={props.image}
                    onChange={(checkboxEvent, checked) => {
                        const productData = {
                            image: props.image,
                            sku: props.sku
                        };
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
