import React from 'react';
import DatePicker from 'react-datepicker';
import {connect} from 'react-redux';
import './header.css';
import "react-datepicker/dist/react-datepicker.css";

import {showSearch,questionLoaded,loadingData} from '../../actions/';
import withQuestionService from '../service-wrapper';

const Header = ({showSearch,active,date,questionService,questionLoaded,loadingData})=> {
    const clazz = (active)? 'active': 'hidden';
    return (
        <div className="header-bar">
           <div className="title-bar"> 5 самых популярных вопросов на StackOverfow, содержащих "react-redux" в наименовании начиная с
           <DatePicker className="date-bar" selected={date} onChange={(date) => {showSearch(date);}} />
           <button className={clazz} onClick={async (e)=>{loadingData();setTimeout(()=>{questionService.getData(date).then((data)=>questionLoaded(data))},2000);}}>{'Поиск  '} 
         <i className="fa fa-search" aria-hidden="true"></i></button></div>
        </div>
    )
};

const mapStateToProps = (state)=> {
    return {
        active: state.search,
        date: state.date
    }
}
const mapDispatchToProps= {
    showSearch,
    questionLoaded,
    loadingData
}


export default withQuestionService()(connect(mapStateToProps,mapDispatchToProps)(Header));
