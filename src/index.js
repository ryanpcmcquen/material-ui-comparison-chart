import React from "react";
import { render } from "react-dom";
import ComparisonTable from "./ComparisonTable";

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};

const App = () => (
    <div style={styles}>
        <ComparisonTable />
    </div>
);

render(<App />, document.getElementById("root"));
