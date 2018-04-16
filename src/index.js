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
            <CompareCheckbox {...data[0]} />
            <CompareCheckbox {...data[1]} />
            <CompareCheckbox {...data[2]} />

            <CompareBar />
            <br />
            <br />
            <ComparisonTable />
        </div>
    </Provider>
);

render(<App />, document.querySelector('.app'));
