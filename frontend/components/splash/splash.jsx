import React from 'react'
import { Link } from 'react-router-dom'


const Splash = props => (
    <div className='splash-container'>
        <div>
            <h1><Link className='explore-link' to={`/stays`}>EXPLORE OUR OPTIONS</Link></h1>
            <Link className='splash-header' to={`/stays`}>FIND YOUR STAY AWAY FROM HOME</Link>
        </div>

        <div className='splash-images'>
            <div className='splash-img1'></div>
            <div className='splash-img2'></div>
            <div className='splash-img3'></div>
             <div className='splash-img4'></div>
        </div>
    </div>
)

export default Splash

