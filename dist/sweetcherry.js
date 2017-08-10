(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('prop-types')) :
	typeof define === 'function' && define.amd ? define(['react', 'prop-types'], factory) :
	(global.Sweetcherry = factory(global.React,global.PropTypes));
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

var Sweetcherry = function (_React$Component) {
    inherits(Sweetcherry, _React$Component);

    function Sweetcherry() {
        classCallCheck(this, Sweetcherry);
        return possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    Sweetcherry.prototype.onClick = function onClick() {
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

    Sweetcherry.prototype.getSwitcherTransition = function getSwitcherTransition() {
        if (this.props.checked) {
            return ['border ' + this.props.speed, 'box-shadow ' + this.props.speed, 'background-color ' + this.props.speed.replace(/[a-z]/, '') * 3 + 's'].join(', ');
        } else {
            return 'border ' + this.props.speed + ', box-shadow ' + this.props.speed;
        }
    };

    Sweetcherry.prototype.getSwitcherStyles = function getSwitcherStyles() {
        if (!this.state.mounted) return { display: 'none' };

        var switcherHeight = this.switcher ? this.switcher.offsetHeight / 2 : 0;
        var boxShadow = this.props.checked ? switcherHeight + 'px ' + this.props.color : '0 ' + this.props.secondaryColor;

        var secondaryColor = this.props.secondaryColor !== Sweetcherry.defaultProps.secondaryColor ? this.props.secondaryColor : '#fff';

        return {
            backgroundColor: this.props.checked ? this.props.color : secondaryColor,
            borderColor: this.props.checked ? this.props.color : this.props.secondaryColor,
            boxShadow: 'inset 0 0 0 ' + boxShadow,
            transition: this.getSwitcherTransition(),
            opacity: this.props.disabled ? this.props.disabledOpacity : 1
        };
    };

    Sweetcherry.prototype.getJackOffset = function getJackOffset() {
        // When DOM nodes is not mounted we don't know the width of switcher,
        // and can't calculate position of jack if it is enabled.
        if (!this.state.mounted) return 0;

        if (this.props.checked === true) {
            if (window.getComputedStyle) return parseInt(window.getComputedStyle(this.switcher).width) - parseInt(window.getComputedStyle(this.jack).width);else return parseInt(this.switcher.currentStyle['width']) - parseInt(this.jack.currentStyle['width']);
        } else {
            return 0;
        }
    };

    Sweetcherry.prototype.getJackTransition = function getJackTransition() {
        return ['background-color ' + this.props.speed, 'left ' + this.props.speed.replace(/[a-z]/, '') / 2 + 's'].join(', ');
    };

    Sweetcherry.prototype.getJackStyles = function getJackStyles() {
        if (!this.state.mounted) return {};

        var jackSecondaryColor = this.props.jackSecondaryColor !== Sweetcherry.defaultProps.jackColor ? this.props.jackSecondaryColor : this.props.jackColor;

        return {
            backgroundColor: this.props.checked ? this.props.jackColor : jackSecondaryColor,
            left: this.getJackOffset(),
            transition: this.getJackTransition()
        };
    };

    Sweetcherry.prototype.componentDidMount = function componentDidMount() {
        this.setState({ mounted: true });
    };

    Sweetcherry.prototype.render = function render() {
        var _this2 = this;

        var classNames = [this.props.className];
        if (this.props.size) classNames.push(this.props.className + '-' + this.props.size);

        return React.createElement(
            'span',
            {
                className: classNames.join(' '),
                style: this.getSwitcherStyles(),
                onClick: function onClick() {
                    return _this2.onClick();
                },
                ref: function ref(node) {
                    return _this2.switcher = node;
                }
            },
            React.createElement('small', { style: this.getJackStyles(), ref: function ref(node) {
                    return _this2.jack = node;
                } })
        );
    };

    return Sweetcherry;
}(React.Component);

Sweetcherry.propTypes = {
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
    name: PropTypes.string
};
Sweetcherry.defaultProps = {
    color: '#64bd63',
    secondaryColor: '#dfdfdf',
    jackColor: '#fff',
    jackSecondaryColor: null,
    className: 'sweetcherry',
    disabled: false,
    disabledOpacity: 0.5,
    speed: '0.4s',
    size: 'default'
};

return Sweetcherry;

})));
