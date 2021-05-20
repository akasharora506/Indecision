
class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleMakeDecision = this.handleMakeDecision.bind(this);
        this.state = {
            options: [],

        };
    }
    handleMakeDecision() {
        const optionLength = this.state.options.length;
        const randomOption = Math.trunc(Math.random() * 10) % optionLength;
        alert(this.state.options[randomOption]);
    }
    handleRemoveAll() {
        this.setState(() => {
            return {
                options: []
            };
        })
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Option already exists';
        }
        this.setState((prevState) => {
            const newOptions = prevState.options;
            newOptions.push(option)
            return {
                options: newOptions
            };
        });

    }
    render() {
        const title = "Indecision";
        const subTitle = "Put your life in the hands of a computer!";
        return (
            <div>
                <Header title={title} subTitle={subTitle} />
                <Action hasOptions={!!this.state.options.length} handleMakeDecision={this.handleMakeDecision} />
                <Options options={this.state.options} handleRemoveAll={this.handleRemoveAll} />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}
class Header extends React.Component {
    render() {
        const { title, subTitle } = this.props;
        return (
            <div>
                <h1>{title}</h1>
                <h2>{subTitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        const { hasOptions, handleMakeDecision } = this.props;
        return (
            <button disabled={!hasOptions} onClick={handleMakeDecision}>Make Decision</button>
        );
    }
}

class Options extends React.Component {
    render() {
        const { options, handleRemoveAll } = this.props;
        return (
            <div>
                <button onClick={handleRemoveAll}>Remove All</button>
                <ol>
                    {options.map((option, index) => {
                        return (<li key={option}>{option}</li>);
                    })}
                </ol>
            </div>
        );
    }
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.onAddOption = this.onAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    onAddOption(e) {
        e.preventDefault();
        const { target: { elements: { AddOption: { value } } } } = e;
        const option = value.trim();
        const err = this.props.handleAddOption(option);
        if (err) {
            this.setState(() => {
                return {
                    error: err
                };
            });
        } else {
            this.setState(() => {
                return {
                    error: undefined
                };
            });
        };
        e.target.elements.AddOption.value = '';
    }
    render() {
        return (

            <form onSubmit={this.onAddOption}>
                {this.state.error && <p>{this.state.error}</p>}
                <input type="text" name="AddOption"></input>
                <button>Add Option</button>
            </form>

        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>Random</div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));