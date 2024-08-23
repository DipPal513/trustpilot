import Ad from '@/components/ad/Ad'
import Banner from '@/components/banner/Banner'
import Categories from '@/components/categories/Categories'
import Reviews from '@/app/reviews/page'
import Story from '@/components/story/Story'
import React from 'react'
import About from '@/components/about/About';

export default function Home() {
  return (
    <main>
      <Banner />
      <Categories/>
      <Ad />
      <About />
      {/* <Reviews /> */}
      <Story />
      
    </main>
  )
}
