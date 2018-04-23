import React from 'react';

import {
    Badge,
    BottomNavigation,
    BottomNavigationAction,
    Paper
} from 'material-ui';
import { AddBox as AddBoxIcon, Cancel as CancelIcon } from 'material-ui-icons';
import { actionRemoveProduct } from '../actions/productComparisonActions';
import { connect } from 'react-redux';

let CompareBar = props => {
    // Fill the array given the number of items
    // specified by our props. If skus exist,
    // we populate an array with those,
    // otherwise we fill the array with
    // the indices.
    const skus = Array(props.numberOfItems)
        .fill()
        .map((ignore, index) => (props.skus && props.skus[index]) || index);

    return (
        <Paper style={{ paddingBottom: '24px' }}>
            <BottomNavigation showLabels>
                {skus &&
                    skus.map((sku, index) => {
                        const product =
                            (sku.length && props.productData[sku]) || index;

                        return (
                            <BottomNavigationAction
                                key={index}
                                label={`Item #${index + 1}`}
                                icon={
                                    <React.Fragment>
                                        {sku.length ? (
                                            <Badge
                                                data-sku={sku}
                                                badgeContent={<CancelIcon />}
                                                onClick={(event, checked) => {
                                                    props.dispatch(
                                                        actionRemoveProduct(sku)
                                                    );
                                                }}
                                            >
                                                <img
                                                    alt={sku}
                                                    src={product.image}
                                                    style={{
                                                        height: '50px',
                                                        width: '50px'
                                                    }}
                                                />
                                            </Badge>
                                        ) : (
                                            <AddBoxIcon
                                                style={{ fontSize: 50 }}
                                            />
                                        )}
                                    </React.Fragment>
                                }
                            />
                        );
                    })}
            </BottomNavigation>
        </Paper>
    );
};
CompareBar = connect((state, ownProps) => ({
    productData: state.productComparisonReducer.productData,
    // HACK:
    // You're probably thinking that `productData`
    // could be used to form the `skus` array inside
    // of the component itself. The problem is that
    // without the `skus` array attached here,
    // the component does not seem to be connected
    // to dispatched actions of the Redux
    // store.
    skus:
        state.productComparisonReducer.productData &&
        Object.keys(state.productComparisonReducer.productData),
    ...ownProps
}))(CompareBar);

export default CompareBar;