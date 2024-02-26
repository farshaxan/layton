import React from 'react'
import BlurImage from './BlurImage'

const Category = ({ label }: { label: string }) => {
  const baseUrl = 'https://farshaxan.blr1.cdn.digitaloceanspaces.com/leyton/'

  const categories = [
    { label: 'Hot Drinks', image: baseUrl + 'IMG_8019.JPG' },
    { label: 'Mojito', image: baseUrl + 'DSC00846.JPG' },
    { label: 'Frappes', image: baseUrl + 'DSC01004.JPG' },
    { label: 'Smoothies', image: baseUrl + 'DSC00855.JPG' },
    { label: 'Shakes', image: baseUrl + 'DSC00814.JPG' },
    { label: 'iced', image: baseUrl + 'IMG_8032.JPG' },
    { label: 'Drinks', image: baseUrl + '283A8564.JPG' },
    { label: 'Fruits', image: baseUrl + '283A8553.JPG' },
    { label: 'Cakes', image: baseUrl + 'DSC00871.JPG' },
    { label: 'Ice creams', image: baseUrl + '283A8578.JPG' },
    { label: 'Breakfast', image: baseUrl + 'DSC00786.JPG' },
    { label: 'Lunch', image: baseUrl + '283A8601.JPG' },
    { label: 'Dinner', image: baseUrl + 'DSC00751.JPG' },
    { label: 'Sides', image: baseUrl + 'DSC00794.JPG' },
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
