import React from 'react';

const SingleReview = ({review}) => {
    const {userName,userEmail,description,ratings}=review;
    return (
        <div>
                      <div className="card lg:max-w-lg bg-base-100 shadow-xl">

  <div className="card-body">
    <h2 className="card-title">Reviewer:{userName}</h2>
    <p>Email:{userEmail}</p>
    <p>Ratings:{ratings}</p>
    <p><span> Description:{description}</span></p>
    
  </div>
</div>
        </div>
    );
};

export default SingleReview;