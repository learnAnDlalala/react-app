import React from 'react';
import QuestionList from '../question-list';
import Header from '../header';
import {connect} from 'react-redux';
import {hideAll,questionShow} from '../../actions';

import './app.css'

const App = ({hideAll})=> {
    return (
    <div className="container" onClick={(e)=>{hideAll()}}>
        <Header></Header>
        <QuestionList/>
    </div>
    )
};
const mapDisptachToProps = {
    hideAll,questionShow
};


export default connect(null,mapDisptachToProps)(App);