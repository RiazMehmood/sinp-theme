"use client";
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

export default function BlogComponent() {
  const blogs = [
    {
      id: 1,
      title: 'Blog Title 1',
      date: '2023-01-01',
      comments: 10,
      description: 'This is a short description of the blog post.',
      imageUrl: '/blog1.webp'
    },
    {
        id: 2,
        title: 'Blog Title 2',
        date: '2023-01-01',
        comments: 10,
        description: 'This is a short description of the blog post.',
        imageUrl: '/blog2.webp'
      },
      {
        id: 3,
        title: 'Blog Title 3',
        date: '2023-01-01',
        comments: 10,
        description: 'This is a short description of the blog post.',
        imageUrl: '/blog3.webp'
      },
      {
        id: 4,
        title: 'Blog Title 4',
        date: '2023-01-01',
        comments: 10,
        description: 'This is a short description of the blog post.',
        imageUrl: '/blog4.webp'
      }
    // Add more blog objects here...
  ]

  return (
    <div className="flex justify-center">
      <div className="p-4 w-full max-w-6xl">
        <h2 className="text-4xl text-orange-500 font-bold text-center mb-2">Latest Blog</h2>
        <p className="text-gray-800 mb-10 text-md text-center">There are many variations of passages of Lorem</p>

        <Swiper
          spaceBetween={40}
          slidesPerView={3}
          navigation
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {blogs.map(blog => (
            <SwiperSlide key={blog.id}>
              <div className="border rounded-md mt-6 p-6">
                <Image src={blog.imageUrl} alt={blog.title} width={500} height={300} layout='responsive' />
                <h3 className="text-xl font-semibold mt-6">{blog.title}</h3>
                <p className="text-gray-500 mt-4">{blog.date}   \   {blog.comments} comments</p>
                <p className="mt-2">{blog.description}</p>
                <button className="mt-4 px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white font-semibold border rounded">Blog Details</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
