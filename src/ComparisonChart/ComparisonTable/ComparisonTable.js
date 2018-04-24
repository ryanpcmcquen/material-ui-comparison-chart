import React from 'react';
import { connect } from 'react-redux';
import sortSkus from '../utils/sortSkus';

import {
    AppBar,
    Badge,
    Button,
    Dialog,
    IconButton,
    Paper,
    Slide,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Toolbar
} from 'material-ui';

import {
    Cancel as CancelIcon,
    Close as CloseIcon,
    PlayForWork as PlayForWorkIcon
} from '@material-ui/icons';

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

const Transition = props => <Slide direction="up" {...props} />;

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
                    // maxWidth="xl"
                    open={this.state.open}
                    onClose={this.handleClose}
                    transition={Transition}
                    transitionDuration={500}
                >
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <Button onClick={this.handleClose}>
                                        <PlayForWorkIcon />Hide chart
                                    </Button>
                                </TableCell>
                                {props.skus &&
                                    props.skus.map((sku, index) => {
                                        const product = props.productData[sku];
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
