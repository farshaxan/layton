import Category from '../components/Category'
import { getCategories } from '@/data'
import Link from 'next/link'
import BlurImage from '@/components/BlurImage'

export default async function Home() {
  const slugGenerator = (text: string) => {
    return text.toLowerCase().split(' ').join('-')
  }

  return (
    <main className='max-w-6xl mx-auto py-5 px-2 md:p-5'>
      <BlurImage
        src={'/logo.png'}
        alt='logo'
        width={405}
        height={256}
        className='text-center mx-auto w-80 duration-1000'
      />

      <div className='divider divider-secondary text-secondary text-3xl font-bold my-10'>
        OUR MENU
      </div>

      <div className='flex flex-wrap justify-between items-center gap-y-5'>
        {Array.from(new Set(getCategories())).map((category, i: number) => (
          <div
            key={i}
            className='w-[48%] md:w-[30%] lg:w-[19%] mx-auto m-auto text-center duration-1000'
          >
            <Link href={`/${slugGenerator(category)}`}>
              <Category label={category} />
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}
