import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const QuestionPaper = () => {
  const [totalMarks, setTotal] = useState(0);
  const [easyM, setEasyM] = useState(0);
  const [mediumM, setMediumM] = useState(0);
  const [hardM, setHardM] = useState(0);
  const [paper, setPaper] = useState([]);
  const marksSet = (event, type) => {
    if (type === "easy") {
      setEasyM(event.target.value);
    }
    else if (type === "medium") {
      setMediumM(event.target.value);
    }
    else {
      setHardM(event.target.value);
    }

  }
  const generatePaper = async () => {
    if(!totalMarks)
    return alert("Please set a valid total marks");
    if (mediumM % 5)
     return alert("Please set medium marks multiple of 5 because the store consist of medium question of mark 5 only");

    if (hardM % 10) {
     return alert("Please set medium marks multiple of 10 because the store consist of medium question of mark 10 only");
    }
    try{
    const data = await fetch('/generate',
      {method:"POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ easyM: easyM, hardM: hardM, mediumM: mediumM, totalMarks: totalMarks })
      })
      const res=await data.json();
      if(res.error)
      return alert("Error: "+res.error);
    setPaper(res);
    }
    catch(err){
      alert("Error:"+err.message);
    }

  }


  return (
    <div className='container'>
      <div className='row '>
        <div className='col p-2 col-md-2'>
        <Link to='/add'>
      <button className="btn btn-secondary" type="submit">Switch to Add Question</button>
      </Link>
        </div>
        <div className="col p-1 col-md-10">
          <h1>Question Paper Generator</h1>
        </div>
      </div>
      <div className="row bg-secondary ">
        <div className="col ">
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-5">Notes</h1>
              <p className="fs-5">Easy marks should be multiple of 1</p>
              <p className='fs-5'>Medium marks should be multiple of 5</p>
               <p className='fs-5'> Hard marks should be multiple of 10</p>
              <p className="fs-5">Sum of marks should be equal to total Marks</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row p-2">
        <div className="col fs-4">
          <label htmlFor="totalMarks">Total Marks</label>
        </div>
        <div className="col">
          <input type='number' value={totalMarks} onChange={(e) => setTotal(e.target.value)} />
        </div>
      </div>
      <div className="row d-flex flex-row pt-3">
        <div className="col ">
          <label>Difficulty</label>
        </div>
        <div className="col ">
          <label>Easy Level</label>
        </div>
        <div className="col">
          <label>Medium Level</label>
        </div>
        <div className="col">
          <label>Hard Level</label>
        </div>
      </div>


      <div className="row d-flex flex-row p-3">
        <div className="col">
          <label>Marks</label>
        </div>
        <div className="col ">
          <input type='number' value={easyM} onChange={(event) => marksSet(event, "easy")} />
        </div>
        <div className="col">
          <input type='number' value={mediumM} onChange={(event) => marksSet(event, "medium")} />
        </div>
        <div className="col">
          <input type='number' value={hardM} onChange={(event) => marksSet(event, "hard")} />
        </div>
      </div>




      <div className='row'>
        <button type="button" className="btn btn-primary btn-lg" onClick={generatePaper}>Generate Paper</button>
      </div>
      <div className='row p-4'>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Question</th>
              <th scope="col">Subject</th>
              <th scope="col">Topic</th>
              <th scope="col">Difficulty</th>
            </tr>
          </thead>
          <tbody>
          {
            paper.length>0 && (paper.map((q,index)=>{
              return (<tr key={q._id}>
                <th scope='row'>{index+1}</th>
                <td>{q.question}</td>
                <td >{q.subject}</td>
                <td >{q.topic}</td>
                <td >{q.difficulty}</td>
              </tr>)
            }))
          }
          </tbody>
        
        </table>
      </div>


    </div>
  )
}

export default QuestionPaper
