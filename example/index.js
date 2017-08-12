import React from 'react';
import ReactDOM from 'react-dom';
import Switch from '../src';

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isChecked: false};
    }

    handleChange(e) {
        this.setState({isChecked: e.target.checked});
    }

    render() {
        return (
            <div>
                <p>
                    <label htmlFor="basic">Basic example:</label>
                    <Switch id="basic"
                            checked={this.state.isChecked}
                            onChange={(e) => this.handleChange(e)} />
                </p>

                <p>
                    <label>Different color:</label>
                    <Switch color="#4c3fa2" checked={this.state.isChecked} onChange={(e) => this.handleChange(e)} />
                </p>

                <p>
                    <label>Different size:</label>
                    <Switch size="small" checked={this.state.isChecked} onChange={(e) => this.handleChange(e)} />
                </p>

                <p>
                    <label>Different speed:</label>
                    <Switch speed="2s" checked={this.state.isChecked} onChange={(e) => this.handleChange(e)} />
                </p>
            </div>
        );
    }
}

ReactDOM.render(
    <MyComponent />,
    document.getElementById('root')
);
