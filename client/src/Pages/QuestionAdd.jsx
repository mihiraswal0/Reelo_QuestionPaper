import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const QuestionAdd = () => {
  const [question,setQuestion]=useState("");
  const [subject,setSubject]=useState("");
  const [topic,setTopic]=useState("");
  const [difficulty,setDifficulty]=useState("");
  const [all,setAll]=useState([]);

  const addQuestion=async()=>{
    const marks=(difficulty=="easy"?1:(difficulty=="medium"?5:10));
    try{
    const data=await fetch('http://localhost:5001/add',{
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify({question:question,subject:subject,topic:topic,difficulty:difficulty,marks:marks})
    })
    const res=await data.json();
    if(res.error)
    return alert("Error: " + res.error)
    alert("Question is Added");
    setQuestion("");
    setSubject("");
    setTopic("");
    setDifficulty("");
  }catch(err)
  {
    alert("Error :"+err.message)
  }
  }
  const allQuestions=async()=>{
    try{
    const data=await fetch('http://localhost:5001',{
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
    });
    const res=await data.json();
    setAll(res);
  }catch(err)
  {
    alert("Error:"+err.message);
  }
  }
  return (
    <div className='container'>
      <div className="row p-1">
        <h1>Add Question To Store</h1>
      </div>
      <div className="row p-3 fs-4">
        <label htmlFor="question" className="form-label">Question</label>
        <input type="text" className="form-control" id="question" value={question} onChange={(e)=>setQuestion(e.target.value)}/>
      </div>
      <div className="row p-3 fs-4">
        <label htmlFor="subject" className="form-label">Subject</label>
        <input type="text" className="form-control" id="subject" value={subject} onChange={(e)=>setSubject(e.target.value)} />
      </div>
      <div className="row p-3 fs-4">
        <label htmlFor="topci" className="form-label">Topic</label>
        <input type="text" className="form-control" id="topic" value={topic} onChange={(e)=>setTopic(e.target.value)}/>
      </div>
      <div className="row fs-4">
        <label htmlFor="difficulty" className="form-label" >Difficulty</label>
      </div>
      <div className="row p-3 fs-4">
      <div className="col">
        <input type="radio" name='diff' value="easy" onClick={e=>setDifficulty(e.target.value)}></input>
        <label>Easy</label>
      </div>
      <div className="col">
        <input type="radio" name='diff' value="medium" onClick={e=>setDifficulty(e.target.value)}></input>
        <label>Medium</label>
      </div>
      <div className="col">
        <input type="radio" name='diff' value="hard" onClick={e=>setDifficulty(e.target.value)}></input>
        <label>Hard</label>
      </div>
      </div>
      <div className='row p-3'>
      <button type="button" className="btn btn-primary btn-lg" onClick={addQuestion}>Add Question</button>
      </div>
      <div className="row p-3">
        <div className='col'>
        <Link to='/generate'>
      <button className="btn btn-secondary" type="submit">Switch to Generate Question</button>
      </Link>
        </div>
        <div className="col">
        <button className="btn btn-secondary" type="submit" onClick={allQuestions}>All Question </button>

        </div>
    

      </div>
      {all.length>0 && (<div className='row'>
      <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Question</th>
              <th scope="col">Subject</th>
              <th scope="col">Topic</th>
              <th scope="col">Difficulty</th>
              <th scope='col'>Marks</th>
            </tr>
          </thead>
          <tbody>
          {
            all.map((q,index)=>{
              return (<tr key={q._id}>
                <th scope='row'>{index+1}</th>
                <td>{q.question}</td>
                <td >{q.subject}</td>
                <td >{q.topic}</td>
                <td >{q.difficulty}</td>
                <td>{q.marks}</td>
              </tr>)
            })
          }
          </tbody>
        </table>
      </div>)}

    </div>
  )
}

export default QuestionAdd
