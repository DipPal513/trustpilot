import React from 'react';
import Image from 'next/image';
import { MdStars } from 'react-icons/md';

import { useRouter } from 'next/navigation';

const Review = ({ review }) => {
    const router = useRouter()
   
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer" onClick={() => router.push(`/reviews/${review._id}`)}>
      <div className="flex items-center gap-4 mb-4">
        <Image
          src={"https://consumersiteimages.trustpilot.net/business-units/64429c4ae1aca5253183e79d-198x149-1x.avif"}
          width={60}
          height={60}
          alt={review.companyName}
          className="rounded-full border-2 border-[#00b67a]"
        />
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{review.companyName}</h3>
          <div className="flex items-center text-yellow-500 text-lg mb-2">
            {[...Array(Math.round(review.avgRating))].map((_, i) => (
              <MdStars key={i} />
            ))}
          </div>
          <p className="text-gray-600 mb-2">{review.avgRating} Avg Rating</p>
          <p className="text-gray-500">{review.location}</p>
        </div>
      </div>
      
      
    </div>
  );
};

export default Review;
