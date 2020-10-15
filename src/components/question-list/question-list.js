import React, { Component } from 'react';
import {connect} from 'react-redux';

import QuestionListItem from '../question-list-item';
import withQuestionService from '../service-wrapper';
import Spinner from '../spinner';

import {questionLoaded,questionShow,changePosition,changeScore} from '../../actions'

import './question-list.css';

class QuestionList extends Component {
     componentDidMount(){
        const {questionService,questionLoaded,date,questions} = this.props;
        if (questions.length === 0){
            questionService.getData(date).then((data)=>questionLoaded(data));
        }      
    }

    render () {
        const {questions,questionShow,changePosition,changeScore,loading} = this.props;
        if(loading) {
            return <Spinner/>
        }else 
        {return ( 
            <ul className="list" onClick={(e)=>{e.stopPropagation();}}>
                {
                    questions.map((question)=>{
                        return (
                            <li key={question.id}>
                                <QuestionListItem key={question.id} question={question} show= {questionShow} changePosition={changePosition} changeScore={changeScore}/>
                            </li>
                        )
                    })
                }
            </ul>
        )}
    }
};

const mapStateToProps= (state)=>{
    return {
        questions: state.questions,
        date: state.date,
        loading: state.loading
    }
};

const mapDisptachToProps= {
    questionLoaded,
    questionShow,
    changePosition,
    changeScore
}

export default withQuestionService()(connect(mapStateToProps,mapDisptachToProps)(QuestionList));