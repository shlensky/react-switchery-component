(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('prop-types')) :
	typeof define === 'function' && define.amd ? define(['react', 'prop-types'], factory) :
	(global.reactSwitcheryComponent = factory(global.React,global.PropTypes));
}(this, (function (React,PropTypes) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;
PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};











var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

/**
 * React switch input component.
 */

var Switchery = function (_React$Component) {
    inherits(Switchery, _React$Component);

    function Switchery(props) {
        classCallCheck(this, Switchery);

        var _this = possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.state = {
            mounted: false
        };
        return _this;
    }

    Switchery.prototype.onClick = function onClick() {
        if (this.props.disabled) return;

        if (this.props.onChange) {
            this.props.onChange({
                target: {
                    type: 'checkbox',
                    name: this.props.name,
                    checked: !this.props.checked
                }
            });
        }
    };

    Switchery.prototype.getSwitcherTransition = function getSwitcherTransition() {
        if (this.props.checked) {
            return ['border ' + this.props.speed, 'box-shadow ' + this.props.speed, 'background-color ' + this.props.speed.replace(/[a-z]/, '') * 3 + 's'].join(', ');
        } else {
            return 'border ' + this.props.speed + ', box-shadow ' + this.props.speed;
        }
    };

    Switchery.prototype.getSwitcherStyles = function getSwitcherStyles() {
        if (!this.state.mounted) return { display: 'none' };

        var switcherHeight = this.switcher ? this.switcher.offsetHeight / 2 : 0;
        var boxShadow = this.props.checked ? switcherHeight + 'px ' + this.props.color : '0 ' + this.props.secondaryColor;

        var secondaryColor = this.props.secondaryColor !== Switchery.defaultProps.secondaryColor ? this.props.secondaryColor : '#fff';

        return {
            backgroundColor: this.props.checked ? this.props.color : secondaryColor,
            borderColor: this.props.checked ? this.props.color : this.props.secondaryColor,
            boxShadow: 'inset 0 0 0 ' + boxShadow,
            transition: this.getSwitcherTransition(),
            opacity: this.props.disabled ? this.props.disabledOpacity : 1
        };
    };

    Switchery.prototype.getJackOffset = function getJackOffset() {
        // When DOM nodes is not mounted we don't know the width of switcher,
        // and can't calculate position of jack if it is enabled.
        if (!this.state.mounted) return 0;

        if (this.props.checked === true) {
            if (window.getComputedStyle) return parseInt(window.getComputedStyle(this.switcher).width) - parseInt(window.getComputedStyle(this.jack).width);else return parseInt(this.switcher.currentStyle['width']) - parseInt(this.jack.currentStyle['width']);
        } else {
            return 0;
        }
    };

    Switchery.prototype.getJackTransition = function getJackTransition() {
        return ['background-color ' + this.props.speed, 'left ' + this.props.speed.replace(/[a-z]/, '') / 2 + 's'].join(', ');
    };

    Switchery.prototype.getJackStyles = function getJackStyles() {
        if (!this.state.mounted) return {};

        var jackSecondaryColor = this.props.jackSecondaryColor !== Switchery.defaultProps.jackColor ? this.props.jackSecondaryColor : this.props.jackColor;

        return {
            backgroundColor: this.props.checked ? this.props.jackColor : jackSecondaryColor,
            left: this.getJackOffset(),
            transition: this.getJackTransition()
        };
    };

    Switchery.prototype.componentDidMount = function componentDidMount() {
        this.setState({ mounted: true });
    };

    // Add hidden checkbox to allow referencing from <label>


    Switchery.prototype.renderCheckbox = function renderCheckbox() {
        var _this2 = this;

        return React.createElement('input', {
            type: 'checkbox',
            onChange: function onChange() {
                return _this2.onClick();
            },
            id: this.props.id,
            checked: this.props.checked,
            disabled: this.props.disabled,
            style: { display: 'none' }
        });
    };

    Switchery.prototype.render = function render() {
        var _this3 = this;

        var classNames = [this.props.className];
        if (this.props.size) classNames.push(this.props.className + '-' + this.props.size);

        return React.createElement(
            'span',
            {
                className: classNames.join(' '),
                style: this.getSwitcherStyles(),
                onClick: function onClick() {
                    return _this3.onClick();
                },
                ref: function ref(node) {
                    return _this3.switcher = node;
                } },
            this.props.id ? this.renderCheckbox() : '',
            React.createElement('small', {
                style: this.getJackStyles(),
                ref: function ref(node) {
                    return _this3.jack = node;
                }
            })
        );
    };

    return Switchery;
}(React.Component);

Switchery.propTypes = {
    color: PropTypes.string,
    secondaryColor: PropTypes.string,
    jackColor: PropTypes.string,
    jackSecondaryColor: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    disabledOpacity: PropTypes.number,
    speed: PropTypes.string,
    size: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    name: PropTypes.string,
    id: PropTypes.string
};
Switchery.defaultProps = {
    color: '#64bd63',
    secondaryColor: '#dfdfdf',
    jackColor: '#fff',
    jackSecondaryColor: null,
    className: 'switchery',
    disabled: false,
    disabledOpacity: 0.5,
    speed: '0.4s',
    size: 'default'
};

return Switchery;

})));
