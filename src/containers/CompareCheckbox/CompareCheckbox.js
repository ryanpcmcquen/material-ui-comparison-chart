import React from 'react';
import { connect } from 'react-redux';

import { Checkbox, FormControlLabel } from 'material-ui';
import { actionToggleCheckbox } from '../../actions/checkboxActions';

// TEMP:
// We will grab this data via a network request.
import data from '../../data';

let CompareCheckbox = props => (
    <div>
        <img
            alt={props.sku}
            src={props.productData.image}
            style={{ width: '36px' }}
        />
        <br />
        <FormControlLabel
            control={
                <Checkbox
                    onChange={(event, checked) => {
                        props.dispatch(
                            actionToggleCheckbox(props.productData, checked)
                        );
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
        productData: data[ownProps.sku],
        ...ownProps
    };
})(CompareCheckbox);

export default CompareCheckbox;
