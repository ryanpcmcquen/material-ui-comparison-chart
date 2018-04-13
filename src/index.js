import React from 'react';
import { render } from 'react-dom';
import CompareCheckbox from './CompareCheckbox';
import CompareBar from './CompareBar';
import ComparisonTable from './ComparisonTable';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import data from './data';

import reducers from './reducers';

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
            <CompareCheckbox sku={data[0].sku} image={data[0].image} />
            <CompareCheckbox sku={data[1].sku} image={data[1].image} />
            <CompareCheckbox sku={data[2].sku} image={data[2].image} />
            <CompareBar />
            <br />
            <br />
            <ComparisonTable />
        </div>
    </Provider>
);

render(<App />, document.querySelector('.app'));
