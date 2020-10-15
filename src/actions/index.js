const questionLoaded = (newQuestions) => {
    return {
      type: 'QUESTIONS_LOADED',
      payload: newQuestions
    };
  };
const questionShow = (id)=>{
    return {
      type : 'SHOW_QUESTION',
      payload: id
    }
  };
const changePosition = (id)=>{
  return{
    type: 'CHANGE_POSITION',
    payload: id
  }
};
const changeScore = (id,action)=>{
  return {
    type: 'CHANGE_SCORE',
    payload: id,
    effect: action
  }
};
const hideAll = ()=>{
  return{
    type: 'HIDE_ALL'
  }
};
const showSearch = (date)=> {
  return{
    type: 'SHOW_SEARCH',
    payload: date
  }
};
const loadingData = ()=> {
  return {
    type: 'LOADING'
  }
};
export {
    questionLoaded,
    questionShow,
    changePosition,
    changeScore,
    hideAll,
    showSearch,
    loadingData
  };
