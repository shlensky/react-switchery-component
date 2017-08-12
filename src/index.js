import React from 'react';
import PropTypes from 'prop-types';

/**
 * React switch input component.
 */
export default class Sweetcherry extends React.Component {
    static propTypes = {
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

    static defaultProps = {
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

    constructor(props) {
        super(props);

        this.state = {
            mounted: false
        };
    }

    onClick() {
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
    }

    getSwitcherTransition() {
        if (this.props.checked) {
            return [
                `border ${this.props.speed}`,
                `box-shadow ${this.props.speed}`,
                `background-color ${this.props.speed.replace(/[a-z]/, '') * 3}s`
            ].join(', ');
        } else {
            return `border ${this.props.speed}, box-shadow ${this.props.speed}`;
        }
    }

    getSwitcherStyles() {
        if (!this.state.mounted) return { display: 'none' };

        let switcherHeight = this.switcher ? this.switcher.offsetHeight / 2 : 0;
        let boxShadow = this.props.checked
            ? `${switcherHeight}px ${this.props.color}`
            : `0 ${this.props.secondaryColor}`;

        let secondaryColor =
            this.props.secondaryColor !==
            Sweetcherry.defaultProps.secondaryColor
                ? this.props.secondaryColor
                : '#fff';

        return {
            backgroundColor: this.props.checked
                ? this.props.color
                : secondaryColor,
            borderColor: this.props.checked
                ? this.props.color
                : this.props.secondaryColor,
            boxShadow: `inset 0 0 0 ${boxShadow}`,
            transition: this.getSwitcherTransition(),
            opacity: this.props.disabled ? this.props.disabledOpacity : 1
        };
    }

    getJackOffset() {
        // When DOM nodes is not mounted we don't know the width of switcher,
        // and can't calculate position of jack if it is enabled.
        if (!this.state.mounted) return 0;

        if (this.props.checked === true) {
            if (window.getComputedStyle)
                return (
                    parseInt(window.getComputedStyle(this.switcher).width) -
                    parseInt(window.getComputedStyle(this.jack).width)
                );
            else
                return (
                    parseInt(this.switcher.currentStyle['width']) -
                    parseInt(this.jack.currentStyle['width'])
                );
        } else {
            return 0;
        }
    }

    getJackTransition() {
        return [
            `background-color ${this.props.speed}`,
            `left ${this.props.speed.replace(/[a-z]/, '') / 2}s`
        ].join(', ');
    }

    getJackStyles() {
        if (!this.state.mounted) return {};

        let jackSecondaryColor =
            this.props.jackSecondaryColor !== Sweetcherry.defaultProps.jackColor
                ? this.props.jackSecondaryColor
                : this.props.jackColor;

        return {
            backgroundColor: this.props.checked
                ? this.props.jackColor
                : jackSecondaryColor,
            left: this.getJackOffset(),
            transition: this.getJackTransition()
        };
    }

    componentDidMount() {
        this.setState({ mounted: true });
    }

    render() {
        let classNames = [this.props.className];
        if (this.props.size)
            classNames.push(`${this.props.className}-${this.props.size}`);

        return (
            <span
                className={classNames.join(' ')}
                style={this.getSwitcherStyles()}
                onClick={() => this.onClick()}
                ref={node => (this.switcher = node)}>
                <small
                    style={this.getJackStyles()}
                    ref={node => (this.jack = node)}
                />
            </span>
        );
    }
}
