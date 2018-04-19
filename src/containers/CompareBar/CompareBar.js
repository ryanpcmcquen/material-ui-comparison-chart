import React from 'react';

import {
    Badge,
    BottomNavigation,
    BottomNavigationAction,
    Paper
} from 'material-ui';
import { AddBox as AddBoxIcon, Cancel as CancelIcon } from 'material-ui-icons';
import { actionRemoveProduct } from '../../actions/productComparisonActions';
import { connect } from 'react-redux';

let CompareBar = props => (
    <Paper style={{ paddingBottom: '24px' }}>
        <BottomNavigation showLabels>
            {(props.productData &&
                Object.keys(props.productData).map((sku, index) => {
                    const product = props.productData[sku];
                    return (
                        <BottomNavigationAction
                            key={index}
                            label={`Item #${index + 1}`}
                            icon={
                                <React.Fragment>
                                    {(
                                        <Badge
                                            data-sku={sku}
                                            badgeContent={<CancelIcon />}
                                            onClick={(event, checked) => {
                                                props.dispatch(
                                                    actionRemoveProduct(product)
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
                                    ) || (
                                        <AddBoxIcon style={{ fontSize: 50 }} />
                                    )}
                                </React.Fragment>
                            }
                        />
                    );
                })) || (
                <React.Fragment>
                    <BottomNavigationAction
                        icon={<AddBoxIcon style={{ fontSize: 50 }} />}
                    />

                    <BottomNavigationAction
                        icon={<AddBoxIcon style={{ fontSize: 50 }} />}
                    />
                    <BottomNavigationAction
                        icon={<AddBoxIcon style={{ fontSize: 50 }} />}
                    />
                </React.Fragment>
            )}
        </BottomNavigation>
    </Paper>
);

CompareBar = connect((state, ownProps) => {
    return {
        productData: state.productComparisonReducer.productData,
        ...ownProps
    };
})(CompareBar);

export default CompareBar;
