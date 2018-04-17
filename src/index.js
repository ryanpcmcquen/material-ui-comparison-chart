import React from 'react';
import { render } from 'react-dom';
import CompareCheckbox from './containers/CompareCheckbox/CompareCheckbox';
import CompareBar from './containers/CompareBar/CompareBar';
import ComparisonTable from './containers/ComparisonTable/ComparisonTable';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers/sltReducers';

const sltStore = createStore(
    reducers,
    // Enable DevTools:
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center'
};

const App = () => (
    <Provider store={sltStore}>
        <div style={styles}>
            <CompareCheckbox sku="2403251" />
            <CompareCheckbox sku="1251230" />
            <CompareCheckbox sku="227496" />

            <CompareBar />
            <br />
            <br />
            <ComparisonTable />
        </div>
    </Provider>
);

render(<App />, document.querySelector('.app'));
