import React from 'react';

import {ServiceConsumer} from '../service-context';

const withQuestionService= ()=>(Wrapped)=> {
    return(props)=>{
        return(
            <ServiceConsumer>
                {
                    (questionService)=>{
                        return (
                            <Wrapped {...props} questionService={questionService}/>
                        )
                    }
                }
            </ServiceConsumer>
        )
    }
};

export default withQuestionService;