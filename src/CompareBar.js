import React from 'react';

import {
    BottomNavigation,
    BottomNavigationAction,
    Card,
    Icon,
    Paper
} from 'material-ui';

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
                                        borderRadius: '50%',
                                        width: '50px'
                                    }}
                                />
                            )) || (
                            <Icon style={{ fontSize: 50 }}>cancel_icon</Icon>
                        )}
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
                                        borderRadius: '50%',
                                        width: '50px'
                                    }}
                                />
                            )) || (
                            <Icon style={{ fontSize: 50 }}>cancel_icon</Icon>
                        )}
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
                                        borderRadius: '50%',
                                        width: '50px'
                                    }}
                                />
                            )) || (
                            <Icon style={{ fontSize: 50 }}>cancel_icon</Icon>
                        )}
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
