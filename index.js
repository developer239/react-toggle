"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = _interopRequire(require("react"));

var PropTypes = _interopRequire(require("prop-types"));

var classNames = _interopRequire(require("classnames"));

var Check = _interopRequire(require("./check"));

var X = _interopRequire(require("./x"));

var Toggle = (function (_React$Component) {
  function Toggle(props) {
    _classCallCheck(this, Toggle);

    _get(Object.getPrototypeOf(Toggle.prototype), "constructor", this).call(this, props);
    var checked = false;
    if ("checked" in props) {
      checked = props.checked;
    } else if ("defaultChecked" in props) {
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

  _inherits(Toggle, _React$Component);

  _createClass(Toggle, {
    componentWillReceiveProps: {
      value: function componentWillReceiveProps(nextProps) {
        if ("checked" in nextProps) {
          this.setState({ checked: !!nextProps.checked });
        }
      }
    },
    handleClick: {
      value: function handleClick(event) {
        var checkbox = this.input;
        if (event.target !== checkbox) {
          event.preventDefault();
          checkbox.focus();
          checkbox.click();
          return;
        }

        if (!("checked" in this.props)) {
          this.setState({ checked: checkbox.checked });
        }
      }
    },
    handleFocus: {
      value: function handleFocus() {
        this.setState({ hasFocus: true });
      }
    },
    handleBlur: {
      value: function handleBlur() {
        this.setState({ hasFocus: false });
      }
    },
    render: {
      value: function render() {
        var _this = this;

        var classes = classNames("react-toggle", {
          "react-toggle--checked": this.state.checked,
          "react-toggle--focus": this.state.hasFocus,
          "react-toggle--disabled": this.props.disabled
        });

        return React.createElement(
          "div",
          { className: classes, onClick: this.handleClick },
          React.createElement(
            "div",
            { className: "react-toggle-track" },
            React.createElement(
              "div",
              { className: "react-toggle-track-check" },
              React.createElement(Check, null)
            ),
            React.createElement(
              "div",
              { className: "react-toggle-track-x" },
              React.createElement(X, null)
            )
          ),
          React.createElement("div", { className: "react-toggle-thumb" }),
          React.createElement("input", _extends({
            ref: function (ref) {
              _this.input = ref;
            },
            onFocus: this.handleFocus,
            onBlur: this.handleBlur,
            className: "react-toggle-screenreader-only",
            type: "checkbox"
          }, this.props))
        );
      }
    }
  });

  return Toggle;
})(React.Component);

Toggle.displayName = "Toggle";

Toggle.propTypes = {
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  "aria-labelledby": PropTypes.string,
  "aria-label": PropTypes.string
};

module.exports = Toggle;
