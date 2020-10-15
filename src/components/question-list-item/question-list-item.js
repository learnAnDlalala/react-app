import React from 'react';
import './question-list-item.css'


function dragStart(e,card) {
    e.dataTransfer.setData('id',card);
};
function dragEnd(e) {

};
function dragLeave(e) {
    e.target.classList.remove('selected');
}
function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('selected');
};
function dragDrop(e,card,changePosition) {
    e.preventDefault();
    e.target.classList.remove('selected');
    const draggedCard = e.dataTransfer.getData('id');
    changePosition(draggedCard);
    changePosition(card);
};

const QuestionListItem = ({question,show,changePosition,changeScore})=> {
    const clazz = (question.active)? 'active' : 'hidden';
    const clazzCard = (question.answered)? 'answered' : 'not-answered';
    return (
    <div>
    <div className={`card ${clazzCard}`} onDoubleClick={(e)=>{changePosition(question.id)}}
        draggable={true} 
        onDragStart={(e)=>{dragStart(e,question.id)}}
        onDragLeave={(e)=>{dragLeave(e)}}
        onDragEnd={(e)=>{dragEnd(e)}}
        onDragOver={(e)=>{dragOver(e)}}
        onDrop={(e)=>{dragDrop(e,question.id,changePosition)}}>
            <div className="card-title" onClick={(e)=>{show(question.id)}}> {question.title}</div>
            <div className="card-side">
            <div className="card-value"> {question.score} </div>
            <div className="card-actions"> 
                <button className="actions" onClick={(e)=>{changeScore(question.id,'INC')}} onDoubleClick={(e)=>{e.stopPropagation();}}><i className="fa fa-arrow-circle-o-up" aria-hidden="true"></i></button>
                <button className="actions"onClick={(e)=>{changeScore(question.id,'DEC')}} onDoubleClick={(e)=>{e.stopPropagation();}}><i className="fa fa-arrow-circle-o-down" aria-hidden="true"></i></button>
            </div>   
            </div>
    </div>
    <div className={`${clazz} card-list`}>
        <span>Автор : {question.owner}</span>
        <br/>
        <span>Количество ответов : {question.answersCount}</span>
    </div>
    </div> 
    )
};

export default QuestionListItem;

