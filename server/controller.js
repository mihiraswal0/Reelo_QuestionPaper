const QuestionStore =require('./questionStore.js');
 const generatePaper=async(req,res)=>{
    let {totalMarks,easyM,mediumM,hardM}=req.body;

    if(!totalMarks)
    return res.status(400).json({error:"Please enter a valid total marks"});
    if(easyM+mediumM+hardM!=totalMarks)
    return res.status(400).json({error:"Sum of distributions does not equal to 100"});
    if(!Number.isInteger(easyM)|| !Number.isInteger(mediumM)||!Number.isInteger(hardM))
    return res.status(400).json({error:"Please change the difficulty distribution to avoid non integer distributions"});

    let easyQuestion=await getQuestion(easyM,"easy");
    let mediumQuestion=await getQuestion(mediumM,"medium");
    let hardQuestion=await getQuestion(hardM,"hard");
    if((easyQuestion==-1) ||(mediumQuestion==-1) ||(hardQuestion==-1))
    return res.status(400).json({error:"Please change the difficulty distribution because the following set of difficulty distributions is not available in the Question distribution store"});
console.log(easyQuestion)
    let finalQuestionSet=easyQuestion.concat(mediumQuestion);
    finalQuestionSet=finalQuestionSet.concat(hardQuestion);
    return res.status(200).json(finalQuestionSet);




}
   const addPaper=async(req,res)=>{
    const {question,subject,topic,difficulty,marks}=req.body;
    if(!question || !subject || !topic || !difficulty|| !marks)
    return res.status(404).json({error:"Please Fill All the Details"});

    try{
        const paperAdded=await QuestionStore.create(req.body);
        res.status(200).json(paperAdded);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
};

let getQuestion=async(marks,type)=>{
    const allQuestion=await QuestionStore.find({difficulty:type});
    // console.log(allQuestion);
    const eachQuestionMark=(type=="easy"?1:(type=="medium"?5:10));
    const noOfQuestion=marks/(eachQuestionMark);
    if(allQuestion.length<noOfQuestion)
    return -1;
let selectedQuestion=[];
    for(let i=1;i<=noOfQuestion;i++)
    {
        const randomIdx=Math.floor(Math.random()*allQuestion.length);
        selectedQuestion.push(allQuestion[randomIdx]);
        allQuestion.splice(randomIdx,1);
    }
    return selectedQuestion;
    
}

module.exports ={generatePaper,addPaper};

