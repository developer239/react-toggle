import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Check from './check';
import X from './x';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    var checked = false;
    if ('checked' in props) {
      checked = props.checked;
    } else if ('defaultChecked' in props) {
      checked = props.defaultChecked;
    }

    this.state = {
      checked: !!checked,
      hasFocus: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if ('checked' in nextProps) {
      this.setState({ checked: !!nextProps.checked });
    }
  }

  handleClick(event) {
    var checkbox = this.input;
    if (event.target !== checkbox) {
      event.preventDefault();
      checkbox.focus();
      checkbox.click();
      return;
    }

    if (!('checked' in this.props)) {
      this.setState({ checked: checkbox.checked });
    }
  };

  handleFocus() {
    this.setState({ hasFocus: true });
  };

  handleBlur() {
    this.setState({ hasFocus: false });
  };

  render() {
    var classes = classNames('react-toggle', {
      'react-toggle--checked': this.state.checked,
      'react-toggle--focus': this.state.hasFocus,
      'react-toggle--disabled': this.props.disabled
    });

    return (
      <div className={classes} onClick={this.handleClick}>
        <div className="react-toggle-track">
          <div className="react-toggle-track-check">
            <Check/>
          </div>
          <div className="react-toggle-track-x">
            <X/>
          </div>
        </div>
        <div className="react-toggle-thumb"></div>

        <input
          ref={ref => {
            this.input = ref;
          }}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          className="react-toggle-screenreader-only"
          type="checkbox"
          {...this.props} />
      </div>
    );
  }
}

Toggle.displayName = 'Toggle';

Toggle.propTypes = {
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  'aria-labelledby': PropTypes.string,
  'aria-label': PropTypes.string
};

export default Toggle;
