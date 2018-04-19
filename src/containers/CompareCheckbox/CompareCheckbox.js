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
                                // console.log(event.target.checked);
                                // console.log(props.sku);
                                // console.log(
                                //     this.props.state.productComparisonReducer
                                // );
                                // this.setState((prevState, props) => {
                                //     return {
                                //         checked:
                                //             this.props.currentProducts &&
                                //             this.props.currentProducts.reduce(
                                //                 (bool, product) => {
                                //                     // console.log(props.sku);
                                //                     return (
                                //                         product.sku ===
                                //                             this.props.sku &&
                                //                         product.checked
                                //                     );
                                //                 },
                                //                 false
                                //             ),
                                //         ...prevState
                                //     };
                                // });

                                this.props.dispatch(
                                    actionToggleCheckbox(
                                        this.props.productData,
                                        checked
                                    )
                                );
                            }}
                            checked={
                                console.log(
                                    this.props.state.productComparisonReducer
                                        .checked
                                ) &&
                                this.props.state.productComparisonReducer
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
        state: state,
        checked: ownProps.value,
        productData: data[ownProps.sku],
        currentProducts: state.productComparisonReducer.productData,
        ...ownProps
    };
})(CompareCheckbox);

export default CompareCheckbox;
