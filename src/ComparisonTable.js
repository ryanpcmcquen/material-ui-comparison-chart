import React from 'react';

import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from 'material-ui';

import data from './data';

const imageStyles = {
    width: '90px',
    display: 'block'
};

const ComparisonTable = props => (
    <Paper>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Products</TableCell>
                    {data[0] && (
                        <TableCell>
                            <img
                                alt={data[0].name}
                                style={imageStyles}
                                src={data[0].image}
                            />
                            {data[0].name}
                        </TableCell>
                    )}
                    {data[1] && (
                        <TableCell>
                            <img
                                alt={data[1].name}
                                style={imageStyles}
                                src={data[1].image}
                            />
                            {data[1].name}
                        </TableCell>
                    )}
                    {data[2] && (
                        <TableCell>
                            <img
                                alt={data[2].name}
                                style={imageStyles}
                                src={data[2].image}
                            />
                            {data[2].name}
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
                    {data[0] && <TableCell>{data[0].bladeLength}</TableCell>}
                    {data[1] && <TableCell>{data[1].bladeLength}</TableCell>}
                    {data[2] && <TableCell>{data[2].bladeLength}</TableCell>}
                </TableRow>
                <TableRow>
                    <TableCell>Total length</TableCell>
                    {data[0] && <TableCell>{data[0].totalLength}</TableCell>}
                    {data[1] && <TableCell>{data[1].totalLength}</TableCell>}
                    {data[2] && <TableCell>{data[2].totalLength}</TableCell>}
                </TableRow>
                <TableRow>
                    <TableCell>Full Tang value</TableCell>
                    {data[0] && <TableCell>{data[0].fullTangValue}</TableCell>}
                    {data[1] && <TableCell>{data[1].fullTangValue}</TableCell>}
                    {data[2] && <TableCell>{data[2].fullTangValue}</TableCell>}
                </TableRow>
            </TableBody>
        </Table>
    </Paper>
);

export default ComparisonTable;
