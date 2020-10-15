import {createStore} from 'redux';

import reducer from './recuder';

const saveState = (state)=> {
    try {
        const oldState = JSON.stringify(state);
        window.localStorage.setItem('app_state',oldState);
    }
    catch (err) {
        return undefined;
    }
};

const loadState = ()=> {
    try {
        const oldState = window.localStorage.getItem('app_state');
        if(!oldState) return undefined;
        const a = JSON.parse(oldState);
        const newDate = new Date(a.date);
        return {...a,date : newDate};
    }
    catch(err) {
        return undefined;
    }
};
const oldStore = loadState();
const store = createStore(reducer,oldStore);

store.subscribe(()=>{
    saveState(store.getState());
});


export default store;