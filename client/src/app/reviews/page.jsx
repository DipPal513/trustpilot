"use client"
import React from 'react';
import useFetch from "@/hooks/useFetch";
import ReviewLoader from '@/loader/ReviewLoader';
import Review from '@/components/review/Review';
 // Adjust the path as needed

export default function Reviews() {
  // Fetching reviews data using the useFetch hook
  const { data, loading, error } = useFetch('/reviews');
  
  // Handle loading and error states
  if (loading) {
    return (
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-screen-lg mx-auto flex">
          {/* <Sidebar /> */}
          <div className="w-full md:w-3/4 lg:w-4/5">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Customer Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[1, 2, 3].map((_, index) => (
                <ReviewLoader key={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  if (error) return <div>Error loading reviews.</div>;

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-screen-lg mx-auto flex">
        {/* <Sidebar /> */}
        <div className="w-full md:w-3/4 lg:w-4/5">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Customer Reviews</h2>
          <div className="grid  gap-10">
            {data.reviews.map((review) => (
              <Review key={review._id} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
