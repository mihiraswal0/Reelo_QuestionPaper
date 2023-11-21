import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
    return (
        <div className="container-fluid">
            <div className='row'>
                <div className="col justifiy-content-center">
                    <h1>Question Paper Generator Tool</h1>
                </div>
            </div>
            <div className='row d-flex flex-column justify-content-start'>
                <div className='col '>
                    <ul >
                        <li >Directions</li>
                        <li>Click Generate Question button to create paper</li>
                        <li>Click Add Question button to add question</li>

                    </ul>
                </div>
                <div className='col'>
                    <h5>Assumptions: It is assumed that the 'Easy' question hold 1 mark, 'Medium' question hold 5 mark and 'Hard' question hold 10 mark</h5>
                </div>

            </div>
            <div className='row'>
                <div className='col'>
                    <Link to="/generate"><button type="button" class="btn btn-primary btn-lg">Generate Question Paper</button>
                    </Link>
                </div>
                <div className='col'>
                    <Link to="/add">
                        <button type="button" class="btn btn-primary btn-lg">Add Question to the Store</button>

                    </Link>
                </div>
            </div>
        </div>



    )
}

export default Homepage