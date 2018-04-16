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

// TODO:
// Use the data model rather than hard coding attributes.
let ComparisonTable = props => (
    <Paper>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Products</TableCell>
                    {props.productData &&
                        props.productData[0] && (
                            <TableCell>
                                <img
                                    alt={props.productData[0].name}
                                    style={imageStyles}
                                    src={props.productData[0].image}
                                />
                                {props.productData[0].name}
                            </TableCell>
                        )}
                    {props.productData &&
                        props.productData[1] && (
                            <TableCell>
                                <img
                                    alt={props.productData[1].name}
                                    style={imageStyles}
                                    src={props.productData[1].image}
                                />
                                {props.productData[1].name}
                            </TableCell>
                        )}
                    {props.productData &&
                        props.productData[2] && (
                            <TableCell>
                                <img
                                    alt={props.productData[2].name}
                                    style={imageStyles}
                                    src={props.productData[2].image}
                                />
                                {props.productData[2].name}
                            </TableCell>
                        )}
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>Dimensions</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Blade length</TableCell>
                    {props.productData &&
                        props.productData[0] && (
                            <TableCell>
                                {props.productData[0].bladeLength}
                            </TableCell>
                        )}
                    {props.productData &&
                        props.productData[1] && (
                            <TableCell>
                                {props.productData[1].bladeLength}
                            </TableCell>
                        )}
                    {props.productData &&
                        props.productData[2] && (
                            <TableCell>
                                {props.productData[2].bladeLength}
                            </TableCell>
                        )}
                </TableRow>
                <TableRow>
                    <TableCell>Total length</TableCell>
                    {props.productData &&
                        props.productData[0] && (
                            <TableCell>
                                {props.productData[0].totalLength}
                            </TableCell>
                        )}
                    {props.productData &&
                        props.productData[1] && (
                            <TableCell>
                                {props.productData[1].totalLength}
                            </TableCell>
                        )}
                    {props.productData &&
                        props.productData[2] && (
                            <TableCell>
                                {props.productData[2].totalLength}
                            </TableCell>
                        )}
                </TableRow>
                <TableRow>
                    <TableCell>Full Tang value</TableCell>
                    {props.productData &&
                        props.productData[0] && (
                            <TableCell>
                                {props.productData[0].fullTangValue}
                            </TableCell>
                        )}
                    {props.productData &&
                        props.productData[1] && (
                            <TableCell>
                                {props.productData[1].fullTangValue}
                            </TableCell>
                        )}
                    {props.productData &&
                        props.productData[2] && (
                            <TableCell>
                                {props.productData[2].fullTangValue}
                            </TableCell>
                        )}
                </TableRow>
            </TableBody>
        </Table>
    </Paper>
);

ComparisonTable = connect((state, ownProps) => {
    return { productData: state.checkboxReducer.productData, ...ownProps };
})(ComparisonTable);

export default ComparisonTable;
