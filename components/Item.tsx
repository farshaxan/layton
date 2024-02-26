import React from 'react'
import BlurImage from './BlurImage'

interface ItemProp {
  category: string
  item: string
  price: number | string
  image: string
}
const Item = ({ item }: { item: ItemProp }) => {
  return (
    <div className='card shadow-xl mx-auto bg-white text-gray-700 h-72'>
      <figure>
        <BlurImage
          src={item.image}
          alt={item.item}
          width={500}
          height={500}
          className='rounded-xl w-full h-full'
        />
      </figure>
      <div className='card-body items-center text-center py-3 px-2'>
        <h3 className='md:text-lg text-sm uppercase font-bold leading-nones'>
          {item.item}
        </h3>
        <div className='card-actions w-full md:w-auto'>
          <button className='btn btn-ghost bg-my-secondary bottom-1 outline btn-sm text-xs sm:text-md outline-secondary font-bold px-1 md:px-4 w-full'>
            {typeof item.price === 'number'
              ? `$${item.price?.toFixed(2)}`
              : item.price}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Item
