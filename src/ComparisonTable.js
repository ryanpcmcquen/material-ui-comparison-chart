import React from "react";
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from "material-ui";
// import { Delete } from "material-ui-icons";

const data = [
    {
        sku: 123,
        bladeLength: `6", 8", 9.5"`,
        totalLength: `12", 13", 15"`,
        fullTangValue: "N"
    },
    {
        sku: 234,
        bladeLength: `8", 10"`,
        totalLength: `14", 16"`,
        fullTangValue: "Y"
    },
    {
        sku: 345,
        bladeLength: `6", 8", 9.5"`,
        totalLength: `12", 13", 15"`,
        fullTangValue: "Y"
    }
];

const ComparisonTable = props => (
    <Paper>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Dimensions</TableCell>
                    <TableCell>{data[0].sku}</TableCell>
                    <TableCell>{data[1].sku}</TableCell>
                    <TableCell>{data[2].sku}</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>Blade length</TableCell>
                    <TableCell>{data[0].bladeLength}</TableCell>
                    <TableCell>{data[1].bladeLength}</TableCell>
                    <TableCell>{data[2].bladeLength}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Total length</TableCell>
                    <TableCell>{data[0].totalLength}</TableCell>
                    <TableCell>{data[1].totalLength}</TableCell>
                    <TableCell>{data[2].totalLength}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Full Tang value</TableCell>
                    <TableCell>{data[0].fullTangValue}</TableCell>
                    <TableCell>{data[1].fullTangValue}</TableCell>
                    <TableCell>{data[2].fullTangValue}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </Paper>
);

export default ComparisonTable;
