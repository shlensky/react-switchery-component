Sweetcherry
===========

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
          <label>Basic example:</label>
          <Switch checked={this.state.isChecked} onChange={(e) => this.handleChange(e)} />
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
```

[Try it on CodePen.](https://codepen.io/shlensky/pen/mMMqgQ?editors=0010)
