import {show,changePosition,changeScore} from '../utils';

const initialState = {
    questions : [],
    date: new Date (2018,0,1),
    pressed: [],
    seacrch: false,
    loading : true
};

const reducer = (state=initialState, action)=>{
       
        switch (action.type) {
            case 'QUESTIONS_LOADED' : {const newQuestions = action.payload; return {...state, questions:newQuestions, loading: false,search:false} ;};
            case 'LOADING': return {...state, loading: true};
            case 'SHOW_QUESTION': {const newQuestions = show(state.questions,action.payload); return {...state,questions:newQuestions}};
            case 'CHANGE_POSITION': {const newData = changePosition(state,action.payload); return {...state,questions:newData.questions,pressed:newData.pressed}};
            case 'CHANGE_SCORE': {const newQuestions= changeScore(state.questions,action.payload,action.effect); return {...state,questions: newQuestions}};
            case 'HIDE_ALL': const newQuestions = state.questions.map((el)=>{el.active = false; return el;});return {...state,questions:newQuestions};
            case 'SHOW_SEARCH': return {...state,search:true,date: action.payload};
            default: return state;
        }
        
};

export default reducer;