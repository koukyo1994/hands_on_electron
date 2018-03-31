import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Link, Route, Switch } from 'react-router-dom';
import {SceneA, SceneB} from './routes';
//import FizzBuzz from "./fizzbuzz";
//import NameForm from "./form";

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blue: false
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            blue: !this.state.blue
        });
    }

    render() {
        return (
            <HashRouter basename="/">
                <div>
                    <ul>
                        <li><Link to="/">SceneA</Link></li>
                        <li><Link to="/b">SceneB</Link></li>
                    </ul>
                    <label>
                        <input type="checkbox" onClick={this.handleChange}/>
                        SceneAの文字の色を青くする
                    </label>

                <Switch>
                    <Route exact path="/" render={props => <SceneA blue={this.state.blue}{...props}/>}/>
                    <Route path="/b" component={SceneB}/>
                </Switch>
                </div>
            </HashRouter>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById("routing"));
//ReactDOM.render(<h1>Hello, world!</h1>, document.getElementById("root"));
//ReactDOM.render(<NameForm />, document.getElementById("form_test"));
//ReactDOM.render(<FizzBuzz />, document.getElementById("fizz_buzz"));
