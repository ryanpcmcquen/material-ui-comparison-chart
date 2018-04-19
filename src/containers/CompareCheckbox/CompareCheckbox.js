import React from 'react';
import { connect } from 'react-redux';

import { Checkbox, FormControlLabel } from 'material-ui';
import { actionToggleCheckbox } from '../../actions/productComparisonActions';

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
                    checked={
                        (props.sku &&
                            props.store &&
                            props.store.productData &&
                            props.store.productData[props.sku] &&
                            props.store.productData[props.sku].checked) ||
                        false
                    }
                />
            }
            label="Compare"
        />
    </div>
);

CompareCheckbox = connect((state, ownProps) => {
    return {
        store: state.productComparisonReducer,
        checked: ownProps.value,
        productData: data[ownProps.sku],
        currentProducts: state.productComparisonReducer.productData,
        ...ownProps
    };
})(CompareCheckbox);

export default CompareCheckbox;
