export default class QuestionService {

    async getData(date) {
        const fromDate = Math.floor(date/1000);
        try {
            const data = await fetch(`https://api.stackexchange.com/2.2/questions?pagesize=5&fromdate=${fromDate}&order=desc&sort=votes&tagged=react-redux&site=stackoverflow`);
            const res = await data.json();
            const questions = res.items.map((el,index)=>this._transformData(el,index));
            return questions;
        }catch (error) {
            alert('ERROR');
        }
    };
    _transformData(data,index) {
        return {
            id : index,
            title : data.title,
            score : data.score,
            answered : data.is_answered,
            lastActivity : data.last_activity_date,
            owner: data.owner.display_name,
            answersCount : data.answer_count,
            creationDate : data.creation_date
        }
    }
};
