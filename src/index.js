import React from 'react';
import { render } from 'react-dom';
import CompareCheckbox from './CompareCheckbox';
import CompareBar from './CompareBar';
import ComparisonTable from './ComparisonTable';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

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
            <CompareCheckbox />
            <CompareBar />
            <br />
            <br />
            <ComparisonTable />
        </div>
    </Provider>
);

render(<App />, document.querySelector('.app'));
