// const template = (
//     <div>
//         <h1>My name is YoDaddy</h1>
//         <p>Hi, this is some information</p>
//     </div>
// );

const user = {
    name: 'Akash Arora',
    age: 20,
    location: 'Faridabad, Haryana'
};

const templateTwo = (
    <div>
        <h1>{user.name.toUpperCase()}</h1>
        <p>Age: {user.age}</p>
        {user.location && <p>Location: {user.location}</p>}
    </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);