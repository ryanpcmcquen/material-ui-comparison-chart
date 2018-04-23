import React from 'react';
import { connect } from 'react-redux';

import { Button } from 'material-ui';
import { actionToggleCheckbox } from '../actions/productComparisonActions';

const CompareButton = props => (
    <Button variant="raised">{props.children}</Button>
);
