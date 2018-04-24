import React from 'react';
import { connect } from 'react-redux';
import sortSkus from '../utils/sortSkus';

import {
    Badge,
    Button,
    Dialog,
    Paper,
    Slide,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from 'material-ui';

import { Cancel as CancelIcon } from '@material-ui/icons';

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

const Transition = props => <Slide direction="up" timeout={10000} {...props} />;

class ComparisonTable extends React.Component {
    state = {
        open: false
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    render() {
        const props = this.props;
        const sectionZero = Object.keys(tableModels[props.type])[0];

        const attributes =
            tableModels[props.type][Object.keys(tableModels[props.type])[0]];

        return (
            <React.Fragment>
                <Button
                    onClick={this.handleClickOpen}
                    variant="raised"
                    color="primary"
                    style={{ height: '20%', marginTop: '1.5rem' }}
                >
                    COMPARE
                </Button>

                <Dialog
                    fullScreen
                    open={this.state.open}
                    onClose={this.handleClose}
                    transition={Transition}
                >
                    <Paper style={{ marginTop: '10px' }}>
                        <Badge
                            badgeContent={<CancelIcon />}
                            onClick={this.handleClose}
                            style={{
                                cursor: 'pointer',
                                position: 'absolute',
                                right: '15px',
                                top: '15px',
                                width: '100%'
                            }}
                        >
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Products</TableCell>
                                        {props.skus &&
                                            props.skus.map((sku, index) => {
                                                const product =
                                                    props.productData[sku];
                                                return (
                                                    <TableCell key={index}>
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
                                    {attributes.map((attribute, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{attribute}</TableCell>
                                            {props.skus &&
                                                props.skus.map((sku, index) => {
                                                    const product =
                                                        props.productData[sku];
                                                    return (
                                                        <TableCell key={index}>
                                                            {product[attribute]}
                                                        </TableCell>
                                                    );
                                                })}
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Badge>
                    </Paper>
                </Dialog>
            </React.Fragment>
        );
    }
}

ComparisonTable = connect((state, ownProps) => ({
    productData: state.productComparisonReducer.productData,
    skus: sortSkus(state.productComparisonReducer.productData),
    ...ownProps
}))(ComparisonTable);

export default ComparisonTable;
