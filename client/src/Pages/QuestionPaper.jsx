import React from 'react'

const QuestionPaper = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className="col">
          <h1>Question Paper Generator</h1>
        </div>
      </div>
      <div className="row g-3 align-items-center">
        <div className="col-auto">
          <label for="marks" className="col-form-label">Total Marks</label>
        </div>
        <div className="col-auto">
          <input type="text" id="marks" className="form-control" />
        </div>
        <div className="col-auto">
          <span id="passwordHelpInline" className="form-text">
            Choose a multiple of 5.
          </span>
        </div>
      </div>
      <div className="row g-3 align-items-center">
        <div className="col-auto">
          <label for="easy" className="col-form-label">Easy Level</label>
        </div>
        <div className="col-auto">
          <input type="text" id="easy" className="form-control" />
        </div>
        <div className="col-auto">
          <span id="passwordHelpInline" className="form-text">
            Choose a multiple of 5.
          </span>
        </div>
      </div>
      <div className="row g-3 align-items-center">
        <div className="col-auto">
          <label for="medium" className="col-form-label">Medium Level</label>
        </div>
        <div className="col-auto">
          <input type="text" id="medium" className="form-control" aria-describedby="passwordHelpInline" />
        </div>
        <div className="col-auto">
          <span id="passwordHelpInline" className="form-text">
            Choose a multiple of 5
          </span>
        </div>
      </div>
      <div className="row g-3 align-items-center">
        <div className="col-auto">
          <label for="hard" className="col-form-label">Hard level</label>
        </div>
        <div className="col-auto">
          <input type="text" id="hard" className="form-control" aria-describedby="passwordHelpInline" />
        </div>
        <div className="col-auto">
          <span id="passwordHelpInline" className="form-text">
            Choose a multiple of 10
          </span>
        </div>
      </div>
      <div className='row'>
        <button type="button" class="btn btn-primary btn-lg">Generate Paper</button>
      </div>
      <div className='row'>
        <table className="table">
          <thead>
            <th scope="col">No.</th>
            <th scope="col">Question</th>
            <th scope="col">Level</th>
            <th scope="col">Marks</th>
          </thead>
        </table>
      </div>


    </div>
  )
}

export default QuestionPaper
