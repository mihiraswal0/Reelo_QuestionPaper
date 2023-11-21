import React from 'react'
import { Link } from 'react-router-dom'
const QuestionAdd = () => {
  return (
    <div className='container'>
      <div className="row">
        <h1>Add Question To Store</h1>
      </div>
      <div className="row mb-3">
        <label for="question" class="form-label">Question</label>
        <input type="text" class="form-control" id="question" placeholder="What is....?" />
      </div>
      <div className="row mb-3">
        <label for="subject" class="form-label">Subject</label>
        <input type="text" class="form-control" id="subject" placeholder="Subject" />
      </div>
      <div className="row">
        <label for="topci" class="form-label">Topic</label>
        <input type="text" class="form-control" id="topic" placeholder="Topic" />
      </div>
      <div className="row">
        <label for="difficulty" class="form-label">Difficulty</label>
        <input type="text" class="form-control" id="difficulty" placeholder="Difficulty" />
      </div>
      <div className='row'>
      <button type="button" class="btn btn-primary btn-lg">Add Question</button>
      <Link to='/generate'>
      <button class="btn btn-primary" type="submit">Switch to Generate Question</button>

      </Link>

      </div>

    </div>
  )
}

export default QuestionAdd
