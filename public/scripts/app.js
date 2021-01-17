'use strict';

// const template = (
//     <div>
//         <h1>My name is YoDaddy</h1>
//         <p>Hi, this is some information</p>
//     </div>
// );

var user = {
    name: 'Akash Arora',
    age: 20,
    location: 'Faridabad, Haryana'
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name.toUpperCase()
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    user.location && React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
