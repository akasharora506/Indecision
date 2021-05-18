const app = {
    title: 'Indecision',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};
const onFormSubmit = (e) => {
    e.preventDefault();
    const { target: { elements: { option: { value: option } } } } = e;
    if (option) {
        app.options.push(option);
        renderOptions();
        e.target.elements.option.value = '';
    };
};

const onRemoveAll = () => {
    app.options = [];
    renderOptions();
};

const onMakeDecision = () => {
    const len = app.options.length;
    if (!len)
        return null;
    const randomOption = Math.trunc(Math.random() * 10) % len;
    alert(app.options[randomOption]);
};

const appRoot = document.getElementById('app');
const renderOptions = () => {
    const numberOfOptions = app.options.length;
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle
            }</p>}
            <p>{numberOfOptions > 0 ? 'Here are your options:' : 'No options'}</p>
            <button disabled={!app.options.length} onClick={onMakeDecision}>Make My Decision!</button>
            {numberOfOptions > 0 ? <button onClick={onRemoveAll}>Remove All</button> : null}
            {numberOfOptions ? <ol>
                {app.options.map((option, i) => <li key={i}>{option}</li>)}
            </ol> : null}
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderOptions();