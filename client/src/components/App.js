//file name is capitalized because it exports.
import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';


import Header from './Header';
//import Landing from './Landing';
const Dashboard = () => <h2>Dashboard</h2>;
const Landing = () => <h2>Landing</h2>;  //These will need to change
const SurveyNew = () => <h2>SurveyNew</h2>;    //This will need to change


class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    render(){
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route exact path="/" component={Landing}/>
                        <Route exact path="/player" component={Dashboard}/> {/* The path needs to be changed to what we want */}
                        <Route exact path="/surveys/new" component={SurveyNew}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App);