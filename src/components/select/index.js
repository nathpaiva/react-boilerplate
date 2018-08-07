import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ChevronDown, ChevronUp } from '../icons/SvgIcons';
import './select.scss';

class Select extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: [],
      focusedValue: -1,
      isFocused: false,
      isOpen: false,
      typed: ''
    };

    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);

    this.onClick = this.onClick.bind(this);
    this.onHoverOption = this.onHoverOption.bind(this);
    this.onClickOption = this.onClickOption.bind(this);

    this.renderOption = this.renderOption.bind(this);
  }

  onFocus() {
    this.setState({
      isFocused: true
    });
  }

  onBlur() {
    const { options } = this.props;

    this.setState(prevState => {
      const { values } = prevState;
      const value = values[0];
      let focusedValue = -1;

      if (value) {
        focusedValue = options.findIndex(option => option.value === value);
      }

      return {
        focusedValue,
        isFocused: false,
        isOpen: false
      };
    });
  }

  onClick() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  onHoverOption(e) {
    const { options } = this.props;

    const { value } = e.currentTarget.dataset;
    const index = options.findIndex(option => option.value === value);

    this.setState({
      focusedValue: index
    });
  }

  onClickOption(e) {
    const { value } = e.currentTarget.dataset;

    this.setState({
      values: [ value ],
      isOpen: false
    });
  }

  stopPropagation(e) {
    e.stopPropagation();
  }

  renderValues() {
    const { placeholder } = this.props;
    const { values } = this.state;

    if (values.length === 0) {
      return (
        <div className="placeholder">
          { placeholder }
        </div>
      );
    }

    return (
      <div className="value">
        { values[0] }
      </div>
    );
  }

  renderOptions() {
    const { options } = this.props;
    const { isOpen } = this.state;

    if (!isOpen) return;

    return (
      <div className="options">
        { options.map(this.renderOption) }
      </div>
    );
  }

  renderOption(option) {
    const { values } = this.state;
    const { value } = option;

    const selected = values.includes(value);

    let className = 'option';
    if (selected) className += ' selected';

    return (
      <div
        key={ value }
        data-value={ value }
        className={ className }
        onClick={ this.onClickOption }
      >
        { value }
      </div>
    );
  }

  render() {
    const { label, disabled } = this.props;
    const { isOpen } = this.state;

    if(disabled) {
      return (
        <div className="select disabled">
          <label className="label">{ label }</label>
          <div className="selection" onClick={ this.onClick }>
            { this.renderValues() }
            <span className="arrow">
              <ChevronDown />
            </span>
          </div>
        </div>
      );
    }

    return (
      <div
        className="select"
        tabIndex="0"
        onFocus={ this.onFocus }
        onBlur={ this.onBlur }
      >
        <label className="label">{ label }</label>
        <div className="selection" onClick={ this.onClick }>
          { this.renderValues() }
          <span className="arrow">
            { isOpen ? <ChevronUp /> : <ChevronDown /> }
          </span>
        </div>
        { this.renderOptions() }
      </div>
    );
  }
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  disabled: PropTypes.bool.isRequired
};

export default Select;
