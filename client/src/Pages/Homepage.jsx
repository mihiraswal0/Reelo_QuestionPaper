import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
    return (
        <div className="container-fluid border border-dark p-5">
            <div className='row '>
                <div className="col justifiy-content-center m-5 border border-dark">
                    <h1>Question Paper Generator Tool</h1>
                </div>
            </div>
            <div className='row d-flex flex-column justify-content-start'>
                <div className='col'>
                    <h2>Directions</h2>
                    <ul >
                        <li className='p-2 fs-5'>Click Generate Question button to create paper</li>
                        <li className='p-2 fs-5'>Click Add Question button to add question</li>
                        <li className='p-2 fs-5'>Assume: Easy Question hold 1 Marks.</li>
                        <li className='p-2 fs-5'>Assume: Medium Question hold 5 Marks.</li>
                        <li className='p-2 fs-5'>Assume: Hard Question hold 10 Marks</li>
                    </ul>
                </div>
             
            </div>
            <div className='row'>
                <div className='col'>
                    <Link to="/generate"><button type="button" className="btn btn-primary btn-lg">Generate Question Paper</button>
                    </Link>
                </div>
                <div className='col'>
                    <Link to="/add">
                        <button type="button" className="btn btn-primary btn-lg">Add Question to the Store</button>

                    </Link>
                </div>
            </div>
        </div>



    )
}

export default Homepage