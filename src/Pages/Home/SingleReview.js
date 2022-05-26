import React from 'react';

const SingleReview = ({review}) => {
    const {userName,userEmail,description,ratings}=review;
    return (
        <div>
                      <div class="card lg:max-w-lg bg-base-100 shadow-xl">

  <div class="card-body">
    <h2 class="card-title">Reviewer:{userName}</h2>
    <p>Email:{userEmail}</p>
    <p>Ratings:{ratings}</p>
    <p><span> Description:{description}</span></p>
    
  </div>
</div>
        </div>
    );
};

export default SingleReview;