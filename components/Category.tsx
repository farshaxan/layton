import React from 'react'
import BlurImage from './BlurImage'

const Category = ({ label }: { label: string }) => {
  const baseUrl = 'https://farshaxan.blr1.cdn.digitaloceanspaces.com/leyton/'

  const categories = [
    { label: 'Hot Drinks', image: baseUrl + 'image.JPG' },
    { label: 'Mojito', image: baseUrl + 'image.JPG' },
    { label: 'Frappes', image: baseUrl + 'image.JPG' },
    { label: 'Smoothies', image: baseUrl + 'image.JPG' },
    { label: 'Shakes', image: baseUrl + 'image.JPG' },
    { label: 'iced', image: baseUrl + 'image.JPG' },
    { label: 'Drinks', image: baseUrl + 'image.JPG' },
    { label: 'Fruits', image: baseUrl + 'image.JPG' },
    { label: 'Cakes', image: baseUrl + 'image.JPG' },
    { label: 'Ice creams', image: baseUrl + 'image.JPG' },
    { label: 'Breakfast', image: baseUrl + 'image.JPG' },
    { label: 'Lunch', image: baseUrl + 'image.JPG' },
    { label: 'Dinner', image: baseUrl + 'image.JPG' },
    { label: 'Sides', image: baseUrl + 'image.JPG' },
  ]

  const item = categories?.find(
    (item) => item.label?.toLowerCase() === label?.toLowerCase()
  )

  return (
    <div className='card h-44 image-full relative shadow-2xl'>
      <figure>
        <BlurImage
          src={item?.image!}
          alt={label}
          width={500}
          height={500}
          className='rounded-xl w-full h-44  shadow-xl'
          objectFit='cover'
        />
      </figure>
      <div className='card-body flex justify-center items-center bg-black/50 z-50 rounded-xl'>
        <h2 className='card-title text-white font-bold uppercase'>
          {item?.label}
        </h2>
      </div>
    </div>
  )
}

export default Category
