import React from 'react';
import './Movies.css';

const Movies = (props) => {
    return (
        <>
                <div className="card" style={{ maxWidth: "20rem" }}>
                    <img  src={props.img} alt="No img Found" className="card-img-top" />
                    <div className="card-body">
                    <h6>HOTSTAR ORIGINAL MOVIES  </h6>
                        <h5 className="card-title mt-3">{props.title}</h5>
                        <a href={props.link} target='blank' className='btn btn-secondary btn-sm mt-1'>Watch Now</a>
                    </div>
                </div>
        </>
    )
}

export default Movies;