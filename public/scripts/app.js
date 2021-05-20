'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.handleRemoveAll = _this.handleRemoveAll.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleMakeDecision = _this.handleMakeDecision.bind(_this);
        _this.state = {
            options: []

        };
        return _this;
    }

    _createClass(App, [{
        key: 'handleMakeDecision',
        value: function handleMakeDecision() {
            var optionLength = this.state.options.length;
            var randomOption = Math.trunc(Math.random() * 10) % optionLength;
            alert(this.state.options[randomOption]);
        }
    }, {
        key: 'handleRemoveAll',
        value: function handleRemoveAll() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option) {
                return 'Enter valid value to add item';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'Option already exists';
            }
            this.setState(function (prevState) {
                var newOptions = prevState.options;
                newOptions.push(option);
                return {
                    options: newOptions
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var title = "Indecision";
            var subTitle = "Put your life in the hands of a computer!";
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title, subTitle: subTitle }),
                React.createElement(Action, { hasOptions: !!this.state.options.length, handleMakeDecision: this.handleMakeDecision }),
                React.createElement(Options, { options: this.state.options, handleRemoveAll: this.handleRemoveAll }),
                React.createElement(AddOption, { handleAddOption: this.handleAddOption })
            );
        }
    }]);

    return App;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                title = _props.title,
                subTitle = _props.subTitle;

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    title
                ),
                React.createElement(
                    'h2',
                    null,
                    subTitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                hasOptions = _props2.hasOptions,
                handleMakeDecision = _props2.handleMakeDecision;

            return React.createElement(
                'button',
                { disabled: !hasOptions, onClick: handleMakeDecision },
                'Make Decision'
            );
        }
    }]);

    return Action;
}(React.Component);

var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: 'render',
        value: function render() {
            var _props3 = this.props,
                options = _props3.options,
                handleRemoveAll = _props3.handleRemoveAll;

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: handleRemoveAll },
                    'Remove All'
                ),
                React.createElement(
                    'ol',
                    null,
                    options.map(function (option, index) {
                        return React.createElement(
                            'li',
                            { key: option },
                            option
                        );
                    })
                )
            );
        }
    }]);

    return Options;
}(React.Component);

var AddOption = function (_React$Component5) {
    _inherits(AddOption, _React$Component5);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this5 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this5.onAddOption = _this5.onAddOption.bind(_this5);
        _this5.state = {
            error: undefined
        };
        return _this5;
    }

    _createClass(AddOption, [{
        key: 'onAddOption',
        value: function onAddOption(e) {
            e.preventDefault();
            var value = e.target.elements.AddOption.value;

            var option = value.trim();
            var err = this.props.handleAddOption(option);
            if (err) {
                this.setState(function () {
                    return {
                        error: err
                    };
                });
            } else {
                this.setState(function () {
                    return {
                        error: undefined
                    };
                });
            };
            e.target.elements.AddOption.value = '';
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'form',
                { onSubmit: this.onAddOption },
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement('input', { type: 'text', name: 'AddOption' }),
                React.createElement(
                    'button',
                    null,
                    'Add Option'
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

var Option = function (_React$Component6) {
    _inherits(Option, _React$Component6);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                'Random'
            );
        }
    }]);

    return Option;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
