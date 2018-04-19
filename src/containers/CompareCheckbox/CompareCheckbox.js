import React from 'react';
import { connect } from 'react-redux';

import { Checkbox, FormControlLabel } from 'material-ui';
import { actionToggleCheckbox } from '../../actions/productComparisonActions';

// TEMP:
// We will grab this data via a network request.
import data from '../../data';

class CompareCheckbox extends React.Component {
    render() {
        return (
            <div>
                <img
                    alt={this.props.sku}
                    src={this.props.productData.image}
                    style={{ width: '36px' }}
                />
                <br />
                <FormControlLabel
                    control={
                        <Checkbox
                            onChange={(event, checked) => {
                                this.props.dispatch(
                                    actionToggleCheckbox(
                                        this.props.productData,
                                        checked
                                    )
                                );
                            }}
                            checked={
                                this.props.sku &&
                                this.props.store &&
                                this.props.store.productData &&
                                this.props.store.productData[this.props.sku] &&
                                this.props.store.productData[this.props.sku]
                                    .checked
                            }
                        />
                    }
                    label="Compare"
                />
            </div>
        );
    }
}

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
