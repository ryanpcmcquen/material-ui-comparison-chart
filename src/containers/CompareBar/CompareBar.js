import React from 'react';

import { BottomNavigation, BottomNavigationAction, Paper } from 'material-ui';
import { Cancel as CancelIcon } from 'material-ui-icons';
import { connect } from 'react-redux';

let CompareBar = props => (
    <Paper style={{ paddingBottom: '24px' }}>
        <BottomNavigation showLabels>
            <BottomNavigationAction
                label="Item #1"
                icon={
                    <React.Fragment>
                        {(props.productData &&
                            props.productData[0] && (
                                <img
                                    alt={props.productData[0].sku}
                                    src={props.productData[0].image}
                                    style={{
                                        width: '50px'
                                    }}
                                />
                            )) || <CancelIcon style={{ fontSize: 50 }} />}
                    </React.Fragment>
                }
            />
            <BottomNavigationAction
                label="Item #2"
                icon={
                    <React.Fragment>
                        {(props.productData &&
                            props.productData[1] && (
                                <img
                                    alt={props.productData[1].sku}
                                    src={props.productData[1].image}
                                    style={{
                                        width: '50px'
                                    }}
                                />
                            )) || <CancelIcon style={{ fontSize: 50 }} />}
                    </React.Fragment>
                }
            />
            <BottomNavigationAction
                label="Item #3"
                icon={
                    <React.Fragment>
                        {(props.productData &&
                            props.productData[2] && (
                                <img
                                    alt={props.productData[2].sku}
                                    src={props.productData[2].image}
                                    style={{
                                        width: '50px'
                                    }}
                                />
                            )) || <CancelIcon style={{ fontSize: 50 }} />}
                    </React.Fragment>
                }
            />
        </BottomNavigation>
    </Paper>
);

CompareBar = connect((state, ownProps) => {
    return { productData: state.checkboxReducer.productData, ...ownProps };
})(CompareBar);

export default CompareBar;
