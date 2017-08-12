Sweetcherry
===========

React switch component.
Clone of [Switchery](https://github.com/abpetkov/switchery) rewritten for React.

## Install

`npm install sweetcherry`

## Usage

```javascript
import React from 'react';
import Switch from 'sweetcherry';
import 'sweetcherry/sweetcherry.css';

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
                    <label htmlFor="basic-example">Basic example:</label>
                    <Switch id="basic-example"
                            checked={this.state.isChecked}
                            onChange={(e) => this.handleChange(e)} />
                </p>

                <p>
                    <label htmlFor="color-example">Different color:</label>
                    <Switch id="color-example"
                            color="#4c3fa2"
                            checked={this.state.isChecked}
                            onChange={(e) => this.handleChange(e)} />
                </p>

                <p>
                    <label htmlFor="size-example">Different size:</label>
                    <Switch id="size-example"
                            size="small"
                            checked={this.state.isChecked}
                            onChange={(e) => this.handleChange(e)} />
                </p>

                <p>
                    <label htmlFor="speed-example">Different speed:</label>
                    <Switch id="speed-example"
                            speed="2s"
                            checked={this.state.isChecked}
                            onChange={(e) => this.handleChange(e)} />
                </p>

                <p>
                    <label htmlFor="disabled-example">Disabled:</label>
                    <Switch id="disabled-example"
                            disabled={true}
                            checked={this.state.isChecked}
                            onChange={(e) => this.handleChange(e)} />
                </p>
            </div>
        );
    }
}
```

<a href="https://codepen.io/shlensky/pen/mMMqgQ?editors=0010" target="_blank">Try it on CodePen.</a>
