import React from 'react';
import { connect } from 'react-redux';

import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from 'material-ui';

const imageStyles = {
    width: '90px',
    display: 'block'
};

const tableModels = {
    cutlery: {
        Dimensions: ['Blade length', 'Total length', 'Full Tang value']
    },
    // This is just an example of another type:
    appliance: {
        Features: ['Blends', 'Blade type']
    }
};

// TODO:
// Use the data model rather than hard coding attributes.
let ComparisonTable = props => {
    const sectionZero = Object.keys(tableModels[props.type])[0];

    const attributeZero =
        tableModels[props.type][Object.keys(tableModels[props.type])[0]][0];
    const attributeOne =
        tableModels[props.type][Object.keys(tableModels[props.type])[0]][1];
    const attributeTwo =
        tableModels[props.type][Object.keys(tableModels[props.type])[0]][2];

    return (
        <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Products</TableCell>
                        {props.productData &&
                            Object.keys(props.productData).map((sku, index) => {
                                const product = props.productData[sku];
                                return (
                                    <TableCell>
                                        <img
                                            alt={product.name}
                                            style={imageStyles}
                                            src={product.image}
                                        />
                                        {product.name}
                                    </TableCell>
                                );
                            })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>{sectionZero}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>{attributeZero}</TableCell>
                        {props.productData &&
                            props.productData[0] && (
                                <TableCell>
                                    {props.productData[0][attributeZero]}
                                </TableCell>
                            )}
                        {props.productData &&
                            props.productData[1] && (
                                <TableCell>
                                    {props.productData[1][attributeZero]}
                                </TableCell>
                            )}
                        {props.productData &&
                            props.productData[2] && (
                                <TableCell>
                                    {props.productData[2][attributeZero]}
                                </TableCell>
                            )}
                    </TableRow>
                    <TableRow>
                        <TableCell>{attributeOne}</TableCell>
                        {props.productData &&
                            props.productData[0] && (
                                <TableCell>
                                    {props.productData[0][attributeOne]}
                                </TableCell>
                            )}
                        {props.productData &&
                            props.productData[1] && (
                                <TableCell>
                                    {props.productData[1][attributeOne]}
                                </TableCell>
                            )}
                        {props.productData &&
                            props.productData[2] && (
                                <TableCell>
                                    {props.productData[2][attributeOne]}
                                </TableCell>
                            )}
                    </TableRow>
                    <TableRow>
                        <TableCell>{attributeTwo}</TableCell>
                        {props.productData &&
                            props.productData[0] && (
                                <TableCell>
                                    {props.productData[0][attributeTwo]}
                                </TableCell>
                            )}
                        {props.productData &&
                            props.productData[1] && (
                                <TableCell>
                                    {props.productData[1][attributeTwo]}
                                </TableCell>
                            )}
                        {props.productData &&
                            props.productData[2] && (
                                <TableCell>
                                    {props.productData[2][attributeTwo]}
                                </TableCell>
                            )}
                    </TableRow>
                </TableBody>
            </Table>
        </Paper>
    );
};

ComparisonTable = connect((state, ownProps) => {
    return {
        productData: state.productComparisonReducer.productData,
        ...ownProps
    };
})(ComparisonTable);

export default ComparisonTable;
