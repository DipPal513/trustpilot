import React from 'react';

export default function SingleReview() {
  return (
    <div className='mx-auto px-2 max-w-screen-lg'>
      <div className="top-section border-b mb-10 py-10">
        <div className='flex items-center gap-5 mt-5'>
          <img src="https://consumersiteimages.trustpilot.net/business-units/5c5c6dcb12f48a0001fe8093-198x149-1x.avif" alt="company" />
          <div>
            <h2 className="text-2xl font-bold mb-5">
              ChristKindl-Markt 
            </h2>
            <p>Reviews 0</p>
            <p>4.9</p>
          </div>
        </div>
      </div>

      <div className="reviews">
        <h1 className="text-2xl font-bold">Reviews</h1>
        <p>323 total</p>

        <div className='reviewstat flex flex-col gap-4 my-8'>
          {[5, 4, 3, 2, 1].map((star, index) => (
            <div key={index} className='flex items-center gap-4'>
              <input type="checkbox" className='cursor-pointer' />
              <div className='flex items-center gap-1'>
                <span className='font-semibold'>{star} stars</span>
              </div>
              <div className='flex-1 bg-gray-200 h-4 rounded-full overflow-hidden'>
                <div
                  className='bg-green-500 h-full rounded-full'
                  style={{ width: `${star * 20}%` }} // Adjust width based on rating percentage
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="review_users my-10 border p-3 rounded">
            <div className="user">
                <div className="img"></div>
                <div className="user_name">
                    <p className='font-bold'>Joseph T.Clark</p>
                    <p>1 review</p>
                </div>        
                <hr className='my-3'/>
                <div className="review-text">
                    <p>This piece is so endearing, so warming to anything it's placed upon, and It was delivered with incredible speed and efficiency. It was a bit smaller than expected, but that only means I'll be purchasing another in the future. Deutsche craftsmanship forever!</p>
                    <p className="mt-3">
                        <span className='font-bold'>Date of experience: </span>
                        <span>July 29, 2024</span>
                    </p>
                </div>
                    </div>
        </div>
      </div>
    </div>
  );
}
