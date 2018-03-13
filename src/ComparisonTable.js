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
        bladeLength: `6", 8", 9.5"`,
        totalLength: `12", 13", 15"`,
        fullTangValue: "N"
    },
    {
        bladeLength: `8", 10"`,
        totalLength: `14", 16"`,
        fullTangValue: "Y"
    },
    {
        bladeLength: `6", 8", 9.5"`,
        totalLength: `12", 13", 15"`,
        fullTangValue: "Y"
    }
];

const restructuredData = Object.keys(data[0]).map(property =>
    data.map(node => node[property])
);

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
                    <TableCell>{restructuredData[0]}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Total length</TableCell>
                    {restructuredData[1]}
                </TableRow>
                <TableRow>
                    <TableCell>Full Tang value</TableCell>
                    {restructuredData[2]}
                </TableRow>
            </TableBody>
        </Table>
    </Paper>
);

export default ComparisonTable;
