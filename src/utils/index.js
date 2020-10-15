const show = (arr,id)=>{
   return (arr.map((el)=>{
       el.active = (el.id===id)? !el.active: false;
       return el;
   }))
};
const changePosition = (state,position)=>{
    let a = state.questions;
    let b = state.pressed;
    b.push(position);

    if (b.length === 2) {
        [a[b[0]],a[b[1]]]=[a[b[1]],a[b[0]]];
        a = a.map((el,index)=>{ el.id=index; return el})
        b=[];
    }
    return {
        questions: a,
        pressed: b
    } 
};
const changeScore = (questions,id,effect)=>{
   const newQuestions = [...questions];
   switch (effect){
       case 'INC':  ++newQuestions[id].score;break;
       case 'DEC':  --newQuestions[id].score;break;
       default: return newQuestions;
   }
   return newQuestions;
};

export {
    show,
    changePosition,
    changeScore
}