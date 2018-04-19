import React from 'react';

import {
    Badge,
    BottomNavigation,
    BottomNavigationAction,
    Paper
} from 'material-ui';
import { AddBox as AddBoxIcon, Cancel as CancelIcon } from 'material-ui-icons';
import {
    actionRemoveProduct,
    actionUncheckCheckbox
} from '../../actions/productComparisonActions';
import { connect } from 'react-redux';
import queryParent from 'queryparent';

let CompareBar = props => (
    <Paper style={{ paddingBottom: '24px' }}>
        <BottomNavigation showLabels>
            <BottomNavigationAction
                label="Item #1"
                icon={
                    <React.Fragment>
                        {(props.productData &&
                            props.productData[
                                Object.keys(props.productData)[0]
                            ] && (
                                <Badge
                                    data-sku={
                                        props.productData[
                                            Object.keys(props.productData)[0]
                                        ].sku
                                    }
                                    badgeContent={<CancelIcon />}
                                    onClick={(event, checked) => {
                                        console.log(
                                            props.productData[
                                                Object.keys(
                                                    props.productData
                                                )[0]
                                            ]
                                        );
                                        props.dispatch(
                                            actionRemoveProduct(
                                                props.productData[
                                                    Object.keys(
                                                        props.productData
                                                    )[0]
                                                ]
                                            )
                                        );
                                    }}
                                >
                                    <img
                                        alt={
                                            props.productData[
                                                Object.keys(
                                                    props.productData
                                                )[0]
                                            ].sku
                                        }
                                        src={
                                            props.productData[
                                                Object.keys(
                                                    props.productData
                                                )[0]
                                            ].image
                                        }
                                        style={{
                                            height: '50px',
                                            width: '50px'
                                        }}
                                    />
                                </Badge>
                            )) || <AddBoxIcon style={{ fontSize: 50 }} />}
                    </React.Fragment>
                }
            />
            <BottomNavigationAction
                label="Item #2"
                icon={
                    <React.Fragment>
                        {(props.productData &&
                            props.productData[1] && (
                                <Badge
                                    badgeContent={<CancelIcon />}
                                    onClick={(event, checked) => {
                                        props.dispatch(
                                            actionRemoveProduct(
                                                props.productData[1]
                                            )
                                        );
                                    }}
                                >
                                    <img
                                        alt={props.productData[1].sku}
                                        src={props.productData[1].image}
                                        style={{
                                            height: '50px',
                                            width: '50px'
                                        }}
                                    />
                                </Badge>
                            )) || <AddBoxIcon style={{ fontSize: 50 }} />}
                    </React.Fragment>
                }
            />
            <BottomNavigationAction
                label="Item #3"
                icon={
                    <React.Fragment>
                        {(props.productData &&
                            props.productData[2] && (
                                <Badge
                                    badgeContent={<CancelIcon />}
                                    onClick={(event, checked) => {
                                        props.dispatch(
                                            actionRemoveProduct(
                                                props.productData[2]
                                            )
                                        );
                                    }}
                                >
                                    <img
                                        alt={props.productData[2].sku}
                                        src={props.productData[2].image}
                                        style={{
                                            height: '50px',
                                            width: '50px'
                                        }}
                                    />
                                </Badge>
                            )) || <AddBoxIcon style={{ fontSize: 50 }} />}
                    </React.Fragment>
                }
            />
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
