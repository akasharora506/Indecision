'use strict';

var app = {
    title: 'Indecision',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};
var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        renderOptions();
        e.target.elements.option.value = '';
    };
};

var onRemoveAll = function onRemoveAll() {
    app.options = [];
    renderOptions();
};

var onMakeDecision = function onMakeDecision() {
    var len = app.options.length;
    if (!len) return null;
    var randomOption = Math.trunc(Math.random() * 10) % len;
    alert(app.options[randomOption]);
};

var appRoot = document.getElementById('app');
var renderOptions = function renderOptions() {
    var numberOfOptions = app.options.length;
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            numberOfOptions > 0 ? 'Here are your options:' : 'No options'
        ),
        React.createElement(
            'button',
            { disabled: !app.options.length, onClick: onMakeDecision },
            'Make My Decision!'
        ),
        numberOfOptions > 0 ? React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove All'
        ) : null,
        numberOfOptions ? React.createElement(
            'ol',
            null,
            app.options.map(function (option, i) {
                return React.createElement(
                    'li',
                    { key: i },
                    option
                );
            })
        ) : null,
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

renderOptions();
