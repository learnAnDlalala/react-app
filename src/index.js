import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import store from './store';
import {ServiceProvider} from './components/service-context';
import QuestionService from './services/question-service';

const questionService = new QuestionService();


ReactDOM.render( 
<Provider store = {store}>
  <ServiceProvider value = {questionService}>
    <App/>
  </ServiceProvider>
</Provider>
, document.getElementById('root'));
